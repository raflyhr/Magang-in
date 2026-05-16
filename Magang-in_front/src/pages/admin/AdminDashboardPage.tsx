import styles from './AdminDashboardPage.module.css';

export function AdminDashboardPage() {
  const chartData = [
    { day: 'Sen', val: '40%' },
    { day: 'Sel', val: '60%' },
    { day: 'Rab', val: '50%' },
    { day: 'Kam', val: '80%' },
    { day: 'Jum', val: '70%' },
    { day: 'Sab', val: '95%' },
    { day: 'Min', val: '85%' },
  ];

  return (
    <div className={styles.container}>
      {/* Top Nav */}
      <div className={styles.topNav}>
        <div className={styles.breadcrumb}>
          <span>Dashboard</span>
          <span className={styles.sep}>&gt;</span>
          <span className={styles.breadcrumbActive}>Beranda</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.timeBox}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Senin, 14 Okt | 09:42 WIB
          </div>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>TOTAL SISWA</span>
            <span className={styles.statValue}>12,482</span>
            <span className={`${styles.statTrend} ${styles.statTrendUp}`}>+12% bln ini</span>
          </div>
          <div className={styles.statIcon} style={{ background: '#eef2ff', color: '#6366f1' }}>
             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>MITRA AKTIF</span>
            <span className={styles.statValue}>428</span>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>Stabil</span>
          </div>
          <div className={styles.statIcon} style={{ background: '#f0f9ff', color: '#0ea5e9' }}>
             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>PENDING VERIFIKASI</span>
            <span className={styles.statValue}>18</span>
            <span className={styles.statTrendWarn}>! Perlu Tindakan</span>
          </div>
          <div className={styles.statIcon} style={{ background: '#fff7ed', color: '#f97316' }}>
             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>LAMARAN SUKSES</span>
            <span className={styles.statValue}>3,204</span>
            <span className={`${styles.statTrend} ${styles.statTrendUp}`}>+5.4% bln ini</span>
          </div>
          <div className={styles.statIcon} style={{ background: '#eef2ff', color: '#6366f1' }}>
             <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className={styles.mainGrid}>
        {/* Verifikasi Mitra */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Daftar Tunggu Verifikasi Mitra</h2>
            <button className={styles.seeAll}>Lihat Semua</button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nama Perusahaan</th>
                <th>Tanggal Daftar</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo} style={{ color: '#6366f1' }}>TN</div>
                    <b>TechNova Solutions</b>
                  </div>
                </td>
                <td>12 Okt 2023</td>
                <td><button className={styles.cekBtn}>Cek Dokumen</button></td>
              </tr>
              <tr>
                <td>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo} style={{ color: '#0ea5e9' }}>GC</div>
                    <b>GreenCloud Inc.</b>
                  </div>
                </td>
                <td>13 Okt 2023</td>
                <td><button className={styles.cekBtn}>Cek Dokumen</button></td>
              </tr>
              <tr>
                <td>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo} style={{ color: '#f97316' }}>SA</div>
                    <b>Synergi Analytics</b>
                  </div>
                </td>
                <td>14 Okt 2023</td>
                <td><button className={styles.cekBtn}>Cek Dokumen</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tren Chart */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tren Registrasi User</h2>
          </div>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: '-10px 0 20px' }}>Statistik 7 hari terakhir</p>
          <div className={styles.chartContainer}>
            {chartData.map((d, i) => (
              <div key={d.day} className={`${styles.chartBar} ${i === 6 ? styles.chartBarActive : ''}`} style={{ height: d.val }}>
                <span className={styles.dayLabel}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Log Aktivitas */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <svg width="20" height="20" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
             Log Aktivitas Sistem
          </h2>
        </div>
        <div className={styles.logList}>
          <div className={styles.logItem}>
            <div className={styles.logIcon} style={{ background: '#eef2ff', color: '#6366f1' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className={styles.logContent}>
              <b>Admin Budi</b> menyetujui verifikasi dokumen <b>TechNova Solutions</b>
              <span className={styles.logTime}>2 menit yang lalu</span>
            </div>
          </div>
          <div className={styles.logItem}>
            <div className={styles.logIcon} style={{ background: '#f0f9ff', color: '#0ea5e9' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div className={styles.logContent}>
              Sistem mempublikasikan lowongan baru dari <b>GreenCloud Inc.</b>
              <span className={styles.logTime}>15 menit yang lalu</span>
            </div>
          </div>
          <div className={styles.logItem}>
            <div className={styles.logIcon} style={{ background: '#fef2f2', color: '#ef4444' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div className={styles.logContent}>
              <b>Admin Ani</b> menolak permohonan mitra <b>Startup X</b> karena dokumen tidak valid
              <span className={styles.logTime}>1 jam yang lalu</span>
            </div>
          </div>
        </div>
        <button className={styles.moreLogs}>Tampilkan Lebih Banyak Log</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#94a3b8' }}>
        © 2023 Magang-in Platform. Admin Portal Version 2.1.0-Indigo
      </div>
    </div>
  );
}
