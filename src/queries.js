getStudents = 'SELECT * FROM students;';
getStudentById = 'SELECT * FROM students WHERE id = $1;';
createStudent = 'INSERT INTO students (name, email) VALUES ($1,$2);';
deleteStudentById = 'DELETE FROM students WHERE id =$1;';
updateStudentById = 'UPDATE students SET name = $1, email = $2 WHERE id = $3;';

module.exports = {
	getStudents,
	getStudentById,
	createStudent,
	deleteStudentById,
	updateStudentById,
};
