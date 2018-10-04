import Command from '../base'
import { flags } from '@oclif/command'
import * as httpm from 'typed-rest-client/HttpClient';

let httpc: httpm.HttpClient = new httpm.HttpClient('vsts-node-api');

export class Update extends Command {
  static description = 'Updates BotSoft chatbot blocks and messages'

  static examples = [
    `$ bs update
`,
  ]

  async run() {
    console.log(this.userConfig["test"]);
  }
}
