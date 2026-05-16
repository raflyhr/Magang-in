import { useState, useEffect } from 'react';
import { internshipService } from '../../services/internship.service';
import type { Internship, Applicant } from '../../types';
import styles from './MitraReviewPage.module.css';

export function MitraReviewPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [selectedInternshipId, setSelectedInternshipId] = useState<string>('');
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingApplicants, setIsLoadingApplicants] = useState(false);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await internshipService.getMyInternships();
        setInternships(res.data);
        if (res.data.length > 0) {
          setSelectedInternshipId(res.data[0].id);
        }
      } catch { /* ignore */ }
      finally { setIsLoading(false); }
    };
    fetchInternships();
  }, []);

  useEffect(() => {
    if (!selectedInternshipId) return;
    const fetchApplicants = async () => {
      setIsLoadingApplicants(true);
      try {
        const res = await internshipService.getApplicants(selectedInternshipId);
        setApplicants(res.data);
      } catch { setApplicants([]); }
      finally { setIsLoadingApplicants(false); }
    };
    fetchApplicants();
  }, [selectedInternshipId]);

  const handleUpdateStatus = async (applicationId: string, status: 'accepted' | 'rejected') => {
    try {
      await internshipService.updateApplicationStatus(applicationId, status);
      // Refresh
      setApplicants(prev => prev.map(a => a.id === applicationId ? { ...a, status } : a));
    } catch {
      alert('Gagal mengubah status pelamar.');
    }
  };

  const selectedJob = internships.find(i => i.id === selectedInternshipId);

  return (
    <div className={styles.container}>
      <div className={styles.topNav}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbActive}>Review Pelamar</span>
        </div>
      </div>

      {/* Job Selector */}
      <div className={styles.headerCard}>
        <div>
          <h1 className={styles.jobTitle}>Daftar Pelamar</h1>
          <p className={styles.jobSub}>Pilih lowongan untuk melihat pelamar.</p>
        </div>
      </div>

      {isLoading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Memuat...</div>
      ) : internships.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Belum ada lowongan.</div>
      ) : (
        <>
          {/* Dropdown pilih lowongan */}
          <div style={{ marginBottom: '24px' }}>
            <select
              value={selectedInternshipId}
              onChange={(e) => setSelectedInternshipId(e.target.value)}
              style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', width: '100%', maxWidth: '400px' }}
            >
              {internships.map(i => (
                <option key={i.id} value={i.id}>{i.title} — {i.company}</option>
              ))}
            </select>
          </div>

          {/* Applicant List */}
          {isLoadingApplicants ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>Memuat pelamar...</div>
          ) : applicants.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
              Belum ada pelamar untuk lowongan "{selectedJob?.title}".
            </div>
          ) : (
            <div className={styles.applicantList}>
              {applicants.map((app) => (
                <div key={app.id} className={styles.applicantCard} style={{ borderLeftColor: app.status === 'accepted' ? '#22c55e' : app.status === 'rejected' ? '#ef4444' : '#f59e0b' }}>
                  <div className={styles.applicantInfo}>
                    <div className={styles.avatarWrapper}>
                      <div className={styles.avatar} style={{ background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', width: '40px', height: '40px', borderRadius: '50%', fontWeight: 700 }}>
                        {app.applicant.name?.charAt(0).toUpperCase() || '?'}
                      </div>
                    </div>
                    <div>
                      <h3 className={styles.name}>{app.applicant.name || 'Tanpa Nama'}</h3>
                      <div className={styles.edu}>{app.applicant.email}</div>
                      {app.applicant.skills && app.applicant.skills.length > 0 && (
                        <div className={styles.skillChips}>
                          {app.applicant.skills.slice(0, 5).map(s => (
                            <span key={s.skill.id} className={styles.skillChip}>{s.skill.name}</span>
                          ))}
                          {app.applicant.skills.length > 5 && (
                            <span className={styles.skillChip}>+{app.applicant.skills.length - 5}</span>
                          )}
                        </div>
                      )}
                      {app.coverLetter && (
                        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '6px', fontStyle: 'italic' }}>
                          "{app.coverLetter.substring(0, 100)}{app.coverLetter.length > 100 ? '...' : ''}"
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={styles.scoreWrapper}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Status:</span>
                      <span style={{ 
                        display: 'inline-block', marginLeft: '8px', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 700,
                        background: app.status === 'accepted' ? '#ecfdf5' : app.status === 'rejected' ? '#fef2f2' : '#fffbeb',
                        color: app.status === 'accepted' ? '#059669' : app.status === 'rejected' ? '#dc2626' : '#d97706',
                      }}>
                        {app.status === 'accepted' ? 'Diterima' : app.status === 'rejected' ? 'Ditolak' : 'Pending'}
                      </span>
                    </div>
                    {app.status === 'pending' && (
                      <div className={styles.actions}>
                        <button className={styles.tolakBtn} onClick={() => handleUpdateStatus(app.id, 'rejected')}>Tolak</button>
                        <button className={styles.terimaBtn} onClick={() => handleUpdateStatus(app.id, 'accepted')}>Terima</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
