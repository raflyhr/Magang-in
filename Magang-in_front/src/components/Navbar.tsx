import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from './Navbar.module.css';

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Tentukan link aktif
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  // Dashboard URL berdasarkan role
  const getDashboardUrl = () => {
    if (!user) return '/dashboard';
    switch (user.role) {
      case 'mitra': return '/mitra/dashboard';
      case 'admin': return '/admin/dashboard';
      default: return '/dashboard';
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Magang</span>
          <span className={styles.logoAccent}>-in</span>
        </Link>

        {/* Nav Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link to="/lowongan" className={isActive('/lowongan') ? styles.navLinkActive : styles.navLink}>
              Lowongan
            </Link>
          </li>
          <li>
            <Link to="/perusahaan" className={isActive('/perusahaan') ? styles.navLinkActive : styles.navLink}>
              Perusahaan
            </Link>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Roadmaps
            </a>
          </li>
        </ul>

        {/* Right side */}
        <div className={styles.navRight}>
          {isAuthenticated && user ? (
            <>
              <button className={styles.iconBtn} aria-label="Notifications">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>

              {/* User avatar + dropdown */}
              <div className={styles.userMenu}>
                <button
                  className={styles.avatarBtn}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-label="User menu"
                >
                  {user.profileImage ? (
                    <img src={user.profileImage} alt={user.name || ''} className={styles.avatarImg} />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      {user.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  )}
                </button>

                {dropdownOpen && (
                  <>
                    <div className={styles.dropdownOverlay} onClick={() => setDropdownOpen(false)} />
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownHeader}>
                        <span className={styles.dropdownName}>{user.name || 'User'}</span>
                        <span className={styles.dropdownEmail}>{user.email}</span>
                      </div>
                      <div className={styles.dropdownDivider} />
                      <Link to={getDashboardUrl()} className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                        Dashboard
                      </Link>
                      <Link to="/profile" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                        Profile
                      </Link>
                      <div className={styles.dropdownDivider} />
                      <button className={styles.dropdownItemDanger} onClick={logout}>
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.loginBtn}>Masuk</Link>
              <Link to="/register" className={styles.registerBtn}>Daftar</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
