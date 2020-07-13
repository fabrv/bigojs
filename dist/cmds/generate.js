"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const Component_ts_1 = require("../templates/typescript/Component.ts");
const Component_html_1 = require("../templates/html/Component.html");
/**
 * Generate a new empty component
 * @param componentName {string} The component class and file name
 */
function generate(componentName) {
    const compTs = new Component_ts_1.CmpTsComponent({ componentName: componentName });
    const compHtml = new Component_html_1.CmpHtmlComponent({ componentName: componentName });
    console.log(compTs.render());
    console.log('\n----\n', compHtml.render());
}
exports.generate = generate;
