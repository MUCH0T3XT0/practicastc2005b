
--1.- Actrices de “Las brujas de Salem”.
SELECT nombre 
FROM Elenco 
WHERE título = 'Las brujas de Salem' 
AND nombre IN (
    SELECT nombre 
    FROM Actor 
    WHERE sexo = 'F'
);

SELECT e.nombre 
FROM Elenco e
JOIN Actor a ON e.nombre = a.nombre
WHERE e.título = 'Las brujas de Salem' 
AND a.sexo = 'F';

--2.- Nombres de los actores que aparecen en películas producidas por MGM en 1995.
SELECT nombre 
FROM Elenco 
WHERE (título, año) IN (
    SELECT título, año 
    FROM Película 
    WHERE nomestudio = 'MGM' 
    AND año = 1995
);

SELECT e.nombre 
FROM Elenco e
JOIN Película p ON e.título = p.título AND e.año = p.año
WHERE p.nomestudio = 'MGM' 
AND p.año = 1995;


--3.- Películas que duran más que “Lo que el viento se llevó” (de 1939).
SELECT título 
FROM Película 
WHERE duración > (
    SELECT duración 
    FROM Película 
    WHERE título = 'Lo que el viento se llevó' 
    AND año = 1939
);

SELECT p1.título 
FROM Película p1
JOIN Película p2 ON p2.título = 'Lo que el viento se llevó' AND p2.año = 1939
WHERE p1.duración > p2.duración;


--4.- Productores que han hecho más películas que George Lucas.
SELECT idproductor 
FROM Productor 
WHERE idproductor IN (
    SELECT idproductor 
    FROM Película 
    GROUP BY idproductor 
    HAVING COUNT(*) > (
        SELECT COUNT(*) 
        FROM Película 
        WHERE idproductor = (
            SELECT idproductor 
            FROM Productor 
            WHERE nombre = 'George Lucas'
        )
    )
);
SELECT p1.idproductor 
FROM Película p1
JOIN Productor pr1 ON p1.idproductor = pr1.idproductor
GROUP BY p1.idproductor 
HAVING COUNT(*) > (
    SELECT COUNT(*) 
    FROM Película p2
    JOIN Productor pr2 ON p2.idproductor = pr2.idproductor
    WHERE pr2.nombre = 'George Lucas'
);



--5.- Nombres de los productores de las películas en las que ha aparecido Sharon Stone.
SELECT nombre 
FROM Productor 
WHERE idproductor IN (
    SELECT idproductor 
    FROM Película 
    WHERE (título, año) IN (
        SELECT título, año 
        FROM Elenco 
        WHERE nombre = 'Sharon Stone'
    )
);
SELECT DISTINCT p.nombre 
FROM Productor p
JOIN Película pl ON p.idproductor = pl.idproductor
JOIN Elenco e ON pl.título = e.título AND pl.año = e.año
WHERE e.nombre = 'Sharon Stone';


--6.- Título de las películas que han sido filmadas más de una vez

SELECT título 
FROM Película 
GROUP BY título 
HAVING COUNT(*) > 1;

SELECT p1.título 
FROM Película p1
JOIN Película p2 ON p1.título = p2.título
GROUP BY p1.título 
HAVING COUNT(p1.año) > 1;