import fetch from "node-fetch";

export default class UserJoinRequestClient {
  #API_KEY;

  constructor(API_KEY) {
    this.#API_KEY = API_KEY;
  }

  async create(email, password) {
    try {
      const response = await this.getCreateUserResponse(email, password);
      const data = await response.json();

      if (data.error && data.error.message) {
        throw new Error(data.error.message);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getCreateUserResponse(email, password) {
    return await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        this.#API_KEY
      }`,
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
