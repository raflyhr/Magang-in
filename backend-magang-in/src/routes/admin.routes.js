import express from 'express';
import {
    getAllUsers, updateUser, deleteUser,
    getPendingMitra, getAdminStats, getAllInternshipsAdmin, toggleInternshipStatus,
    createArticle, deleteArticle
} from '../controllers/admin.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { authorizeRole } from '../middleware/role.middleware.js';

const router = express.Router();

// Mengamankan seluruh rute di bawah agar HANYA ADMIN yang bisa masuk
router.use(verifyToken, authorizeRole('admin'));

// Dashboard Stats
router.get('/stats', getAdminStats);

// Manajemen Pengguna
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Verifikasi Mitra
router.get('/mitra', getPendingMitra);

// Kelola Lowongan (admin view)
router.get('/internships', getAllInternshipsAdmin);
router.patch('/internships/:id/status', toggleInternshipStatus);

// Manajemen Artikel
router.post('/articles', createArticle);
router.delete('/articles/:id', deleteArticle);

export default router;
