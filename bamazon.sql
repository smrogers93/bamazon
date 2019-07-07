DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price INTEGER(11),
    stock_quantity INTEGER(11)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES 
    ("iPad", "Electronics", 500, 100),
    ("iPhone", "Electronics", 1000, 100),
    ("Apple Watch", "Electronics", 700, 100),
    ("MacBook Air", "Electronics", 1300, 100),
    ("iPod", "Electronics", 200, 100),
    ("Mac Pro", "Electronics", 6000, 100),
    ("iMac", "Electronics", 1800, 100),
    ("iMac Pro", "Electronics", 5000, 100),
    ("MacBook Pro", "Electronics", 1800, 100);

		
	
