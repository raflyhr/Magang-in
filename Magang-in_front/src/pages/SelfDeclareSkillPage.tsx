import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillService } from '../services/skill.service';
import type { Skill } from '../types';
import styles from './SelfDeclareSkillPage.module.css';

const categories = ['All', 'Frontend', 'Backend', 'Data Science', 'AI', 'Design', 'Other'];

export function SelfDeclareSkillPage() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); // 5 detik timeout
        const response = await skillService.getAll();
        clearTimeout(timeout);
        if (response.data && response.data.length > 0) {
          setSkills(response.data);
        } else {
          throw new Error('empty');
        }
      } catch {
        // Fallback: tampilkan skill dummy kalau API gagal
        setSkills([
          { id: '1', name: 'HTML', category: 'Frontend' },
          { id: '2', name: 'CSS', category: 'Frontend' },
          { id: '3', name: 'JavaScript', category: 'Frontend' },
          { id: '4', name: 'React', category: 'Frontend' },
          { id: '5', name: 'Vue.js', category: 'Frontend' },
          { id: '6', name: 'Angular', category: 'Frontend' },
          { id: '7', name: 'Node.js', category: 'Backend' },
          { id: '8', name: 'Express', category: 'Backend' },
          { id: '9', name: 'Python', category: 'Backend' },
          { id: '10', name: 'Django', category: 'Backend' },
          { id: '11', name: 'Flask', category: 'Backend' },
          { id: '12', name: 'SQL', category: 'Backend' },
          { id: '13', name: 'PostgreSQL', category: 'Backend' },
          { id: '14', name: 'MongoDB', category: 'Backend' },
          { id: '15', name: 'PHP', category: 'Backend' },
          { id: '16', name: 'Laravel', category: 'Backend' },
          { id: '17', name: 'UI/UX Design', category: 'Design' },
          { id: '18', name: 'Figma', category: 'Design' },
          { id: '19', name: 'Flutter', category: 'Frontend' },
          { id: '20', name: 'Docker', category: 'Backend' },
          { id: '21', name: 'AWS', category: 'Backend' },
          { id: '22', name: 'TypeScript', category: 'Frontend' },
          { id: '23', name: 'TensorFlow', category: 'AI' },
          { id: '24', name: 'Go', category: 'Backend' },
          { id: '25', name: 'Git', category: 'Other' },
        ]);
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

  const filteredSkills = skills.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || 
      (s.category && s.category.toLowerCase() === activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const selectedSkillNames = skills
    .filter((s) => selectedIds.includes(s.id))
    .map((s) => s.name);

  const handleSubmit = async () => {
    if (selectedIds.length < 3) return;
    setIsSaving(true);
    try {
      await skillService.sync(selectedIds);
      sessionStorage.setItem('user_skills_for_match', JSON.stringify(selectedSkillNames));
      navigate('/onboarding/matching');
    } catch {
      alert('Gagal menyimpan skill. Coba lagi.');
    } finally {
      setIsSaving(false);
    }
  };

  // Progress: 50% karena step 1 of 2
  const progress = Math.min(50 + (selectedIds.length / 3) * 50, 100);

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

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
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

        {/* Category tabs */}
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? styles.catBtnActive : styles.catBtn}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Populer</span>
          <span className={styles.count}>{selectedIds.length} skill dipilih</span>
        </div>

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
      </div>

      {/* Sticky Footer */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
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
        </div>
        <div className={styles.footerRight}>
          <button className={styles.backBtn} onClick={() => navigate('/onboarding')}>
            ← Kembali
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
