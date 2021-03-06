"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmpHtmlComponent = void 0;
var __1 = require("../../");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var template = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'Component.html.mustache'), 'utf8');
/**
 * Class that represents an CmpHtml component
 */
var CmpHtmlComponent = /** @class */ (function (_super) {
    __extends(CmpHtmlComponent, _super);
    function CmpHtmlComponent(viewData) {
        return _super.call(this, viewData, template) || this;
    }
    return CmpHtmlComponent;
}(__1.Component));
exports.CmpHtmlComponent = CmpHtmlComponent;
