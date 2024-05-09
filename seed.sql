CREATE TABLE froguins (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT
);

INSERT INTO froguins (name, description) VALUES 
('Bob', 'this is a description'),
('Stacey', 'This is another description'),
('Howard', 'What a strange name');