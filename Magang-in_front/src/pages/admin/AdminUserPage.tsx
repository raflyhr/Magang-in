import { useState } from 'react';
import styles from './AdminUserPage.module.css';

export function AdminUserPage() {
  const [activeTab, setActiveTab] = useState('Semua');

  const users = [
    { id: 1, name: 'Ahmad Rifqi', email: 'ahmad.rifqi@student.univ.ac.id', role: 'STUDENT', joined: '12 Oct 2023', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rifqi&background=6366f1&color=fff' },
    { id: 2, name: 'Tech Solutions Inc.', email: 'hr@techsolutions.com', role: 'MITRA', joined: '05 Nov 2023', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Tech+Solutions&background=0ea5e9&color=fff' },
    { id: 3, name: 'Siti Aminah', email: 'siti.a@campus.edu', role: 'STUDENT', joined: '20 Nov 2023', status: 'Inactive', avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=f97316&color=fff' },
    { id: 4, name: 'Budi Santoso', email: 'budi_s@student.tech.id', role: 'STUDENT', joined: '01 Dec 2023', status: 'Active', avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=3b82f6&color=fff' },
  ];

  return (
    <div className={styles.container}>
      {/* Top Header & Search */}
      <div className={styles.topHeader}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" className={styles.searchInput} placeholder="Cari user berdasarkan nama atau email..." />
        </div>
        <div className={styles.topRight}>
          <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <div className={styles.adminThumb}>
            <div className={styles.adminInfo}>
              <span className={styles.adminName}>Admin Utama</span>
              <span className={styles.adminRole}>SUPER ADMIN</span>
            </div>
            <img src="https://ui-avatars.com/api/?name=Admin+Utama&background=e2e8f0&color=1e293b" alt="Admin" className={styles.avatar} />
          </div>
        </div>
      </div>

      {/* Page Title & Add Button */}
      <div className={styles.pageInfo}>
        <div>
          <h1 className={styles.pageTitle}>Manajemen User</h1>
          <p className={styles.pageSub}>Kelola akses, role, dan status keanggotaan seluruh pengguna platform Magang-in.</p>
        </div>
        <button className={styles.addBtn}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Tambah User Baru
        </button>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIconBox} style={{ background: '#eef2ff', color: '#6366f1' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
             </div>
             <span className={styles.statPercent}>+12%</span>
          </div>
          <span className={styles.statLabel}>TOTAL USERS</span>
          <span className={styles.statValue}>12,482</span>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIconBox} style={{ background: '#f0f9ff', color: '#0ea5e9' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
             </div>
             <span className={styles.statPercent}>+5.4%</span>
          </div>
          <span className={styles.statLabel}>NEW USERS (30D)</span>
          <span className={styles.statValue}>1,240</span>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIconBox} style={{ background: '#fff7ed', color: '#f97316' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
             </div>
             <span className={styles.statPercent} style={{ color: '#94a3b8' }}>82%</span>
          </div>
          <span className={styles.statLabel}>STUDENTS</span>
          <span className={styles.statValue}>10,234</span>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
             <div className={styles.statIconBox} style={{ background: '#f0fdf4', color: '#22c55e' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
             </div>
             <span className={styles.statPercent} style={{ color: '#94a3b8' }}>18%</span>
          </div>
          <span className={styles.statLabel}>PARTNERS</span>
          <span className={styles.statValue}>2,248</span>
        </div>
      </div>

      {/* Table Controls */}
      <div className={styles.tableControls}>
        <div className={styles.tabs}>
          {['Semua', 'Student', 'Mitra'].map(tab => (
            <button 
              key={tab} 
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.actionRow}>
          <button className={styles.iconActionBtn}>
             <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
          </button>
          <button className={styles.iconActionBtn}>
             <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nama & Email</th>
              <th>Role</th>
              <th>Joined Date</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td data-label="Nama & Email">
                  <div className={styles.userCell}>
                    <img src={user.avatar} alt={user.name} className={styles.avatar} />
                    <div>
                      <span className={styles.userName}>{user.name}</span>
                      <span className={styles.userEmail}>{user.email}</span>
                    </div>
                  </div>
                </td>
                <td data-label="Role">
                  <span className={`${styles.roleBadge} ${user.role === 'STUDENT' ? styles.roleStudent : styles.roleMitra}`}>
                    {user.role}
                  </span>
                </td>
                <td data-label="Joined Date">{user.joined}</td>
                <td data-label="Status">
                  <div className={styles.statusBadge}>
                    <div className={`${styles.statusDot} ${user.status === 'Active' ? styles.activeDot : styles.inactiveDot}`}></div>
                    {user.status}
                  </div>
                </td>
                <td data-label="Aksi">
                   <svg width="20" height="20" fill="none" stroke="#94a3b8" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
          <span className={styles.pageInfo}>Showing <b>1 - 4</b> of 12,482 users</span>
          <div className={styles.pageControls}>
            <button className={styles.pageBtn}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span style={{ color: '#94a3b8' }}>...</span>
            <button className={styles.pageBtn}>312</button>
            <button className={styles.pageBtn}><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
          </div>
        </div>
      </div>

      {/* Footer Insights */}
      <div className={styles.insightGrid}>
        <div className={`${styles.insightCard} ${styles.blueCard}`}>
          <div className={styles.insightIcon} style={{ background: '#3730a3', color: 'white' }}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/></svg>
          </div>
          <div>
            <span className={styles.insightTitle}>AI User Insights</span>
            <p className={styles.insightText}>Minggu ini terdapat lonjakan pendaftaran sebesar 15% dari universitas di wilayah Jawa Barat. Sistem merekomendasikan penambahan slot magang untuk kategori Teknologi.</p>
          </div>
        </div>
        <div className={`${styles.insightCard} ${styles.skyCard}`}>
          <div className={styles.insightIcon} style={{ background: '#0ea5e9', color: 'white' }}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <span className={styles.insightTitle}>Keamanan Akun</span>
            <p className={styles.insightText}>Terdapat 3 user dengan aktivitas login yang mencurigakan. Segera tinjau laporan aktivitas di menu Laporan & Data untuk memastikan keamanan platform.</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#94a3b8' }}>
        © 2024 Magang-in Platform. All rights reserved. Version 2.4.0-admin.
      </div>
    </div>
  );
}
