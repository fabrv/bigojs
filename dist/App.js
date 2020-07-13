"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amigo = void 0;
const minimist_1 = __importDefault(require("minimist"));
const conf_json_1 = require("./conf.json");
class Amigo {
    constructor() {
        this.args = minimist_1.default(process.argv.slice(2));
        let cmd = this.args._[0] || 'help';
        if (this.args.version || this.args.v) {
            cmd = 'version';
        }
        if (this.args.help || this.args.h) {
            cmd = 'help';
        }
        switch (cmd) {
            case 'version':
                console.log(`v${conf_json_1.version}`);
                break;
            default:
                console.error(`"${cmd}" is not a valid command!`);
            case 'help':
                console.log(`
  bigo [command] <options>

  start .................. Create a new project
  run .................... Run project
  generate ............... Generate new componentes
  help ................... Get help
        `);
                break;
        }
        process.exit();
    }
}
exports.Amigo = Amigo;
