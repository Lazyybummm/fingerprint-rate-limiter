🚦 Redis Rate Limiter (Express + Node.js)

A simple and efficient rate limiting middleware built using Express.js and Redis.
It limits the number of requests per unique key (sent in request body) within a fixed limit.

✨ Features

✅ Express middleware-based rate limiting

✅ Uses Redis for fast counters

✅ Blocks requests after reaching limit

✅ Easy to plug into any Express backend

✅ Returns proper HTTP status codes (429 Too Many Requests)

🧠 How it Works

For every request:

Middleware reads a unique key from request body.

Redis stores the request count for that key.

If count exceeds the limit, request is blocked with 429.

Otherwise, request continues to the actual route handler.

🛠 Tech Stack

Node.js

Express.js

Redis

redis (Node client library)

📦 Installation
1) Clone the repository
git clone <your-repo-url>
cd <project-folder>

2) Install dependencies
npm install
