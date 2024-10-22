import inquirer from "inquirer";
import fs from "fs-extra";
import Logger from "../lib/logger.js";
import path from "path";
import { fileURLToPath } from "url";
import ora from "ora";
import { execSync } from "child_process";
import { copyTemplateFiles, getPackageJsonContent } from "../lib/utils.js";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

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

      const templateRepo =
        "https://github.com/The-Finding-Labs/snugger-template.git";

      const projectName = answers.projectName;

      const projectDir = path.join(process.cwd(), projectName);
      const spinner = ora("Creating project...").start();

      spinner.color = "blue";
      execSync(`git clone ${templateRepo} ${projectName}`);
      execSync(`rm -rf ${projectName}/.git`);

      spinner.text = "Creating package...\n";
      spinner.color = "green";

      const packageJsonContent = getPackageJsonContent(projectName);

      const packageJsonPath = path.join(projectDir, "package.json");

      await fs.writeJson(packageJsonPath, packageJsonContent, { spaces: 2 });

      if (answers.installDeps) {
        spinner.text = "Installing dependencies...\n";
        spinner.color = "yellow";
        execSync(`cd ${projectName} && npm install`);
      }

      spinner.stop();
      this.logger.success(`Project created successfully..!\n`);

      this.logger.log("To get started, run the following commands:");

      this.logger.log(`cd ${projectName}`);
      this.logger.log("npm run dev");

      this.logger.warn(
        "Check if any devDependencies are missing and install them manually",
      );
    } catch (error) {
      this.logger.error("\nError creating project", error);
    }
  }
}

export default Commands;
