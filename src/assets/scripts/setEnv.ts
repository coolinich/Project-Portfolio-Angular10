const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();
const environment = argv.environment;

function writeFileUsingFs(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function(err) {
      if (err) {
          console.log(err);
      }

      if (environmentFileContent != '') {
          console.log(`Wrote variables to ${targetPath}`);
      }
  })
}

const envDirectory = './src/environments';
if (!existsSync(envDirectory)) {
    mkdirSync(envDirectory);
}

writeFileUsingFs('./src/environments/environment.prod.ts', '');
writeFileUsingFs('./src/environments/environment.ts', '');

const isProduction = environment === 'prod';

const targetPath = isProduction ? './src/environments/environment.prod.ts' : './src/environments/environment.ts';

const environmentFileContent = `
    export const BOT_URL = "${process.env.BOT_URL}";
    export const CHAT_ID = "${process.env.CHAT_ID}";
    export const environment = {
        production: ${isProduction},
        firebase: {
            apiKey: "${process.env.FIREBASE_APIKEY}",
            authDomain: "cool-gallery-4b872.firebaseapp.com",
            databaseURL: "https://cool-gallery-4b872-default-rtdb.firebaseio.com",
            projectId: "cool-gallery-4b872",
            storageBucket: "cool-gallery-4b872.appspot.com",
            messagingSenderId: "548919063503",
            appId: "${process.env.FIREBASE_APPID}"
        }
    };
`;

writeFileUsingFs(targetPath, environmentFileContent);