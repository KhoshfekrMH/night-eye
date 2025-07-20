# 🦉 Night Eye

![Night Eye Logo](./assets/ChatGPT%20Image%20Jul%2021,%202025,%2012_35_55%20AM.png)

**Night Eye** is a fullstack monorepo built with modern tooling to deliver a fast, scalable, and dark-themed user experience. This project uses `pnpm` workspaces to manage both frontend and backend apps in a clean and modular structure.

---

## 🗂 Project Structure

```

night-eye/
├── apps/
│   ├── backend/        # Express.js API
│   └── frontend/       # Vite + React.js client
├── assets/             # Shared static assets (e.g., logo)
├── package.json        # Root monorepo package

````

---

## 🛠 Tech Stack

| Layer     | Tech                             |
|-----------|----------------------------------|
| Frontend  | React 19, Vite, ESLint           |
| Backend   | Express.js                       |
| Tooling   | pnpm workspaces, ESM modules     |

---

## 📦 Monorepo Setup

This repo uses [`pnpm` workspaces](https://pnpm.io/workspaces) to manage multiple apps.

### 📁 Folder Initialization Flow

```bash
# 1. Clone the repo
git clone https://github.com/your-username/night-eye.git
cd night-eye

# 2. Install all dependencies in monorepo
pnpm install

# 3. Start backend server
cd apps/backend
pnpm run dev  # You need to create this script

# 4. Start frontend dev server
cd ../frontend
pnpm run dev
````

> 🧩 Each app manages its own `package.json` and dependencies. Shared configuration or utilities can be added in a future `/packages` folder.

---

## 🚧 Development Guide
Under Development
---

## 🖤 License

This project is licensed under the **ISC License**.

