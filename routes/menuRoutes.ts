import { Router } from 'express';
import { getMenuItems } from '../controllers/menuController';

const router = Router();

// GET /menu → returns typed MenuResponse
router.get('/', getMenuItems);

export default router;
