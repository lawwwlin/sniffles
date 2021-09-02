INSERT INTO profile (name, breed, location, gender, age, size, owner, email, password, imageUrl, description)
VALUES 
('Bigboi', 'Maltese', 'Vancouver', 'male', 3, 'small', 'BigBoiOwner', 'a@a.com', 'a', 'https://tinyurl.com/kb7dhhck', 'actually very smol'),
('Monty', 'Husky', 'Burnaby', 'male', 5, 'large', 'Dani', 'b@b.com', '123', 'https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80', 'I am doggo'),
('Biscuit', 'Chihuahua', 'Surrey', 'female', 4, 'small', 'Bob', 'c@c.com', '123', 'https://images.pexels.com/photos/4255534/pexels-photo-4255534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I like toys'),
('Ace', 'Shiba Inu', 'Port Coquitlam', 'male', 5, 'medium', 'Luffy', 'd@d.com', '123', 'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', 'I like long walks'),
('Diesel', 'Husky', 'Vancouver', 'male', 2, 'medium', 'Will', 'e@e.com', '123', 'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'We outside please'),
('Gucci', 'Maltese', 'Richmond', 'female', 1, 'small', 'Kim', 'f@f.com', '123', 'https://images.pexels.com/photos/2877086/pexels-photo-2877086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Gimme food plz'),
('Casper', 'German Sheperd', 'New Westminster', 'male', 3, 'medium', 'Umi', 'g@g.com', '123', 'https://images.pexels.com/photos/6606825/pexels-photo-6606825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I want ball');

INSERT INTO candidate (approve, profile_id, candidate_dog_id)
VALUES
(true, 1, 2),
(true, 2, 1);

INSERT INTO message (text, sender_id, receiver_id)
VALUES
('Wauw cute doggo', 1, 2),
('thank you', 2, 1);