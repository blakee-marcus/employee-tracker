INSERT INTO department (id, name)
VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Salesperson', 80000, 1),
    (2, 'Lead Engineer', 150000, 2),
    (3, 'Software Engineer', 120000, 2),
    (4, 'Account Manager', 160000, 3),
    (5, 'Accountant', 125000, 3),
    (6, 'Legal Team Lead', 250000, 4),
    (7, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'James', 'Fraser', 1, 8),
    (2, 'Jack', 'London', 2, 9),
    (3, 'Robert', 'Bruce', 3, 10),
    (4, 'Peter', 'Greenaway', 4, 11),
    (5, 'Derek', 'Jarman', 5, 8),
    (6, 'Paolo', 'Pasolini', 6, 9),
    (7, 'Heathcote', 'Williams', 7),
    (8, 'Sandy', 'Powell', 7),
    (9, 'Emil', 'Zola', 7),
    (10, 'Sissy', 'Coalpits', 7),
    (11, 'Antoinette', 'Capet', 7);