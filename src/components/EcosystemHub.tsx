import styles from './EcosystemHub.module.css';
import { Home, Settings, Radio, ArrowUpRight } from 'lucide-react';

export default function EcosystemHub() {
  const systems = [
    {
      title: 'HV5 Imóveis',
      description: 'Portal inteligente de anúncios imobiliários para busca, compra, venda e locação de imóveis residenciais e comerciais.',
      link: 'https://imoveis.hv5.com.br',
      icon: <Home className={styles.cardIcon} />,
      badge: 'Solução Imobiliária'
    },
    {
      title: 'HV5 Soft',
      description: 'Sistemas corporativos completos de gestão, automações de backoffice e CRM imobiliário avançado sob medida para o seu negócio.',
      link: 'https://soft.hv5.com.br',
      icon: <Settings className={styles.cardIcon} />,
      badge: 'Tecnologia & CRM'
    },
    {
      title: 'Flowcom',
      description: 'Plataforma inteligente de distribuição, enriquecimento de leads e integrações em tempo real com webhooks externos.',
      link: 'https://flowcom.hv5.com.br',
      icon: <Radio className={styles.cardIcon} />,
      badge: 'Integrações & Leads'
    }
  ];

  return (
    <section className={styles.hubSection} id="solucoes">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Ecossistema Integrado</span>
          <h2 className={styles.title}>Nossas Soluções</h2>
          <p className={styles.subtitle}>
            Conectamos tecnologia de ponta, processos eficientes e soluções de ponta a ponta para acelerar resultados.
          </p>
        </div>

        <div className={styles.grid}>
          {systems.map((sys) => (
            <a 
              key={sys.title} 
              href={sys.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.card} glass`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.badge}>{sys.badge}</span>
                <ArrowUpRight className={styles.arrowIcon} size={20} />
              </div>
              
              <div className={styles.cardBody}>
                {sys.icon}
                <h3 className={sys.title}>{sys.title}</h3>
                <p className={styles.description}>{sys.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>Acessar plataforma</span>
                <div className={styles.line}></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
