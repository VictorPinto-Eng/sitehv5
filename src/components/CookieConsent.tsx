import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hv5_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hv5_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('hv5_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de Cookies"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        right: '24px',
        maxWidth: '480px',
        background: 'rgba(24, 24, 27, 0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '24px',
        zIndex: 9999,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }}
    >
      <p style={{
        fontSize: '0.9rem',
        color: '#d4d4d8',
        lineHeight: 1.6,
        marginBottom: '16px'
      }}>
        Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site.
        Ao clicar em "Aceitar", você concorda com o uso de cookies conforme nossa{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const event = new CustomEvent('navigate', { detail: 'privacy' });
            window.dispatchEvent(event);
          }}
          style={{
            color: 'var(--primary)',
            textDecoration: 'underline'
          }}
        >
          Política de Privacidade
        </a>.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={handleAccept}
          style={{
            flex: 1,
            padding: '10px 20px',
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Aceitar
        </button>
        <button
          onClick={handleReject}
          style={{
            flex: 1,
            padding: '10px 20px',
            backgroundColor: 'transparent',
            color: '#a1a1aa',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
            transition: 'border-color 0.2s'
          }}
        >
          Rejeitar
        </button>
      </div>
    </div>
  );
}
