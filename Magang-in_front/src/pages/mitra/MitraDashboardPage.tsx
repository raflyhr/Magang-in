import { useAuth } from '../../contexts/AuthContext';
import styles from './MitraDashboardPage.module.css';

export function MitraDashboardPage() {
  const { } = useAuth();

  return (
    <div>
      {/* Top Navigation */}
      <div className={styles.topNav}>
        <div className={styles.companyProfile}>
          <div className={styles.companyLogo}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <h3 className={styles.companyName}>TechNexus Indonesia</h3>
            <span className={styles.partnerBadge}>PREMIUM PARTNER</span>
          </div>
        </div>
        <div className={styles.topActions}>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Help</span>
          <img src="https://ui-avatars.com/api/?name=Tech+Nexus&background=1e293b&color=fff" alt="User" className={styles.userThumb} />
        </div>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.welcomeTitle}>Halo, TechNexus Indonesia!</h1>
          <p className={styles.welcomeSub}>Berikut adalah ringkasan performa rekrutmen Anda hari ini.</p>
        </div>
        <div className={styles.matchAvg}>
          <div className={styles.matchAvgIcon}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div>
            <span className={styles.matchAvgLabel}>Match Score Avg</span>
            <span className={styles.matchAvgValue}>88%</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: '#eef2ff', color: '#6366f1' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          </div>
          <span className={styles.statLabel}>LOWONGAN AKTIF</span>
          <div className={styles.statValue}>
            5 <span className={`${styles.statTrend} ${styles.statTrendUp}`}>+2 bulan ini</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: '#f0f9ff', color: '#0ea5e9' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span className={styles.statLabel}>TOTAL PELAMAR</span>
          <div className={styles.statValue}>
            124 <span className={`${styles.statTrend} ${styles.statTrendUp}`}>↑ 12%</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon} style={{ background: '#fff7ed', color: '#f97316' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
          </div>
          <span className={styles.statLabel}>MENUNGGU REVIEW</span>
          <div className={styles.statValue}>
            18 <span style={{ fontSize: '10px', background: '#ffedd5', color: '#9a3412', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>URGENT</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className={styles.contentGrid}>
        {/* Aktivitas Terbaru */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Aktivitas Terbaru</h2>
            <button className={styles.seeAll}>Lihat Semua</button>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityInfo}>
                <img src="https://ui-avatars.com/api/?name=Andi+Pratama&background=6366f1&color=fff" alt="User" className={styles.userAvatar} />
                <div>
                  <div className={styles.activityText}>
                    <span className={styles.applicantName}>Andi Pratama</span> melamar untuk posisi <span className={styles.jobName}>Frontend Developer</span>
                  </div>
                  <div className={styles.activityMeta}>2 menit yang lalu • 92% Match Score</div>
                </div>
              </div>
              <button className={styles.reviewBtn}>Review</button>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityInfo}>
                <img src="https://ui-avatars.com/api/?name=Siti+Aisyah&background=f97316&color=fff" alt="User" className={styles.userAvatar} />
                <div>
                  <div className={styles.activityText}>
                    <span className={styles.applicantName}>Siti Aisyah</span> melamar untuk posisi <span className={styles.jobName}>UI/UX Designer</span>
                  </div>
                  <div className={styles.activityMeta}>45 menit yang lalu • 85% Match Score</div>
                </div>
              </div>
              <button className={styles.reviewBtn}>Review</button>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityInfo}>
                <div className={styles.userAvatar} style={{ background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <div className={styles.activityText}>
                    Wawancara dengan <span className={styles.applicantName}>Budi Santoso</span> dijadwalkan
                  </div>
                  <div className={styles.activityMeta}>Kemarin, 14:00 WIB • Product Manager Intern</div>
                </div>
              </div>
              <button className={styles.iconBtn} style={{ padding: '8px' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>AI Matching Insights</h2>
          </div>
          <div className={styles.insightList}>
            <div className={styles.insightItem}>
              <div className={styles.insightInfo}>
                <span className={styles.insightLabel}>Frontend Development</span>
                <span className={styles.insightValue}>94%</span>
              </div>
              <div className={styles.insightBar}>
                <div className={styles.insightFill} style={{ width: '94%' }}></div>
              </div>
            </div>
            <div className={styles.insightItem}>
              <div className={styles.insightInfo}>
                <span className={styles.insightLabel}>UI/UX Design</span>
                <span className={styles.insightValue}>82%</span>
              </div>
              <div className={styles.insightBar}>
                <div className={styles.insightFill} style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className={styles.insightItem}>
              <div className={styles.insightInfo}>
                <span className={styles.insightLabel}>Data Science</span>
                <span className={styles.insightValue}>65%</span>
              </div>
              <div className={styles.insightBar}>
                <div className={styles.insightFill} style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          <div className={styles.aiTip}>
            <div className={styles.aiTipIcon}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.663 17h4.674a1 1 0 0 0 .922-.617l2.1-5.148A2.003 2.003 0 0 0 15.5 8.5H14V4a2 2 0 1 0-4 0v4H8.5a2.003 2.003 0 0 0-1.858 2.735l2.099 5.148A1 1 0 0 0 9.663 17z"/></svg>
            </div>
            <div className={styles.aiTipText}>
              <b>Tip AI:</b> Perbarui deskripsi lowongan Anda untuk menarik lebih banyak kandidat dengan skill <b>"React.js"</b>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
