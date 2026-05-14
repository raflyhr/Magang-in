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

    // Mockup URL penyimpanan file.
    // Secara ideal ini ditaruh misal req.file.path setelah dikirim ke S3/Cloud.
    const attachmentUrl = req.file ? `/uploads/cv/${req.file.originalname}` : null;

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
