"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var child_process_1 = require("child_process");
var fs_1 = __importDefault(require("fs"));
var repos = {
    'blog': 'https://github.com/fabrv/bigojs-blog-template.git',
    'blank': 'https://github.com/fabrv/bigojs-blank-template'
};
function start(projectName, type) {
    if (type === void 0) { type = 'blank'; }
    var repoLink = repos[type];
    if (!repoLink) {
        console.log('Error: Invalid project type');
        return;
    }
    console.log("Cloning " + type + " template");
    child_process_1.exec("git clone " + repoLink + " " + projectName, function (error, stdout, stderr) {
        if (error) {
            console.log("error: " + error.message);
            return;
        }
        if (stderr) {
            console.log("" + stderr);
            //return
        }
        console.log("" + stdout);
        fs_1.default.rmdir(projectName + "/.git", { recursive: true }, function (error) {
            if (error) {
                console.log("error: " + error.message);
                return;
            }
            console.log('Initializing git');
            child_process_1.exec("cd " + projectName + " && git init", function (error, stdout, stderr) {
                if (error) {
                    console.log("error: " + error.message);
                    return;
                }
                if (stderr) {
                    console.log("stderr: " + stderr);
                    return;
                }
                console.log("" + stdout);
                console.log('Installing dependencies');
                child_process_1.exec("cd " + projectName + " && npm i", function (error, stdout, stderr) {
                    if (error) {
                        console.log("error: " + error.message);
                        return;
                    }
                    if (stderr) {
                        console.log("stderr: " + stderr);
                        return;
                    }
                    console.log("" + stdout);
                });
            });
        });
    });
}
exports.start = start;
