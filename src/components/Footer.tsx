import styles from './Footer.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} glass`} id="contato">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Brand section */}
          <div className={styles.brandSection}>
            <h3 className={styles.title}>HV5 Ecosystem</h3>
            <p className={styles.description}>
              Ecossistema integrado de soluções corporativas, automação e gestão imobiliária de alta performance.
            </p>
          </div>

          {/* Legal details for compliance */}
          <div className={styles.legalSection}>
            <h4 className={styles.sectionTitle}>Informações Corporativas</h4>
            <ul className={styles.legalList}>
              <li><strong>Razão Social:</strong> TI NET LTDA</li>
              <li><strong>CNPJ:</strong> 06.374.297/0001-31</li>
              <li className={styles.listItemWithIcon}>
                <MapPin size={16} className={styles.icon} />
                <span>Avenida Campina Grande, 2227, Sala 01 - Nova Caruaru, Caruaru - PE, CEP 55002-340</span>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Fale Conosco</h4>
            <ul className={styles.contactList}>
              <li className={styles.listItemWithIcon}>
                <Phone size={16} className={styles.icon} />
                <a href="tel:+5581999529391">+55 81 99952-9391</a>
              </li>
              <li className={styles.listItemWithIcon}>
                <Mail size={16} className={styles.icon} />
                <a href="mailto:souhv5@gmail.com">souhv5@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <p className={styles.copy}>
            &copy; {currentYear} HV5 Ecosystem. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <button onClick={() => onNavigate('terms')} className={styles.linkButton}>
              Termos de Uso
            </button>
            <span className={styles.divider}>|</span>
            <button onClick={() => onNavigate('privacy')} className={styles.linkButton}>
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
