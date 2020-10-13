SELECT teachers.name AS name, COUNT(assistance_requests.*) AS total_number
FROM assistance_requests
JOIN teachers ON teachers.id = assistance_requests.teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY name;