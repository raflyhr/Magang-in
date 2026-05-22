import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { adminService, type AdminStats } from '../../services/admin.service';
import styles from './AdminDashboardPage.module.css';

export function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await adminService.getStats();
        setStats(res.data);
      } catch { /* ignore */ }
      finally { setIsLoading(false); }
    };
    fetchStats();
  }, []);

  return (
    <div className={styles.container}>
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
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><circle cx="18" cy="6" r="3" fill="#ef4444" stroke="none"/></svg>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      {isLoading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Memuat statistik...</div>
      ) : stats && (
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>TOTAL PENGGUNA</span>
              <span className={styles.statValue}>{stats.totalUsers}</span>
            </div>
            <div className={styles.statIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>MITRA AKTIF</span>
              <span className={styles.statValue}>{stats.totalMitra}</span>
            </div>
            <div className={styles.statIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>TOTAL LOWONGAN</span>
              <span className={styles.statValue}>{stats.totalInternships}</span>
            </div>
            <div className={styles.statIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>TOTAL LAMARAN</span>
              <span className={styles.statValue}>{stats.totalApplications}</span>
              <span className={`${styles.statTrend} ${styles.statTrendWarn}`}>! {stats.pendingApplications} Perlu Tindakan</span>
            </div>
            <div className={styles.statIcon} style={{ background: '#fffedd', color: '#d97706' }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="12" y1="22" x2="12.01" y2="22"/></svg>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <span className={styles.quickActionLabel}>Aksi Cepat:</span>
        <Link to="/admin/users" className={styles.actionPill}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          Kelola User
        </Link>
        <Link to="/admin/verifikasi" className={styles.actionPill}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Verifikasi Mitra
        </Link>
        <Link to="/admin/lowongan" className={styles.actionPill}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          Kelola Lowongan
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainGrid}>
        {/* Verification Table */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Daftar Tunggu Verifikasi Mitra</h2>
            <Link to="/admin/verifikasi" className={styles.seeAll}>Lihat Semua</Link>
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
                <td data-label="Nama Perusahaan">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo} style={{ color: '#4f46e5', background: '#e0e7ff' }}>TN</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-dark)' }}>TechNova Solutions</div>
                    </div>
                  </div>
                </td>
                <td data-label="Tanggal Daftar">12 Okt 2026</td>
                <td data-label="Aksi">
                  <Link to="/admin/verifikasi" className={styles.cekBtn}>Cek Dokumen</Link>
                </td>
              </tr>
              <tr>
                <td data-label="Nama Perusahaan">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo} style={{ color: '#0ea5e9', background: '#e0f2fe' }}>GC</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-dark)' }}>GreenCloud Inc.</div>
                    </div>
                  </div>
                </td>
                <td data-label="Tanggal Daftar">13 Okt 2026</td>
                <td data-label="Aksi">
                  <Link to="/admin/verifikasi" className={styles.cekBtn}>Cek Dokumen</Link>
                </td>
              </tr>
              <tr>
                <td data-label="Nama Perusahaan">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo} style={{ color: '#d97706', background: '#fef3c7' }}>SA</div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Synergi Analytics</div>
                    </div>
                  </div>
                </td>
                <td data-label="Tanggal Daftar">14 Okt 2026</td>
                <td data-label="Aksi">
                  <Link to="/admin/verifikasi" className={styles.cekBtn}>Cek Dokumen</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Chart Mockup */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Tren Registrasi User</h2>
              <span style={{ fontSize: '13px', color: 'var(--text)' }}>Statistik 7 hari terakhir</span>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.chartBar} style={{ height: '40%' }}><span className={styles.dayLabel}>Sen</span></div>
            <div className={styles.chartBar} style={{ height: '60%' }}><span className={styles.dayLabel}>Sel</span></div>
            <div className={styles.chartBar} style={{ height: '55%' }}><span className={styles.dayLabel}>Rab</span></div>
            <div className={styles.chartBar} style={{ height: '80%' }}><span className={styles.dayLabel}>Kam</span></div>
            <div className={styles.chartBar} style={{ height: '45%' }}><span className={styles.dayLabel}>Jum</span></div>
            <div className={styles.chartBar} style={{ height: '90%' }}><span className={styles.dayLabel}>Sab</span></div>
            <div className={`${styles.chartBar} ${styles.chartBarActive}`} style={{ height: '75%' }}><span className={styles.dayLabel} style={{ color: '#3730a3' }}>Min</span></div>
          </div>
        </div>
      </div>

      {/* System Log */}
      <div className={styles.section}>
        <div className={styles.sectionHeader} style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="24" height="24" fill="none" stroke="#4f46e5" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <h2 className={styles.sectionTitle}>Log Aktivitas Sistem</h2>
          </div>
        </div>
        <div className={styles.logList}>
          <div className={styles.logItem}>
            <div className={styles.logIcon} style={{ background: '#eef2ff', color: '#4f46e5' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div className={styles.logContent}>Admin Budi menyetujui verifikasi dokumen <b>TechNova Solutions</b></div>
              <span className={styles.logTime}>2 menit yang lalu</span>
            </div>
          </div>
          <div className={styles.logItem}>
            <div className={styles.logIcon} style={{ background: '#f0f9ff', color: '#0ea5e9' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div>
              <div className={styles.logContent}>Sistem mempublikasikan lowongan baru dari <b>GreenCloud Inc.</b></div>
              <span className={styles.logTime}>15 menit yang lalu</span>
            </div>
          </div>
          <div className={styles.logItem}>
            <div className={styles.logIcon} style={{ background: '#fef2f2', color: '#ef4444' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <div className={styles.logContent}>Admin Ani menolak permohonan mitra <b style={{ color: '#ef4444' }}>Startup X</b> karena dokumen tidak valid</div>
              <span className={styles.logTime}>1 jam yang lalu</span>
            </div>
          </div>
        </div>
        <button className={styles.moreLogs}>Tampilkan Lebih Banyak Log</button>
      </div>
    </div>
  );
}
