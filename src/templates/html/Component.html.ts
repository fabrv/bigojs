import { Component } from '../../';
import fs from 'fs'
import path from 'path'

interface CmpHtmlInterface {
  componentName: string
}

const template = fs.readFileSync(path.resolve(__dirname, 'Component.html.mustache'), 'utf8')

/**
 * Class that represents an CmpHtml component
 */
export class CmpHtmlComponent extends Component<CmpHtmlInterface> {
  constructor(viewData: CmpHtmlInterface) {
    super(viewData, template)
  }
}