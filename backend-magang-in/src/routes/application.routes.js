import express from 'express';
import multer from 'multer';
import { applyInternship, getMyApplications } from '../controllers/application.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';

const router = express.Router();

// Setup Multer untuk Lampiran CV
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Hanya Pengguna yang bisa melamar
router.use(verifyToken, authorizeRole('pengguna'));

router.post('/apply', upload.single('attachmentFile'), applyInternship);
router.get('/my-applications', getMyApplications);

export default router;
