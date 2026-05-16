
import styles from './RoadmapPage.module.css';

import { Link } from 'react-router-dom';

const roadmaps = [
  {
    id: 1,
    title: 'Frontend Developer',
    logo: 'FE',
    logoClass: 'fe',
    relevance: 'SANGAT RELEVAN',
    relevanceClass: 'sangat-relevan',
    description: 'Kuasai pembuatan antarmuka web modern dengan fokus pada ekosistem React, integrasi API, dan optimasi performa client-side.',
    techs: ['JS', 'RE', 'TS']
  },
  {
    id: 2,
    title: 'Backend Developer',
    logo: 'BE',
    logoClass: 'be',
    relevance: 'RELEVAN',
    relevanceClass: 'relevan',
    description: 'Bangun sistem yang kuat dan skalabel. Fokus pada manajemen database PostgreSQL, keamanan server, dan arsitektur microservices.',
    techs: ['NO', 'PS', 'GO']
  },
  {
    id: 3,
    title: 'Data Analyst',
    logo: 'DA',
    logoClass: 'da',
    relevance: 'KURANG RELEVAN',
    relevanceClass: 'kurang-relevan',
    description: 'Ubah data menjadi insight bisnis. Pelajari visualisasi data, statistik terapan, dan pemrosesan data skala besar dengan Python.',
    techs: ['PY', 'SQL']
  },
  {
    id: 4,
    title: 'UI/UX Design',
    logo: 'UX',
    logoClass: 'ux',
    relevance: 'EKSPLORASI',
    relevanceClass: 'eksplorasi',
    description: 'Ciptakan pengalaman pengguna yang luar biasa. Pelajari user research, prototyping, dan desain visual yang estetik dan fungsional.',
    techs: ['FI', 'AD']
  }
];

export function RoadmapPage() {
  // const { user } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Roadmap Belajar</h1>
          <p className={styles.subtitle}>Pilih roadmap yang sesuai dengan keahlian dan tujuan karier kamu</p>
        </div>
        <button className={styles.filterBtn}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filter
        </button>
      </div>

      <div className={styles.aiBox}>
        <div className={styles.aiIconWrapper}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"></path>
          </svg>
        </div>
        <div className={styles.aiContent}>
          <div className={styles.aiTitle}>
            Skill kamu: 
            <div className={styles.aiSkillTags}>
              <span className={styles.aiTag}>React</span>
              <span className={styles.aiTag}>Node.js</span>
              <span className={styles.aiTag}>PostgreSQL</span>
            </div>
          </div>
          <p className={styles.aiText}>
            Roadmap direkomendasikan secara cerdas oleh AI Magang-in berdasarkan profil skill di atas untuk mempercepat karir magangmu.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {roadmaps.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.logoCircle} ${styles[item.logoClass]}`}>
                {item.logo}
              </div>
              <span className={`${styles.badge} ${styles[item.relevanceClass]}`}>
                {item.relevance}
              </span>
            </div>
            
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
            
            <div className={styles.cardFooter}>
              <div className={styles.techTags}>
                {item.techs.map(tech => (
                  <span key={tech} className={styles.techTag}>{tech}</span>
                ))}
              </div>
              <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
                <button className={styles.actionBtn}>
                  Mulai Belajar
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.bottomText}>Tidak menemukan yang cocok?</p>
        <Link to="/onboarding/self-declare" className={styles.changeSkillBtn}>
          Coba ubah skill kamu 
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
}
