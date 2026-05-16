import styles from './MitraReviewPage.module.css';

export function MitraReviewPage() {
  const applicants = [
    {
      id: 1,
      name: 'Andi Pratama',
      university: 'Univ. Indonesia',
      major: 'Ilmu Komputer',
      skills: ['React.js', 'Tailwind CSS', 'TypeScript'],
      score: 98,
      scoreColor: '#ecfdf5',
      scoreText: '#059669',
      border: '#22c55e',
      avatar: 'https://ui-avatars.com/api/?name=Andi+Pratama&background=6366f1&color=fff'
    },
    {
      id: 2,
      name: 'Siti Aminah',
      university: 'ITB',
      major: 'Teknik Informatika',
      skills: ['Vue.js', 'JavaScript', 'Figma'],
      score: 85,
      scoreColor: '#ecfdf5',
      scoreText: '#059669',
      border: '#22c55e',
      avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=f97316&color=fff'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      university: 'UGM',
      major: 'Teknologi Informasi',
      skills: ['Next.js', 'CSS3'],
      score: 72,
      scoreColor: '#fff7ed',
      scoreText: '#c2410c',
      border: '#f97316',
      avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=3b82f6&color=fff'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.topNav}>
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbActive}>Review Pelamar</span>
          <span className={styles.sep}>/</span>
          <span>Frontend Developer</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span style={{ fontSize: '14px', color: '#64748b' }}>Help</span>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>GT</div>
        </div>
      </div>

      {/* Header Card */}
      <div className={styles.headerCard}>
        <div>
          <h1 className={styles.jobTitle}>Frontend Developer</h1>
          <p className={styles.jobSub}>Reviewing 3 top-tier candidates matching your technical requirements.</p>
        </div>
        <div className={styles.aiPowered}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>
          AI Match Powered
        </div>
      </div>

      {/* Applicant Cards */}
      <div className={styles.applicantList}>
        {applicants.map((app) => (
          <div key={app.id} className={styles.applicantCard} style={{ borderLeftColor: app.border }}>
            <div className={styles.applicantInfo}>
              <div className={styles.avatarWrapper}>
                <img src={app.avatar} alt={app.name} className={styles.avatar} />
                <div className={styles.verifiedBadge}>
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>
              <div>
                <h3 className={styles.name}>{app.name}</h3>
                <div className={styles.edu}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  {app.university} • {app.major}
                </div>
                <div className={styles.skillChips}>
                  {app.skills.map(skill => (
                    <span key={skill} className={styles.skillChip}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.scoreWrapper}>
              <div>
                <span className={styles.matchScoreLabel}>AI Match Score:</span>
                <span className={styles.matchScoreValue} style={{ background: app.scoreColor, color: app.scoreText }}>
                  {app.score}%
                </span>
              </div>
              <div className={styles.actions}>
                <button className={styles.tolakBtn}>Tolak</button>
                <button className={styles.terimaBtn}>Terima</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className={styles.footerGrid}>
        <div className={styles.insightCard}>
          <h4 className={styles.insightTitle}>AI Talent Insight</h4>
          <p className={styles.insightText}>
            Andi Pratama shows exceptional mastery in modern frontend frameworks and has 100% stack compatibility with your project requirements.
          </p>
        </div>
        <div className={styles.progressCard}>
          <span className={styles.progressLabel}>TOTAL REVIEW</span>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '16px' }}>
             <span className={styles.progressValue}>3</span>
             <span className={styles.progressText}>Candidates Left</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '33.3%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
