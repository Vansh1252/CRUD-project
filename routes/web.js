import express from 'express';
import index from '../controllers/index.js'
const router = express.Router();

router.get('/', index.getAlldoc);
router.post('/', index.createdoc);
router.get('/edit/:id', index.editdoc);
router.post('/update/:id', index.updatedocbyid);
router.post('/delete/:id', index.deletedocbyId);


export default router