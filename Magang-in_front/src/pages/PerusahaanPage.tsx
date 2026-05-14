import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PerusahaanPage.module.css';

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
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>Magang-in</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link to="/lowongan" className={styles.navLink}>Lowongan</Link></li>
            <li><Link to="/perusahaan" className={styles.navLinkActive}>Perusahaan</Link></li>
            <li><a href="#" className={styles.navLink}>Roadmaps</a></li>
          </ul>
          <div className={styles.navRight}>
            <div className={styles.navSearch}>
              <svg width="16" height="16" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Search internships..." />
            </div>
            <button className={styles.iconBtn} aria-label="Notifications">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Settings">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
            <div className={styles.avatar}>👤</div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className={styles.heroBanner}>
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

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>Magang-in</div>
              <p>Platform pencarian magang dan kerja nomor satu di Indonesia untuk mahasiswa dan fresh graduate.</p>
              
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Kategori</h4>
                <ul><li>Human Resources</li><li>Design</li><li>Data Science</li><li>Engineering</li><li>Marketing</li></ul>
              </div>
              <div>
                <h4>Kota Terpopuler</h4>
                <ul><li>Loker Jakarta</li><li>Loker Bandung</li><li>Loker Surabaya</li><li>Loker Jogja</li><li>Loker Medan</li></ul>
              </div>
              <div>
                <h4>Pencarian Terbanyak</h4>
                <ul><li>Work From Home</li><li>Magang Mahasiswa</li><li>Management Trainee</li><li>Admin Social Media</li><li>Graphic Designer</li></ul>
              </div>
              <div>
                <h4>Tentang Kami</h4>
                <ul><li>Pusat Bantuan</li><li>Hubungi Kami</li><li>Kebijakan Privasi</li><li>Syarat & Ketentuan</li></ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>© 2026 Magang-in Indonesia. Seluruh hak cipta dilindungi.</div>
        </div>
      </footer>
    </div>
  );
}
