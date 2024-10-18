import chalk from "chalk"
import handlerPassword from "./handler-password.js";

async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handlerPassword();
    console.log(password);
}


export default createPassword;