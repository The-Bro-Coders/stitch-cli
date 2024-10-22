import { Command } from "commander";
import Logger from "./lib/logger.js";
import Commands from "./commands/commands.js";
import { getVersion } from "./lib/utils.js";

const VERSION = await getVersion();

class SnuggerCLI {
  private logger: Logger;
  private program: Command;
  private version: string;

  constructor() {
    this.logger = new Logger();
    this.program = new Command();
    this.version = VERSION;

    this.setupCommands();
  }

  private setupCommands() {
    this.program
      .version(this.version, "-v, --version", "Output the current version")
      .description(
        `Snugger v${this.version} - A CLI for generating type-safe express API project`,
      );
    this.program
      .command("create")
      .description("Create a new project")
      .action(() => {
        const command = new Commands(this.logger);
        command.create();
      });
  }

  run() {
    if (!process.argv.slice(2).length) {
      this.logger.log("-| Snugger CLI |-\n");
      this.program.outputHelp();
    } else {
      this.logger.log("-| Snugger CLI |-\n");
      this.logger.log(
        `Snugger v${this.version} - A CLI for generating type-safe express APIs\n`,
      );
      this.program.parse(process.argv);
    }
  }
}

export default SnuggerCLI;
