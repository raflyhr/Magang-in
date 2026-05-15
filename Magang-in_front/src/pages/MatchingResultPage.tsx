import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { aiService } from '../services/ai.service';
import type { MatchResult } from '../types';
import styles from './MatchingResultPage.module.css';

function getMatchLevel(score: number) {
  if (score >= 70) return { label: 'STRONG', color: '#22c55e', bg: '#ecfdf5' };
  if (score >= 40) return { label: 'PARTIAL', color: '#f59e0b', bg: '#fffbeb' };
  return { label: 'LOW', color: '#ef4444', bg: '#fef2f2' };
}

export function MatchingResultPage() {
  const navigate = useNavigate();
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [userSkills, setUserSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const doMatch = async () => {
      const stored = sessionStorage.getItem('user_skills_for_match');
      if (!stored) {
        navigate('/onboarding');
        return;
      }

      const skills: string[] = JSON.parse(stored);
      setUserSkills(skills);
      setIsLoading(true);

      try {
        const response = await aiService.matchInternship(skills);
        // Sort by matchScore descending
        const sorted = response.data.matches.sort((a, b) => b.matchScore - a.matchScore);
        setMatches(sorted);
      } catch {
        setError('Gagal mendapatkan rekomendasi. Coba lagi.');
      } finally {
        setIsLoading(false);
      }
    };

    doMatch();
  }, [navigate]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.step}>Step 2 of 2: Hasil Matching</p>
          <h1 className={styles.title}>Hasil Rekomendasi AI</h1>
          <p className={styles.subtitle}>
            Lowongan yang paling cocok berdasarkan {userSkills.length} skill kamu
          </p>
          <div className={styles.userSkills}>
            {userSkills.map((s) => (
              <span key={s} className={styles.userSkillChip}>{s}</span>
            ))}
          </div>
          <button className={styles.changeBtn} onClick={() => navigate('/onboarding')}>
            Ubah Skill
          </button>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>AI sedang mencocokkan skill kamu dengan lowongan...</p>
          </div>
        )}

        {/* Error */}
        {error && !isLoading && (
          <div className={styles.errorBox}>
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className={styles.retryBtn}>Coba Lagi</button>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !error && matches.length === 0 && (
          <div className={styles.empty}>
            <p>Tidak ada lowongan yang cocok saat ini.</p>
            <p className={styles.emptySub}>Coba tambah lebih banyak skill untuk hasil yang lebih baik.</p>
          </div>
        )}

        {/* Results */}
        {!isLoading && !error && matches.length > 0 && (
          <div className={styles.results}>
            {matches.map((match, i) => {
              const level = getMatchLevel(match.matchScore);
              return (
                <div key={match.internshipId} className={styles.card} style={{ borderLeftColor: level.color }}>
                  <div className={styles.cardLeft}>
                    <span className={styles.rank}>#{i + 1}</span>
                    <span className={styles.badge} style={{ background: level.bg, color: level.color }}>
                      {level.label}
                    </span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{match.title}</h3>
                    <p className={styles.cardCompany}>{match.company}</p>
                    {match.missingSkills.length > 0 && (
                      <div className={styles.missingSkills}>
                        <span className={styles.missingLabel}>Missing:</span>
                        {match.missingSkills.map((s) => (
                          <span key={s} className={styles.missingChip}>{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={styles.cardRight}>
                    <span className={styles.score}>{Math.round(match.matchScore)}%</span>
                    <Link to={`/lowongan/${match.internshipId}`} className={styles.detailBtn}>
                      Detail
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Go to dashboard */}
        {!isLoading && !error && (
          <div className={styles.footerActions}>
            <Link to="/lowongan" className={styles.browseBtn}>Lihat Semua Lowongan</Link>
            <Link to="/dashboard" className={styles.dashboardBtn}>Ke Dashboard</Link>
          </div>
        )}
      </div>
    </div>
  );
}
