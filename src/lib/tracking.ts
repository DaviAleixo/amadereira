/**
 * Amadeireira - Módulo de Rastreamento & Atribuição de Tráfego Pago
 * Suporta Google Tag Manager (GTM), Meta Ads (Pixel / CAPI) e Google Ads (GA4).
 */

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}

const STORAGE_KEY = 'amadereira_utm_params';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Captura e armazena os parâmetros de tráfego pago da URL na sessão
 */
export const initUtmTracking = (): UtmParams => {
  if (typeof window === 'undefined') return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys: (keyof UtmParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'gclid',
      'fbclid',
    ];

    const currentUtms: UtmParams = {};
    let hasUtms = false;

    utmKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        currentUtms[key] = value;
        hasUtms = true;
      }
    });

    if (hasUtms) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(currentUtms));
      return currentUtms;
    }

    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as UtmParams;
    }
  } catch {
    // Falha silenciosa para ambientes sem storage
  }

  return {};
};

/**
 * Retorna os parâmetros UTM atualmente salvos na sessão
 */
export const getStoredUtms = (): UtmParams => {
  if (typeof window === 'undefined') return {};
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as UtmParams;
    }
  } catch {
    // Ignora erro de storage
  }
  return {};
};

/**
 * Dispara evento no dataLayer (GTM), Meta Pixel (fbq) e Google Ads (gtag)
 */
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') return;

  const utms = getStoredUtms();
  const eventPayload = {
    event: eventName,
    ...params,
    ...utms,
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  // 2. Meta Pixel (se ativo diretamente)
  if (typeof window.fbq === 'function') {
    if (eventName === 'Lead' || eventName === 'whatsapp_click') {
      window.fbq('track', 'Lead', {
        content_name: params.category || 'Atendimento Geral',
        content_category: 'WhatsApp',
        ...utms,
      });
    } else {
      window.fbq('trackCustom', eventName, eventPayload);
    }
  }

  // 3. Google Analytics 4 / Google Ads (se ativo diretamente)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName === 'whatsapp_click' ? 'generate_lead' : eventName, eventPayload);
  }
};

/**
 * Dispara evento específico quando o usuário clica para ir ao WhatsApp
 */
export const trackWhatsAppLead = (metadata: {
  category?: string;
  position?: string;
  label?: string;
}) => {
  trackEvent('whatsapp_click', {
    category: metadata.category || 'Geral',
    position: metadata.position || 'Indefinido',
    label: metadata.label || 'Botão WhatsApp',
    conversion_type: 'Lead',
  });
};
