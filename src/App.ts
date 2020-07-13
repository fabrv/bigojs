import minimist from 'minimist'
import { version } from './conf.json'
import { generate } from './cmds/generate'

export class Amigo {
  args: minimist.ParsedArgs = minimist(process.argv.slice(2))
  constructor() {
    let cmd = this.args._[0] || 'help'
    
    if (this.args.version || this.args.v) {
      cmd = 'version'
    }

    if (this.args.help || this.args.h) {
      cmd = 'help'
    }

    switch (cmd) {
      case 'generate':
        generate(this.args._[1])
        break
      case 'version':
        console.log(`v${version}`)
        break
      default:
        console.error(`"${cmd}" is not a valid command!`)
      case 'help':
        console.log(`
  bigo [command] <options>

  start .................. Create a new project
  run .................... Run project
  generate ............... Generate new componentes
  help ................... Get help
        `)
        break
    }
    process.exit()
  }
}