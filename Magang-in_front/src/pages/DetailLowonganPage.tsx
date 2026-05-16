import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { internshipService } from '../services/internship.service';
import { useAuth } from '../contexts/AuthContext';
import type { Internship } from '../types';
import styles from './DetailLowonganPage.module.css';

export function DetailLowonganPage() {
  const { id } = useParams<{ id: string }>();
  const { user, isAuthenticated } = useAuth();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();
  const backLink = location.pathname.includes('/dashboard') ? '/dashboard/lowongan' : '/lowongan';

  const fetchDetail = async () => {
    if (!id) return;
    setIsLoading(true);
    setError('');
    try {
      const response = await internshipService.getById(id);
      setInternship(response.data);
    } catch (err: unknown) {
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { status?: number } };
        if (axiosErr.response?.status === 404) {
          setError('404');
        } else {
          setError('Gagal memuat detail lowongan.');
        }
      } else {
        setError('Tidak dapat terhubung ke server.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  // Loading state
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p>Memuat detail lowongan...</p>
      </div>
    );
  }

  // 404 state
  if (error === '404') {
    return (
      <div className={styles.errorContainer}>
        <h2>Lowongan Tidak Ditemukan</h2>
        <p>Lowongan yang kamu cari tidak ada atau sudah ditutup.</p>
        <Link to={backLink} className={styles.backBtn}>Kembali ke Daftar Lowongan</Link>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p style={{ color: '#ef4444' }}>{error}</p>
        <button onClick={fetchDetail} className={styles.retryBtn}>Coba Lagi</button>
      </div>
    );
  }

  if (!internship) return null;

  // Parse benefits menjadi array
  const benefitsList = internship.benefits?.split(',').map(b => b.trim()).filter(Boolean) || [];
  // Parse requirements menjadi array
  const requirementsList = internship.requirements?.split('\n').map(r => r.trim()).filter(Boolean) || 
    internship.requirements?.split(',').map(r => r.trim()).filter(Boolean) || [];

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.avatar}>
            {internship.company.charAt(0).toUpperCase()}
          </div>
          <div className={styles.headerInfo}>
            <h1 className={styles.title}>{internship.title}</h1>
            <p className={styles.company}>
              {internship.company} <span className={styles.dot}>·</span> {internship.location}
            </p>
            <div className={styles.tags}>
              {internship.type && <span className={styles.tag}>{internship.type}</span>}
              {internship.duration && <span className={styles.tag}>{internship.duration}</span>}
              {internship.level && <span className={styles.tag}>{internship.level}</span>}
            </div>
          </div>
        </div>
        {isAuthenticated && user?.role === 'pengguna' && (
          <button className={styles.applyBtn}>Lamar Sekarang</button>
        )}
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          {/* Deskripsi */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Deskripsi</h2>
            <p className={styles.description}>{internship.description}</p>
          </div>

          {/* Persyaratan */}
          {requirementsList.length > 0 && (
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Persyaratan</h2>
              <ul className={styles.requirementsList}>
                {requirementsList.map((req, i) => (
                  <li key={i} className={styles.requirementItem}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className={styles.checkIcon}>
                      <circle cx="12" cy="12" r="10" stroke="#6366f1" strokeWidth="2" />
                      <path d="M8 12l2.5 2.5L16 9.5" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefit */}
          {benefitsList.length > 0 && (
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Benefit</h2>
              <div className={styles.benefitsGrid}>
                {benefitsList.map((benefit, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#6366f1" strokeWidth="2" />
                      <path d="M12 8v8M8 12h8" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roadmap */}
          {internship.roadmaps && internship.roadmaps.length > 0 && (
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Roadmap Belajar</h2>
              <div className={styles.roadmap}>
                {internship.roadmaps.map((item, i) => (
                  <div key={item.id} className={styles.roadmapItem}>
                    <div className={styles.roadmapDot} style={{ background: i < internship.roadmaps!.length - 1 ? '#6366f1' : '#cbd5e1' }} />
                    {i < internship.roadmaps!.length - 1 && <div className={styles.roadmapLine} />}
                    <div className={styles.roadmapContent}>
                      <span className={styles.roadmapTitle}>{item.title}</span>
                    </div>
                    {item.contentUrl && (
                      <a href={item.contentUrl} target="_blank" rel="noopener noreferrer" className={styles.roadmapLink}>
                        <svg width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Sidebar) */}
        <div className={styles.rightCol}>
          {/* Info Card */}
          <div className={styles.infoCard}>
            {internship.major && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>JURUSAN</span>
                <span className={styles.infoValue}>{internship.major}</span>
              </div>
            )}
            {internship.type && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>TIPE</span>
                <span className={styles.infoValue}>{internship.type}</span>
              </div>
            )}
            {internship.duration && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>DURASI</span>
                <span className={styles.infoValue}>{internship.duration}</span>
              </div>
            )}
            {internship.level && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>LEVEL</span>
                <span className={styles.infoValue}>{internship.level}</span>
              </div>
            )}
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>LOKASI</span>
              <span className={styles.infoValue}>{internship.location}</span>
            </div>
          </div>

          {/* Skills */}
          {internship.skills.length > 0 && (
            <div className={styles.skillsCard}>
              <h3 className={styles.skillsTitle}>Skills Required</h3>
              <div className={styles.skillsTags}>
                {internship.skills.map((s) => (
                  <span key={s.skill.id} className={styles.skillTag}>{s.skill.name}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
