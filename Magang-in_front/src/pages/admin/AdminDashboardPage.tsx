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
              <span style={{ fontSize: '11px', color: '#f97316' }}>{stats.pendingApplications} pending</span>
            </div>
            <div className={styles.statIcon}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
          </div>
        </div>
      )}

      {/* Quick Links */}
      <div className={styles.mainGrid}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Aksi Cepat</h2>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/admin/users" style={{ padding: '12px 20px', background: 'var(--bg-light)', color: '#6366f1', borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', border: '1px solid var(--border)' }}>
              Kelola User
            </Link>
            <Link to="/admin/verifikasi" style={{ padding: '12px 20px', background: 'var(--bg-light)', color: '#f97316', borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', border: '1px solid var(--border)' }}>
              Verifikasi Mitra
            </Link>
            <Link to="/admin/lowongan" style={{ padding: '12px 20px', background: 'var(--bg-light)', color: '#0ea5e9', borderRadius: '10px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', border: '1px solid var(--border)' }}>
              Kelola Lowongan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
