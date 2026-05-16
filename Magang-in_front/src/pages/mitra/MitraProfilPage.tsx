import styles from './MitraProfilPage.module.css';

export function MitraProfilPage() {
  return (
    <div className={styles.container}>
      {/* Top Actions */}
      <div className={styles.topActions}>
        <h1 className={styles.pageTitle}>Profil Perusahaan</h1>
        <div className={styles.btnGroup}>
          <button className={styles.outlineBtn}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Lihat Profil Publik
          </button>
          <button className={styles.primaryBtn}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Edit Profil
          </button>
        </div>
      </div>

      {/* Hero Card */}
      <div className={styles.heroCard}>
        <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=400&fit=crop" alt="Company Logo" className={styles.companyLogo} />
        
        <div className={styles.companyMain}>
          <div className={styles.companyNameRow}>
            <h2 className={styles.companyName}>TechNova Solutions</h2>
            <span className={styles.partnerBadge}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>
              Premium Partner
            </span>
          </div>
          
          <div className={styles.locRow}>
            <div className={styles.locItem}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              Teknologi & Perangkat Lunak
            </div>
            <div className={styles.locItem}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Jakarta, Indonesia
            </div>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>LOWONGAN AKTIF</span>
              <span className={styles.statValue}>12</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>TOTAL PELAMAR</span>
              <span className={styles.statValue}>840</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>RATING MITRA</span>
              <span className={styles.statValue}>4.8 <span style={{ color: '#f97316' }}>★</span></span>
            </div>
          </div>
        </div>

        <div className={styles.completionCard}>
          <div className={styles.radialWrapper}>
             <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="36" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle cx="40" cy="40" r="36" fill="none" stroke="#6366f1" strokeWidth="8" strokeDasharray="226.2" strokeDashoffset="22.6" strokeLinecap="round" />
             </svg>
             <span className={styles.percentage}>90%</span>
          </div>
          <span className={styles.completionText}>Lengkapi Sekarang</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.contentGrid}>
        <div className={styles.leftCol}>
          {/* Tentang Kami */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Tentang Kami
            </h3>
            <p className={styles.aboutText}>
              TechNova Solutions adalah perusahaan teknologi terkemuka yang berfokus pada pengembangan solusi Kecerdasan Buatan (AI) untuk industri manufaktur dan logistik. Didirikan pada tahun 2018 di Jakarta, kami memiliki misi untuk mendemokratisasi teknologi otomasi cerdas bagi perusahaan dari berbagai skala.

              Budaya kerja kami menekankan pada inovasi berkelanjutan, kolaborasi antartim, dan pertumbuhan personal. Kami percaya bahwa magang adalah jembatan krusial antara akademisi dan industri, oleh karena itu kami berkomitmen untuk memberikan pengalaman mentorship yang berkualitas bagi para talenta muda Indonesia.
            </p>
          </div>

          {/* Informasi Perusahaan */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Informasi Perusahaan</h3>
            <div className={styles.detailGrid}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.6 4.4L17.4 22 12 17.6 6.6 22l2-8.6L3 9h7l2-7z"/></svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>INDUSTRI</span>
                  <span className={styles.detailValue}>Teknologi & Software</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>UKURAN PERUSAHAAN</span>
                  <span className={styles.detailValue}>201 - 500 Karyawan</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="18"/><line x1="15" y1="22" x2="15" y2="18"/></svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>KANTOR PUSAT</span>
                  <span className={styles.detailValue}>Menara Astra, Jakarta Pusat</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <span className={styles.detailLabel}>TAHUN BERDIRI</span>
                  <span className={styles.detailValue}>2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          {/* Kontak & Media Sosial */}
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>Kontak & Media Sosial</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div className={styles.contactMeta}>
                  <span className={styles.contactLabel}>Website</span>
                  <span className={styles.contactValue}>technova.io</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className={styles.contactMeta}>
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <span className={styles.contactValue}>linkedin.com/company/tech</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <div className={styles.contactMeta}>
                  <span className={styles.contactLabel}>Instagram</span>
                  <span className={styles.contactValue}>@technova_career</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className={styles.contactMeta}>
                  <span className={styles.contactLabel}>Email HR</span>
                  <span className={styles.contactValue}>hr@technova.io</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wawasan Profil */}
          <div className={styles.insightCard}>
            <div className={styles.insightHeader}>
              <span style={{ fontSize: '14px', fontWeight: 700 }}>Wawasan Profil</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div className={styles.insightValueRow}>
              <span className={styles.insightSub}>Dilihat oleh Pelamar</span>
              <span className={styles.insightVal}>2.4k</span>
            </div>
            <div className={styles.progressBar}>
               <div className={styles.progressFill} style={{ width: '65%' }}></div>
            </div>
            <span style={{ fontSize: '10px', opacity: 0.8, display: 'block', marginBottom: '24px' }}>+12% dari minggu lalu</span>
            
            <div className={styles.conversionRow}>
              <div className={styles.convIcon}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div>
                <span style={{ fontSize: '10px', display: 'block', opacity: 0.8, textTransform: 'uppercase', fontWeight: 700 }}>KONVERSI LAMARAN</span>
                <span style={{ fontSize: '18px', fontWeight: 800 }}>18.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
