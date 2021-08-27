-- drop existing tables
DROP TABLE IF EXISTS profile CASCADE;
DROP TABLE IF EXISTS candidate CASCADE;
DROP TABLE IF EXISTS messenger CASCADE;

-- create tables
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


CREATE TABLE candidate (
  id SERIAL PRIMARY KEY NOT NULL,
  approve BOOLEAN,
  profile_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  candidate_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  timestamp TIMESTAMP
);


CREATE TABLE messenger (
  id SERIAL PRIMARY KEY NOT NULL,
  text VARCHAR(255) NOT NULL,
  sender_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  timestamp TIMESTAMP
);