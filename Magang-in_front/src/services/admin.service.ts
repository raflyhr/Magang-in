import api from './api'
import type { AdminUser, Internship } from '../types'

export interface AdminStats {
  totalUsers: number
  totalMitra: number
  totalInternships: number
  totalApplications: number
  pendingApplications: number
}

export interface AdminInternship extends Internship {
  mitra: { name: string; email: string }
  _count: { applications: number }
}

export const adminService = {
  // === STATS ===
  getStats: () =>
    api.get<AdminStats>('/admin/stats'),

  // === USER MANAGEMENT ===
  getAllUsers: () =>
    api.get<AdminUser[]>('/admin/users'),

  updateUser: (id: string, data: {
    name?: string
    email?: string
    role?: string
    password?: string
  }) => api.put<{ message: string; user: AdminUser }>(`/admin/users/${id}`, data),

  deleteUser: (id: string) =>
    api.delete<{ message: string }>(`/admin/users/${id}`),

  // === MITRA VERIFICATION ===
  getPendingMitra: () =>
    api.get<(AdminUser & { _count: { internships: number } })[]>('/admin/mitra'),

  // Approve mitra = updateUser role to 'mitra' (already mitra)
  // Reject mitra = updateUser role back to 'pengguna'
  approveMitra: (id: string) =>
    api.put<{ message: string }>(`/admin/users/${id}`, { role: 'mitra' }),

  rejectMitra: (id: string) =>
    api.put<{ message: string }>(`/admin/users/${id}`, { role: 'pengguna' }),

  // === INTERNSHIP MANAGEMENT ===
  getAllInternships: () =>
    api.get<AdminInternship[]>('/admin/internships'),

  toggleInternshipStatus: (id: string, isClosed: boolean) =>
    api.patch<{ message: string }>(`/admin/internships/${id}/status`, { isClosed }),

  // === ARTICLE MANAGEMENT ===
  createArticle: (data: {
    title: string
    content: string
    thumbnailUrl?: string
  }) => api.post<any>('/admin/articles', data),

  deleteArticle: (id: string) =>
    api.delete<{ message: string }>(`/admin/articles/${id}`),
}
