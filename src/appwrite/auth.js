import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      return error;
    }
  }

  async getAccount() {
    try {
      return await this.account.get();
    } catch (error) {
      // throw error;
      console.log("App write :: Get Account ::", error);
    }
    return null;
  }

  async logoutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("App write :: Logout User ::", error);
    }
    return null;
  }
}

const authService = new AuthService();
export default authService;
