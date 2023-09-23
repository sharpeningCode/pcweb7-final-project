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
        title text not null,
        description longtext not null,
		document text,
        status varchar(20),
        num_days float not null,
        start_date date,
        end_date date
)

--@block
INSERT INTO leave_summary (title, description, document, status, num_days, start_date, end_date)
values (
        "Annual",
        "[AM] Attending friend's wedding",
	"",
        "Pending",
        "1",
        "2023-09-30",
        "2023-09-30"
);