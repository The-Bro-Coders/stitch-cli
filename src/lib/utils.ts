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

export const getPackageJsonContent = (projectName: string) => {
  return {
    name: projectName,
    version: "1.0.0",
    main: "index.js",
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
      dev: "nodemon --exec ts-node app.ts",
      build: "tsc",
      start: "node dist/app.js",
    },
    keywords: [],
    author: "",
    license: "ISC",
    description: "",
    dependencies: {
      cors: "^2.8.5",
      dotenv: "^16.4.5",
      express: "^4.21.1",
      mongoose: "^8.7.2",
    },
    devDependencies: {
      "@types/express": "^4.17.17",
      "@types/cors": "^2.8.17",
      "@types/node": "^20.6.0",
      "ts-node": "^10.9.2",
      typescript: "^5.6.3",
    },
  };
};
