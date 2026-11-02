// Complete Course Resources, Downloadable PPTs, and Official Documentation Links
export const resourcesData = {
  "downloadablePpts": [
    {
      "id": "ppt-day-1",
      "title": "PM2-01 & PM2-02 · Combined Overview (Day 1)",
      "subtitle": "How Software Works, Web Fundamentals & The Modern Stack",
      "instructor": "Dr. Anand Fadte",
      "institution": "HSB — Product Management II",
      "fileName": "PM2-Combined-Overview-v2 - Day 1.pptx",
      "fileSize": "94 KB",
      "slidesCount": 18,
      "downloadUrl": "/slides/PM2-Combined-Overview-v2 - Day 1.pptx",
      "topics": [
        "The 3 Layers: Client, Server, Database",
        "HTTP, HTTPS, TLS, DNS & Ports (80, 443, 3000, 5432)",
        "Cookies, Sessions, JWT, CDNs & Caching",
        "Front-End vs Back-End Division of Labour & API Contracts",
        "HTML, CSS, JavaScript, DOM, Virtual DOM, React, Angular, Vue, Svelte",
        "Tailwind, Bootstrap, Rendering (CSR, SSR, SSG, Next.js)",
        "Node.js, Python, Java, Go, Ruby, Nginx, ORMs",
        "Monolith vs Microservices, Docker Containers, Kubernetes, Serverless",
        "Mobile Platforms: Native vs Cross-Platform vs PWA",
        "Mobile Lifecycle, Push Notifications, Offline Storage, Security",
        "SQL vs NoSQL, Scaling (Vertical vs Horizontal), Load Balancers",
        "CI/CD, Git, Pull Requests, Observability (Datadog, Sentry), OWASP Top 10",
        "Case Studies: Facebook hybrid mistake, Airbnb React Native, Twitter monolith"
      ]
    },
    {
      "id": "ppt-day-2",
      "title": "PM2-03 & PM2-04 · APIs & Integrations (Day 2)",
      "subtitle": "How Apps Talk to Each Other — And Why PMs Need to Understand It",
      "instructor": "Dr. Anand Fadte",
      "institution": "HSB — Product Management II",
      "fileName": "PM2-APIs-Integrations-Combined-v2 - Day 2.pptx",
      "fileSize": "71 KB",
      "slidesCount": 13,
      "downloadUrl": "/slides/PM2-APIs-Integrations-Combined-v2 - Day 2.pptx",
      "topics": [
        "What is an API? The Restaurant Analogy (Client, Server, Waiter)",
        "4 Ways APIs Appear: Outside Service, Inside Company, Product, Shortcut",
        "REST, GraphQL, WebSockets, gRPC, Message Queues (RabbitMQ, Kafka)",
        "The 5 Parts of Every API Call (Address, Action, ID Badge, Data, Reply)",
        "API Error Codes Cheat Sheet (2xx Success, 4xx Client Mistake, 5xx Server Fault)",
        "Staying Updated: Polling (Checking) vs Instant Notifications (Webhooks)",
        "3 Webhook Safety Rules: Idempotency, Auto-Retries, Signature Verification",
        "The 5-Question Partner Integration Due-Diligence Checklist",
        "Build vs Buy: Secret Sauce (Build) vs Commodity Plumbing (Buy)",
        "Real Stories: Stripe, Google Maps (14x price hike), Twitter/X API shutdown",
        "Indian Tech Context: Razorpay UPI webhooks, ONDC open API, Aadhaar eKYC, IRCTC Tatkal",
        "Time & Effort: The 6 Hidden Integration Steps (Why it takes 2–4 weeks)"
      ]
    },
    {
      "id": "ppt-day-3",
      "title": "PM2-05 & PM2-06 · Databases & Data Modeling (Day 3)",
      "subtitle": "Tables, Queries & Analytics Every Product Manager Must Understand",
      "instructor": "Dr. Anand Fadte",
      "institution": "HSB — Product Management II",
      "fileName": "PM2-Databases-DataModeling-Combined-Day 3.pptx",
      "fileSize": "82 KB",
      "slidesCount": 15,
      "downloadUrl": "/slides/PM2-Databases-DataModeling-Combined-Day 3.pptx",
      "topics": [
        "Foundations: Database as a Strict Spreadsheet, Tables, PK, FK, Indexes",
        "Choosing Your Database: SQL (Relational, ACID) vs NoSQL (Document, Flexible)",
        "Data Modeling: Reading ER Diagrams & Crow's Foot Notation (1:N, N:M)",
        "Data Design: Normalization to eliminate Duplication, Update & Delete Anomalies",
        "SQL Fluency: SELECT, FROM, WHERE, JOIN, GROUP BY with Real Business Queries",
        "Measurement: Analytics Instrumentation, Events, Properties & Tracking Plan Spec",
        "The Golden Rule of Analytics (Retroactive tracking is impossible)",
        "Data Pipelines: ETL/ELT, Batch vs Streaming (Latency vs 5-10x Cost)",
        "Product Impact: Schema as a Product Bottleneck & The 5-Step Migration Process",
        "Real Decisions: Amazon DynamoDB, Instagram Postgres at Scale, Flipkart Big Billion Days",
        "India Context: PhonePe (CockroachDB), Ola Maps (PostGIS), Zerodha (TimescaleDB), Dream11",
        "Polyglot Persistence: Combining Postgres, Redis, Elasticsearch & S3",
        "Top 5 PM Data Pitfalls & Anti-Patterns"
      ]
    },
    {
      "id": "ppt-day-4",
      "title": "Product Management II · Technology Stacks Guide",
      "subtitle": "A PM's Comprehensive Reference to the Modern Technology Landscape",
      "instructor": "Prof. Anand Viantos / Dr. Anand Fadte",
      "institution": "HSB — Product Management II",
      "fileName": "PM2-Tech-Stacks-Guide.pptx",
      "fileSize": "114 KB",
      "slidesCount": 20,
      "downloadUrl": "/slides/PM2-Tech-Stacks-Guide.pptx",
      "topics": [
        "What is a Tech Stack? The 4 Layers (Frontend, Backend, Database, Infra)",
        "Why PMs Care: Feasibility, Timelines, Cost, Hiring Availability",
        "Frontend: React, Next.js, Vue, Angular, Svelte, Tailwind, Bootstrap, Shadcn",
        "10 Backend Languages Evaluated: Python, JS, TS, Java, C#, Go, Rust, PHP, Ruby, Kotlin",
        "Backend Decision Matchmaking Guide & Team Hiring Pools",
        "Mobile Approaches: Native vs Cross-Platform (RN/Flutter) vs PWA",
        "Databases: Relational, Document, Key-Value, Graph, Vector DBs, Serverless DBs",
        "Cloud Providers: AWS (~31%) vs Azure (~24%) vs GCP (~12%) Service Mapping",
        "Developer Platforms: Vercel, Supabase, Render, Railway",
        "Cloud Cost Management: Compute, Storage, Bandwidth Egress, Serverless Calls",
        "The Generative AI / ML Stack: GPUs, PyTorch, LLMs, LangChain, RAG Pipelines",
        "Enterprise ERPs: SAP S/4HANA, Salesforce, Workday, Dynamics 365, ServiceNow",
        "Legacy Mainframes: IBM z/OS & COBOL (90% of credit cards, 95% of ATMs)",
        "4 Modernization Strategies: Encapsulate, Replatform, Refactor, Replace",
        "Tested Combos: LAMP, MEAN, MERN, T3, Jamstack & The Modern 2024 Startup Stack",
        "DevOps Pipeline: Commit -> Build & Test -> Security Scan -> Staging -> Prod",
        "Cybersecurity: OWASP Top 10 Vulnerabilities & Layered Defense",
        "Compliance Frameworks: SOC 2, PCI DSS, HIPAA, GDPR, India DPDP Act (₹250 Cr fine)",
        "The 7 Dimensions of Stack Selection & The 4 Fatal Selection Mistakes",
        "Emerging Tech: WebAssembly (WASM), Edge Computing, AI-Native Dev, Low-Code/No-Code"
      ]
    },
    {
      "id": "ppt-day-5",
      "title": "Tech Stacks Deep Dive · The Python Ecosystem",
      "subtitle": "A Visual Field Guide for Product Managers (Part 1 of Series)",
      "instructor": "Dr. Anand Fadte",
      "institution": "HSB — Product Management II",
      "fileName": "Tech-Stacks-Python.pptx",
      "fileSize": "64 KB",
      "slidesCount": 14,
      "downloadUrl": "/slides/Tech-Stacks-Python.pptx",
      "topics": [
        "Where Python Fits in the Stack: The Middle Logic (Backend) Tier",
        "Guido van Rossum (1991) & The Plain-English Readability Dividend",
        "Python Trade-offs: PyPI 500k+ packages, AI dominance vs CPU speed & GIL",
        "Desktop Toolkits: Tkinter (built-in internal tools), PyQt/PySide, Kivy",
        "Web Backend Triad: Django ('batteries included'), Flask (micro), FastAPI (modern async)",
        "Real Architecture: FinTech Banking App (React Native -> Gateway -> FastAPI -> Plaid -> Postgres)",
        "Data Science & AI Toolchain: Pandas, Scikit-learn, PyTorch, LangChain, Jupyter",
        "The 4-Step Packaging Pipeline: pip -> venv -> Poetry/uv -> Docker",
        "Deployment Options: Gunicorn/Uvicorn, Serverless AWS Lambda, Docker/K8s, PaaS",
        "Classroom Project Zenith '26 Architecture",
        "Core Takeaways: Speed of iteration over raw execution throughput"
      ]
    }
  ],
  "externalDocLinks": [
    {
      "title": "MDN Web Docs (Mozilla)",
      "category": "Web Fundamentals",
      "url": "https://developer.mozilla.org",
      "desc": "The gold standard reference for HTML, CSS, JavaScript, HTTP status codes, and browser APIs."
    },
    {
      "title": "PostgreSQL Official Documentation",
      "category": "Databases",
      "url": "https://www.postgresql.org/docs/",
      "desc": "Comprehensive reference for relational schemas, indexes, JSONB, and spatial extensions."
    },
    {
      "title": "Stripe API Documentation",
      "category": "API Standards",
      "url": "https://stripe.com/docs/api",
      "desc": "The benchmark for developer-first API design, idempotency, webhook event signatures, and error handling."
    },
    {
      "title": "OWASP Top 10 Security Project",
      "category": "Cybersecurity",
      "url": "https://owasp.org/www-project-top-ten/",
      "desc": "The official globally recognized awareness document for web application security vulnerabilities."
    },
    {
      "title": "FastAPI Framework Documentation",
      "category": "Python & APIs",
      "url": "https://fastapi.tiangolo.com",
      "desc": "Interactive guides to building high-concurrency asynchronous REST APIs with automatic OpenAPI docs."
    },
    {
      "title": "NPCI / UPI Technical Specifications",
      "category": "Indian Tech DPI",
      "url": "https://www.npci.org.in",
      "desc": "Technical architecture and API interoperability specifications behind India's Unified Payments Interface."
    }
  ],
  "pmInterviewGuide": [
    {
      "question": "How do you decide whether to build a capability in-house or buy a SaaS solution?",
      "answerFramework": "Use the 'Secret Sauce vs Commodity Plumbing' framework. If the feature represents your core competitive differentiator or proprietary algorithmic edge (e.g., your fraud detection model or recommendation engine), BUILD IT. If the feature is standard infrastructure that every competitor uses (e.g. SMS OTP delivery, credit card processing, mapping), BUY IT from a specialized vendor like Twilio or Stripe."
    },
    {
      "question": "How do you handle an engineering team estimating 4 weeks for 'just an API call'?",
      "answerFramework": "Acknowledge that calling the endpoint is simple, but reliable production integration requires 6 distinct steps: (1) Reading docs & error schemas (1-3d); (2) Configuring auth/OAuth (1-2d); (3) Mapping partner data schemas to internal tables (2-5d); (4) Building idempotency, retry backoffs, and error fallbacks (2-3d); (5) Rigorous scale & failure testing (2-5d); (6) Ongoing monitoring and version maintenance. Walk through the checklist together to validate the timeline."
    },
    {
      "question": "When should you choose SQL over NoSQL?",
      "answerFramework": "Choose SQL (Relational) when your product demands strict ACID consistency, non-negotiable data integrity, and complex financial reporting (e.g., banking ledgers, checkout transactions, inventory counts). Choose NoSQL when you require elastic horizontal scaling, high-frequency writes, flexible schema evolution, or specialized patterns like in-memory caching (Redis) or vector embeddings for AI (Pinecone)."
    },
    {
      "question": "What is the difference between Batch and Stream processing, and how do you decide?",
      "answerFramework": "Frame it as a business cost-versus-latency decision. Batch processing aggregates data at scheduled intervals (hourly/daily) at low operational cost. Stream processing evaluates events in real time with sub-second latency, but costs 5–10x more in cloud infrastructure. Ask: 'Does the business user genuinely need this data in under 2 seconds (e.g. fraud alerts), or is an hourly refresh completely adequate (e.g. sales reports)?'"
    }
  ]
};
