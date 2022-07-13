// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license == 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license == 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else if (license == 'CC0') {
    return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == 'Boost') {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  } else if (license == 'BSD') {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  } else if (license == 'CC0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`;
  } else {
    return '';
  }
};
renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'Apache') {
    return `## License
    
    License link for Apache:`;
  } else if (license == 'Boost') {
    return `## License
    
    License link for Boost:`;
  } else if (license == 'BSD') {
    return `## License
    
    License link for BSD:`;
  } else if (license == 'CC0') {
    return `## License
    
    License link for CC0:`;
  } else {
    return `## License
    
    License link for Apache:`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#guidelines)
  - [Test Instructions](#test)
  - [License](#license)
  - [Contact Me](#userName)(#email)

  ## Installation

  To install, run \`\`\`${data.installation}\`\`\` in the command line. 

  ## Usage

  ${data.usage}

  ## Contribution Guidelines

  ${data.guidelines}

  ## Test Instructions

  ${data.test}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contribution Guidelines
  GitHub User Name:  ${data.userName}
  <br>
  Email Address:  ${data.email}
`;
}

module.exports = generateMarkdown;
