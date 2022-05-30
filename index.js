const inquirer = require('inquirer');
const db = require('./config/connection');

const userPrompts = () => {
    console.table(db);
    inquirer
        .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['Add Department, Role or Employee', 'Update an Employee Manager', 'View Employees By Manager or Department', 'Delete Department, Role or Employee']
        })
        .then(({ action }) => {
            if (action === 'Add Department, Role or Employee') {
                inquirer
                    .prompt({
                        type: 'list',
                        message: 'What would you like to add?',
                        name: 'add',
                        choices: ['Department', 'Role', 'Employee']
                    })
                    .then(({ add }) => {
                        if (add === 'Department') {
                            addDepartment();
                        }
                        if (add === 'Role') {
                            addRole();
                        }
                        if (add === 'Employee') {
                            addEmployee();
                        }
                    });
            }
            if (action === 'Update an Employee Manager') {
                updateEmployee();
            }
            if (action === 'View Employees By Manager or Department') {
                inquirer
                    .prompt({
                        type: 'list',
                        message: 'View Employees By:',
                        name: 'view',
                        choices: ['Manager', 'Department']
                    })
                    .then(({ view }) => {
                        if (view === 'Manager') {
                            viewByManager();
                        }
                        if (view === 'Department') {
                            viewByDepartment();
                        }
                    });
            }
            if (action === 'Delete Department, Role or Employee') {
                inquirer
                    .prompt({
                        type: 'list',
                        message: 'What would you like to delete',
                        name: 'deleteChoice',
                        choices: ['Department', 'Role', 'Employee']
                    })
                    .then(({ deleteChoice }) => {
                        if (deleteChoice === 'Department') {
                            deleteDepartment();
                        }
                        if (deleteChoice === 'Role') {
                            deleteRole();
                        }
                        if (deleteChoice === 'Employee') {
                            deleteEmployee();
                        }
                    });
            }
        });
}

userPrompts();