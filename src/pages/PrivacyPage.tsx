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
          Última atualização: 2 de Junho de 2026
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>1. Quem somos nós?</h2>
          <p>
            O portal corporativo do ecossistema HV5 é de propriedade e operado pela <strong>TI NET LTDA</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº <strong>06.374.297/0001-31</strong>, com sede na Avenida Campina Grande, 2227, Sala 01 - Nova Caruaru, Caruaru - PE, CEP 55014-360.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>2. Informações de Contato e Dúvidas</h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a qualquer momento a confirmação de existência de tratamento, correção ou exclusão de dados pessoais por meio de nossos canais oficiais:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
            <li><strong>E-mail do Encarregado de Proteção de Dados (DPO):</strong> <a href="mailto:souhv5@gmail.com" style={{ color: 'var(--primary)' }}>souhv5@gmail.com</a></li>
            <li><strong>Telefone Corporativo:</strong> +55 81 99952-9391</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>3. Coleta de Dados</h2>
          <p>
            Não coletamos cookies ou dados de navegação invasivos nesta landing page corporativa de redirecionamento. Eventuais coletas de dados são realizadas estritamente de forma explícita e voluntária quando você decide utilizar os formulários específicos ou clicar nas ferramentas do ecossistema (como propostas, leads ou cadastros).
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>4. Uso dos Dados</h2>
          <p>
            Qualquer informação coletada é utilizada exclusivamente para a prestação de nossos serviços, intermediação imobiliária, suporte corporativo a parceiros e conformidade jurídica. Não vendemos ou compartilhamos informações pessoais com terceiros.
          </p>
        </section>
      </article>
    </div>
  );
}
