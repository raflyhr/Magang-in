import { Link } from 'react-router-dom';
import styles from './LowonganPage.module.css';

const jobListings = [
  {
    id: 1,
    initial: 'G',
    color: '#4f46e5',
    title: 'Software Engineer Internship',
    company: 'Glints Indonesia',
    verified: true,
    type: 'Internship',
    duration: '3-6 Bulan',
    location: 'Jakarta Selatan, DKI Jakarta (Remote)',
    tags: ['React.js', 'Node.js', 'Tailwind CSS', '+5'],
    match: 90,
    urgent: true,
    posted: 'Diupload 2 jam yang lalu',
  },
  {
    id: 2,
    initial: 'S',
    color: '#f97316',
    title: 'UI/UX Designer Apprentice',
    company: 'Shopee Indonesia',
    verified: true,
    type: 'Internship',
    duration: '6-12 Bulan',
    location: 'Jakarta Pusat, DKI Jakarta',
    tags: ['Figma', 'UX Research', '+2'],
    match: 92,
    urgent: false,
    posted: 'Diupload 4 jam yang lalu',
  },
  {
    id: 3,
    initial: 'T',
    color: '#3b82f6',
    title: 'Marketing Strategy Intern',
    company: 'Traveloka',
    verified: true,
    type: 'Internship',
    duration: '3 Bulan',
    location: 'Sleman, DIY (Hybrid)',
    tags: [],
    match: 85,
    urgent: false,
    posted: 'Diupload 1 hari yang lalu',
  },
  {
    id: 4,
    initial: 'G',
    color: '#22c55e',
    title: 'Content Creator Internship',
    company: 'Gojek',
    verified: true,
    type: 'Internship',
    duration: '4-6 Bulan',
    location: 'Jakarta Selatan, DKI Jakarta',
    tags: [],
    match: 95,
    urgent: true,
    posted: 'Diupload 6 jam yang lalu',
  },
];

export function LowonganPage() {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>Magang-in</span>
            <span className={styles.logoDot}></span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link to="/lowongan" className={styles.navLinkActive}>Lowongan</Link></li>
              <li><Link to="/perusahaan">Perusahaan</Link></li>
            <li><a href="#" className={styles.navLink}>Roadmaps</a></li>
          </ul>
          <div className={styles.navRight}>
            <Link to="/login" className={styles.navMasuk}>Masuk</Link>
            <Link to="/login" className={styles.navDaftar}>Daftar</Link>  
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <svg width="18" height="18" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Cari Nama Pekerjaan, Skill, dan Perusahaan" />
          </div>
          <div className={styles.searchInput}>
            <svg width="18" height="18" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <input type="text" placeholder="Semua Kota/Provinsi" />
          </div>
          <button className={styles.searchBtn}>CARI</button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* QR Banner */}
          <div className={styles.qrBanner}>
            <div className={styles.qrIcon}>📱</div>
            <div>
              <div className={styles.qrTitle}>Loker Lebih Mudah!</div>
              <div className={styles.qrDesc}>Scan QR untuk download App</div>
            </div>
          </div>

          {/* Prioritas */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <span>Prioritas</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={styles.filterTags}>
              <span className={styles.filterTagActive}>Paling Relevan</span>
              <span className={styles.filterTag}>Baru</span>
            </div>
          </div>

          {/* Tipe Pekerjaan */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <span>Tipe Pekerjaan</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={styles.filterChecks}>
              <label className={styles.checkItem}><input type="checkbox" defaultChecked /> Magang / Internship</label>
              <label className={styles.checkItem}><input type="checkbox" /> Kontrak</label>
              <label className={styles.checkItem}><input type="checkbox" /> Full-time</label>
              <label className={styles.checkItem}><input type="checkbox" /> Freelance</label>
            </div>
          </div>

          {/* Kebijakan Kerja */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <span>Kebijakan Kerja</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={styles.filterChecks}>
              <label className={styles.checkItem}><input type="checkbox" /> Kerja di lokasi</label>
              <label className={styles.checkItem}><input type="checkbox" defaultChecked /> Kerja Remote</label>
              <label className={styles.checkItem}><input type="checkbox" /> Kerja Hybrid</label>
            </div>
          </div>

          {/* Kecamatan */}
          <div className={styles.filterGroup}>
            <div className={styles.filterHeader}>
              <span>Kecamatan</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={styles.filterChecks}>
              <label className={styles.checkItem}><input type="checkbox" /> Jakarta Selatan</label>
              <label className={styles.checkItem}><input type="checkbox" /> Bandung City</label>
              <label className={styles.checkItem}><input type="checkbox" /> Sleman, DIY</label>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <section className={styles.listings}>
          <h2 className={styles.listingsTitle}>
            Daftar Lowongan Kerja & Magang <span className={styles.resultCount}>(124 Hasil)</span>
          </h2>

          <div className={styles.jobGrid}>
            {jobListings.map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobCardHeader}>
                  <div className={styles.jobAvatar} style={{ background: job.color }}>
                    {job.initial}
                  </div>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobCompany}>
                      {job.company}
                      {job.verified && <span className={styles.verified}>VERIFIED</span>}
                    </p>
                  </div>
                  <div className={styles.matchBadge}>{job.match}% Match</div>
                </div>

                <div className={styles.jobMeta}>
                  <span>📋 {job.type}</span>
                  <span>⏱️ {job.duration}</span>
                </div>
                <div className={styles.jobLocation}>📍 {job.location}</div>

                {job.tags.length > 0 && (
                  <div className={styles.jobTags}>
                    {job.tags.map((tag) => (
                      <span key={tag} className={styles.jobTag}>{tag}</span>
                    ))}
                  </div>
                )}

                <div className={styles.jobActions}>
                  <button className={styles.applyBtn}>Lamar Sekarang</button>
                  <button className={styles.bookmarkBtn} aria-label="Bookmark">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>

                <div className={styles.jobFooter}>
                  <span className={styles.jobPosted}>{job.posted}</span>
                  {job.urgent && <span className={styles.urgentBadge}>URGENT</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>‹</button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span className={styles.pageDots}>...</span>
            <button className={styles.pageBtn}>12</button>
            <button className={styles.pageBtn}>›</button>
          </div>
        </section>
      </div>

      {/* CTA Banner */}
      <div className={styles.ctaBanner}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaIcon}>
            <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className={styles.ctaText}>
            <h3>Login untuk lihat lebih banyak loker</h3>
            <p>Dapatkan rekomendasi lowongan yang 90% cocok dengan profil dan keahlianmu.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link to="/login" className={styles.ctaBtnOutline}>Daftar</Link>
            <Link to="/login" className={styles.ctaBtnPrimary}>Login Sekarang</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>Magang-in.</div>
              <p>Platform pencarian magang dan kerja nomor satu di Indonesia untuk mahasiswa dan fresh graduate.</p>
              <div className={styles.footerSocials}>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Instagram">📷</a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Kategori</h4>
                <ul>
                  <li>Human Resources</li>
                  <li>Design</li>
                  <li>Data Science</li>
                  <li>Engineering</li>
                  <li>Marketing</li>
                </ul>
              </div>
              <div>
                <h4>Kota Terpopuler</h4>
                <ul>
                  <li>Loker Jakarta</li>
                  <li>Loker Bandung</li>
                  <li>Loker Surabaya</li>
                  <li>Loker Jogja</li>
                  <li>Loker Medan</li>
                </ul>
              </div>
              <div>
                <h4>Pencarian Terbanyak</h4>
                <ul>
                  <li>Work From Home</li>
                  <li>Magang Mahasiswa</li>
                  <li>Management Trainee</li>
                  <li>Admin Social Media</li>
                  <li>Graphic Designer</li>
                </ul>
              </div>
              <div>
                <h4>Tentang Kami</h4>
                <ul>
                  <li>Pusat Bantuan</li>
                  <li>Hubungi Kami</li>
                  <li>Kebijakan Privasi</li>
                  <li>Syarat & Ketentuan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            © 2026 Magang-in Indonesia. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
