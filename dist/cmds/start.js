"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const repos = {
    'blog': 'https://github.com/fabrv/bigojs-blog-template.git',
    'blank': ''
};
function start(projectName, type = 'blank') {
    const repoLink = repos[type];
    if (!repoLink) {
        console.log('Error: Invalid project type');
        return;
    }
    console.log('Cloning blog template');
    child_process_1.exec(`git clone ${repoLink} ${projectName}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`${stderr}`);
            //return
        }
        console.log(`${stdout}`);
        fs_1.default.rmdir(`${projectName}/.git`, { recursive: true }, error => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            console.log('Initializing git');
            child_process_1.exec(`cd ${projectName} && git init`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`${stdout}`);
                console.log('Installing dependencies');
                child_process_1.exec(`cd ${projectName} && npm i`, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`${stdout}`);
                });
            });
        });
    });
}
exports.start = start;
