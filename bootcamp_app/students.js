const values = process.argv.slice(2);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name AS students, cohorts.name AS cohort 
FROM students 
JOIN cohorts ON (students.cohort_id = cohorts.id)
WHERE cohorts.name LIKE '${values[0]}%'
LIMIT ${values[1]};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => {
  console.log('Error', err.stack);
});