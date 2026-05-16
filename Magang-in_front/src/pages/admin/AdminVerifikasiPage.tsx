import { useState, useEffect } from 'react';
import { adminService } from '../../services/admin.service';
import type { AdminUser } from '../../types';
import styles from './AdminVerifikasiPage.module.css';

export function AdminVerifikasiPage() {
  const [mitras, setMitras] = useState<(AdminUser & { _count?: { internships: number } })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMitras = async () => {
    setIsLoading(true);
    try {
      const res = await adminService.getPendingMitra();
      setMitras(res.data);
    } catch { /* ignore */ }
    finally { setIsLoading(false); }
  };

  useEffect(() => { fetchMitras(); }, []);

  const handleReject = async (id: string) => {
    if (!confirm('Yakin ingin menolak mitra ini? Role akan dikembalikan ke pengguna.')) return;
    try {
      await adminService.rejectMitra(id);
      fetchMitras();
    } catch {
      alert('Gagal menolak mitra.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Verifikasi Mitra</h1>
          <p className={styles.desc}>Kelola dan verifikasi status perusahaan mitra di platform Magang-in.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.tabActive}`}>
          Daftar Mitra <span className={styles.countBadge}>{mitras.length}</span>
        </div>
      </div>

      {/* Mitra List */}
      {isLoading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Memuat data mitra...</div>
      ) : mitras.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Tidak ada mitra terdaftar.</div>
      ) : (
        <div className={styles.mitraList}>
          {mitras.map((mitra) => (
            <div key={mitra.id} className={styles.mitraCard}>
              <div className={styles.companyInfo}>
                <div className={styles.companyLogo} style={{ background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '10px', fontWeight: 700, color: '#6366f1' }}>
                  {mitra.name?.charAt(0).toUpperCase() || '?'}
                </div>
                <div>
                  <span className={styles.companyName}>{mitra.name || 'Tanpa Nama'}</span>
                  <span className={styles.companyLoc}>{mitra.email}</span>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Lowongan: {mitra._count?.internships || 0}
                </span>
              </div>
              <div className={styles.date}>
                {new Date(mitra.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => handleReject(mitra.id)}
                  style={{ background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Cabut Mitra
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
