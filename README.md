# Simple Node.js API

A basic REST API built with Express.js

## Prerequisites

- Node.js 20.x
- npm 9.x+

## Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Health check endpoint |
| GET | /api/users | Get all users |
| POST | /api/users | Create a new user |

## Docker

Build the image:
```bash
docker build -t simple-node-api .
```

Run the container:
```bash
docker run -p 3000:3000 simple-node-api
```

## GitHub Actions

The project includes a GitHub Actions workflow that can be triggered manually to:
- Build the application
- Create an artifact
- Upload the artifact to GitHub

To trigger the workflow, go to the "Actions" tab in your GitHub repository and select "Build and Package" workflow.