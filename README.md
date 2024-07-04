# real-state-api

## Table of Contents

- [real-state-api](#real-state-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Test Using Postman](#test-using-postman)

## Description

`real-state-api` is a Node.js application designed for managing real estate listings. The application is built using the Koa framework and TypeScript, and it uses SQLite3 for database management.

## Setup

To install the necessary dependencies, run the following command:

```bash
## Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

## Install Node.js
nvm install

## Enable pnpm
corepack enable pnpm
pnpm install

```

## Usage

```bash
## Start API prod mode
npm run start

## Start API dev mode
npm run start

### Build application
npm run build

```

## Test Using Postman

You can import `real-state-api.postman_collection.json` into Postman to easily test the API endpoints.
