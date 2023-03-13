const NameListItemModel = require("../models/name-list");

/**
 * @description - this is a service class that handles all name related operations
 * @class UserServices
 */
class NamesServices {
  /**
   * @description - this method gets all relevant names list in the database
   * @returns {Array[Object]} - returns an array of objects
   * @memberof UserServices
   */
  static async getNamesListService() {
    const namesDoc = await NameListItemModel.find();
    logger.info("Names list retrieved successfully");

    return {
      statusCode: 200,
      message: "Names list retrieved successfully",
      data: namesDoc,
    };
  }

  /**
   * description - this method adds a new name to the database
   * @param {object} string - the name to be added separated by comma
   * @returns {object} - returns an object of the newly added name
   * @memberof UserServices
   */
  static async postNamesListService(string) {
    // we split the string by comma and save it into the database
    const names = string.names.split(",");
    const namesList = [];
    names.forEach((name) => {
      namesList.push({ name: name });
    });

    const result = await NameListItemModel.insertMany(namesList);
    logger.info("Names list added successfully");

    return {
      statusCode: 201,
      message: "Names list added successfully",
      data: result,
    };
  }

  /**
   * description - this method adds update the value of the name by id in the database
   * @returns {object} - data - returns an object of the newly added name
   * @memberof UserServices
   */
  static async updateNameListService(data) {
    const obj = Object.create(data);
    const updateNameDoc = await NameListItemModel.findByIdAndUpdate(
      obj.id,
      { name: obj.updatedName },
      { new: true }
    );
    logger.info("Name updated successfully");

    return {
      statusCode: 200,
      message: "Name updated successfully",
      data: updateNameDoc,
    };
  }

  /**
   * @description - this method adds delete the value of the name by id in the database
   * @param {object} data - the name to be added separated by comma
   * @returns {object} - data - returns an object of the newly added name
   * @memberof UserServices
   */
  static async deleteNameListService(data) {
    const obj = Object.create(data);
    const deleteNameDoc = await NameListItemModel.findByIdAndDelete(obj.id);
    logger.info("Name deleted successfully");

    return {
      statusCode: 200,
      message: "Name deleted successfully",
      data: deleteNameDoc,
    };
  }
}

module.exports = NamesServices;
