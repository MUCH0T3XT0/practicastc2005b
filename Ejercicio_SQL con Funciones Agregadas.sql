SELECT nombre, SUM(sueldo) as "Ingreso Total"
FROM Elenco
GROUP BY nombre

SELECT nomestudio, SUM(presupuesto) as "Monto Total"
FROM Pelicula
WHERE año BETWEEN 1980 AND 1989
GROUP BY nomestudio

SELECT Actor.nombre, AVG(sueldo)
FROM Elenco NATURAL JOIN Actor
WHERE Actor.sexo= "Hombre"
GROUP BY Actor.nombre
HAVING AVG(Elenco.sueldo) > 5000000;


SELECT  DISTINCT Titulo, año
FROM Pelicula
ORDER BY presupuesto DESC

SELECT nombre, MAX(sueldo) AS "Sueldo"
FROM Elenco NATURAL JOIN Actor
WHERE sexo= "Mujer"