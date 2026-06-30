import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Teams route aktif');
});

export default router;