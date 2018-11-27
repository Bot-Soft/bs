import Command from '../base'
import * as fs from 'fs';
import * as FlowActions from '../actions/flow';
const flowActions = new FlowActions.Flow();

export class Deploy extends Command {
  static description = 'Updates BotSoft chatbot blocks and messages'

  static examples = [
    `$ bs deploy`,
  ]

  async run() {
    try {
      var settings = JSON.parse(fs.readFileSync('settings', 'utf8'));
      var secret = JSON.parse(fs.readFileSync('secret', 'utf8'));
      settings.secret = secret.secret;
      var flow = JSON.parse(fs.readFileSync('flow.json', 'utf8'));
  
      flowActions.deploy(settings, flow);
    } catch (error) {
      console.error(error);
    }

  }
}
