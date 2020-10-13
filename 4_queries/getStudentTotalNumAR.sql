SELECT students.name AS name, COUNT(assistance_requests.*) AS total_assistance
FROM assistance_requests
JOIN students ON (students.id = assistance_requests.student_id)
WHERE name = 'Elliot Dickinson'
GROUP BY name;