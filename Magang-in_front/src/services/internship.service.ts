import api from './api'
import type { Internship, MasterLocation, MasterMajor, Applicant } from '../types'

export const internshipService = {
  // === PUBLIC ===

  // Get semua lowongan aktif
  getAll: () =>
    api.get<Internship[]>('/internships'),

  // Get detail lowongan by ID (termasuk skills & roadmaps)
  getById: (id: string) =>
    api.get<Internship>(`/internships/${id}`),

  // Get master lokasi
  getLocations: () =>
    api.get<MasterLocation[]>('/internships/locations'),

  // Get master jurusan
  getMajors: () =>
    api.get<MasterMajor[]>('/internships/majors'),

  // === MITRA ===

  // Buat lowongan baru
  create: (data: {
    title: string
    company: string
    location: string
    description: string
    type?: string
    duration?: string
    level?: string
    major?: string
    requirements?: string
    skills?: string
    benefits?: string
  }) => api.post<Internship>('/internships', data),

  // Get lowongan milik mitra ini
  getMyPostings: () =>
    api.get<Internship[]>('/internships/mitra/my-postings'),

  // Get pelamar di lowongan tertentu
  getApplicants: (internshipId: string) =>
    api.get<Applicant[]>(`/internships/${internshipId}/applicants`),

  // Terima/tolak pelamar
  updateApplicationStatus: (applicationId: string, status: 'accepted' | 'rejected') =>
    api.patch(`/internships/applications/${applicationId}`, { status }),
}
