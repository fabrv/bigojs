import mustache from "mustache";
import { IncomingMessage } from "http";

/**
 * Class that represents a <View, Template> Component
 */
export class Component<T> {
  private _viewData: T
  private _template: string

  /**
   * 
   * @param {T} viewData The information that will be rendered on the page
   * @param {string} template The HTML template itself
   */
  constructor(viewData: T, template: string) {
    this._viewData = viewData
    this._template = template
  }

  /**
   * Get the parsed page in plain HTML text
   * @returns {string} Parsed HTML text
   */
  render(): string {
    return mustache.render(this._template, this._viewData)
  }
}

/**
 * Class representing http request. For parsing and reorganazing NodeJS's http.IncommingMessage
 */
export class Request {
  params: string
  url: string
  route: string[]
  body: string = ''
  method: string

  /**
   * Create a new Bigo Request
   * @param {IncomingMessage} request - HttpServer incomming message
   */
  constructor(request: IncomingMessage) {
    this.params = request.url.split('?')[1]
    this.url = request.url.split('?')[0]
    this.route = this.url.split('/').filter(val => val.length > 0)
    this.method = request.method
    request.on('data', chunk => { this.body += chunk })
  }
}