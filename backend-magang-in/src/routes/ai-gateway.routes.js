import express from 'express';
import multer from 'multer';
import { scanCV, matchInternship } from '../controllers/ai-gateway.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Multer storage in memory for forwarding to AI
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});

router.post('/scan-cv', verifyToken, upload.single('cvFile'), scanCV);
router.post('/match-internship', verifyToken, matchInternship);

export default router;
