
-- 1 CREATE
-- mengisi tabel products
INSERT INTO products (name, quantity)
    VALUES ('beat', 20),
           ('vario', 50),
           ('pcx', 30),
           ('klx', 35),
           ('mio', 25),
           ('jupiter z', 10),
           ('revo', 20),
           ('d-tracker', 40);

-- mengisi tabel pemasok
INSERT INTO supplier (name, address)
    VALUES ('yamaha', 'Jakarta'),
           ('yamaha', 'Bandung'),
           ('ikilo', 'Bengkalis'),
           ('Honda', 'Pekanbaru'),
           ('Suzuki', 'Jakarta'),
           ('hyundai', 'Jepang');

--mengisi tabel component
INSERT INTO component (name, description)
    VALUES ('ban', 'ban original terbaik'),
           ('jok', 'jok kualitas terbaik'),
           ('mesin', 'busi kualitas terbaik'),
           ('kelahar', 'kelahar kualitas terbaik'),
           ('velg variasi', 'velg variasi terbaik'),
           ('stiker variasi', 'stiker variasi terbaik'),
           ('ban mobil', 'ban mobil kualitas terbaik');

-- mengisi tabel component_detail
INSERT INTO component_detail (id_component, id_products, id_supplier)
    VALUES (1, 1, 3),
           (2, 2, 4),
           (1, 3, 3),
           (1, 4, 1),
           (4, 5, 2),
           (3, 6, 1),
           (2, 7, 4);


-- 2 UPDATE
-- mengupdate tabel products
UPDATE products SET name = 'n-max' WHERE id = 4;

--mengupdate tabel supplier
UPDATE supplier SET name = 'Honda' WHERE id = 3;

--mengupdate tabel component
UPDATE supplier SET name = 'busi' WHERE id = 3;


-- 3 DELETE
-- mendelete data pada tabel products
DELETE FROM products WHERE id = 8;

-- mendelete data pada supplier
DELETE FROM supplier WHERE id = 6;

-- mendelete data pada component
DELETE FROM component WHERE id = 7;


-- 4 READ
-- menampilkan tabel products
SELECT * FROM products;

-- menampilkan supplier
SELECT * FROM supplier;

-- menampilkan component
SELECT * FROM component;

-- menampilkan id komponen, nama komponen, description komponen, nama supplier, alamat supplier, nama produk
SELECT 
    component.id AS id_komponen,
    component.name AS nama_komponen,
    component.description AS deskripsi,
    supplier.name AS nama_supplier,
    supplier.address AS alamat_supplier,
    products.name AS nama_product
        FROM   
            component_detail
            JOIN component ON component.id = component_detail.id_component
            JOIN supplier ON supplier.id = component_detail.id_supplier
            JOIN products ON products.id = component_detail.id_products;


-- menampilkan berapa banyak produk yang menggunakan component
SELECT 
    component.name AS nama_komponen, 
    COUNT(products.id) AS jumlah_products
        FROM component_detail
            JOIN component ON component.id = component_detail.id_component
            JOIN products ON products.id = component_detail.id_products
                GROUP BY component.name;


-- menampilkan berapa banyak supplier yang memasukkan component
SELECT 
    component.name AS nama_komponen, 
    COUNT(supplier.id) AS jumlah_supplier
        FROM component_detail
            JOIN component ON component.id = component_detail.id_component
            JOIN supplier ON supplier.id = component_detail.id_supplier
                GROUP BY component.name;
                