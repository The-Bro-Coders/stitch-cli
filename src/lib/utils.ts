import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getVersion = async (): Promise<string> => {
  try {
    const packageJson = await readFile(
      resolve(__dirname, "../../package.json"),
      "utf-8",
    );
    const { version } = JSON.parse(packageJson);
    return version;
  } catch (error) {
    console.error("Error reading package.json", error);
    return "unknown";
  }
};

export const copyTemplateFiles = async (
  fs: any,
  templateDir: string,
  projectDir: string,
) => {
  try {
    await fs.copy(templateDir, projectDir);

    return true;
  } catch (error) {
    console.error("Error copying template files", error);
  }
};
