import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bookings route aktif');
});

export default router;