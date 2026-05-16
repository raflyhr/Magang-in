import styles from './MitraLowonganPage.module.css';

export function MitraLowonganPage() {
  const jobs = [
    { id: 1, title: 'Frontend Developer', type: 'Remote • Full-time', date: '12 Oct 2023', applicants: 45, newCount: 5, status: 'Aktif', color: '#eef2ff', icon: 'code' },
    { id: 2, title: 'Mobile Intern', type: 'Jakarta • Internship', date: '05 Oct 2023', applicants: 22, newCount: 0, status: 'Tutup', color: '#f0f9ff', icon: 'smartphone' },
    { id: 3, title: 'UI/UX Designer', type: 'Hybrid • Internship', date: '28 Sep 2023', applicants: 89, newCount: 12, status: 'Aktif', color: '#fff7ed', icon: 'layout' },
    { id: 4, title: 'Data Science Intern', type: 'Remote • Internship', date: '15 Sep 2023', applicants: 56, newCount: 0, status: 'Tutup', color: '#fdf2f2', icon: 'database' },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'code': return <svg width="20" height="20" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
      case 'smartphone': return <svg width="20" height="20" fill="none" stroke="#0ea5e9" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>;
      case 'layout': return <svg width="20" height="20" fill="none" stroke="#f97316" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
      case 'database': return <svg width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
      default: return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Top Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Lowongan Saya</h1>
        <div className={styles.topActions}>
          <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>Help</span>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className={styles.notifBadge}></span>
          </button>
          <img src="https://ui-avatars.com/api/?name=Tech+Nexus&background=1e293b&color=fff" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        </div>
      </div>

      {/* Sub Header & Add Button */}
      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.subtitle}>Kelola Internship</h2>
          <p className={styles.desc}>Lihat dan pantau status pembukaan magang aktif Anda.</p>
        </div>
        <button className={styles.addBtn}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Tambah Lowongan
        </button>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>TOTAL LOWONGAN</span>
          <span className={styles.statValue}>12</span>
        </div>
        <div className={styles.statCard} style={{ borderLeftColor: '#0ea5e9' }}>
          <span className={styles.statLabel}>PELAMAR BARU</span>
          <span className={styles.statValue}>164</span>
        </div>
        <div className={styles.statCard} style={{ borderLeftColor: '#f97316' }}>
          <span className={styles.statLabel}>WAWANCARA TERJADWAL</span>
          <span className={styles.statValue}>28</span>
        </div>
      </div>

      {/* Table Card */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Judul Lowongan</th>
              <th>Tanggal Dibuat</th>
              <th>Jumlah Pelamar</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td>
                  <div className={styles.jobCell}>
                    <div className={styles.jobIcon} style={{ background: job.color }}>
                      {getIcon(job.icon)}
                    </div>
                    <div>
                      <span className={styles.jobTitle}>{job.title}</span>
                      <span className={styles.jobMeta}>{job.type}</span>
                    </div>
                  </div>
                </td>
                <td className={styles.dateCell}>{job.date}</td>
                <td className={styles.applicantCell}>
                  {job.applicants}
                  {job.newCount > 0 && <span className={styles.newBadge}>+{job.newCount} hari ini</span>}
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${job.status === 'Aktif' ? styles.statusActive : styles.statusClosed}`}>
                    <span className={styles.dot}></span>
                    {job.status}
                  </span>
                </td>
                <td>
                  <button className={styles.actionBtn}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
          <span className={styles.pageInfo}>Menampilkan 1-4 dari 12 lowongan</span>
          <div className={styles.pageControls}>
            <button className={styles.pageBtn} style={{ padding: '0 8px' }}>
               <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn} style={{ padding: '0 8px' }}>
               <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Insight Banner */}
      <div className={styles.insightBanner}>
        <div className={styles.insightIcon}>
           <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>
        </div>
        <div className={styles.insightContent}>
          <h4 className={styles.insightTitle}>AI Matching Insight</h4>
          <p className={styles.insightDesc}>
            Lowongan "UI/UX Designer" memiliki skor kecocokan rata-rata pelamar 85%.
            Pertimbangkan untuk memulai proses wawancara sekarang.
          </p>
        </div>
        <button className={styles.insightBtn}>Lihat Rekomendasi</button>
      </div>

      <div className={styles.footer}>
        © 2023 Magang-in Ecosystem • Dashboard Mitra v2.4.0
      </div>
    </div>
  );
}
