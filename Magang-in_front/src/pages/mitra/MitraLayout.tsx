import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { PostInternshipModal } from '../../components/mitra/PostInternshipModal';
import styles from '../../components/DashboardLayout.module.css'; // Reuse styles but modify if needed
import { useState } from 'react';

const mitraMenuItems = [
  { path: '/mitra', label: 'Beranda', icon: 'grid' },
  { path: '/mitra/lowongan', label: 'Lowongan Saya', icon: 'briefcase' },
  { path: '/mitra/pelamar', label: 'Daftar Pelamar', icon: 'users' },
  { path: '/mitra/profil', label: 'Profil Perusahaan', icon: 'building' },
];

function MenuIcon({ name }: { name: string }) {
  switch (name) {
    case 'grid':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    case 'briefcase':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
    case 'users':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'building':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="18"/><line x1="15" y1="22" x2="15" y2="18"/><line x1="18" y1="6" x2="18" y2="6"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="18" y1="14" x2="18" y2="14"/><line x1="6" y1="6" x2="6" y2="6"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="6" y1="14" x2="6" y2="14"/></svg>;
    default:
      return null;
  }
}

export function MitraLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Magang-in</span>
          <span className={styles.brandSub}>MITRA DASHBOARD</span>
        </div>

        <nav className={styles.nav}>
          {mitraMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? styles.navItemActive : styles.navItem}
            >
              <MenuIcon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <div style={{ marginBottom: '16px' }}>
             <button 
               style={{ 
                 width: '100%', 
                 padding: '12px', 
                 background: '#6366f1', 
                 color: 'white', 
                 border: 'none', 
                 borderRadius: '10px', 
                 fontSize: '14px', 
                 fontWeight: '700',
                 cursor: 'pointer',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 gap: '8px'
               }}
               onClick={() => setIsPostModalOpen(true)}
             >
               <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
               Pasang Lowongan
             </button>
          </div>

          <Link to="/mitra/profil" className={styles.userInfo}>
            <div className={styles.userAvatar} style={{ background: '#1e293b' }}>
              {user?.name?.charAt(0).toUpperCase() || 'M'}
            </div>
            <div className={styles.userMeta}>
              <span className={styles.userName}>{user?.name || 'Mitra Magang-in'}</span>
              <span className={styles.userEmail}>{user?.email}</span>
            </div>
          </Link>
          <button className={styles.logoutBtn} onClick={logout}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.content}>
        <Outlet />
      </main>

      <PostInternshipModal 
        isOpen={isPostModalOpen} 
        onClose={() => setIsPostModalOpen(false)} 
      />
    </div>
  );
}
