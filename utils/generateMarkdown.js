// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license == 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  } else if ( license == 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  } else if (license == 'CC0') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'Boost') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
  } else if ( license == 'BSD') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == 'CC0') {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'Apache') {
    return '';
  } else if (license == 'Boost') {
    return '';
  } else if ( license == 'BSD') {
    return '';
  } else if (license == 'CC0') {
    return '';
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.tableContents}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.guidelines}
  ## ${data.test}
  ## ${data.license}
  ## ${data.userName}
  ## ${data.email}
`;
}

module.exports = generateMarkdown;
