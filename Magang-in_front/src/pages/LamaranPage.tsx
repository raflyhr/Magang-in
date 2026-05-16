import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applicationService } from '../services/application.service';
import type { Application } from '../types';
import styles from './LamaranPage.module.css';

export function LamaranPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await applicationService.getMyApplications();
        setApplications(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Gagal memuat data lamaran.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchApps();
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'accepted':
        return <span className={`${styles.badge} ${styles.badgeAccepted}`}>DITERIMA</span>;
      case 'rejected':
        return <span className={`${styles.badge} ${styles.badgeRejected}`}>DITOLAK</span>;
      default:
        return <span className={`${styles.badge} ${styles.badgePending}`}>MENUNGGU REVIEW</span>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lamaran Saya</h1>
        <p className={styles.subtitle}>Lacak status semua pendaftaran magang yang telah kamu kirimkan.</p>
      </div>

      {isLoading && (
        <div className={styles.loading}>
          <div style={{
            width: '36px', height: '36px', border: '3px solid #e2e8f0',
            borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px'
          }} />
          <p>Memuat lamaran...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {error && !isLoading && (
        <div className={styles.error}>
          <p className={styles.errorText}>{error}</p>
          <button onClick={() => window.location.reload()} className={styles.retryBtn}>Coba Lagi</button>
        </div>
      )}

      {!isLoading && !error && applications.length === 0 && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>📁</div>
          <h3 className={styles.emptyText}>Belum ada lamaran</h3>
          <p className={styles.emptySub}>Kamu belum pernah mengirim lamaran magang apa pun. Mulai eksplorasi dan temukan posisi yang cocok untukmu!</p>
          <Link to="/dashboard/lowongan" className={styles.exploreBtn}>Eksplorasi Lowongan</Link>
        </div>
      )}

      {!isLoading && !error && applications.length > 0 && (
        <div className={styles.list}>
          {applications.map((app) => (
            <div key={app.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.jobInfo}>
                  <div className={styles.companyLogo}>
                    {app.internship.company.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className={styles.jobTitle}>{app.internship.title}</h3>
                    <div className={styles.jobCompany}>
                      {app.internship.company} • {app.internship.location}
                    </div>
                  </div>
                </div>
                {getStatusBadge(app.status)}
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.appliedDate}>
                  Dilamar pada: {new Date(app.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <Link to={`/dashboard/lowongan/${app.internshipId}`} className={styles.detailBtn}>
                  Lihat Lowongan
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
