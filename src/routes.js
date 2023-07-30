const { Router } = require('express');
const router = Router();
const controller = require('./controller');

router.get('/students', controller.getStudents);
router.get('/students/:id', controller.getStudentById);
router.post('/register', controller.createStudent);
router.delete('/delete/:id', controller.deleteStudentById);
router.put('/update/:id', controller.updateStudentById);

module.exports = router;
