// Complete Revision Material, Cheat Sheets, Glossary & Flashcards from PPT content
export const revisionData = {
  "chapterSummaries": [
    {
      "id": "rev-day-1",
      "courseId": "pm2-01-web-stack",
      "code": "PM2-01 & PM2-02",
      "title": "Software Architecture, Web Fundamentals & The Modern Stack",
      "keyPoints": [
        "Every application has 3 layers: Client (presentation), Server (logic & business rules), Database (persistent storage).",
        "A user tap triggers: DNS Lookup -> TLS Handshake (HTTPS) -> Request Sent -> Server Processing + DB Query -> Response Sent -> UI Update.",
        "HTTP Status Codes: 2xx = Success (200), 3xx = Redirection (301), 4xx = Client Error (400, 404), 5xx = Server Error (500).",
        "Front-End owns visual presentation and responsiveness; Back-End owns data validation and security ('Never trust the client').",
        "Rendering Strategies: CSR for dashboards, SSR for SEO e-commerce catalogs, SSG for static docs, Hybrid (Next.js) for modern SaaS.",
        "Monoliths are simple to build and debug; Microservices allow autonomous teams to scale independently at the cost of network complexity.",
        "80% of new business mobile apps use Cross-Platform (React Native / Flutter) to save 50% dev cost while keeping 90-95% native performance.",
        "DevOps uses CI/CD pipelines to automate testing and release, while Observability (Datadog/Sentry) catches errors before users notice."
      ],
      "mustRememberQuote": "Think in layers (Client, Server, Data). Ask about trade-offs (Speed vs Cost vs Scalability). You don't need to code; you need enough vocabulary to ask great questions."
    },
    {
      "id": "rev-day-2",
      "courseId": "pm2-02-apis-integrations",
      "code": "PM2-03 & PM2-04",
      "title": "APIs, Webhooks & System Integrations for PMs",
      "keyPoints": [
        "API = The Waiter who brings your request from the table (client app) to the kitchen (server) and returns the meal (data).",
        "4 Ways APIs appear: Outside Service (Google Maps), Inside Company (microservices), API as Product (Stripe), API as Shortcut (ready-made auth).",
        "The 5 Parts of Every API Call: (1) Address/Endpoint, (2) Action/HTTP Method, (3) ID Badge/Auth Token, (4) Request Body JSON, (5) Reply/Status Code.",
        "Diagnostic Status Codes: 200 = OK, 400 = Bad Request, 401 = Missing/Expired Auth, 403 = Forbidden Permission, 404 = Not Found, 429 = Rate Limit Exceeded, 500 = Server Crash.",
        "Polling vs Webhooks Rule: Time-sensitive events (payments, delivery) = Instant Webhooks; Non-urgent batch data = Polling.",
        "The 3 Webhook Safety Rules: (1) Idempotency (handle repeats safely), (2) Failure Auto-Retries, (3) Verify Cryptographic Signature.",
        "5-Question Partner Checklist: Does it do what we need? What is the rate limit? What happens when they go down? What will it cost at scale? How hard to switch later?",
        "Build vs Buy: Build your Secret Sauce (core IP/fraud model); Buy Commodity Plumbing (SMS, maps, payments).",
        "'It's just an API call' Myth: Reliable integration requires 6 hidden steps (Docs, Auth, Schema Mapping, Error Handling, Testing, Monitoring) = 2–4 weeks minimum."
      ],
      "mustRememberQuote": "A partner outage is YOUR product's outage in the user's eyes. Always have a graceful backup plan."
    },
    {
      "id": "rev-day-3",
      "courseId": "pm2-03-databases-data-modeling",
      "code": "PM2-05 & PM2-06",
      "title": "Databases, Data Modeling & SQL for Product Managers",
      "keyPoints": [
        "A Database is a strict spreadsheet that enforces types, primary key uniqueness, foreign key relationships, and ACID consistency.",
        "SQL = Structured tables, fixed schema, vertical scale, ACID transactions (PostgreSQL, MySQL).",
        "NoSQL = Flexible documents, dynamic schema, horizontal scale, high write throughput (MongoDB, DynamoDB, Redis).",
        "In ER Diagrams, Crow's Foot indicates 'Many' (1:N relationship). Always check the ER diagram to see if feature data already exists.",
        "Normalization splits flat tables into linked tables to eliminate duplication, update anomalies, and delete anomalies.",
        "The 5 Essential SQL Commands: SELECT (columns), FROM (table), WHERE (filters), JOIN (link tables), GROUP BY (summarize).",
        "The Golden Rule of Analytics: If you did not instrument it before launch, you can NEVER measure it after. Retroactive tracking is impossible.",
        "Batch Processing is scheduled and cost-effective (daily sales); Stream Processing is real-time (sub-second fraud alerts) but costs 5–10x more.",
        "The '1-Day vs 2-Sprint' Test: If data exists in the schema, it's an easy query; if you need new columns or split tables, it's a database migration.",
        "Indian Tech Scale: PhonePe uses CockroachDB (distributed ACID), Zerodha uses TimescaleDB (time-series), Ola uses PostGIS (geospatial)."
      ],
      "mustRememberQuote": "Your schema is not an engineering detail—it is the contract your product lives by and determines feature roadmap velocity."
    },
    {
      "id": "rev-day-4",
      "courseId": "pm2-04-tech-stacks-guide",
      "code": "PM2-Tech-Stacks-Guide",
      "title": "Comprehensive Technology Stacks Field Guide",
      "keyPoints": [
        "Tech Stack has 4 layers: Frontend, Backend, Database, and Infrastructure.",
        "Backend Languages: Python (AI & data), TypeScript (full-stack web), Java/C# (enterprise & banking), Go (cloud infra & microservices), Rust (systems & WASM).",
        "Mobile Strategy: Cross-Platform (React Native / Flutter) is the default for 80% of business apps; Go Native only for 3D/AR hardware-intensive apps.",
        "Cloud Providers: AWS (~31% share, broadest), Azure (~24% share, enterprise Microsoft), GCP (~12% share, BigQuery & AI).",
        "Cloud Cost Control: Monitor Compute instances, Storage lifecycle policies, Bandwidth egress (use CDNs), and Serverless invocation counts.",
        "Generative AI Stack: Hardware (GPUs/TPUs) -> Frameworks (PyTorch) -> Models (GPT-4/Llama) -> Application RAG (LangChain + Vector DBs).",
        "Legacy Systems: COBOL on IBM mainframes runs 90% of credit cards. Modernize incrementally via API Encapsulation (Strangler Fig).",
        "The 2024+ Startup Stack: Next.js + TypeScript + PostgreSQL (Supabase/Neon) + Tailwind CSS + Vercel.",
        "OWASP Top 10: Broken Access Control is #1. India DPDP Act imposes fines up to ₹250 Crore for data breaches.",
        "The 7 Dimensions: Team Expertise, Hiring Market, Problem Fit, Scalability, Time to Market, Total Cost, Vendor Maturity."
      ],
      "mustRememberQuote": "The best tech stack is the one your team ships with today—optimize later. Avoid premature microservices and 'Use what Netflix uses'."
    },
    {
      "id": "rev-day-5",
      "courseId": "pm2-05-python-ecosystem",
      "code": "Tech-Stacks-Python",
      "title": "Tech Stacks Deep Dive: The Python Ecosystem",
      "keyPoints": [
        "Python lives in the Logic (Backend) Tier. Created in 1991 by Guido van Rossum with syntax close to plain English.",
        "Python trades raw CPU speed for developer iteration velocity. PyPI has 500,000+ packages.",
        "The Global Interpreter Lock (GIL) limits true multi-threading in CPython; concurrency is achieved via async I/O or multi-processing.",
        "Desktop GUI: Tkinter for built-in zero-setup internal utilities; PyQt for native commercial software (paid license for closed-source).",
        "Web Backend Triad: Django ('batteries included' with ORM & admin), Flask (minimal microframework), FastAPI (modern async default with auto /docs).",
        "FinTech Architecture: Mobile App -> API Gateway -> FastAPI Async -> Plaid Banking API -> PostgreSQL (costs under $500/mo on AWS).",
        "Data Science & AI: Pandas (dataframes), Scikit-learn (classic ML), PyTorch (deep learning), LangChain (LLM RAG apps).",
        "The 4-Step Packaging Pipeline: Install (`pip`) -> Isolate (`venv`) -> Lock exact versions (`Poetry`/`uv`) -> Containerize (`Docker`)."
      ],
      "mustRememberQuote": "Python wins in the marketplace when development speed and rapid iteration matter more than raw computer execution throughput."
    }
  ],
  "cheatSheets": [
    {
      "id": "cs-http-codes",
      "title": "HTTP Status Codes Diagnostic Cheat Sheet",
      "category": "Web Protocols & APIs",
      "description": "Essential status codes and their immediate plain-English action items.",
      "headers": [
        "Code",
        "Name",
        "Category",
        "What It Means",
        "What PM / Tech Team Should Do"
      ],
      "rows": [
        [
          "200",
          "OK",
          "2xx Success",
          "Request succeeded and response payload delivered",
          "Everything is working normally"
        ],
        [
          "201",
          "Created",
          "2xx Success",
          "New resource was successfully created on server (POST)",
          "Verify created ID is returned"
        ],
        [
          "301",
          "Moved Permanently",
          "3xx Redirect",
          "The requested URL has permanently moved to a new route",
          "Update bookmark or client route mapping"
        ],
        [
          "400",
          "Bad Request",
          "4xx Client Error",
          "Request payload is malformed or missing required JSON fields",
          "Inspect the JSON request body sent by the client app"
        ],
        [
          "401",
          "Unauthorized",
          "4xx Client Error",
          "Authentication credentials are missing, invalid, or expired",
          "Check if user login token or partner API key has expired"
        ],
        [
          "403",
          "Forbidden",
          "4xx Client Error",
          "User is authenticated, but lacks permissions for this action",
          "Upgrade user role permissions or subscription tier"
        ],
        [
          "404",
          "Not Found",
          "4xx Client Error",
          "The requested endpoint URL or database record ID does not exist",
          "Verify endpoint path spelling or check if record was deleted"
        ],
        [
          "429",
          "Too Many Requests",
          "4xx Client Error",
          "App exceeded partner API speed limit (Rate Limit)",
          "Slow down call frequency; add exponential backoff retry logic"
        ],
        [
          "500",
          "Internal Server Error",
          "5xx Server Error",
          "Remote backend server crashed due to an unhandled exception",
          "Check backend crash logs (Sentry/Datadog) and deploy fix"
        ],
        [
          "502",
          "Bad Gateway",
          "5xx Server Error",
          "Reverse proxy (Nginx) received an invalid response from backend",
          "Check if backend application container is down or restarting"
        ],
        [
          "503",
          "Service Unavailable",
          "5xx Server Error",
          "Server is overloaded or undergoing scheduled maintenance",
          "Implement retry-after header and show friendly maintenance screen"
        ],
        [
          "504",
          "Gateway Timeout",
          "5xx Server Error",
          "Backend took too long to respond before proxy gave up",
          "Optimize slow database queries or increase timeout threshold"
        ]
      ]
    },
    {
      "id": "cs-api-parts",
      "title": "The 5 Parts of Every API Call",
      "category": "API Engineering",
      "description": "The standardized components of every HTTP API request across the web.",
      "headers": [
        "Part #",
        "Simple Concept",
        "Technical Term",
        "Plain English Explanation",
        "Swiggy Example"
      ],
      "rows": [
        [
          "1",
          "The Address",
          "Endpoint / URL",
          "The exact internet location you are calling",
          "https://api.swiggy.com/v1/restaurants/nearby"
        ],
        [
          "2",
          "The Action",
          "HTTP Method",
          "What action you want the server to perform (GET, POST, PUT, DELETE)",
          "GET (read nearby restaurants)"
        ],
        [
          "3",
          "Your ID Badge",
          "Auth Header / API Key",
          "Cryptographic token proving your identity and subscription tier",
          "Authorization: Bearer eyJhbGci..."
        ],
        [
          "4",
          "The Data",
          "Request Body (JSON)",
          "The structured payload of parameters submitted with the call",
          "{\"latitude\": 12.9716, \"longitude\": 77.5946}"
        ],
        [
          "5",
          "The Reply",
          "Response + Status Code",
          "The server's answer: numeric status plus structured JSON payload",
          "Status 200 OK + [{\"id\": 101, \"name\": \"Truffles\"}]"
        ]
      ]
    },
    {
      "id": "cs-sql-fluency",
      "title": "The 5 SQL Commands Every PM Must Master",
      "category": "Data & SQL",
      "description": "Essential SQL commands for self-serve analytics, cohorts, and dashboards.",
      "headers": [
        "Command",
        "Execution Role",
        "Plain English Meaning",
        "Sample PM Query Syntax"
      ],
      "rows": [
        [
          "SELECT",
          "Choose Columns",
          "'Show me these specific metrics/fields'",
          "SELECT users.city, COUNT(orders.id) AS total_orders"
        ],
        [
          "FROM",
          "Choose Table",
          "'Look inside this database table'",
          "FROM orders"
        ],
        [
          "JOIN",
          "Combine Tables",
          "'Connect related data via Foreign Key'",
          "JOIN users ON orders.user_id = users.id"
        ],
        [
          "WHERE",
          "Filter Rows",
          "'Only include rows matching this criteria'",
          "WHERE orders.status = 'delivered' AND orders.order_date >= '2024-01-01'"
        ],
        [
          "GROUP BY",
          "Aggregate Summary",
          "'Summarize metrics by category/segment'",
          "GROUP BY users.city ORDER BY total_orders DESC"
        ]
      ]
    },
    {
      "id": "cs-polling-vs-webhooks",
      "title": "Polling vs Webhooks Architecture Comparison",
      "category": "System Integrations",
      "description": "When to pull data repeatedly versus when to accept instant pushed notifications.",
      "headers": [
        "Dimension",
        "Checking (Polling)",
        "Instant Notification (Webhook)"
      ],
      "rows": [
        [
          "Core Mechanism",
          "Client pulls: repeatedly makes API calls asking 'Any update?'",
          "Server pushes: partner calls your endpoint the instant event occurs"
        ],
        [
          "Network Efficiency",
          "Wasteful: 95%+ of repeated requests return 'No update'",
          "Highly efficient: network calls only occur when an event triggers"
        ],
        [
          "Data Latency",
          "Delayed: you only find out on the next polling interval (5–60s)",
          "Real-time: notifications arrive in milliseconds to seconds"
        ],
        [
          "Setup Complexity",
          "Simple: client just runs a scheduled timer loop",
          "Requires public webhook endpoint, firewall rules, and safety logic"
        ],
        [
          "Safety Rules Needed",
          "Basic authentication headers",
          "Idempotency (handle repeats), Auto-retries on 500, Signature verification"
        ],
        [
          "Ideal Use Case",
          "Slow-moving batch reports, daily inventory sync, non-urgent status",
          "Payment confirmations (UPI/Stripe), food delivery tracking, live chat"
        ]
      ]
    },
    {
      "id": "cs-sql-vs-nosql",
      "title": "SQL vs NoSQL vs Polyglot Persistence Matrix",
      "category": "Data Architecture",
      "description": "Choosing the right database engine based on data schema, transactions, and scale.",
      "headers": [
        "Dimension",
        "SQL (Relational)",
        "NoSQL (Document/Key-Value)",
        "Polyglot Persistence (Modern Hybrid)"
      ],
      "rows": [
        [
          "Schema",
          "Strict, pre-defined fixed tables with columns",
          "Flexible, dynamic schema-less JSON documents",
          "SQL for core schemas; NoSQL for dynamic sub-systems"
        ],
        [
          "Scaling Pattern",
          "Vertical (larger server CPU/RAM) — hard to shard",
          "Horizontal (distributed clustering across cheap nodes)",
          "Relational primary DB with read replicas + distributed cache"
        ],
        [
          "Data Integrity",
          "ACID guarantees (Atomicity, Consistency, Isolation, Durability)",
          "BASE / Eventual Consistency (speed & availability first)",
          "ACID for financial balances; Eventual consistency for social feeds"
        ],
        [
          "Relationships",
          "Multi-table relational JOINs via Foreign Keys",
          "Embedded sub-documents or duplicated records",
          "JOINs for account relationships; Denormalized for search"
        ],
        [
          "Leading Examples",
          "PostgreSQL, MySQL, SQL Server, CockroachDB",
          "MongoDB, Redis, DynamoDB, Cassandra",
          "PostgreSQL (Core) + Redis (Cache) + Elasticsearch (Search)"
        ],
        [
          "Best Suited For",
          "Financial accounts, order ledgers, user authentication",
          "Real-time clickstreams, IoT telemetry, social feeds",
          "High-scale consumer apps (Swiggy, Flipkart, Uber)"
        ]
      ]
    },
    {
      "id": "cs-backend-languages",
      "title": "10 Backend Languages Quick Reference Matrix",
      "category": "Tech Stacks",
      "description": "Evaluate backend languages by primary use, killer feature, and when to avoid.",
      "headers": [
        "Language",
        "Primary Use Domain",
        "Killer Feature",
        "Avoid For",
        "Hiring Market"
      ],
      "rows": [
        [
          "Python",
          "AI/ML, Data Science, Web APIs",
          "Undisputed AI ecosystem & English-like readable syntax",
          "Native consumer mobile apps, ultra-high concurrency",
          "Abundant talent; fast onboarding"
        ],
        [
          "JavaScript (Node)",
          "Full-Stack Web, Real-time APIs",
          "Universal: runs in browser and server with shared code",
          "Heavy CPU-bound mathematical operations",
          "Largest global developer pool"
        ],
        [
          "TypeScript",
          "Type-Safe Enterprise Full-Stack",
          "Static typing eliminates runtime bugs before deployment",
          "Throwaway 1-day proof-of-concept scripts",
          "Very high demand; standard in 2024+"
        ],
        [
          "Java",
          "Enterprise Banking, Android",
          "Rock-solid JVM maturity, thread safety, enterprise support",
          "Rapid 2-week startup prototyping",
          "Abundant enterprise engineering talent"
        ],
        [
          "C# / .NET",
          "Enterprise SaaS, Game Dev (Unity)",
          "Deep integration with Microsoft Azure and Office ecosystem",
          "Linux-only teams without Microsoft experience",
          "Strong enterprise corporate pool"
        ],
        [
          "Go (Golang)",
          "Cloud Infrastructure, High-Perf APIs",
          "Fast compilation, single binary, lightweight goroutines",
          "Complex business apps requiring deep object inheritance",
          "Scarce talent; 30-50% higher salaries"
        ],
        [
          "Rust",
          "Systems Programming, WebAssembly",
          "Guaranteed memory safety without garbage collection",
          "Standard CRUD web applications (too slow to write)",
          "Very scarce and expensive talent"
        ],
        [
          "PHP",
          "Web CMS, E-Commerce (Laravel)",
          "Powers 43% of the web; Laravel framework elegance",
          "Low-latency microservices, ML pipelines",
          "Abundant and cost-effective talent"
        ],
        [
          "Ruby",
          "Fast Web Startups (Rails)",
          "Developer happiness, rapid scaffolding conventions",
          "High-concurrency streaming services",
          "Smaller, dedicated startup pool"
        ],
        [
          "Kotlin",
          "Native Android, Modern JVM Backend",
          "Concise modern syntax with 100% Java interop",
          "Teams without existing JVM infrastructure",
          "Strong Android talent pool"
        ]
      ]
    },
    {
      "id": "cs-cloud-mapping",
      "title": "Cloud Services Comparative Mapping: AWS vs Azure vs GCP",
      "category": "Cloud Architecture",
      "description": "Cross-provider translation of core cloud infrastructure components.",
      "headers": [
        "Infrastructure Category",
        "AWS (Amazon ~31%)",
        "Azure (Microsoft ~24%)",
        "GCP (Google ~12%)",
        "Developer / Startup Alternative"
      ],
      "rows": [
        [
          "Virtual Machines",
          "EC2",
          "Virtual Machines",
          "Compute Engine",
          "Render, Railway, DigitalOcean"
        ],
        [
          "Serverless Functions",
          "Lambda",
          "Azure Functions",
          "Cloud Functions",
          "Vercel Functions, Cloudflare Workers"
        ],
        [
          "Object Blob Storage",
          "Amazon S3",
          "Blob Storage",
          "Cloud Storage",
          "Cloudflare R2, Supabase Storage"
        ],
        [
          "Managed Relational DB",
          "RDS / Aurora",
          "Azure SQL Database",
          "Cloud SQL",
          "Supabase, Neon, PlanetScale"
        ],
        [
          "In-Memory Caching",
          "ElastiCache (Redis)",
          "Azure Cache for Redis",
          "Memorystore",
          "Upstash Redis"
        ],
        [
          "Managed Kubernetes",
          "EKS",
          "AKS",
          "GKE",
          "Render, Fly.io"
        ],
        [
          "AI & Foundation Models",
          "Bedrock / SageMaker",
          "Azure OpenAI Service",
          "Vertex AI / Gemini",
          "Hugging Face, Replicate"
        ],
        [
          "Global CDN",
          "CloudFront",
          "Azure CDN",
          "Cloud CDN",
          "Cloudflare, Fastly"
        ]
      ]
    },
    {
      "id": "cs-owasp-top-10",
      "title": "OWASP Top 10 Security Checklist for PMs",
      "category": "Cybersecurity & Compliance",
      "description": "The most common web application vulnerabilities and their prevention.",
      "headers": [
        "Rank",
        "Vulnerability Name",
        "Simple Explanation",
        "PM Prevention Checklist"
      ],
      "rows": [
        [
          "#1",
          "Broken Access Control",
          "Users can access screens or manipulate records belonging to other users",
          "Verify server-side authorization on every single API endpoint; test role privileges"
        ],
        [
          "#2",
          "Cryptographic Failures",
          "Sensitive data (passwords, credit cards) transmitted or stored in plain text",
          "Enforce HTTPS everywhere; encrypt database disks with AES-256; hash passwords"
        ],
        [
          "#3",
          "Injection (SQL / XSS)",
          "Malicious input tricks database or browser into executing hostile code",
          "Use parameterized queries (ORMs); sanitize and validate all user inputs"
        ],
        [
          "#4",
          "Insecure Design",
          "Architecture lacks security threat modeling during initial wireframing",
          "Conduct security threat modeling in the PRD and UI design phase"
        ],
        [
          "#5",
          "Security Misconfiguration",
          "Leaving default passwords, debug error screens, or open ports in production",
          "Implement automated security scans; disable debug error traces in production"
        ],
        [
          "#6",
          "Vulnerable Components",
          "Using outdated open-source libraries with known security exploits",
          "Use automated dependency scanners (Dependabot, Snyk) in CI/CD pipeline"
        ],
        [
          "#7",
          "Identification & Auth Failures",
          "Weak passwords, missing brute-force protection, credential stuffing",
          "Enforce Multi-Factor Authentication (MFA), rate-limit login attempts"
        ],
        [
          "#8",
          "Software & Data Integrity",
          "Relying on plugins or code libraries without verifying digital signatures",
          "Verify checksums and enforce CI/CD signing"
        ],
        [
          "#9",
          "Security Logging Failures",
          "Breaches occur but no logs are recorded, leaving attacks undetected for months",
          "Centralize audit logs; set immediate alerting for abnormal login spikes"
        ],
        [
          "#10",
          "Server-Side Request Forgery",
          "Server is tricked into fetching malicious external URLs",
          "Validate and restrict outgoing server network connections"
        ]
      ]
    }
  ],
  "glossary": [
    {
      "term": "API (Application Programming Interface)",
      "definition": "A formal set of rules, protocols, and endpoints that allows one software system to request services or exchange data with another.",
      "example": "Uber calling Google Maps API for route navigation."
    },
    {
      "term": "Endpoint",
      "definition": "A specific URL route exposed by an API that performs a designated function or returns a specific resource.",
      "example": "https://api.swiggy.com/v1/restaurants/nearby"
    },
    {
      "term": "HTTP Method (Verb)",
      "definition": "The standard action indicator in an HTTP request defining whether you are reading, creating, updating, or deleting data.",
      "example": "GET = read, POST = create, PUT = update, DELETE = delete."
    },
    {
      "term": "Status Code",
      "definition": "A 3-digit numeric server response code indicating whether a web request succeeded or failed.",
      "example": "200 = Success, 401 = Unauthorized, 404 = Not Found, 500 = Server Error."
    },
    {
      "term": "Rate Limiting",
      "definition": "A defensive speed limit imposed by an API to cap the maximum number of requests a caller can make in a given timeframe.",
      "example": "IRCTC Tatkal enforces strict rate limits between 10:00–11:00 AM."
    },
    {
      "term": "Webhook",
      "definition": "An asynchronous HTTP callback where an external partner automatically sends an instant HTTP POST notification to your server when an event occurs.",
      "example": "Razorpay instantly notifying an e-commerce backend when a UPI payment succeeds."
    },
    {
      "term": "Idempotency",
      "definition": "A design property guaranteeing that executing the exact same operation multiple times produces the identical outcome without duplicate side effects.",
      "example": "Charging a credit card token twice with the same idempotency key charges the user only once."
    },
    {
      "term": "Primary Key (PK)",
      "definition": "A column or combination of columns in a database table that uniquely identifies every single row.",
      "example": "`user_id` in the Users table."
    },
    {
      "term": "Foreign Key (FK)",
      "definition": "A column in one database table that links directly to the Primary Key of another table, establishing referential integrity.",
      "example": "`user_id` inside an Orders table referencing the Users table."
    },
    {
      "term": "Normalization",
      "definition": "The systematic process of structuring relational database tables to minimize data redundancy and eliminate insert, update, and delete anomalies.",
      "example": "Splitting customer name out of order rows into a dedicated Users table."
    },
    {
      "term": "ACID",
      "definition": "Atomicity, Consistency, Isolation, Durability: the four transactional properties guaranteed by relational databases to prevent financial data loss.",
      "example": "Bank balance transfers either succeed completely or roll back completely."
    },
    {
      "term": "NoSQL",
      "definition": "Non-relational database architectures (document, key-value, graph) offering dynamic schemas and horizontal scaling for high-throughput workloads.",
      "example": "MongoDB storing flexible JSON product catalogs."
    },
    {
      "term": "Polyglot Persistence",
      "definition": "The architectural practice of using different specialized database technologies for different parts of an application.",
      "example": "PostgreSQL for orders, Redis for cache, and Elasticsearch for catalog search."
    },
    {
      "term": "ETL (Extract, Transform, Load)",
      "definition": "The automated data pipeline process of pulling raw data from operational systems, cleaning it, and loading it into a data warehouse for analytics.",
      "example": "Moving daily transaction data from Postgres into Snowflake for executive reporting."
    },
    {
      "term": "Batch Processing",
      "definition": "Executing data jobs on scheduled blocks of data at periodic intervals (hourly, nightly) at lower infrastructure cost.",
      "example": "Flipkart daily seller payout reconciliation report."
    },
    {
      "term": "Stream Processing",
      "definition": "Processing and analyzing data continuously in real-time as each individual event occurs, with sub-second latency.",
      "example": "PhonePe evaluating UPI transactions for fraudulent behavior in under 2 seconds."
    },
    {
      "term": "Virtual DOM",
      "definition": "An in-memory representation of the browser's Document Object Model used by React to compute efficient UI updates.",
      "example": "React computing diffs in memory to update only changed shopping cart badges without repainting the entire page."
    },
    {
      "term": "Server-Side Rendering (SSR)",
      "definition": "Rendering the full HTML content of a web page on the server for each incoming request before transmitting it to the browser.",
      "example": "Next.js pre-rendering e-commerce product pages for optimal Googlebot SEO indexing."
    },
    {
      "term": "Client-Side Rendering (CSR)",
      "definition": "Delivering an empty HTML shell to the browser, which then downloads a JavaScript bundle to construct the UI dynamically.",
      "example": "Internal administrative SaaS dashboards behind an authentication login screen."
    },
    {
      "term": "Monolith",
      "definition": "An architecture where all software features, database connections, and business logic live in a single unified codebase.",
      "example": "Early Shopify or Basecamp running as one unified Ruby on Rails codebase."
    },
    {
      "term": "Microservices",
      "definition": "An architecture where an application is divided into small, autonomous services that communicate across a network via APIs.",
      "example": "Netflix operating hundreds of independent microservices for streaming, billing, and recommendations."
    },
    {
      "term": "Docker / Container",
      "definition": "A lightweight standalone executable package that encapsulates application code, libraries, and runtime dependencies.",
      "example": "Packaging a Python FastAPI service into a Docker image that runs identically on Mac, Windows, and AWS."
    },
    {
      "term": "Kubernetes (K8s)",
      "definition": "An open-source container orchestration engine that automates deploying, scaling, and managing containerized applications across server clusters.",
      "example": "Auto-scaling web containers during festival shopping spikes."
    },
    {
      "term": "Serverless (FaaS)",
      "definition": "A cloud execution model where code functions run only on demand and developers are charged strictly per millisecond of compute.",
      "example": "AWS Lambda executing an image thumbnail resize function only when a user uploads an avatar."
    },
    {
      "term": "PWA (Progressive Web App)",
      "definition": "A web application built with service workers that can be installed to a phone home screen and work offline like a native app.",
      "example": "Pinterest PWA loading fast on low-bandwidth networks in emerging markets."
    },
    {
      "term": "CI/CD",
      "definition": "Continuous Integration and Continuous Delivery: automated pipelines that build, test, security-scan, and deploy code to production.",
      "example": "GitHub Actions running automated unit tests on every pull request before merging."
    },
    {
      "term": "Feature Flags",
      "definition": "Software toggles that allow Product Managers to enable or disable features remotely without deploying new code.",
      "example": "Enabling a new checkout flow for 5% of users in Mumbai using LaunchDarkly."
    },
    {
      "term": "Technical Debt",
      "definition": "The implied future rework and maintenance cost caused by choosing an expedient, quick-and-dirty engineering solution now instead of a proper architecture.",
      "example": "Building on an unnormalized flat table to hit a launch deadline, requiring 3 months of migration later."
    },
    {
      "term": "RAG (Retrieval-Augmented Generation)",
      "definition": "An AI technique that retrieves relevant private company documents from a vector database and passes them to an LLM to generate grounded, factual answers.",
      "example": "An internal HR bot answering maternity leave questions accurately using corporate policy PDFs."
    },
    {
      "term": "Vector Database",
      "definition": "A database optimized for storing and indexing high-dimensional numerical embeddings to perform fast semantic similarity searches.",
      "example": "Pinecone searching product catalogs by visual image similarity."
    },
    {
      "term": "Global Interpreter Lock (GIL)",
      "definition": "A mutex in CPython that permits only one native thread to execute Python bytecode at a time, preventing true CPU multi-threading.",
      "example": "Why Python teams use multi-processing or C extensions for heavy CPU mathematical computations."
    }
  ],
  "flashcards": [
    {
      "front": "What are the 3 tiers of every software application?",
      "back": "1. Presentation Tier (Client / Front-End)\n2. Logic Tier (Server / Back-End)\n3. Data Tier (Database / Storage)"
    },
    {
      "front": "What is the standard port for encrypted HTTPS traffic?",
      "back": "Port 443 (Port 80 is unencrypted HTTP; Port 5432 is PostgreSQL)."
    },
    {
      "front": "What is the difference between 4xx and 5xx HTTP status codes?",
      "back": "4xx = Client Mistake (You sent bad data or bad auth; fix on your side).\n5xx = Server Problem (Their server crashed; retry or notify vendor)."
    },
    {
      "front": "What is the API Restaurant Analogy?",
      "back": "Client = Dining Table / Customer\nServer = Kitchen\nDatabase = Pantry\nAPI = The Waiter carrying requests and responses."
    },
    {
      "front": "When should you use Webhooks instead of Polling?",
      "back": "Use Webhooks for time-sensitive, event-driven updates (payments, rides).\nUse Polling for slow-moving, non-urgent batch data (nightly reports)."
    },
    {
      "front": "What are the 3 safety rules when receiving Webhooks?",
      "back": "1. Handle Repeats (Idempotency)\n2. Handle Failures (Partner auto-retries)\n3. Verify Signatures (Cryptographic authenticity)."
    },
    {
      "front": "What is the Build vs Buy sorting rule for PMs?",
      "back": "Build your Secret Sauce (proprietary algorithms, fraud models, core IP).\nBuy Commodity Plumbing (SMS delivery, maps, card processing)."
    },
    {
      "front": "What is the Primary Key vs Foreign Key distinction?",
      "back": "Primary Key (PK) uniquely identifies a row in its own table.\nForeign Key (FK) links that row to a Primary Key in another table."
    },
    {
      "front": "What is Normalization in relational databases?",
      "back": "Splitting flat tables into linked tables to eliminate duplication, update anomalies, and delete anomalies."
    },
    {
      "front": "What are the 5 core SQL commands every PM must know?",
      "back": "SELECT (choose columns)\nFROM (choose table)\nWHERE (filter rows)\nJOIN (combine tables)\nGROUP BY (summarize data)."
    },
    {
      "front": "What is the Golden Rule of Analytics Instrumentation?",
      "back": "If you didn't instrument it before launch, you can NEVER measure it after. Retroactive tracking is physically impossible."
    },
    {
      "front": "What is the cost difference between Batch and Streaming pipelines?",
      "back": "Streaming delivers real-time sub-second latency but costs 5–10x more than scheduled Batch processing."
    },
    {
      "front": "What is the '1-Day vs 2-Sprint' test for feature scoping?",
      "back": "If required data already exists in the ER schema = 1-day query change.\nIf you must add columns or split tables = 2-sprint database migration."
    },
    {
      "front": "Which database powers PhonePe's 46B+ monthly UPI transactions?",
      "back": "CockroachDB (Distributed SQL delivering ACID compliance across cloud nodes)."
    },
    {
      "front": "What proportion of new mobile business apps use cross-platform?",
      "back": "Approximately 80% (React Native or Flutter) to cut dev costs in half while keeping 90-95% native performance."
    },
    {
      "front": "What is the Modern Startup Stack for 2024+?",
      "back": "Next.js + TypeScript + PostgreSQL (Supabase/Neon) + Tailwind CSS + Vercel."
    },
    {
      "front": "What is #1 in the OWASP Top 10 Web Vulnerabilities?",
      "back": "Broken Access Control (users accessing or editing records belonging to others)."
    },
    {
      "front": "What is the penalty for personal data breaches under India's DPDP Act?",
      "back": "Up to ₹250 Crore per incident."
    },
    {
      "front": "Why is FastAPI currently preferred over Flask for new Python APIs?",
      "back": "FastAPI is async-first, automatically validates data payloads with Pydantic, and generates interactive OpenAPI documentation (/docs) for free."
    },
    {
      "front": "What is RAG in Generative AI?",
      "back": "Retrieval-Augmented Generation: retrieving private company facts from a vector database and injecting them into an LLM prompt to eliminate hallucinations."
    }
  ]
};
