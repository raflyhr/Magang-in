import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from './DashboardLayout.module.css';

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: 'grid' },
  { path: '/dashboard/lowongan', label: 'Lowongan', icon: 'briefcase' },
  { path: '/dashboard/rekomendasi', label: 'Rekomendasi AI', icon: 'sparkle' },
  { path: '/dashboard/roadmap', label: 'Roadmap', icon: 'code' },
];

function MenuIcon({ name }: { name: string }) {
  switch (name) {
    case 'grid':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    case 'briefcase':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
    case 'sparkle':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>;
    case 'document':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
    case 'code':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    case 'user':
      return <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
    default:
      return null;
  }
}

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Magang-in</span>
          <span className={styles.brandSub}>AI INTERNSHIP PLATFORM</span>
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => (
            'external' in item && item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navItem}
              >
                <MenuIcon name={item.icon} />
                <span>{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? styles.navItemActive : styles.navItem}
              >
                <MenuIcon name={item.icon} />
                <span>{item.label}</span>
              </Link>
            )
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <Link to="/dashboard/profil" className={styles.userInfo}>
            <div className={styles.userAvatar}>
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className={styles.userMeta}>
              <span className={styles.userName}>{user?.name || 'User'}</span>
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
    </div>
  );
}
