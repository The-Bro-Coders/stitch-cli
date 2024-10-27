<p align="center">
<img src="./docs/snugger-logo.png" alt="snugger logo" width="200"/>
</p>

##

<h1 align="center">
<a href="https://www.npmjs.com/package/snugger">
  <img src="https://img.shields.io/npm/v/snugger.svg" alt="npm version">
</a>
<a href="https://github.com/The-Finding-Labs/snugger/blob/main/LICENSE"> 
  <img src="https://img.shields.io/github/license/The-Finding-Labs/snugger"/>
</a>
<!--<a href="https://github.com/The-Finding-Labs/snugger/actions"> -->
<!--  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/The-Finding-Labs/snugger/.github%2Fworkflows%2Fbuild.yml">-->
<!--</a>-->
</h1>

Snugger is a simple and lightweight library for generating type-safe API project with [Express](https://expressjs.com/). It is designed to help you quickly build a RESTful API project with [TypeScript](https://www.typescriptlang.org/).

It is named Snugger because it technically means <i>Tightly fit</i> and it is designed to be easy to use and not add unnecessary complexity to your project.

---

## ⚙️ Installation

If you do not have Node installed on your device, you are required to install it to run this tool.

You can install Snugger CLI using npm:

```bash
npm install -g snugger@latest
```

Additionally you can use yarn to install Snugger CLI:

```bash
yarn add -g snugger@latest
```

## ⚡Usage

To create a new Snugger project:

```bash
snugger create
```

```bash

-| Snugger CLI |-

Snugger v1.0.1 - A CLI for generating type-safe express APIs

Enter project name: [your-project-name]

Would you like to install dependencies? [y/n]

```

or

To get help and see all the flags:

```bash
snugger help
```

After creating the project run this:

```bash
cd <your-project-name>

npm run dev
```

It will run your Express Typescript App.

<!--<p align="center">-->
<!--  <img src="https://github.com/user-attachments/assets/c7d06b42-bad8-46ec-9301-c4b0c1b637b9" />-->
<!--</p>-->

Snugger generates the starting files for your project. You can configure your project folder and files according to your requirements.

To set up your project further, refer to the [Express Official docs](https://expressjs.com/)

## 🔷 Example

If you run a command like:

```bash
snugger create
```

```bash
-| Snugger CLI |-

Snugger v1.0.1 - A CLI for generating type-safe express APIs

Enter project name: express-typescript-api

Would you like to install dependencies? yes

```

It will create a new project in a directory named `express-typescript-api` with `package.json` like this :

```bash
{
  "name": "safe-fb",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon --exec ts-node app.ts",
    "build": "tsc",
    "start": "node dist/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "mongoose": "^8.7.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/cors": "^2.8.17",
    "@types/node": "^20.6.0",
    "ts-node": "^10.9.2",
    "typescript": "^5.6.3"
  }
}
```

<!-- Please refer to [USAGE.md](docs/USAGE.md) for more detailed usage instructions. -->

## 👥 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on how to contribute to this project.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
