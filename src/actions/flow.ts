import cli from 'cli-ux';
import * as restm from 'typed-rest-client/RestClient';
const restc = new restm.RestClient('botsoft-server');
let config = require('../config.json');

export class Flow {
    async deploy(settings: any, flow: any) {

        try {
            cli.action.start('Deploying the flow')
            let res = await restc.create(config.baseUrl + settings.id + '/flow?' + 'secret=' + settings.secret, flow);
            cli.action.stop();
        } catch (error) {
            cli.action.stop(error);
        }
    }
}