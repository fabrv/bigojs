import { Component } from '../../RenderEngine/Component';
import fs from 'fs'
import path from 'path'

interface CmpTsInterface {
  componentName: string
}

const template = fs.readFileSync(path.resolve(__dirname, 'Component.ts.mustache'), 'utf8')

/**
 * Class that represents an CmpTs component
 */
export class CmpTsComponent extends Component<CmpTsInterface> {
  constructor(viewData: CmpTsInterface) {
    super(viewData, template)
  }
}