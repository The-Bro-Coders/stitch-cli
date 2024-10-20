import inquirer from "inquirer";
import Logger from "../lib/logger.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Commands {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  async create() {
    this.logger.log("Creating a new project");

    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Enter project name:",
        default: "my-safe-api",
      },
      {
        type: "confirm",
        name: "installDeps",
        message: "Would you like to install dependencies?",
        default: true,
      },
    ]);

    const templateDir = path.join(__dirname, "../templates/snugger-app");
    this.logger.success(`Using template: ${templateDir}`);

    console.log(answers);
  }
}

export default Commands;
