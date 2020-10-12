SELECT 
students.name as students_name, 
students.start_date as students_start_date, 
cohorts.name as cohort_name, 
cohorts.start_date as cohort_start_date
FROM students 
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE students.start_date != cohorts.start_date
ORDER BY cohorts.start_date;