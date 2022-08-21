import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'sitio con express'}));
router.get('/sobre', (req, res) => res.render('sobre', {title: 'sobre'}));
router.get('/contacto', (req, res) => res.render('contacto', {title: 'contacto'}));

export default router;