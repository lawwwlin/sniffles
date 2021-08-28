INSERT INTO profile (name, breed, location, gender, age, size, owner, email, password, imageUrl, description)
VALUES 
('Bigboi', 'Maltese', 'Vancouver', 'male', 3, 'small', 'BigBoiOwner', 'a@a.com', 'a', 'https://tinyurl.com/kb7dhhck', 'actually very smol'),
('Monty', 'Husky', 'Burnaby', 'male', 5, 'medium', 'Dani', 'b@b.com', '123', 'https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80', 'I am doggo');

INSERT INTO candidate (approve, profile_id, candidate_dog_id)
VALUES
(true, 1, 2),
(true, 2, 1);

/* INSERT INTO messenger (text, sender_id, receiver_id)
VALUES
("Wauw cute doggo", 1, 2),
("thank you", 2, 1); */