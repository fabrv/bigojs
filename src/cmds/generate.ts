import { CmpTsComponent } from '../templates/typescript/Component.ts'
import { CmpHtmlComponent } from '../templates/html/Component.html'
/**
 * Generate a new empty component
 * @param componentName {string} The component class and file name
 */
export function generate(componentName: string): void {
  componentName = componentName.replace(/[^a-z0-9]/gi, '')

  const compTs = new CmpTsComponent({componentName: componentName})
  const compHtml = new CmpHtmlComponent({componentName: componentName})
  console.log(compTs.render())
  console.log('\n----\n', compHtml.render())
}