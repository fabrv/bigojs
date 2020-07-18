"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentComponent = void 0;
const core_1 = require("../../core");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const template = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'Component.html'), 'utf8');
/**
 * Class that represents an Component component
 */
class ComponentComponent extends core_1.Component {
    constructor(viewData) {
        super(viewData, template);
    }
}
exports.ComponentComponent = ComponentComponent;
