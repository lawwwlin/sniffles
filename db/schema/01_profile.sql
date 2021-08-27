DROP TABLE IF EXISTS profile CASCADE;
CREATE TABLE profile (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  gender ENUM(male, female),
  age INTEGER,
  size ENUM(small, medium, big),
  owner VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  photo IMAGE,
  description VARCHAR(255) NOT NULL
);