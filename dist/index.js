"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.Component = void 0;
const mustache_1 = __importDefault(require("mustache"));
/**
 * Class that represents a <View, Template> Component
 */
class Component {
    /**
     *
     * @param {T} viewData The information that will be rendered on the page
     * @param {string} template The HTML template itself
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
/**
 * Class representing http request. For parsing and reorganazing NodeJS's http.IncommingMessage
 */
class Request {
    /**
     * Create a new Bigo Request
     * @param {IncomingMessage} request - HttpServer incomming message
     */
    constructor(request) {
        this.body = '';
        this.params = request.url.split('?')[1];
        this.url = request.url.split('?')[0];
        this.route = this.url.split('/').filter(val => val.length > 0);
        this.method = request.method;
        request.on('data', chunk => { this.body += chunk; });
    }
}
exports.Request = Request;
