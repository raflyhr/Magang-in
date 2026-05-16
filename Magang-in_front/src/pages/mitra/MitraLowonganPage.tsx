import { useState, useEffect } from 'react';
import { internshipService } from '../../services/internship.service';
import type { Internship } from '../../types';
import styles from './MitraLowonganPage.module.css';

export function MitraLowonganPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await internshipService.getMyInternships();
      setInternships(res.data);
    } catch {
      setError('Gagal memuat data lowongan.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleToggleClose = async (id: string, currentlyClosed: boolean) => {
    try {
      await internshipService.update(id, { isClosed: !currentlyClosed } as any);
      fetchData();
    } catch {
      alert('Gagal mengubah status lowongan.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus lowongan ini?')) return;
    try {
      await internshipService.delete(id);
      fetchData();
    } catch {
      alert('Gagal menghapus lowongan.');
    }
  };

  const activeCount = internships.filter(i => !i.isClosed).length;
  const closedCount = internships.filter(i => i.isClosed).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lowongan Saya</h1>
      </div>

      <div className={styles.sectionHeader}>
        <div>
          <h2 className={styles.subtitle}>Kelola Internship</h2>
          <p className={styles.desc}>Lihat dan pantau status pembukaan magang aktif Anda.</p>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>TOTAL LOWONGAN</span>
          <span className={styles.statValue}>{internships.length}</span>
        </div>
        <div className={styles.statCard} style={{ borderLeftColor: '#22c55e' }}>
          <span className={styles.statLabel}>AKTIF</span>
          <span className={styles.statValue}>{activeCount}</span>
        </div>
        <div className={styles.statCard} style={{ borderLeftColor: '#94a3b8' }}>
          <span className={styles.statLabel}>DITUTUP</span>
          <span className={styles.statValue}>{closedCount}</span>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        {isLoading ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Memuat data...</div>
        ) : error ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
        ) : internships.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
            Belum ada lowongan. Klik "Pasang Lowongan" di sidebar untuk membuat.
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Judul Lowongan</th>
                <th>Lokasi</th>
                <th>Tipe</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {internships.map(job => (
                <tr key={job.id}>
                  <td>
                    <div className={styles.jobCell}>
                      <div>
                        <span className={styles.jobTitle}>{job.title}</span>
                        <span className={styles.jobMeta}>{job.company}</span>
                      </div>
                    </div>
                  </td>
                  <td className={styles.dateCell}>{job.location}</td>
                  <td className={styles.dateCell}>{job.type || '-'}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${job.isClosed ? styles.statusClosed : styles.statusActive}`}>
                      <span className={styles.dot}></span>
                      {job.isClosed ? 'Ditutup' : 'Aktif'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() => handleToggleClose(job.id, job.isClosed)}
                        style={{ background: 'none', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer', fontSize: '12px' }}
                      >
                        {job.isClosed ? 'Buka' : 'Tutup'}
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        style={{ background: 'none', border: '1px solid #fecaca', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer', fontSize: '12px', color: '#ef4444' }}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
