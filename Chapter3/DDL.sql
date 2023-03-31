
-- DDL 
CREATE DATABASE komputer;

-- membuat tabel products
CREATE TABLE "products" (
  "id" BIGSERIAL,
  "name" VARCHAR(50),
  "quantity" INT,
  PRIMARY KEY ("id")
);

-- membuat tabel supplier
CREATE TABLE "supplier" (
  "id" BIGSERIAL,
  "name" VARCHAR(50),
  "address" TEXT,
  PRIMARY KEY ("id")
);

-- membuat tabel component
CREATE TABLE "component" (
  "id" BIGSERIAL,
  "name" VARCHAR(50),
  "description" TEXT,
  PRIMARY KEY ("id")
);

-- membuat tabel component_detail
CREATE TABLE "component_detail" (
  "id" BIGSERIAL,
  "id_component" INT,
  "id_products" INT,
  "id_supplier" INT,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_component_detail.id_supplier"
    FOREIGN KEY ("id_supplier")
      REFERENCES "supplier"("id"),
  CONSTRAINT "FK_component_detail.id_products"
    FOREIGN KEY ("id_products")
      REFERENCES "products"("id"),
  CONSTRAINT "FK_component_detail.id_component"
    FOREIGN KEY ("id_component")
      REFERENCES "component"("id")
);

