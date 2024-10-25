// interfaces/SnuggerCLIInterface.ts

import { Command } from "commander";
import Logger from "../lib/logger.js";

// export enum LogType {
//   INFO = "INFO",
//   ERROR = "ERROR",
//   WARN = "WARN",
//   SUCCESS = "SUCCESS",
// }

export interface Snugger {
  logger: Logger;
  program: Command;
  version: string;
  setupCommands(): void;
  run(): void;
}
