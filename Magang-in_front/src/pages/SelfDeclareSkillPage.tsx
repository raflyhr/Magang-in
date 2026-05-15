import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillService } from '../services/skill.service';
import { aiService } from '../services/ai.service';
import type { Skill } from '../types';
import styles from './SelfDeclareSkillPage.module.css';

export function SelfDeclareSkillPage() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await skillService.getAll();
        setSkills(response.data);
      } catch {
        // handle error
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const toggleSkill = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const filteredSkills = skills.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedSkillNames = skills
    .filter((s) => selectedIds.includes(s.id))
    .map((s) => s.name);

  const handleSubmit = async () => {
    if (selectedIds.length < 3) return;
    setIsSaving(true);
    try {
      // Sync skill ke profil user
      await skillService.sync(selectedIds);
      // Lanjut ke matching — simpan skill names di sessionStorage untuk halaman matching
      sessionStorage.setItem('user_skills_for_match', JSON.stringify(selectedSkillNames));
      navigate('/onboarding/matching');
    } catch {
      alert('Gagal menyimpan skill. Coba lagi.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.step}>Step 1 of 2: Input Skill</p>
          <h1 className={styles.title}>Pilih Skill Kamu</h1>
          <p className={styles.subtitle}>
            Centang skill yang kamu kuasai. Minimal pilih 3 skill untuk hasil matching yang akurat.
          </p>
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <svg width="18" height="18" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Cari skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* Selected count */}
        <p className={styles.count}>{selectedIds.length} skill dipilih</p>

        {/* Selected chips */}
        {selectedSkillNames.length > 0 && (
          <div className={styles.selectedChips}>
            {selectedSkillNames.map((name) => (
              <span key={name} className={styles.chip}>
                {name}
                <button
                  className={styles.chipX}
                  onClick={() => {
                    const skill = skills.find((s) => s.name === name);
                    if (skill) toggleSkill(skill.id);
                  }}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Skill Grid */}
        {isLoading ? (
          <div className={styles.loading}>Memuat daftar skill...</div>
        ) : (
          <div className={styles.grid}>
            {filteredSkills.map((skill) => (
              <label
                key={skill.id}
                className={`${styles.skillItem} ${selectedIds.includes(skill.id) ? styles.skillItemSelected : ''}`}
              >
                <input
                  type="checkbox"
                  checked={selectedIds.includes(skill.id)}
                  onChange={() => toggleSkill(skill.id)}
                  className={styles.checkbox}
                />
                <span>{skill.name}</span>
              </label>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <button className={styles.backBtn} onClick={() => navigate('/onboarding')}>
            Kembali
          </button>
          <button
            className={styles.nextBtn}
            disabled={selectedIds.length < 3 || isSaving}
            onClick={handleSubmit}
          >
            {isSaving ? 'Menyimpan...' : 'Lanjut ke Matching'}
          </button>
        </div>
      </div>
    </div>
  );
}
