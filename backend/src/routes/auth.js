import express from 'express';
const router = express.Router();

// Route dasar contoh
router.get('/', (req, res) => {
    res.send('Auth route aktif');
});

export default router;