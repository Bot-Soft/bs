import Command, { flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'

export default abstract class extends Command {
    userConfig!: any;

    async init() {
        // do some initialization 
        this.userConfig = await fs.readJSON(path.join(__dirname, 'config.json'));
    }
    async catch() {
        // handle any error from the command
    }
    async finally() {
        // called after run and catch regardless of whether or not the command errored
    }
}
