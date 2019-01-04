import cli from 'cli-ux';
import * as fs from 'fs-extra';
import * as restm from 'typed-rest-client/RestClient';
const restc = new restm.RestClient('botsoft-server');
let config = require('../config.json');

export class Bot {
    async storeInfo(secret: any, id: any, name: any) {

        try {
            cli.action.start('Store chatbot info');
            let secretJSON;
            let settingsJSON;
            try {
                secretJSON = await fs.readJSON('secret');
            } catch (error) {
                secretJSON = {};
            }
            try {
                settingsJSON = await fs.readJSON('settings');
            } catch (error) {
                settingsJSON = {};
            }

            secretJSON.secret = secret;
            settingsJSON.name = name;
            settingsJSON.id = id;

            fs.writeJSONSync("secret", secretJSON);
            fs.writeJSONSync("settings", settingsJSON);

            cli.action.stop();
        } catch (error) {
            cli.action.stop(error);
        }
    }

    async setFlow() {
        try {
            cli.action.start('Set chatbot flow');
            let flowJSON;
            try {
                flowJSON = await fs.readJSON('flow.json');
                cli.action.stop("flow.json file already exists.");
            } catch (error) {
                let res = await restc.get(config.starterKitFlow);
                flowJSON = res.result;
                if (!flowJSON) {
                    cli.action.stop("Can't set the chatbot flow");
                } else {
                    fs.writeFileSync("flow.json", JSON.stringify(flowJSON, null, 2));
                    cli.action.stop("starter-kit added");
                }
            }
        } catch (error) {
            cli.action.stop(error);
        }
    }
}