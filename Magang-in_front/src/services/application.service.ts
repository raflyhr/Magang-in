import api from './api'
import type { Application } from '../types'

export const applicationService = {
  // Lamar lowongan (multipart/form-data)
  apply: (internshipId: string, coverLetter?: string, attachmentFile?: File) => {
    const formData = new FormData()
    formData.append('internshipId', internshipId)

    if (coverLetter) {
      formData.append('coverLetter', coverLetter)
    }

    if (attachmentFile) {
      formData.append('attachmentFile', attachmentFile)
    }

    return api.post<{ message: string; application: Application }>(
      '/applications/apply',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
  },

  // Get semua lamaran milik user
  getMyApplications: () =>
    api.get<Application[]>('/applications/my-applications'),
}
