import {writeFile} from 'fs';

const badge = license => license == 'None' ? '' : `![${license}](https://img.shields.io/badge/License-${license}-blueviolet)`;

const mdGen = data => {
  const output = `
# ${data.title}
${badge(data.license)}

## Table of contents:
######[Description](#Description)
######[Installation](#Installation)
######[Usage](#Usage)
######[Contributions](#Contributions)
######[Tests](#Tests)
######[For questions or concers, please go to contact:](#Contact)

##Description:
${data.description};

##Installation:
${data.installation};

##Usage:
${data.usage};

##Contributions:
${data.contributions};

##Tests:
${data.tests};

##Contact:
[Email](mailto:${data.email})
[Github](https://github.com/${data.github})

`;

writeFile('./README.md', output, () => console.log('README Generated...')) 
}



export default mdGen;