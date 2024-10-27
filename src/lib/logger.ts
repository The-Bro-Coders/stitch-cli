import chalk from "chalk";

class Logger {
  log(message: string): string {
    const logMessage = `${message}`;
    console.log(chalk.cyan(logMessage));
    return logMessage;
  }

  info(message: string): string {
    const logMessage = `[INFO] ${message}`;
    console.log(chalk.blue(logMessage));
    return logMessage;
  }
  success(message: string): string {
    const logMessage = `[SUCCESS] ${message}`;
    console.log(chalk.green(logMessage));
    return logMessage;
  }

  warn(message: string): string {
    const logMessage = `[WARN] ${message}`;
    console.log(chalk.yellow(logMessage));
    return logMessage;
  }

  error(message: string, error?: any): string {
    const logMessage = `[ERROR] ${message}`;
    console.log(chalk.red(logMessage + "\n" + error?.message));
    return logMessage;
  }
}

export default Logger;
