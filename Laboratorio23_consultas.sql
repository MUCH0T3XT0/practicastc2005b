DELIMITER //

-- Insertar una nueva entrega en la tabla `entregan`
CREATE PROCEDURE rcortese.InsertarEntrega(
    IN p_clave INT,
    IN p_rfc VARCHAR(15),
    IN p_numero INT,
    IN p_fecha DATE,
    IN p_cantidad INT
)
BEGIN
    INSERT INTO entregan (clave, rfc, numero, fecha, cantidad)
    VALUES (p_clave, p_rfc, p_numero, p_fecha, p_cantidad);
END //

-- Actualizar la cantidad de una entrega existente en la tabla `entregan`
CREATE PROCEDURE rcortese.ActualizarCantidadEntrega(
    IN p_clave INT,
    IN p_rfc VARCHAR(15),
    IN p_numero INT,
    IN p_fecha DATE,
    IN p_nueva_cantidad INT
)
BEGIN
    UPDATE entregan
    SET cantidad = p_nueva_cantidad
    WHERE clave = p_clave AND rfc = p_rfc AND numero = p_numero AND fecha = p_fecha;
END //

-- Obtener todas las entregas de un proveedor específico
CREATE PROCEDURE rcortese.ObtenerEntregasPorProveedor(
    IN p_rfc VARCHAR(15)
)
BEGIN
    SELECT * FROM entregan
    WHERE rfc = p_rfc;
END //
