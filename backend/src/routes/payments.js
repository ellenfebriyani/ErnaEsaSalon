import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Payments route aktif');
});

export default router;