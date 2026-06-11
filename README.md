# GenzTeck Official

GenzTeck Official is a full-stack monorepo that contains the public website, admin dashboard, and backend API in one Git repository.

## Project Structure

```text
GenzTeck Official/
├── client/   # Public website - React + Vite
├── admin/    # Admin dashboard - React + Vite
└── server/   # Backend API - Node.js + Express + MongoDB
```

## Tech Stack

| Folder | Purpose | Main Tech |
| --- | --- | --- |
| `client/` | Public website | React, Vite, React Router, Axios |
| `admin/` | Admin dashboard | React, Vite, React Router, Axios |
| `server/` | REST API and database layer | Node.js, Express, MongoDB, Mongoose, JWT |

## Requirements

- Node.js 18 or newer
- npm 9 or newer
- MongoDB Atlas account or local MongoDB

## Environment Setup

Create local environment files before running the apps. Environment files are ignored by Git, so do not commit real secrets.

### `server/.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
UPLOAD_DIR=uploads
NODE_ENV=development
```

You can also copy the existing backend example:

```bash
cd server
cp .env.example .env
```

### `client/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

### `admin/.env`

```env
VITE_API_URL=http://localhost:5000/api
```

## Install Dependencies

Run install separately inside each folder:

```bash
cd server
npm install

cd ../client
npm install

cd ../admin
npm install
```

## Run Locally

Start the backend first:

```bash
cd server
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

Start the public website:

```bash
cd client
npm run dev
```

Client runs on:

```text
http://localhost:5173
```

Start the admin dashboard:

```bash
cd admin
npm run dev
```

Admin runs on:

```text
http://localhost:5174
```

## Seed Database

The server includes a seed script for default data and admin login.

```bash
cd server
npm run seed
```

Default admin:

```text
Email: admin@genzteck.com
Password: Admin@12345
```

Important: the seed script may clear existing database records before inserting default records. Do not run it on production data.

## Useful Scripts

### Client

```bash
cd client
npm run dev
npm run build
npm run preview
npm run lint
```

### Admin

```bash
cd admin
npm run dev
npm run build
npm run preview
npm run lint
```

### Server

```bash
cd server
npm run dev
npm start
npm run seed
```

## Production Build

Build frontend apps:

```bash
cd client
npm run build

cd ../admin
npm run build
```

Start backend:

```bash
cd server
npm start
```

## Git Notes

This repository is meant to be pushed as one monorepo. Keep these files tracked:

- Source code in `client/`, `admin/`, and `server/`
- `package.json` and `package-lock.json` files for all three apps
- Safe example files such as `server/.env.example`

Do not commit:

- `node_modules/`
- `dist/` or `build/`
- `.env` files
- logs, cache files, uploads, and local editor files

## Contact

GenzTeck  
Email: info.genzteck@gmail.com  
Phone: +91 87695 92668  
Website: https://genzteck.in
