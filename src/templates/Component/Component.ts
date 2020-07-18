import { Component } from '../../RenderEngine/Component';
import fs from 'fs'
import path from 'path'

interface ComponentInterface {
  
}

const template = fs.readFileSync(path.resolve(__dirname, 'Component.html'), 'utf8')

/**
 * Class that represents an Component component
 */
export class ComponentComponent extends Component<ComponentInterface> {
  constructor(viewData: ComponentInterface) {
    super(viewData, template)
  }
}