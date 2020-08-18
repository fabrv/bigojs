"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bigo = void 0;
var minimist_1 = __importDefault(require("minimist"));
var conf_json_1 = require("./conf.json");
var generate_1 = require("./cmds/generate");
var start_1 = require("./cmds/start");
var Bigo = /** @class */ (function () {
    function Bigo() {
        this.args = minimist_1.default(process.argv.slice(2));
        var cmd = this.args._[0] || 'help';
        if (this.args.version || this.args.v) {
            cmd = 'version';
        }
        if (this.args.help || this.args.h) {
            cmd = 'help';
        }
        switch (cmd) {
            case 'generate':
                generate_1.generate(this.args._[1]);
                break;
            case 'start':
                start_1.start(this.args._[1], this.args.type);
                break;
            case 'version':
                console.log("v" + conf_json_1.version);
                break;
            default:
                console.error("\"" + cmd + "\" is not a valid command!");
            case 'help':
                console.log("\n  bigo [command] <options>\n\n  start .................. Create a new project\n  run .................... Run project\n  generate ............... Generate new componentes\n  help ................... Get help\n        ");
                break;
        }
        //process.exit()
    }
    return Bigo;
}());
exports.Bigo = Bigo;
