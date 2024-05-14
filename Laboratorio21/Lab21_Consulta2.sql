
-- Segundas consultas
SELECT clave, descripcion
FROM materiales
WHERE clave NOT IN (
	SELECT clave
	FROM entregan
);

SELECT rfc, razonsocial
FROM proveedores
WHERE rfc IN(
	SELECT rfc
	FROM entregan NATURAL JOIN proyectos
	WHERE denominacion= 'Vamos México' OR denominacion= 'Querétaro Limpio'
);

SELECT descripcion
FROM materiales
WHERE clave NOT IN(
	SELECT clave
	FROM entregan NATURAL JOIN proyectos
	WHERE denominacion= 'CIT Yucatán'
);

SELECT razonsocial, AVG(cantidad) AS Promedio
FROM proveedores NATURAL JOIN entregan
GROUP BY rfc
HAVING AVG(cantidad)>(
	SELECT AVG(cantidad)
	FROM proveedores NATURAL JOIN entregan
	WHERE rfc = 'ffff800101'
);


SELECT p.rfc, p.razonsocial
FROM proveedores p
JOIN entregan e ON p.rfc = e.rfc
JOIN proyectos pr ON e.numero = pr.numero
WHERE pr.denominacion = 'Infonavit Durango'
GROUP BY p.rFC, p.razonSocial
HAVING SUM(IF(YEAR(e.Fecha) = 2000, e.Cantidad, 0)) > SUM(IF(YEAR(e.Fecha) = 2001, e.Cantidad, 0));
