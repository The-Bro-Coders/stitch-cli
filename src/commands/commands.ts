import inquirer from "inquirer";
import fs from "fs-extra";
import Logger from "../lib/logger.js";
import path from "path";
import { fileURLToPath } from "url";
import ora from "ora";
import { copyTemplateFiles } from "../lib/utils.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Commands {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  async create() {
    try {
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

      const templateDir = path.resolve(
        __dirname,
        "../../templates/snugger-app",
      );
      if (!templateDir) {
        this.logger.error("Template directory not found");
        return;
      }

      const projectDir = path.join(process.cwd(), answers.projectName);

      const spinner = ora("Creating project").start();
      spinner.color = "blue";

      const isSuccess = await copyTemplateFiles(fs, templateDir, projectDir);

      if (isSuccess) {
        spinner.succeed("\nProject created successfully");
      }
    } catch (error) {
      this.logger.error("\nError creating project", error);
    }
  }
}

export default Commands;
