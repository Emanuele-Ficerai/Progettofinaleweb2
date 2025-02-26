CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID univoco per ogni utente
    username TEXT NOT NULL UNIQUE,         -- Nome utente (unico)
    email TEXT NOT NULL UNIQUE,            -- Email (unica)
    password TEXT NOT NULL,                -- Password (criptata)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data di creazione account
);

INSERT INTO users (username, email, password) 
VALUES ('testuser1', 'testuser1@example.com', 'password123');

INSERT INTO users (username, email, password) 
VALUES ('testuser2', 'testuser2@example.com', 'password456');

INSERT INTO users (username, email, password) 
VALUES ('testuser3', 'testuser3@example.com', 'password789');

INSERT INTO users (username, email, password) 
VALUES ('testuser4', 'testuser4@example.com', 'password1011');

INSERT INTO users (username, email, password) 
VALUES ('testuser5', 'testuser5@example.com', 'password1213');

