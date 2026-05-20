import express from 'express';
import multer from 'multer';
import path from 'path';
import { applyInternship, getMyApplications, updateApplication, deleteApplication } from '../controllers/application.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';

const router = express.Router();

// Setup Multer untuk Lampiran CV — simpan ke disk
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/cv');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.pdf', '.png', '.jpg', '.jpeg'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Hanya file PDF dan gambar yang diperbolehkan.'));
    }
  }
});

// Hanya Pengguna yang bisa melamar
router.use(verifyToken, authorizeRole('pengguna'));

router.post('/apply', upload.single('attachmentFile'), applyInternship);
router.get('/my-applications', getMyApplications);
router.put('/:id', upload.single('attachmentFile'), updateApplication);
router.delete('/:id', deleteApplication);

export default router;
