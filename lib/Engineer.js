const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getHTML() {
        return `<div class="card employee-card">
                    <div class="card-header">  
                        <div class="card-title">
                            <h3>${this.name} Engineer </h3>
                        <ul>
                            <li>ID: ${this.id}</li>
                            <li>Email: <a href="mailto:${this.email}">${this.email}</a></li>
                            <li>GitHub: <a href="http://github.gom/${this.github}">${this.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }



    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;