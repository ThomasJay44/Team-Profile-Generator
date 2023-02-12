const Employee = require("./Employee");

class Manager extends Employee {
        constructor(name, id, email, officeNumber) {
            super(name, id, email);
            this.officeNumber = officeNumber;
        }

        getHTML() {
            return `<div class="card employee-card">
                <div>
                    <div>
                        <h3>${this.name} Manager </h3>
                    <ul>
                        <li>ID: ${this.id}</li>
                        <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                        <li>Office Number: ${this.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        }

        getOfficeNumber() {
            return this.officeNumber;
        }
        getRole() {
            return "Manager";
        }
    }

    module.exports = Manager;
    