// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "MIT") {
    return ` ![GitHub License](https://img.shields.io/badge/MIT-Version-blue)`;
  } else if (license === "GPLv2") {
    return ` ![GitHub License](https://img.shields.io/badge/GPL-2.0-green)`;
  } else if (license === "other" || license === "none") {
    return "";
  } else if (license === "GPLv3") {
    return ` ![GitHub License](https://img.shields.io/badge/GPL-3.0-red)`;
  } else if (license === "Apache") {
    return ` ![GitHub License](https://img.shields.io/badge/Apache-Version-yellow)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.projectname}

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribute](#Contribute)
  - [Testing](#Testing)
  - [Questions](#Questions)

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)} 
  - [Click here](https://opensource.org/licenses/${
    data.license
  }) for more information on the license.

  ## Contribute
  ${data.contribute}

  ## Testing
  ${data.testing}
  
  ## Questions
Feel free to reach out with any questions
- [${data.email}](mail.to:${data.email}) <br>
- [GitHub](https://github.com/${data.githubname})
`;
}

module.exports = generateMarkdown;
