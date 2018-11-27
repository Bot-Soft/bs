import Command from '../base'
const opn = require('opn');

export class Create extends Command {
  static description = 'Create chatbot'

  static examples = [
    `$ bs create
`,
  ]

  async run() {
    opn('http://botsoft.ai');
  }
}