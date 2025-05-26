# Express server template

Starter code for a typescript express server.

## Project Structure

```
src/
├── router/                # REST API routes
│   ├── example.ts         # Example endpoint
│   └── router.ts          # Router setup
├── types/                 # TypeScript type definitions
│   └── example.ts         # Example interface
└── index.ts               # Main application entry point
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/asifmMustafa/express-template.git
cd express-template
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
PORT=3000  # Optional, defaults to 3000
```

4. Start the development server

```bash
npm run dev
```

### Production Deployment

1. Build the TypeScript code

```bash
npm run build
```

2. Start the production server

```bash
npm start
```

## Available Commands

- `npm run dev`: Start development server with hot-reloading using nodemon
- `npm run build`: Build TypeScript to JavaScript
- `npm start`: Start the production server
- `npm test`: Run tests (not implemented yet)

## API Endpoints

- **GET /example**: Get example response

## Next steps

After setting up change git url to the actual repo

```
git remote set-url origin https://github.com/username/something.git
```

Delete package-lock.json, rename project name and update description in package.json and do npm i again.
