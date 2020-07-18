import { CmpTsComponent } from '../templates/typescript/Component.ts'
import { CmpHtmlComponent } from '../templates/html/Component.html'
import fs from 'fs'
/**
 * Generate a new empty component
 * @param componentName {string} The component class and file name
 */
export function generate(componentName: string): void {
  componentName = componentName.replace(/[^a-z0-9]/gi, '')

  const compTs = new CmpTsComponent({componentName: componentName})
  const compHtml = new CmpHtmlComponent({componentName: componentName})

  const path = `${process.cwd()}\\${componentName}`
  fs.mkdirSync(path, {recursive: true})
  fs.writeFileSync(`${path}\\${componentName}.ts`, compTs.render(), 'utf8')
  fs.writeFileSync(`${path}\\${componentName}.html`, compHtml.render(), 'utf8')
}