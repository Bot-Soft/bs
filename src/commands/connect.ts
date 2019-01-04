import Command from '../base'
import * as BotActions from '../actions/bot';
const botActions = new BotActions.Bot();

export class Connect extends Command {
  static description = 'Connect chatbot'

  static examples = [
    `$ bs connect
`,
  ]
  static args = [{name: 'secret'}, {name: 'id'}, {name: 'name'}]
  async run() {
    const {args} = this.parse(Connect)

    try {
      botActions.storeInfo(args.secret, args.id, args.name).then(()=>{
        botActions.setFlow();
      });
    } catch (err) {
      console.error(err);
    }
  }
}