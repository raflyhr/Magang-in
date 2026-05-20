import prisma from '../config/db.js';

// Pengguna Melamar Lowongan
export const applyInternship = async (req, res) => {
  try {
    const { internshipId } = req.body;
    const { coverLetter } = req.body;
    const userId = req.userId; // Guaranteed to be 'pengguna' by middleware

    if (!internshipId) {
      return res.status(400).json({ message: 'Membutuhkan internshipId' });
    }

    // Simpan path file yang di-upload
    const attachmentUrl = req.file ? `/uploads/cv/${req.file.filename}` : null;

    const application = await prisma.application.create({
      data: {
        internshipId,
        userId,
        attachmentUrl,
        coverLetter
      }
    });

    res.status(201).json({ message: 'Berhasil mendaftar lowongan ini!', application });
  } catch (error) {
    if (error.code === 'P2002') { // Unique constraint
      return res.status(400).json({ message: 'Anda sudah pernah melamar di lowongan ini.' });
    }
    res.status(500).json({ message: error.message });
  }
};

// Pengguna Melihat Status Lamaran Miliknya Sendiri
export const getMyApplications = async (req, res) => {
  try {
    const userId = req.userId;
    const applications = await prisma.application.findMany({
      where: { userId },
      include: {
        internship: {
          select: { title: true, company: true, location: true }
        }
      }
    });

    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Pengguna Update Lamaran (cover letter & CV) — hanya jika masih pending
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const { coverLetter } = req.body;

    const application = await prisma.application.findFirst({
      where: { id, userId }
    });

    if (!application) {
      return res.status(404).json({ message: 'Lamaran tidak ditemukan.' });
    }

    if (application.status !== 'pending') {
      return res.status(400).json({ message: 'Lamaran yang sudah diproses tidak bisa diedit.' });
    }

    const updateData = {};
    if (coverLetter !== undefined) updateData.coverLetter = coverLetter;
    if (req.file) updateData.attachmentUrl = `/uploads/cv/${req.file.filename}`;

    const updated = await prisma.application.update({
      where: { id },
      data: updateData,
      include: {
        internship: { select: { title: true, company: true, location: true } }
      }
    });

    res.json({ message: 'Lamaran berhasil diperbarui.', application: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Pengguna Hapus/Batalkan Lamaran — hanya jika masih pending
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const application = await prisma.application.findFirst({
      where: { id, userId }
    });

    if (!application) {
      return res.status(404).json({ message: 'Lamaran tidak ditemukan.' });
    }

    if (application.status !== 'pending') {
      return res.status(400).json({ message: 'Lamaran yang sudah diproses tidak bisa dibatalkan.' });
    }

    await prisma.application.delete({ where: { id } });

    res.json({ message: 'Lamaran berhasil dibatalkan.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
