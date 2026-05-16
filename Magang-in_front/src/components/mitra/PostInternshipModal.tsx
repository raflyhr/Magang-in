import { useState } from 'react';
import { internshipService } from '../../services/internship.service';
import styles from './PostInternshipModal.module.css';

interface PostInternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function PostInternshipModal({ isOpen, onClose, onSuccess }: PostInternshipModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Internship',
    requirements: '',
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Split requirements by newline to array
      const reqArray = formData.requirements.split('\n').filter(r => r.trim() !== '');
      await internshipService.create({
        ...formData,
        requirements: reqArray as any // Assuming backend expects array or handles string
      });
      alert('Lowongan berhasil dipasang!');
      onSuccess?.();
      onClose();
    } catch (err) {
      console.error(err);
      alert('Gagal memasang lowongan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Pasang Lowongan Baru</h2>
            <p className={styles.subtitle}>Isi detail informasi magang untuk menarik talenta terbaik.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Judul Lowongan</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Contoh: Frontend Developer Intern"
                required
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Tipe Pekerjaan</label>
                <select 
                  className={styles.select}
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="Internship">Internship</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Lokasi</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Contoh: Jakarta (Remote)"
                  required
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Deskripsi Pekerjaan</label>
              <textarea
                className={styles.textarea}
                placeholder="Jelaskan peran dan tanggung jawab magang ini..."
                required
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Persyaratan (Gunakan baris baru untuk setiap poin)</label>
              <textarea
                className={styles.textarea}
                placeholder="• Menguasai React.js&#10;• Paham CSS/Tailwind"
                required
                value={formData.requirements}
                onChange={e => setFormData({ ...formData, requirements: e.target.value })}
              />
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.cancelBtn} onClick={onClose}>Batal</button>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Memproses...' : 'Pasang Lowongan Sekarang'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
