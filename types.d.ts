import { IncomingMessage } from "http";

declare module "bigojs" {
  /**
   * Class that represents a <View, Template> Component
   */
  class Component<T>{
    /**
     * 
     * @param viewData {T} The information that will be rendered on the page
     * @param template {string} The HTML template itself
     */
    constructor(viewData: T, template: string)
    /**
     * Get the parsed page in plain HTML text
     * @returns {string} Parsed HTML text
     */
    render(): string
  }
}

/**
 * Class representing http request. For parsing and reorganazing NodeJS's http.IncommingMessage
 */
export class Request {
  params: string
  url: string
  route: string[]
  body: string
  method: string

  /**
   * Create a new Bigo Request
   * @param {IncomingMessage} request - HttpServer incomming message
   */
  constructor(request: IncomingMessage)
}