import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EcosystemHub from './components/EcosystemHub';
import CookieConsent from './components/CookieConsent';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { ArrowRight, Layers } from 'lucide-react';

function HomePage() {
  return (
    <main style={{ flex: 1 }}>
      {/* Hero Section */}
      <section style={{
        padding: '160px 0 100px 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="container">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '8px 16px',
            borderRadius: '9999px',
            marginBottom: '24px',
            fontSize: '0.85rem',
            color: 'var(--secondary)'
          }}>
            <Layers size={14} style={{ color: 'var(--primary)' }} />
            <span>Inovação, Automação & Tecnologia</span>
          </div>

          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: 850,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '24px',
            maxWidth: '800px',
            margin: '0 auto 24px auto',
            background: 'linear-gradient(135deg, #ffffff 30%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Impulsionando negócios através de soluções integradas
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--secondary)',
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}>
            Desenvolvemos tecnologia de ponta, processos eficientes e infraestrutura digital moderna para impulsionar e integrar negócios no ecossistema digital.
          </p>

          <a
            href="#sobre"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '0.975rem',
              boxShadow: '0 4px 20px rgba(127, 52, 230, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Conhecer a HV5 <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* About Section for corporate verification */}
      <section id="sobre" style={{ padding: '80px 0 120px 0', borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span style={{
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '12px'
          }}>Sobre Nós</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>HV5 Empreendimentos e Tecnologia</h2>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
            Fundada com o objetivo de unificar tecnologia, processos digitais inteligentes e mercado de investimentos corporativos, a TI NET LTDA (HV5) fornece a infraestrutura digital necessária para que empresas e parceiros automatizem e escalem suas operações.
          </p>
          <p style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            De soluções integradas sob medida a plataformas de automação inteligente e conectividade digital, nós fornecemos a base de inovação que seu negócio precisa para crescer de ponta a ponta.
          </p>
        </div>
      </section>

      {/* Ecosystem Hub - Soluções */}
      <EcosystemHub />
    </main>
  );
}

function AppLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="glow-bg"></div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacidade" element={<PrivacyPage onBack={() => navigate('/')} />} />
        <Route path="/termos" element={<TermsPage onBack={() => navigate('/')} />} />
      </Routes>

      <Footer />
      <CookieConsent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
