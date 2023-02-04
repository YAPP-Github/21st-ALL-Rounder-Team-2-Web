export default class Command {
  #command;

  constructor(command) {
    this.#command = command;
  }

  isJoin() {
    return this.#command === "join";
  }

  isLogin() {
    return this.#command === "login";
  }
}
