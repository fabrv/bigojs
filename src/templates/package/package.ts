import { Component } from '../../'
import fs from 'fs'
import path from 'path'

export interface packageInterface {
  
}

const template = fs.readFileSync(path.resolve(__dirname, 'package.html'), 'utf8')

/**
 * Class that represents an package component
 */
export class packageComponent extends Component<packageInterface> {
  constructor(viewData: packageInterface) {
    super(viewData, template)
  }
}