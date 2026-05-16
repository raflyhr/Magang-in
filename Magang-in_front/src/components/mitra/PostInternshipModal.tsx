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
    company: '',
    description: '',
    location: '',
    type: 'On-site',
    duration: '3-6 Bulan',
    level: 'Internship',
    major: 'Teknik Informatika',
    requirements: '',
    skillsRequired: '',
    benefits: 'Sertifikat, Uang saku, Mentoring, Networking, Portfolio project',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.title || !formData.company || !formData.description || !formData.location) {
      setError('Judul, perusahaan, deskripsi, dan lokasi wajib diisi.');
      setLoading(false);
      return;
    }

    try {
      await internshipService.create({
        title: formData.title,
        company: formData.company,
        description: formData.description,
        location: formData.location,
        type: formData.type,
        duration: formData.duration,
        level: formData.level,
        major: formData.major,
        requirements: formData.requirements,
        skillsRequired: formData.skillsRequired,
        benefits: formData.benefits,
      } as any);
      onSuccess?.();
      onClose();
      // Reset form
      setFormData({
        title: '', company: '', description: '', location: '',
        type: 'On-site', duration: '3-6 Bulan', level: 'Internship',
        major: 'Teknik Informatika', requirements: '', skillsRequired: '',
        benefits: 'Sertifikat, Uang saku, Mentoring, Networking, Portfolio project',
      });
    } catch {
      setError('Gagal memasang lowongan. Silakan coba lagi.');
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
            {/* Row 1: Title & Company */}
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Judul Lowongan *</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Contoh: Frontend Developer Intern"
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nama Perusahaan *</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Contoh: PT Tech Corp"
                  required
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            {/* Row 2: Location & Type */}
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Lokasi *</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Contoh: Jakarta"
                  required
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Tipe</label>
                <select
                  className={styles.select}
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            {/* Row 3: Duration & Level & Major */}
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Durasi</label>
                <select
                  className={styles.select}
                  value={formData.duration}
                  onChange={e => setFormData({ ...formData, duration: e.target.value })}
                >
                  <option value="1-3 Bulan">1-3 Bulan</option>
                  <option value="3-6 Bulan">3-6 Bulan</option>
                  <option value="6 Bulan">6 Bulan</option>
                  <option value="6-12 Bulan">6-12 Bulan</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Level</label>
                <select
                  className={styles.select}
                  value={formData.level}
                  onChange={e => setFormData({ ...formData, level: e.target.value })}
                >
                  <option value="Internship">Internship</option>
                  <option value="Junior">Junior</option>
                  <option value="Entry Level">Entry Level</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Jurusan</label>
                <select
                  className={styles.select}
                  value={formData.major}
                  onChange={e => setFormData({ ...formData, major: e.target.value })}
                >
                  <option value="Teknik Informatika">Teknik Informatika</option>
                  <option value="Sistem Informasi">Sistem Informasi</option>
                  <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                  <option value="Teknik Elektro">Teknik Elektro</option>
                  <option value="Umum">Umum (Semua Jurusan)</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Deskripsi Pekerjaan *</label>
              <textarea
                className={styles.textarea}
                placeholder="Jelaskan peran dan tanggung jawab magang ini..."
                required
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Skills Required */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Skills Required (pisahkan dengan koma)</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Contoh: React, JavaScript, CSS, Git"
                value={formData.skillsRequired}
                onChange={e => setFormData({ ...formData, skillsRequired: e.target.value })}
              />
            </div>

            {/* Requirements */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Persyaratan (pisahkan dengan baris baru)</label>
              <textarea
                className={styles.textarea}
                placeholder={"Mahasiswa aktif semester 5-8\nMemiliki keahlian React\nBersedia magang minimal 3 bulan\nMemiliki motivasi belajar yang tinggi"}
                value={formData.requirements}
                onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                rows={4}
              />
            </div>

            {/* Benefits */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Benefits (pisahkan dengan koma)</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Sertifikat, Uang saku, Mentoring, Networking"
                value={formData.benefits}
                onChange={e => setFormData({ ...formData, benefits: e.target.value })}
              />
            </div>

            {error && <p style={{ color: '#ef4444', fontSize: '13px', margin: '0' }}>{error}</p>}

            <div className={styles.actions}>
              <button type="button" className={styles.cancelBtn} onClick={onClose}>Batal</button>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Memproses...' : 'Pasang Lowongan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
