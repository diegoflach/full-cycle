USE nodedb;

CREATE TABLE if not exists people
(
    id INTEGER AUTO_INCREMENT,
    name TEXT,
    PRIMARY KEY (id)
);