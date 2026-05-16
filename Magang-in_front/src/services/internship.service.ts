import api from './api'
import type { Internship, MasterLocation } from '../types'

export const internshipService = {
  // Create lowongan baru (khusus Mitra)
  create: (data: Partial<Internship>) => 
    api.post<{ message: string; internship: Internship }>('/internships', data),

  // Get semua lowongan milik mitra login
  getMyInternships: () =>
    api.get<Internship[]>('/internships/my-listings'),

  // Get detail lowongan
  getById: (id: string) =>
    api.get<Internship>(`/internships/${id}`),

  // Get semua lowongan (publik)
  getAll: () =>
    api.get<Internship[]>('/internships'),

  // Get daftar lokasi unik dari lowongan
  getLocations: () =>
    api.get<MasterLocation[]>('/internships/locations'),
}
