USE sql12645135;
CREATE TABLE staff_info (
    id integer primary key auto_increment,
    name varchar(50) not null,
    department varchar(50) not null,
    role varchar(20) not null
);

--@block
INSERT INTO staff_info (name, department, role)
values (
        "Mary Moh",
        "Sales",
        "Manager"
);

--@block
INSERT INTO staff_info (name, department, role)
values (
        "Edwin Eng",
        "Sales",
        "Executive staff"
);

--@block
CREATE TABLE leave_summary (
        id integer primary key auto_increment,
        title text not null,
        description longtext not null,
        document text,
        status varchar(20),
        num_days float not null,
        start_date date,
        end_date date
)

--@block
INSERT INTO leave_summary (id, title, description, document, status, num_days, start_date, end_date)
values (
        "1",
        "Annual",
        "[AM] Attending friend's wedding",
	    "",
        "Pending",
        "1",
        "2023-09-30",
        "2023-09-30"
);

--@block
USE sql12645135;
CREATE TABLE users (
        id integer primary key auto_increment,
        username varchar(20) not null,
        email varchar(30) not null,
        password varchar(30) not null,
        role varchar(10) null
);

--@block
INSERT INTO users (id, username, email, password, role)
values (
        "1",
        "mary.moh",
        "mary.moh@abc.org",
        "pw.mary.moh",
        "admin"
);

--@block
INSERT INTO users (id, username, email, password, role)
values (
        "2",
        "edwin.eng",
        "edwin.eng@abc.org",
        "pw.edwin.eng",
        "normal"
);