import api from './api'
import type { ScanCVResponse, MatchInternshipResponse } from '../types'

export const aiService = {
  // Upload CV untuk ekstraksi skill oleh AI
  scanCV: (cvFile: File) => {
    const formData = new FormData()
    formData.append('cvFile', cvFile)

    return api.post<ScanCVResponse>(
      '/ai/scan-cv',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
  },

  // Matching skill user dengan lowongan
  matchInternship: (userSkills: string[]) =>
    api.post<MatchInternshipResponse>('/ai/match-internship', { userSkills }),
}
