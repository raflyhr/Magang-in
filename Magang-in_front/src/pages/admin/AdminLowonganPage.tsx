import styles from './AdminLowonganPage.module.css';

export function AdminLowonganPage() {
  const jobList = [
    { id: 1, title: 'Data Analyst Intern', time: '2 jam yang lalu', company: 'DataTech Solutions', applicants: 42, status: 'TERLAPOR', dot: '#ef4444', icon: 'https://ui-avatars.com/api/?name=DataTech&background=1e293b&color=fff' },
    { id: 2, title: 'Frontend Developer (React)', time: '1 hari yang lalu', company: 'Gojek', applicants: 256, status: 'TERBUKA', dot: '#6366f1', icon: 'https://ui-avatars.com/api/?name=Gojek&background=059669&color=fff' },
    { id: 3, title: 'Product Manager Intern', time: '2 minggu yang lalu', company: 'Traveloka', applicants: 184, status: 'DITUTUP', dot: '#94a3b8', icon: 'https://ui-avatars.com/api/?name=Traveloka&background=0284c7&color=fff' },
    { id: 4, title: 'Digital Marketing Specialist', time: '4 jam yang lalu', company: 'Tokopedia', applicants: 92, status: 'TERBUKA', dot: '#6366f1', icon: 'https://ui-avatars.com/api/?name=Tokopedia&background=22c55e&color=fff' },
  ];

  return (
    <div className={styles.container}>
      {/* Search Header */}
      <div className={styles.topHeader}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" className={styles.searchInput} placeholder="Cari lowongan atau perusahaan..." />
        </div>
        <div className={styles.adminProfile}>
          <div style={{ display: 'flex', gap: '16px', marginRight: '16px' }}>
             <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
             <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <div className={styles.adminText}>
            <span className={styles.adminName}>Admin Utama</span>
            <span className={styles.adminRole}>SUPER ADMINISTRATOR</span>
          </div>
          <img src="https://ui-avatars.com/api/?name=Admin+Utama&background=1e293b&color=fff" alt="Admin" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        </div>
      </div>

      {/* Page Title & Main Actions */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.title}>Kelola Lowongan Magang</h1>
          <p className={styles.desc}>Pantau dan kelola semua lowongan yang aktif di platform Magang-in.</p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.exportBtn}>
             <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
             Export Data
          </button>
          <button className={styles.addBtn}>
             <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
             Tambah Lowongan
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className={styles.alertBanner}>
        <div className={styles.alertLeft}>
          <div className={styles.alertIcon}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <h3 className={styles.alertTitle}>Lowongan Terlapor!</h3>
            <p className={styles.alertDesc}>Terdapat 3 lowongan magang yang baru saja dilaporkan oleh pengguna karena indikasi penipuan atau informasi yang tidak valid.</p>
          </div>
        </div>
        <button className={styles.reviewBtn}>Tinjau Sekarang</button>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIcon} style={{ background: '#eef2ff', color: '#6366f1' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
             </div>
             <span className={styles.statPercent}>+12%</span>
          </div>
          <span className={styles.statLabel}>TOTAL LOWONGAN</span>
          <span className={styles.statValue}>1,284</span>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIcon} style={{ background: '#f0f9ff', color: '#0ea5e9' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>
             </div>
             <span className={styles.statPercent}>+5%</span>
          </div>
          <span className={styles.statLabel}>SEDANG AKTIF</span>
          <span className={styles.statValue}>842</span>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIcon} style={{ background: '#fff7ed', color: '#f97316' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
             </div>
             <span className={styles.statPercent}>+24%</span>
          </div>
          <span className={styles.statLabel}>TOTAL PELAMAR</span>
          <span className={styles.statValue}>12,450</span>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIcon} style={{ background: '#fef2f2', color: '#ef4444' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
             </div>
             <span className={`${styles.statPercent} ${styles.statPercentRed}`}>High</span>
          </div>
          <span className={styles.statLabel}>PERLU MODERASI</span>
          <span className={styles.statValue}>14</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.selectFilter}>
          <span>Semua Kategori</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className={styles.selectFilter}>
          <span>Semua Perusahaan</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div className={styles.selectFilter}>
          <span>Status: Semua</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>

      {/* Table Card */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Judul Lowongan</th>
              <th>Perusahaan</th>
              <th>Total Pelamar</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jobList.map((job) => (
              <tr key={job.id}>
                <td>
                  <div className={styles.jobTitleBox}>
                    <div className={styles.jobDot} style={{ background: job.dot }}></div>
                    <div>
                      <span className={styles.jobMain}>{job.title}</span>
                      <span className={styles.jobTime}>Post: {job.time}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.companyCell}>
                    <img src={job.icon} alt={job.company} className={styles.companyImg} />
                    {job.company}
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>{job.applicants} Pelamar</td>
                <td>
                  <span className={`${styles.badge} ${job.status === 'TERLAPOR' ? styles.badgeTerlapor : job.status === 'TERBUKA' ? styles.badgeTerbuka : styles.badgeDitutup}`}>
                     {job.status === 'TERLAPOR' && <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>}
                     {job.status === 'TERBUKA' && <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>}
                     {job.status === 'DITUTUP' && <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>}
                     {job.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actionBtns}>
                    <svg className={styles.actionIcon} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    {job.status === 'TERLAPOR' ? (
                       <svg className={`${styles.actionIcon} ${styles.actionDelete}`} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.36 6.64a9 9 0 1 1-12.73 12.73L18.36 6.64zm-12.72 10.72a9 9 0 1 1 12.73-12.73L5.64 17.36z"/></svg>
                    ) : job.status === 'DITUTUP' ? (
                       <svg className={styles.actionIcon} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                    ) : (
                       <svg className={styles.actionIcon} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
           <span style={{ fontSize: '13px', color: '#94a3b8' }}>Halaman 1 dari 26</span>
           <div className={styles.pageNav}>
              <button className={styles.pageBtn}><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
              <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
              <button className={styles.pageBtn}>2</button>
              <button className={styles.pageBtn}>3</button>
              <span style={{ color: '#cbd5e1' }}>...</span>
              <button className={styles.pageBtn}>26</button>
              <button className={styles.pageBtn}><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
           </div>
        </div>
      </div>

      <button className={styles.addBtn} style={{ position: 'fixed', bottom: '32px', right: '32px', borderRadius: '50%', width: '56px', height: '56px', padding: '0', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)' }}>
         <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
    </div>
  );
}
