import styles from './AdminVerifikasiPage.module.css';

export function AdminVerifikasiPage() {
  const mitigationList = [
    { id: 1, name: 'TechNova Solutions', loc: 'Jakarta, Indonesia', industry: 'Information Tech', industryBg: '#eef2ff', industryColor: '#6366f1', date: '12 Okt 2023', score: 94, isSafe: true, icon: 'cpu' },
    { id: 2, name: 'GreenHorizon Agriculture', loc: 'Bogor, Indonesia', industry: 'Agrotechnology', industryBg: '#fff7ed', industryColor: '#f97316', date: '11 Okt 2023', score: 78, isSafe: true, icon: 'leaf' },
    { id: 3, name: 'Artha Capital Group', loc: 'Jakarta, Indonesia', industry: 'Finance', industryBg: '#f1f5f9', industryColor: '#475569', date: '10 Okt 2023', score: 42, isSafe: false, icon: 'briefcase' },
  ];

  return (
    <div className={styles.container}>
      {/* Top Search */}
      <div className={styles.topNav}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" className={styles.searchInput} placeholder="Cari mitra atau dokumen..." />
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <img src="https://ui-avatars.com/api/?name=Admin+Utama&background=1e293b&color=fff" alt="Admin" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        </div>
      </div>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Verifikasi Mitra</h1>
          <p className={styles.desc}>Validasi pendaftaran perusahaan baru menggunakan teknologi AI Trust Score untuk menjamin keamanan program magang bagi mahasiswa.</p>
        </div>
        <div className={styles.trustScoreCard}>
          <div className={styles.radialWrapper}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="26" fill="none" stroke="#eef2ff" strokeWidth="5" />
              <circle cx="30" cy="30" r="26" fill="none" stroke="#6366f1" strokeWidth="5" strokeDasharray="163.3" strokeDashoffset="29.4" strokeLinecap="round" />
            </svg>
            <span className={styles.percentage}>82%</span>
          </div>
          <div className={styles.trustInfo}>
            <span className={styles.trustLabel}>AI TRUST SCORE ACTIVE</span>
            <span className={styles.trustValue}>Akurasi Verifikasi</span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Optimal untuk 14 antrean baru</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.tabActive}`}>
          Menunggu Verifikasi <span className={styles.countBadge}>14</span>
        </div>
        <div className={styles.tab}>Sudah Diverifikasi</div>
      </div>

      {/* Mitigation Table Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', padding: '0 24px 12px', fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
        <div>Perusahaan</div>
        <div>Industri</div>
        <div>Tanggal Daftar</div>
        <div>AI Trust Score</div>
        <div>Aksi</div>
      </div>

      {/* Mitra List */}
      <div className={styles.mitraList}>
        {mitigationList.map((mitra) => (
          <div key={mitra.id} className={styles.mitraCard}>
            <div className={styles.companyInfo}>
              <div className={styles.companyLogo}>
                 {mitra.icon === 'cpu' && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>}
                 {mitra.icon === 'leaf' && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 20a10 10 0 0 1 10-10V2h-8a10 10 0 0 1-10 10v8h8z"/><line x1="7" y1="16" x2="14" y2="9"/></svg>}
                 {mitra.icon === 'briefcase' && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>}
              </div>
              <div>
                <span className={styles.companyName}>{mitra.name}</span>
                <span className={styles.companyLoc}>{mitra.loc}</span>
              </div>
            </div>
            <div>
              <span className={styles.industryBadge} style={{ background: mitra.industryBg, color: mitra.industryColor }}>
                {mitra.industry}
              </span>
            </div>
            <div className={styles.date}>{mitra.date}</div>
            <div>
              <div className={`${styles.trustScore} ${mitra.isSafe ? styles.scoreHigh : styles.scoreLow}`}>
                {mitra.isSafe ? (
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                ) : (
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
                )}
                {mitra.score}/100
              </div>
            </div>
            <button className={styles.reviewBtn}>Review Documents</button>
          </div>
        ))}
      </div>

      {/* Bottom Layout */}
      <div className={styles.bottomGrid}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trend Verifikasi</h2>
            <span className={styles.trendIcon}>
               <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
               +12%
            </span>
          </div>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: '-10px 0 20px' }}>Aktivitas pendaftaran mitra dalam 30 hari terakhir</p>
          <div className={styles.chartArea}>
            <div className={styles.chartBar} style={{ height: '30%' }}></div>
            <div className={styles.chartBar} style={{ height: '60%' }}></div>
            <div className={styles.chartBar} style={{ height: '40%' }}></div>
            <div className={styles.chartBar} style={{ height: '80%' }}></div>
            <div className={styles.chartBar} style={{ height: '70%' }}></div>
            <div className={styles.chartBarActive} style={{ height: '90%' }}></div>
          </div>
        </div>

        <div className={styles.tipCard}>
          <span className={styles.tipLabel}>TIP ADMIN</span>
          <h3 className={styles.tipTitle}>Gunakan Review Cepat</h3>
          <p className={styles.tipDesc}>
            Sistem AI telah menandai 4 perusahaan dengan skor di atas 90. Anda dapat menyetujui dokumen ini secara massal untuk efisiensi waktu.
          </p>
          <button className={styles.batchBtn}>Buka Batch Review</button>
        </div>
      </div>

      {/* FAB */}
      <div className={styles.fab}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#94a3b8' }}>
        © 2023 Magang-in Platform. Admin Portal Version 2.1.0-Indigo
      </div>
    </div>
  );
}
