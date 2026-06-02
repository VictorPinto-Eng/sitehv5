import { ArrowLeft } from 'lucide-react';

interface TermsPageProps {
  onBack: () => void;
}

export default function TermsPage({ onBack }: TermsPageProps) {
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
          Termos de Uso
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#71717a', marginBottom: '40px' }}>
          Última atualização: 2 de Junho de 2026
        </p>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>1. Objeto</h2>
          <p>
            Estes termos regulam a utilização do portal institucional da **TI NET LTDA** (CNPJ 06.374.297/0001-31), que atua como hub e direcionador oficial do ecossistema HV5. Ao navegar por esta página, você declara estar ciente e de acordo com as condições aqui estabelecidas.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>2. Links para Terceiros e Ecossistema</h2>
          <p>
            O portal direciona usuários para outros websites do ecossistema HV5 (ex: HV5 Imóveis, HV5 Soft, Flowcom). Cada um desses sistemas pode possuir seus próprios termos específicos de uso, cadastro e políticas internas, os quais devem ser aceitos individualmente no momento de utilização de suas respectivas ferramentas.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>3. Limitação de Responsabilidade</h2>
          <p>
            Fazemos o máximo esforço para manter todas as informações corporativas corretas e atualizadas. A **TI NET LTDA** não se responsabiliza por eventuais instabilidades técnicas temporárias de rede dos serviços externos ou por decisões tomadas de forma independente pelos usuários.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '12px' }}>4. Foro Competente</h2>
          <p>
            Para sanar qualquer controvérsia decorrente da interpretação destes termos, fica eleito o Foro da Comarca de Caruaru - PE, com exclusão de qualquer outro.
          </p>
        </section>
      </article>
    </div>
  );
}
