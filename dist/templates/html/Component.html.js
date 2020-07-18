"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmpHtmlComponent = void 0;
const __1 = require("../../");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const template = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'Component.html.mustache'), 'utf8');
/**
 * Class that represents an CmpHtml component
 */
class CmpHtmlComponent extends __1.Component {
    constructor(viewData) {
        super(viewData, template);
    }
}
exports.CmpHtmlComponent = CmpHtmlComponent;
