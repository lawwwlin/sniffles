INSERT INTO profile (name, breed, location, gender, age, size, owner, email, password, imageUrl, description)
VALUES 
('Bigboi', 'Maltese', 'Vancouver', 'male', 3, 'small', 'Cat', 'a@a.com', 'a', 'https://tinyurl.com/kb7dhhck', 'actually very smol'),
('Nally', 'Husky', 'Vancouver Island Lighthouse Lab Basement', 'male', 5, 'large', 'Christian', 'b@b.com', '123', 'https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80', 'Monkey Fuzz!'),
('Lindsay', 'Labrador', 'Lighthouse Lab Basement', 'male', 1, 'small', 'Andy', 'c@c.com', '123', 'https://images.unsplash.com/photo-1512341350577-a09358311cb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1260&q=80', 'I never go outside.'),
('Ace', 'Shiba Inu', 'Port Coquitlam', 'male', 5, 'medium', 'Luffy', 'd@d.com', '123', 'https://images.pexels.com/photos/4587993/pexels-photo-4587993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', 'I like long walks'),
('Jipp', 'Husky', 'Lighthouse Lab Basement', 'male', 2, 'medium', 'Gary', 'e@e.com', '123', 'https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I love Kanye.'),
('Gucci', 'Maltese', 'Richmond', 'female', 1, 'small', 'Mane', 'f@f.com', '123', 'https://images.pexels.com/photos/2877086/pexels-photo-2877086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Gimme food plz'),
('Sniffles', 'German Sheperd', 'New Westminster', 'male', 3, 'medium', 'Umi', 'g@g.com', '123', 'https://images.pexels.com/photos/6606825/pexels-photo-6606825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I want ball'),
('Lucky', 'Corgi', 'Richmond', 'male', 8, 'small', 'Oscar', 'h@h.com', '123', 'https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Gimme treatz'),
('Avery', 'Golden Retriever', 'Port Moody', 'female', 7, 'big', 'Ashley', 'i@i.com', '123', 'https://images.pexels.com/photos/1001976/pexels-photo-1001976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Looking for doggo homie'),
('Cody', 'Pug', 'Vancouver', 'male', 4, 'small', 'Nick', 'j@j.com', '123', 'https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'I actually like to be inside'),
('Eva', 'Beagle', 'Burnaby', 'female', 5, 'small', 'Ella', 'k@k.com', '123', 'https://images.pexels.com/photos/7421920/pexels-photo-7421920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'It has been ruff out here'),
('Sasa', 'Chihuahua', 'Richmond', 'female', 5, 'small', 'Uniqueen', '1@1.com', '123', 'https://i.imgur.com/RoNehQD.jpg', 'Follow me on ig xd'),
('Puma', 'Dalmation', 'White Rock', 'female', 6, 'medium', 'James', 'm@m.com', '123', 'https://images.unsplash.com/photo-1599765625577-61a6e65e3567?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80', 'I am too easy to spot');



INSERT INTO candidate (approve, profile_id, candidate_dog_id)
VALUES
(true, 1, 2),
(true, 2, 1),
(true, 1, 3),
(true, 3, 1),
(true, 1, 5),
(true, 5, 1),
(true, 6, 1),
(true, 1, 6);

INSERT INTO chatroom (profile1_id, profile2_id, messages)
VALUES
(1, 2, '[{"user":"Nally","text":"So what are your further developments?"}, {"user":"Bigboi","text":"Matching algorithm"}, {"user":"Bigboi","text":"Realtime notification on messages & matches"}, {"user":"Nally","text":"No way. Hold my beer."}]'),
(1, 3, '[{"user":"Lindsay","text":"How was working as a team?"}, {"user":"Bigboi","text":"Me love team long time"}, {"user":"Lindsay","text":"Awesome!"}]'),
(1, 5, '[{"user":"Jipp","text":"What tech stacks did you use?"}, {"user":"Bigboi","text":"React"}, {"user":"Bigboi","text":"(S)CSS"}, {"user":"Bigboi","text":"socket.io"}, {"user":"Bigboi","text":"Nodejs"},  {"user":"Bigboi","text":"Express"}, {"user":"Bigboi","text":"PSQL"}, {"user":"Jipp","text":"Kinda cool! I wonder what Kanye would say."}]'),
(1, 6, '[{"user":"Sniffles","text":"Join sniffles room?"}, {"user":"Bigboi","text":"Join sniffles room"}, {"user":"Bigboi","text":"We have snacks"}, {"user":"Sniffles","text":"No we dont"}, {"user":"Bigboi","text":"Just bring your own then"},  {"user":"Sniffles","text":"Ok on my way"}, {"user":"Bigboi","text":"Hope to see everyone there!"}]');