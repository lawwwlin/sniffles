-- drop existing tables
DROP TABLE IF EXISTS profile CASCADE;
DROP TABLE IF EXISTS candidate CASCADE;
DROP TABLE IF EXISTS message CASCADE;
DROP TABLE IF EXISTS chatroom CASCADE;
-- removed types already
DROP TYPE IF EXISTS valid_gender CASCADE;
DROP TYPE IF EXISTS valid_size CASCADE;

-- create types
CREATE TYPE valid_gender AS ENUM ('male', 'female');
CREATE TYPE valid_size AS ENUM ('small', 'medium', 'big');

-- create tables
CREATE TABLE profile (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  age INTEGER,
  size VARCHAR(255) NOT NULL,
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
  updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chatroom (
  id SERIAL PRIMARY KEY NOT NULL,
  profile1_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  profile2_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  messages VARCHAR(255),
  updatedAt TIMESTAMP(3) WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION trg_fn_chatroom_updatedAt()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updatedAt = CURRENT_TIMESTAMP; 
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trg_update_chatroom BEFORE UPDATE
ON chatroom FOR EACH ROW EXECUTE PROCEDURE 
trg_fn_chatroom_updatedAt();