import api from './api'
import type { AdminUser, Article } from '../types'

export const adminService = {
  // === USER MANAGEMENT ===

  getAllUsers: () =>
    api.get<AdminUser[]>('/admin/users'),

  updateUser: (id: string, data: {
    name?: string
    email?: string
    role?: string
    password?: string
  }) => api.put<{ message: string }>(`/admin/users/${id}`, data),

  deleteUser: (id: string) =>
    api.delete<{ message: string }>(`/admin/users/${id}`),

  // === ARTICLE MANAGEMENT ===

  createArticle: (data: {
    title: string
    content: string
    thumbnailUrl?: string
  }) => api.post<Article>('/admin/articles', data),

  deleteArticle: (id: string) =>
    api.delete<{ message: string }>(`/admin/articles/${id}`),
}
