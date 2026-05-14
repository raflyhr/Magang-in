import { useState } from 'react';
import styles from './PerusahaanPage.module.css';
import heroBg from '../assets/bg-serch-company.png';

const categories = ['All Companies', 'Technology', 'E-commerce', 'Fintech', 'Travel & Lifestyle'];

const companies = [
  { id: 1, name: 'Shopee Indonesia', category: 'E-commerce • Technology', location: 'Jakarta Selatan, ID', jobs: 12, badge: 'Top Partner', color: '#ff5722', initial: 'S' },
  { id: 2, name: 'Gojek Indonesia', category: 'Super-app • Fintech', location: 'Jakarta Pusat, ID', jobs: 8, badge: 'AI-Matched', color: '#22c55e', initial: 'G' },
  { id: 3, name: 'Glints Indonesia', category: 'HR Tech • Recruitment', location: 'South Jakarta, ID', jobs: 24, badge: '', color: '#3b82f6', initial: 'G' },
  { id: 4, name: 'Traveloka', category: 'Travel Tech • Lifestyle', location: 'Tangerang, ID', jobs: 15, badge: '', color: '#0ea5e9', initial: 'T' },
  { id: 5, name: 'Tokopedia', category: 'E-commerce • Retail Tech', location: 'Jakarta Barat, ID', jobs: 19, badge: '', color: '#22c55e', initial: 'T' },
  { id: 6, name: 'Telkomsel', category: 'Telecommunication • Digital', location: 'Jakarta Selatan, ID', jobs: 5, badge: '', color: '#ef4444', initial: 'T' },
  { id: 7, name: 'Bank Central Asia', category: 'Banking • Fintech', location: 'Jakarta Pusat, ID', jobs: 31, badge: 'AI-Matched', color: '#3b82f6', initial: 'B' },
  { id: 8, name: 'Blibli.com', category: 'E-commerce • Tech', location: 'Jakarta Barat, ID', jobs: 10, badge: '', color: '#6366f1', initial: 'B' },
];

export function PerusahaanPage() {
  const [activeCategory, setActiveCategory] = useState('All Companies');

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <div className={styles.heroBanner} style={{ backgroundImage: `linear-gradient(135deg, rgba(79, 70, 229, 0.85) 0%, rgba(99, 102, 241, 0.7) 100%), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className={styles.heroTitle}>Discover Your Future Workspace</h1>
        <p className={styles.heroSubtitle}>
          Connect with Indonesia's leading tech giants and innovative startups partnering with Magang-in.
        </p>
      </div>

      {/* Search */}
      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <svg width="20" height="20" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search company names, industries..." />
          <button className={styles.searchBtn}>Search</button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? styles.catActive : styles.catBtn}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Company Grid */}
      <div className={styles.grid}>
        {companies.map((c) => (
          <div key={c.id} className={styles.companyCard}>
            {c.badge && (
              <span className={c.badge === 'Top Partner' ? styles.badgePartner : styles.badgeAI}>
                {c.badge === 'AI-Matched' && '✨ '}{c.badge}
              </span>
            )}
            <div className={styles.companyIcon} style={{ background: `${c.color}20` }}>
              <span style={{ color: c.color, fontWeight: 700, fontSize: 18 }}>{c.initial}</span>
            </div>
            <h3 className={styles.companyName}>{c.name}</h3>
            <p className={styles.companyCategory}>{c.category}</p>
            <p className={styles.companyLocation}>
              <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              {c.location}
            </p>
            <div className={styles.companyFooter}>
              <span className={styles.jobCount}>{c.jobs} Lowongan</span>
              <span className={styles.arrow}>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.pageBtn}>‹</button>
        <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>›</button>
      </div>

    </div>
  );
}
