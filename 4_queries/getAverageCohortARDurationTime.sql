SELECT cohorts.name AS name, AVG(completed_at - started_at) AS average_duration
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
ORDER BY average_duration;

