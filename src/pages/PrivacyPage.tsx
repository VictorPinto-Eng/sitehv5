import { ArrowLeft } from 'lucide-react';

interface PrivacyPageProps {
  onBack: () => void;
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  return (
    <div style={{ padding: '120px 0 60px 0', maxWidth: '800px', margin: '0 auto', width: '90%' }}>
      <button 
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--primary)',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: 600,
          marginBottom: '32px',
          fontSize: '0.95rem'
        }}
      >
        <ArrowLeft size={16} /> Voltar para o início
      </button>

      <article style={{ lineHeight: '1.8', color: 'var(--secondary)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#ffffff', letterSpacing: '-0.02em' }}>
          Política de Privacidade
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#71717a', marginBottom: '40px' }}>
          Última atualização: 27 de junho de 2025
        </p>

        <p style={{ marginBottom: '32px' }}>
          Este documento explica como coletamos, usamos e protegemos seus dados pessoais.
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>📌 Quem somos nós?</h2>
          <ul style={{ paddingLeft: '20px', marginTop: '12px', listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}><strong>Nome da Empresa:</strong> TI NET LTDA</li>
            <li style={{ marginBottom: '8px' }}><strong>CNPJ:</strong> 06.374.297/0001-31</li>
            <li style={{ marginBottom: '8px' }}><strong>Telefone:</strong> +55 81 99952-9391</li>
            <li style={{ marginBottom: '8px' }}><strong>E-mail:</strong> <a href="mailto:souhv5@gmail.com" style={{ color: 'var(--primary)' }}>souhv5@gmail.com</a></li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Somos especializados em serviços de automações empresariais.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>📌 Quais dados coletamos?</h2>
          <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
            <li>Nome</li>
            <li>Telefone</li>
            <li>E-mail</li>
            <li>Mensagens via WhatsApp</li>
            <li>Outras informações fornecidas por você</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>📌 Para que usamos esses dados?</h2>
          <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
            <li>Responder dúvidas</li>
            <li>Fornecer serviços</li>
            <li>Melhorar nosso atendimento</li>
            <li>Enviar novidades (com permissão)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>📌 Compartilhamos seus dados?</h2>
          <p>
            Não compartilhamos com terceiros, exceto para cumprir obrigações legais.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>📌 Como protegemos seus dados?</h2>
          <p>
            Usamos ferramentas seguras e acesso restrito.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>📌 Seus direitos (LGPD):</h2>
          <p>
            Você pode solicitar confirmação, correção, exclusão ou revogação do consentimento. Entre em contato conosco pelo WhatsApp ou e-mail.
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '12px', listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>📧 E-mail:</strong> <a href="mailto:souhv5@gmail.com" style={{ color: 'var(--primary)' }}>souhv5@gmail.com</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>📱 WhatsApp:</strong> <a href="https://wa.me/5581999529391" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>+55 81 99952-9391</a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
