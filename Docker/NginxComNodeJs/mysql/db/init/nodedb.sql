USE nodedb;

CREATE TABLE if not exists people
(
    id INTEGER AUTO_INCREMENT,
    name TEXT,
    PRIMARY KEY (id)
);

DELETE FROM people;

INSERT INTO people(name) VALUES('Diego');
INSERT INTO people(name) VALUES('Lionel');
INSERT INTO people(name) VALUES('Pedro');
INSERT INTO people(name) VALUES('Paulo');