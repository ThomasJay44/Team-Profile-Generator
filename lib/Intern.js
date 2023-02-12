const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getHTML() {
        return `<div class="card employee-card">
                    <div>
                        <div>
                            <h3>${this.name} Intern </h3>
                        <ul>
                            <li>ID: ${this.id}</li>
                            <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                            <li>School: ${this.school}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
