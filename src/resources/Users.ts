import BaseCrud from "./BaseCrud";
import { UsersStatic } from "../interfaces/UsersStatic";

export default class Users extends BaseCrud<
  UsersStatic.UserSmall,
  UsersStatic.UserFull,
  UsersStatic.UserSmall,
  UsersStatic.UsersSearchparameters,
  {},
  {}
> {
  constructor(apiToken: string) {
    super(apiToken, "/user");
  }

  /**
   * Not implemented by Bexio yet
   *
   * @param {number} id
   * @param {{}} ressource
   * @returns {Promise<UsersStatic.UserFull>}
   * @memberof Users
   */
  public async overwrite(
    id: number,
    ressource: {}
  ): Promise<UsersStatic.UserFull> {
    throw new Error("not implemented by Bexio yet");
  }

  /**
   * Not implemented by Bexio yet
   *
   * @param {number} id
   * @param {{}} ressource
   * @returns {Promise<UsersStatic.UserFull>}
   * @memberof Users
   */
  public async edit(id: number, ressource: {}): Promise<UsersStatic.UserFull> {
    throw new Error("not implemented by Bexio yet");
  }

  /**
   * Not implemented by Bexio yet
   *
   * @param {{}} ressource
   * @returns {Promise<UsersStatic.UserFull>}
   * @memberof Users
   */
  public async create(ressource: {}): Promise<UsersStatic.UserFull> {
    throw new Error("not implemented by Bexio yet");
  }

  /**
   * Not implemented by Bexio yet
   *
   * @param {number} id
   * @returns {Promise<boolean>}
   * @memberof Users
   */
  public async delete(id: number): Promise<boolean> {
    throw new Error("not implemented by Bexio yet");
  }
}
