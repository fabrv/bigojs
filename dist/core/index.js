"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const mustache_1 = __importDefault(require("mustache"));
/**
 * Class that represents a <View, Template> Component
 */
class Component {
    /**
     *
     * @param viewData {T} The information that will be rendered on the page
     * @param template {string} The HTML template itself
     */
    constructor(viewData, template) {
        this._viewData = viewData;
        this._template = template;
    }
    /**
     * Get the parsed page in plain HTML text
     * @returns {string} Parsed HTML text
     */
    render() {
        return mustache_1.default.render(this._template, this._viewData);
    }
}
exports.Component = Component;
