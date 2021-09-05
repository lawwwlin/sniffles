INSERT INTO profile (name, breed, location, gender, age, size, owner, email, password, imageUrl, description)
VALUES 
('Bigboi', 'Maltese', 'Vancouver', 'male', 3, 'small', 'BigBoiOwner', 'a@a.com', 'a', 'https://tinyurl.com/kb7dhhck', 'actually very smol'),
('Monty', 'Husky', 'Burnaby', 'male', 5, 'large', 'Dani', 'b@b.com', '123', 'https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80', 'I am doggo'),
('Biscuit', 'Chihuahua', 'Surrey', 'female', 4, 'small', 'Bob', 'c@c.com', '123', 'https://images.pexels.com/photos/4255534/pexels-photo-4255534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I like toys'),
('Ace', 'Shiba Inu', 'Port Coquitlam', 'male', 5, 'medium', 'Luffy', 'd@d.com', '123', 'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', 'I like long walks'),
('Diesel', 'Husky', 'Vancouver', 'male', 2, 'medium', 'Will', 'e@e.com', '123', 'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'We outside please'),
('Gucci', 'Maltese', 'Richmond', 'female', 1, 'small', 'Kim', 'f@f.com', '123', 'https://images.pexels.com/photos/2877086/pexels-photo-2877086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Gimme food plz'),
('Casper', 'German Sheperd', 'New Westminster', 'male', 3, 'medium', 'Umi', 'g@g.com', '123', 'https://images.pexels.com/photos/6606825/pexels-photo-6606825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I want ball'),
('Lucky', 'Corgi', 'Richmond', 'male', 8, 'small', 'Oscar', 'h@h.com', '123', 'https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Gimme treatz'),
('Avery', 'Golden Retriever', 'Port Moody', 'female', 7, 'big', 'Ashley', 'i@i.com', '123', 'https://images.pexels.com/photos/1001976/pexels-photo-1001976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Looking for doggo homie'),
('Cody', 'Pug', 'Vancouver', 'male', 4, 'small', 'Nick', 'j@j.com', '123', 'https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I actually like to be inside'),
('Eva', 'Beagle', 'Burnaby', 'female', 5, 'small', 'Ella', 'k@k.com', '123', 'https://images.pexels.com/photos/7421920/pexels-photo-7421920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'It has been ruff out here');

INSERT INTO candidate (approve, profile_id, candidate_dog_id)
VALUES
(true, 1, 2),
(true, 2, 1),
(true, 1, 3),
(true, 3, 1),
(true, 11, 1),
(false, 10, 1);

INSERT INTO chatroom (profile1_id, profile2_id, messages)
VALUES
(1, 2, '[{"user":"Bigboi","text":"hi im Bigboi"}, {"user":"Monty","text":"hello there!"}, {"user":"Bigboi","text":"wanna meet somewhere?"}, {"user":"Monty","text":"sure!"}]'),
(1, 3, '[{"user":"Bigboi","text":"hello"}, {"user":"Bigboi","text":"you are fat"}, {"user":"Biscuit","text":"no! im poofy"}]');