-- drop existing tables
DROP TABLE IF EXISTS profile CASCADE;
DROP TABLE IF EXISTS candidate CASCADE;
DROP TABLE IF EXISTS messenger CASCADE;

-- create types
CREATE TYPE valid_gender AS ENUM ('male', 'female');
CREATE TYPE valid_size AS ENUM ('small', 'medium', 'big');

-- create tables
CREATE TABLE profile (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  gender valid_gender,
  age INTEGER,
  size valid_size,
  owner VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);


CREATE TABLE candidate (
  id SERIAL PRIMARY KEY NOT NULL,
  approve BOOLEAN,
  profile_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  candidate_dog_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  timestamp TIMESTAMP
);


CREATE TABLE messenger (
  id SERIAL PRIMARY KEY NOT NULL,
  text VARCHAR(255) NOT NULL,
  sender_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  timestamp TIMESTAMP
);