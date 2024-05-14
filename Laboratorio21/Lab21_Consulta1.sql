-- Primeras Consultas
SELECT SUM(cantidad) AS Cantidades, SUM(cantidad * (precio+impuesto)) AS ImporteTotal
FROM entregan NATURAL JOIN materiales
WHERE fecha LIKE '1997%';

SELECT rfc, razonsocial, SUM(cantidad) AS Numero_de_Entregas, SUM(cantidad * (precio+impuesto))  AS ImporteTotal
FROM materiales NATURAL JOIN entregan NATURAL JOIN proveedores
GROUP BY rfc;

SELECT clave,descripcion, SUM(cantidad) AS Cantidad, MIN(cantidad) AS Cantidad_Minima, MAX(cantidad) AS Cantidad_Maxima, SUM(cantidad * (precio+impuesto)) AS ImporteTotal
FROM materiales NATURAL JOIN entregan
GROUP BY clave
HAVING AVG(cantidad)>400;


SELECT rfc, razonsocial, AVG(cantidad), clave, descripcion
FROM proveedores NATURAL JOIN entregan NATURAL JOIN materiales
GROUP BY clave
-- HAVING 3<500
HAVING AVG(cantidad)<500
ORDER BY 2;
-- ORDER BY razonsocial;


SELECT rfc, razonsocial, AVG(cantidad), clave, descripcion
FROM proveedores NATURAL JOIN entregan NATURAL JOIN materiales
GROUP BY clave
-- HAVING 3<500
HAVING AVG(cantidad)<370 OR AVG(cantidad)>450
ORDER BY 2;
-- ORDER BY razonsocial;

-- Segundas consultas
