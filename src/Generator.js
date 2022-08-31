// The html with the requested information.

const profileGenerator = (emProfile) =>{
    const profileManager = (manager) =>{
    return `
        <div class="card-container">
            <div class="card-head">
                <h4 class="card-employee"> ${manager.getName()}</h4>
                <h3 class="card-title fa fa-coffee">Manager</h3>
            </div>
            <div class="card-info">
                <ul class="list-info">
                    <li class="list-item">ID: ${manager.getId()}</li>
                    <li class="list-item">Email: <a href= "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-item">Office Number:</li>
                </ul>
            </div>
        </div>`;
};
    const profileEngineer = (engineer) => {
    return `
        <div class="card-container">
            <div class="card-head">
                <h4 class="card-employee"> ${engineer.getName()}</h4>
                <h3 class="card-title fa fa-gears">Engineer</h3>
            </div>
            <div class="card-info">
                <ul class="list-info">
                    <li class="list-item">ID: ${engineer.getId()}</li>
                    <li class="list-item">Email: <a href= "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-item">GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`;
};
    const profileIntern = (intern) => {
    return `
        <div class="card-container">
            <div class="card-head">
                <h4 class="card-employee"> ${intern.getName()}</h4>
                <h3 class="card-title fa fa-graduation-cap">Intern</h3>
            </div>
            <div class="card-info">
                <ul class="list-info">
                    <li class="list-item">ID: ID: ${intern.getId()}</li>
                    <li class="list-item">Email: <a href= "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
};

// Pushes the given information into an array.

const html = [];

html.push(
  emProfile
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => profileManager(manager))
);
html.push(
  emProfile
    .filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => profileEngineer(engineer))
    .join("")
);
html.push(
  emProfile
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => profileIntern(intern))
    .join("")
);

return html.join('');
};

// The rest of the html for the page.

module.exports = (emProfile) => {
    return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE-edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <sript defer src="index.js"></sript>
    </head>
    <body>
        <div class="title-card">
            <h1 class="title-style">My Team</h1>
        </div>
        <div class="card-layout">
            ${profileGenerator(emProfile)}
        </div>    
    </body>
    </html>`
}