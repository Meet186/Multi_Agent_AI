# Multi-Agent AI Project — System Requirements

Before cloning and running this project, make sure the following software is installed on your system.

## 1. Git

Git is required to clone the repository and work with branches.

Download and install Git:

* Git: https://git-scm.com/

Verify installation:

```bash
git --version
```

---

## 2. Node.js & npm

The project uses **JavaScript with Node.js** for the frontend/backend.

Install **Node.js 20+ LTS**.

Download:

* Node.js: https://nodejs.org/

Verify installation:

```bash
node --version
```

```bash
npm --version
```

---

## 3. Docker Desktop

Docker is required for running project services such as **Redis** and any other containerized services.

Install Docker Desktop:

* Docker: https://www.docker.com/products/docker-desktop/

After installation, make sure **Docker Desktop is running**.

Verify:

```bash
docker --version
```

```bash
docker compose version
```

---

## 4. Redis

Redis does **not need to be installed directly on your machine**.

Redis is already configured to run through **Docker**.

After Docker Desktop is installed, the project will start Redis using the project's Docker configuration.

For example:

```bash
docker compose up -d redis
```

Verify the Redis container:

```bash
docker ps
```

You should see the Redis container running.

> **Important:** Do not install Redis separately if the project uses the Docker Redis image.

---

## 5. MongoDB

The project uses MongoDB.

You need access to either:

### MongoDB Atlas

If the project uses MongoDB Atlas, you only need the connection string provided/configured for development.

You do **not** need to install MongoDB locally.

### OR Local MongoDB

If the project uses a local MongoDB server, install MongoDB Community Edition.

Download:

* MongoDB: https://www.mongodb.com/try/download/community

MongoDB Compass is optional but recommended for viewing the database.

---

## 6. Postman OR Thunder Client

You need an API testing tool for testing backend APIs.

You can install **either Postman or Thunder Client**.

### Option 1 — Postman

Download:

* Postman: https://www.postman.com/downloads/

Useful for testing:

```text
POST
GET
PUT
PATCH
DELETE
```

APIs.

### Option 2 — Thunder Client

Thunder Client is a VS Code extension.

Install it directly from the VS Code Extensions marketplace.

Search:

```text
Thunder Client
```

> You only need **one** of these. Postman and Thunder Client are not required simultaneously.

---

## 7. Code Editor / IDE

Install any code editor or IDE you prefer.

Recommended:

* VS Code

Download:

* VS Code: https://code.visualstudio.com/

---

## 8. AWS CLI — If Required

If the project requires AWS services directly from the local machine, install AWS CLI.

Download:

* AWS CLI: https://aws.amazon.com/cli/

Verify:

```bash
aws --version
```

AWS CLI may not be required if AWS credentials/services are handled through another method.

---

## 9. Python — Only If Required

If your **LangChain/LangGraph/AI service is written in Python**, install Python 3.11+.

Download:

* Python: https://www.python.org/downloads/

Verify:

```bash
python --version
```

If your entire LangChain/LangGraph implementation is written in **JavaScript/Node.js**, Python is **not required**.

---

# Complete Software Checklist

Before starting the project, make sure you have:

* [ ] Git
* [ ] Node.js 20+ LTS
* [ ] npm
* [ ] Docker Desktop
* [ ] MongoDB / MongoDB Atlas access
* [ ] Postman **or** Thunder Client
* [ ] VS Code / preferred IDE
* [ ] AWS CLI — if required
* [ ] Python 3.11+ — only if the AI service uses Python

---

# Verify Everything

Run these commands after installation:

```bash
git --version
```

```bash
node --version
```

```bash
npm --version
```

```bash
docker --version
```

```bash
docker compose version
```

If using Python:

```bash
python --version
```

If using AWS CLI:

```bash
aws --version
```

---

# Important

You **do not need to install Redis separately**.

Redis is provided through Docker:

```text
Your Machine
     │
     └── Docker Desktop
            │
            └── Redis Container
```

The same approach can be used for other infrastructure services that are defined in the project's `docker-compose.yml`.

After installing these prerequisites, clone the repository and follow the project's `.env.example` and setup instructions.
