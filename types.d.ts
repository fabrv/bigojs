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