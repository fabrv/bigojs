"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageComponent = void 0;
const __1 = require("../../");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const template = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'package.html'), 'utf8');
/**
 * Class that represents an package component
 */
class packageComponent extends __1.Component {
    constructor(viewData) {
        super(viewData, template);
    }
}
exports.packageComponent = packageComponent;
