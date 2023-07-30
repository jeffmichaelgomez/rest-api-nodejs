const pool = require('../db-connection');
const queries = require('./queries');

const studentExist = (id, callback) => {
	pool.query(queries.getStudentById, [id], (error, results) => {
		if (error) throw error;
		callback(results.rows.length > 0);
	});
};

const getStudents = (req, res) => {
	pool.query(queries.getStudents, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const getStudentById = (req, res) => {
	const id = parseInt(req.params.id, 10);
	studentExist(id, (isExist) => {
		isExist
			? pool.query(queries.getStudentById, [id], (error, results) => {
					if (error) throw error;
					res.status(200).json(results.rows);
			  })
			: res.status(404).json(`Student ID: ${id}, Does Not Exist.`);
	});
};

const createStudent = (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	pool.query(queries.createStudent, [name, email], (error, results) => {
		if (error) throw error;
		res.status(200).json(`${name} Successfully Registered`);
	});
};

const deleteStudentById = (req, res) => {
	const id = parseInt(req.params.id, 10);
	studentExist(id, (isExist) => {
		isExist
			? pool.query(queries.deleteStudentById, [id], (error, results) => {
					if (error) throw error;
					res.status(200).json(`Student ID: ${id}, Successfully Deleted`);
			  })
			: res.status(404).json(`Student ID: ${id}, Does Not Exist.`);
	});
};

const updateStudentById = (req, res) => {
	const id = parseInt(req.params.id, 10);
	const name = req.body.name;
	const email = req.body.email;
	studentExist(id, (isExist) => {
		isExist
			? pool.query(
					queries.updateStudentById,
					[name, email, id],
					(error, results) => {
						if (error) throw error;
						res.status(200).json(`Student ID: ${id}, Successfully Updated`);
					}
			  )
			: res.status(404).json(`Student ID: ${id}, Does Not Exist.`);
	});
};

module.exports = {
	getStudents,
	getStudentById,
	createStudent,
	deleteStudentById,
	updateStudentById,
};
