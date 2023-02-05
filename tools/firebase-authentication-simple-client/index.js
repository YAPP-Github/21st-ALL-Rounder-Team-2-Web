import UserJoinRequestClient from "./lib/UserJoinRequestClient.js";
import UserLoginRequestClient from "./lib/UserLoginRequestClient.js";
import Command from "./lib/Command.js";

async function main() {
  const apiKey = "input firebase project api key";
  const email = "test@test.com";
  const password = "123456";
  const joinClient = new UserJoinRequestClient(apiKey);
  const loginClient = new UserLoginRequestClient(apiKey);
  const command = new Command(process.argv[2]);

  if (command.isJoin()) await joinClient.create(email, password);
  else if (command.isLogin()) await loginClient.login(email, password);
  else
    console.error(
      `unexpected command : 
        expected : npm run start [login | join]`
    );
}

main();
