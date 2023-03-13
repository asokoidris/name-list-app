const NamesServices = require("../service/name-service");

/**
 * @description - This is a controller class that handles all page related operations
 * @class PageController
 */
class PageController {
  /**
   * @param {object} req - the request object
   * @param {object} res - the response object
   * @returns {object} - returns an object of users
   * @memberof PageController
   */
  static async getNamesListController(req, res) {
    try {
      const result = await NamesServices.getNamesListService();
      logger.info(`getNamesListController: ${result}`);
      res.render("index", { names: result.data });
    } catch (error) {
      logger.error(`getNamesListController: ${error.message}`);
      return res.status(500).render("error", { error: error.message });
    }
  }

  /**
   * @param {object} req - the request object
   * @param {object} res - the response object
   * @returns {object} - returns an object of users
   * @memberof PageController
   */
  static async postNamesListController(req, res) {
    try {
      const result = await NamesServices.postNamesListService(req.body);
      logger.info(`postNamesListController: ${result}`);
      res.status(201).redirect("/");
    } catch (error) {
      logger.error(`postNamesListController: ${error.message}`);
      return res.status(500).render("error", { error: error.message });
    }
  }

  /**
   * @param {object} req - the request object
   * @param {object} res - the response object
   * @returns {object} - returns an object of users
   * @memberof PageController
   */
  static async updateNameListController(req, res) {
    const { body } = req;
    try {
      const result = await NamesServices.updateNameListService(body);
      logger.info(`updateNameListController: ${result}`);
      res.status(200).redirect("/");
    } catch (error) {
      logger.error(`updateNameListController: ${error.message}`);
      return res.status(500).render("error", { error: error.message });
    }
  }

  /**
   * @param {object} req - the request object
   * @param {object} res - the response object
   * @returns {object} - returns an object of users
   * @memberof PageController
   */
  static async deleteNameListController(req, res) {
    const { body } = req;
    try {
      const result = await NamesServices.deleteNameListService(body);
      logger.info(`deleteNameListController: ${result}`);
      res.status(200).redirect("/");
    } catch (error) {
      logger.error(`deleteNameListController: ${error.message}`);
      return res.status(500).render("error", { error: error.message });
    }
  }
}

module.exports = PageController;
