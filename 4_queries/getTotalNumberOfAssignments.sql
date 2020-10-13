SELECT day, COUNT(*) AS num_of_assignments, SUM(duration)
FROM assignments
GROUP BY day
ORDER BY day;
