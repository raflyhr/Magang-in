import express from 'express';
import { 
  getAllInternships, getInternshipDetails, 
  createInternship, getMyInternships, getInternshipApplicants, 
  updateApplicationStatus, getMasterLocations, getMasterMajors 
} from '../controllers/internship.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';

const router = express.Router();

// Role Publik / Pengguna Biasa
router.get('/', getAllInternships);
router.get('/locations', getMasterLocations);
router.get('/majors', getMasterMajors);
router.get('/:id', getInternshipDetails);

// Role Mitra (Spesifik Perusahaan)
router.post('/', verifyToken, authorizeRole('mitra'), createInternship);
router.get('/mitra/my-postings', verifyToken, authorizeRole('mitra'), getMyInternships);
router.get('/:id/applicants', verifyToken, authorizeRole('mitra'), getInternshipApplicants);
router.patch('/applications/:applicationId', verifyToken, authorizeRole('mitra'), updateApplicationStatus);

export default router;
