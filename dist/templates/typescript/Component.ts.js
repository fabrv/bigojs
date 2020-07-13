"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmpTsComponent = void 0;
const Component_1 = require("../../RenderEngine/Component");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const template = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'Component.ts.mustache'), 'utf8');
/**
 * Class that represents an CmpTs component
 */
class CmpTsComponent extends Component_1.Component {
    constructor(viewData) {
        super(viewData, template);
    }
}
exports.CmpTsComponent = CmpTsComponent;
