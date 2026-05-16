import styles from './AdminLaporanPage.module.css';

export function AdminLaporanPage() {
  const chartData = [
    { month: 'Jan', siswa: '40%', job: '30%' },
    { month: 'Feb', siswa: '55%', job: '45%' },
    { month: 'Mar', siswa: '50%', job: '40%' },
    { month: 'Apr', siswa: '90%', job: '50%' },
    { month: 'Mei', siswa: '70%', job: '60%' },
    { month: 'Jun', siswa: '80%', job: '70%' },
  ];

  const industries = [
    { name: 'Software Engineering', val: '42%' },
    { name: 'Digital Marketing', val: '28%' },
    { name: 'UI/UX Design', val: '18%' },
    { name: 'Data Science', val: '12%' },
  ];

  return (
    <div className={styles.container}>
      {/* Search & Top Nav (Admin Layout level usually, but we keep consistent with designs) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
         <div style={{ position: 'relative', width: '400px' }}>
            <svg style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" style={{ width: '100%', padding: '10px 16px 10px 48px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: '12px', fontSize: '14px' }} placeholder="Cari laporan atau metrik..." />
         </div>
         <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
               <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '14px', fontWeight: 700 }}>Admin Utama</span>
               </div>
               <img src="https://ui-avatars.com/api/?name=Admin+Utama&background=1e293b&color=fff" alt="Admin" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            </div>
         </div>
      </div>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <div>
          <h1 className={styles.title}>Laporan & Data Analitik</h1>
          <p className={styles.desc}>Pantau performa platform dan pertumbuhan pengguna secara real-time.</p>
        </div>
        <div className={styles.headerActions}>
           <div className={styles.timeFilter}>
              <button className={`${styles.filterBtn} ${styles.filterActive}`}>Hari Ini</button>
              <button className={styles.filterBtn}>7 Hari</button>
              <button className={styles.filterBtn}>30 Hari</button>
           </div>
           <div className={styles.datePicker}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Jan 1, 2024 - Jun 31, 2024
           </div>
           <button style={{ background: 'white', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              CSV
           </button>
           <button style={{ background: '#3730a3', border: 'none', color: 'white', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Export PDF
           </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className={styles.chartsGrid}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            Monthly Growth
            <div className={styles.legend}>
               <div className={styles.legendItem}><div className={styles.dot} style={{ background: '#cbd5e1' }}></div> Siswa Baru</div>
               <div className={styles.legendItem}><div className={styles.dot} style={{ background: '#3730a3' }}></div> Lowongan</div>
            </div>
          </div>
          <div className={styles.barChartContainer}>
             {chartData.map((d, i) => (
               <div key={d.month} className={styles.barGroup}>
                  <div className={`${styles.bar} ${styles.barSiswa}`} style={{ height: d.siswa }}></div>
                  <div className={`${styles.bar} ${styles.barLowongan} ${i === 3 ? styles.barActive : ''}`} style={{ height: d.job }}></div>
                  <span className={styles.monthLabel}>{d.month}</span>
               </div>
             ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.successCard}`}>
           <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 24px' }}>Success Match Rate</h3>
           <span style={{ fontSize: '12px', opacity: 0.8, marginBottom: '20px' }}>AI Matching Accuracy</span>
           
           <div className={styles.radialBox}>
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle cx="90" cy="90" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                <circle cx="90" cy="90" r="80" fill="none" stroke="white" strokeWidth="12" strokeDasharray="502.4" strokeDashoffset="125.6" strokeLinecap="round" />
              </svg>
              <div className={styles.radialText}>
                 <span className={styles.percentText}>75%</span>
                 <span className={styles.percentSub}>Highly Accurate</span>
              </div>
           </div>

           <div className={styles.matchInfo}>
              <span>Match Bulan Ini</span>
              <span>+12.4%</span>
           </div>
        </div>
      </div>

      {/* Industries & Insights */}
      <div className={styles.bottomGrid}>
         <div className={styles.card}>
            <h3 className={styles.cardTitle}>Top Industries</h3>
            {industries.map(ind => (
              <div key={ind.name} className={styles.industryItem}>
                 <div className={styles.industryHeader}>
                    <span>{ind.name}</span>
                    <span>{ind.val}</span>
                 </div>
                 <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: ind.val }}></div>
                 </div>
              </div>
            ))}
            <button className={styles.detailBtn}>Lihat Detail Industri</button>
         </div>

         <div className={styles.card}>
            <h3 className={styles.cardTitle}>Recent Data Insights</h3>
            <div className={styles.insightStats}>
               <div className={styles.miniStat}>
                  <div className={styles.statIcon}>
                     <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  </div>
                  <div>
                     <span className={styles.miniLabel}>NEW APPLICANTS</span>
                     <span className={styles.miniVal}>1,284</span>
                  </div>
               </div>
               <div className={styles.miniStat}>
                  <div className={styles.statIcon}>
                     <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>
                  </div>
                  <div>
                     <span className={styles.miniLabel}>TOTAL MATCHES</span>
                     <span className={styles.miniVal}>856</span>
                  </div>
               </div>
            </div>

            <div className={styles.infoBox}>
               <svg width="20" height="20" fill="none" stroke="#3b82f6" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
               <p className={styles.infoText}>
                  <b>Insight:</b> Peningkatan pendaftaran sebesar 15% pada sektor Engineering minggu ini. <a href="#" style={{ color: '#3b82f6', fontWeight: 700, textDecoration: 'none' }}>Detail</a>
               </p>
            </div>

            <div className={styles.visualPreview}></div>
         </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#94a3b8' }}>
        © 2024 Magang-in Platform. All rights reserved. Version 2.4.0-admin.
      </div>
    </div>
  );
}
