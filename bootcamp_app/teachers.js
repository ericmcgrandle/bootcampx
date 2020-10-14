const values = process.argv.slice(2);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`SELECT DISTINCT(teachers.name) AS name, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '${values[0]}%'
ORDER BY name;`)
.then(res => {
  console.log(res.rows);
})
.catch(err => {
  console.log('Error', err.stack);
});
