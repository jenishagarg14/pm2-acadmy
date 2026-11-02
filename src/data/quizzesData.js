// Complete Assessment Quizzes generated from actual PPT presentations
export const quizzesData = [
  {
    "id": "quiz-web-stack",
    "courseId": "pm2-01-web-stack",
    "title": "Module 1 Assessment: Software Architecture & The Web Stack",
    "description": "Test your mastery of the 3 software layers, web protocols (HTTP/HTTPS, DNS, Ports), front-end rendering, monolith vs microservices, and mobile platforms.",
    "timeLimitMinutes": 15,
    "passingScore": 75,
    "totalQuestions": 12,
    "badgeTitle": "Full-Stack Architecture Scholar",
    "questions": [
      {
        "id": "q1-1",
        "question": "What is the very first step that occurs when a user types a website domain into a browser and presses enter?",
        "options": [
          "The client establishes a TLS cryptographic handshake",
          "The browser performs a DNS lookup to find the numeric IP address",
          "The server queries the relational database for user profile data",
          "The browser renders the DOM tree pixels using the Virtual DOM"
        ],
        "correctAnswer": 1,
        "explanation": "Before any secure connection or HTTP request can be transmitted, the browser must first resolve the human-readable domain name (e.g. instagram.com) to a physical machine IP address via a DNS lookup.",
        "slideReference": "Day 1 Slide 3: The Big Picture",
        "difficulty": "Easy"
      },
      {
        "id": "q1-2",
        "question": "Which network port is the standard default door for encrypted HTTPS web traffic with the browser lock icon?",
        "options": [
          "Port 80",
          "Port 3000",
          "Port 443",
          "Port 5432"
        ],
        "correctAnswer": 2,
        "explanation": "Port 443 is the standard port for encrypted HTTPS traffic. Port 80 is for unencrypted HTTP, Port 3000 is common for local dev servers, and Port 5432 is the default for PostgreSQL databases.",
        "slideReference": "Day 1 Slide 4: Web Fundamentals",
        "difficulty": "Easy"
      },
      {
        "id": "q1-3",
        "question": "A user closes their browser window and returns the next day; their items are still in the shopping cart. What technology enables this persistent client state?",
        "options": [
          "DNS record caching",
          "Browser Cookies / Session tokens",
          "Virtual DOM reconciliation",
          "Nginx reverse proxy buffer"
        ],
        "correctAnswer": 1,
        "explanation": "HTTP is stateless. Sites remember users and shopping cart contents by saving small state records called cookies in the browser, which link to server sessions or self-contained JWT tokens.",
        "slideReference": "Day 1 Slide 5: State & Speed",
        "difficulty": "Easy"
      },
      {
        "id": "q1-4",
        "question": "Why is the Golden Rule of Back-End Development 'Never trust the client'?",
        "options": [
          "Because front-end code runs in the user's browser, where malicious users can inspect or bypass validation rules",
          "Because browsers cannot execute JavaScript reliably across different devices",
          "Because CSS frameworks do not support cryptographic encryption",
          "Because CDN edge servers overwrite client-side validation logic automatically"
        ],
        "correctAnswer": 0,
        "explanation": "Front-end validation is purely for user convenience. Because client code executes on a device controlled by the user, attackers can bypass UI forms and send malicious raw requests directly to the server.",
        "slideReference": "Day 1 Slide 6: The Division of Labour",
        "difficulty": "Medium"
      },
      {
        "id": "q1-5",
        "question": "What is the primary mechanism React uses to prevent 'janky' UI performance when updating web screens?",
        "options": [
          "It rewrites the browser engine in C++ WebAssembly",
          "It batches updates in memory using a Virtual DOM and only updates modified nodes in the real DOM",
          "It forces all pages to render on a remote Linux server via SSR",
          "It compiles all HTML and CSS away at build time like Svelte"
        ],
        "correctAnswer": 1,
        "explanation": "Directly manipulating the browser DOM is computationally expensive. React computes changes in an in-memory Virtual DOM ('diffing') and updates only the necessary elements on screen in a single batch.",
        "slideReference": "Day 1 Slide 7: The Front-End Stack",
        "difficulty": "Medium"
      },
      {
        "id": "q1-6",
        "question": "An e-commerce product manager needs public product catalog pages to rank #1 on Google search results with instant preview loading. Which rendering strategy should they recommend?",
        "options": [
          "Pure Client-Side Rendering (CSR)",
          "Server-Side Rendering (SSR) or Hybrid (Next.js)",
          "Static Site Generation (SSG) with manual weekly builds",
          "Single Page Application with client-only JavaScript"
        ],
        "correctAnswer": 1,
        "explanation": "Server-Side Rendering (SSR) pre-renders complete HTML on the server before sending it to the client, ensuring web crawlers (Googlebot) immediately see full content and meta tags for high SEO ranking.",
        "slideReference": "Day 1 Slide 8: Front-End (Continued)",
        "difficulty": "Medium"
      },
      {
        "id": "q1-7",
        "question": "Which backend technology is renowned for allowing a small engineering team to use the same language (JavaScript/TypeScript) across both the front-end and back-end?",
        "options": [
          "Go (Golang)",
          "Node.js",
          "Ruby on Rails",
          "Spring Boot"
        ],
        "correctAnswer": 1,
        "explanation": "Node.js runs JavaScript on the server, allowing front-end engineers to write backend APIs without learning a different programming language.",
        "slideReference": "Day 1 Slide 9: The Back-End Stack",
        "difficulty": "Easy"
      },
      {
        "id": "q1-8",
        "question": "What is the primary operational trade-off when adopting a Microservices architecture instead of a Monolith?",
        "options": [
          "Microservices can never be scaled horizontally",
          "Microservices introduce distributed network complexity and make cross-service debugging much harder",
          "Microservices prevent teams from deploying independently",
          "Microservices cannot run inside Docker containers"
        ],
        "correctAnswer": 1,
        "explanation": "While microservices allow independent deployment and team autonomy, they replace simple in-memory function calls with complex network API requests, making tracing, latency debugging, and network failures significantly more difficult.",
        "slideReference": "Day 1 Slide 10: Architecture Patterns",
        "difficulty": "Hard"
      },
      {
        "id": "q1-9",
        "question": "What core problem did Docker containers solve for software engineering teams?",
        "options": [
          "It eliminated the need for databases",
          "It solved 'It works on my machine' by packaging code, libraries, and OS runtime into a portable unit",
          "It converted relational SQL databases into NoSQL document stores",
          "It doubled internet broadband speeds across cellular networks"
        ],
        "correctAnswer": 1,
        "explanation": "Docker packages applications with all their exact dependencies and environment configurations so they run identically on a developer laptop, staging server, and production cloud cluster.",
        "slideReference": "Day 1 Slide 10: Architecture Patterns",
        "difficulty": "Medium"
      },
      {
        "id": "q1-10",
        "question": "Why did Mark Zuckerberg publicly admit in 2012 that betting on hybrid HTML5 web apps for Facebook mobile was their biggest strategic mistake?",
        "options": [
          "Because Apple banned hybrid apps from the App Store",
          "Because premature optimization for cross-platform dev speed resulted in a sluggish, crash-prone user experience",
          "Because HTML5 was 10x more expensive to host on cloud servers",
          "Because Google refused to support WebSockets on Android"
        ],
        "correctAnswer": 1,
        "explanation": "Facebook attempted to build their mobile app in hybrid web HTML5 to share code quickly, but phones in 2012 lacked the compute power to run it smoothly. The app felt janky and unresponsive, forcing Facebook to scrap it and rewrite natively in Objective-C/Swift.",
        "slideReference": "Day 1 Slide 16: The PM's Perspective",
        "difficulty": "Hard"
      },
      {
        "id": "q1-11",
        "question": "During the Indian Premier League (IPL), streaming viewership surges from 1 million to 30 million concurrent users in minutes. How does the cloud infrastructure handle this surge?",
        "options": [
          "Vertical scaling by manually installing larger hard drives in data centers",
          "Horizontal auto-scaling by spinning up hundreds of cloud server instances behind a load balancer",
          "Switching the database from PostgreSQL to flat CSV files",
          "Disabling HTTPS encryption to save bandwidth"
        ],
        "correctAnswer": 1,
        "explanation": "Horizontal scaling distributes traffic across many elastic server instances orchestrated by load balancers, dynamically adding compute capacity as viewership spikes.",
        "slideReference": "Day 1 Slide 14: Data & Infrastructure",
        "difficulty": "Medium"
      },
      {
        "id": "q1-12",
        "question": "What tool allows a Product Manager to safely launch a feature to 5% of users or instantly disable it without waiting for engineering to deploy code?",
        "options": [
          "Feature Flags (e.g. LaunchDarkly)",
          "Aadhaar eKYC",
          "Docker Swarm",
          "SQL Foreign Key"
        ],
        "correctAnswer": 0,
        "explanation": "Feature flags (toggles) decouple code deployment from feature release, allowing PMs to conduct dark launches, A/B tests, and instant rollbacks with a toggle switch.",
        "slideReference": "Day 1 Slide 16: The PM's Perspective",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "id": "quiz-apis-integrations",
    "courseId": "pm2-02-apis-integrations",
    "title": "Module 2 Assessment: APIs, Webhooks & Integrations",
    "description": "Evaluate your understanding of the restaurant analogy, the 5 anatomy parts of an API call, error codes, Webhooks vs Polling, the 5-question partner checklist, and Build vs Buy.",
    "timeLimitMinutes": 15,
    "passingScore": 75,
    "totalQuestions": 12,
    "badgeTitle": "Certified API & Integration Strategist",
    "questions": [
      {
        "id": "q2-1",
        "question": "In the famous API Restaurant Analogy, what role does the API play?",
        "options": [
          "The Dining Table (The Client)",
          "The Kitchen where ingredients and food live (The Database / Server)",
          "The Waiter who takes the customer's request to the kitchen and delivers the response back",
          "The Cash Register billing system"
        ],
        "correctAnswer": 2,
        "explanation": "The API acts as the waiter: it takes your formatted request from the client app, brings it to the server/kitchen, and returns the response payload back to your table.",
        "slideReference": "Day 2 Slide 3: The Big Idea",
        "difficulty": "Easy"
      },
      {
        "id": "q2-2",
        "question": "Which of the following is an example of 'API as the Product'?",
        "options": [
          "Swiggy using Google Maps to display delivery routes",
          "Stripe selling developer payment infrastructure as its primary commercial business",
          "Netflix encoding movies into 4K video files",
          "A retail bank printing paper passbooks"
        ],
        "correctAnswer": 1,
        "explanation": "Stripe, Twilio, and Plaid are companies where the API itself is the commercial product being sold directly to developers and businesses.",
        "slideReference": "Day 2 Slide 3: The Big Idea",
        "difficulty": "Easy"
      },
      {
        "id": "q2-3",
        "question": "Which communication pattern maintains an open, persistent two-way connection over a single socket, ideal for live chat and real-time financial trading?",
        "options": [
          "Standard REST API",
          "GraphQL queries",
          "WebSockets",
          "Batch ETL pipeline"
        ],
        "correctAnswer": 2,
        "explanation": "WebSockets establish a persistent, full-duplex two-way communication channel between client and server, allowing instant message pushes without repeated connection overhead.",
        "slideReference": "Day 2 Slide 4: APIs & Real-Time",
        "difficulty": "Medium"
      },
      {
        "id": "q2-4",
        "question": "In the technical anatomy of an API call, what does the 'HTTP Method' represent?",
        "options": [
          "The Address/Endpoint URL being called",
          "The Action you want the server to perform (GET, POST, PUT, DELETE)",
          "The cryptographic password proving user identity",
          "The latency measured in milliseconds"
        ],
        "correctAnswer": 1,
        "explanation": "The HTTP Method (or verb) defines the action: GET reads data, POST creates new data, PUT updates existing data, and DELETE removes data.",
        "slideReference": "Day 2 Slide 5: How It Works",
        "difficulty": "Easy"
      },
      {
        "id": "q2-5",
        "question": "Your customer support team reports: 'Users are getting 401 errors during payment checkout.' What is the root cause of this error?",
        "options": [
          "The server crashed with an unhandled runtime bug (500)",
          "The payment endpoint URL does not exist (404)",
          "The API authentication credentials or secret key are missing, invalid, or expired",
          "The user called the API too many times and hit a rate limit (429)"
        ],
        "correctAnswer": 2,
        "explanation": "Status 401 Unauthorized specifically means authentication failed—the client supplied an expired, missing, or malformed API key or auth token.",
        "slideReference": "Day 2 Slide 6: When Things Go Wrong",
        "difficulty": "Medium"
      },
      {
        "id": "q2-6",
        "question": "What is the key diagnostic difference between HTTP status code 401 and HTTP status code 403?",
        "options": [
          "401 means server crash; 403 means client timeout",
          "401 means 'Who are you?' (authentication failed); 403 means 'I know who you are, but you do not have permission' (forbidden)",
          "401 is for mobile apps; 403 is for desktop browsers",
          "401 means success; 403 means redirection"
        ],
        "correctAnswer": 1,
        "explanation": "401 Unauthorized is an identity/authentication failure (bad/missing credentials). 403 Forbidden means identity is known, but that identity lacks permissions to access the requested resource.",
        "slideReference": "Day 2 Slide 6: When Things Go Wrong",
        "difficulty": "Hard"
      },
      {
        "id": "q2-7",
        "question": "Why are Webhooks (Instant Notifications) preferred over Polling (Checking) for payment confirmations?",
        "options": [
          "Polling requires writing SQL queries on the client side",
          "Polling repeatedly wastes 95%+ of network calls asking 'any update?' while Webhooks notify the server instantly the millisecond payment succeeds",
          "Webhooks never require security verification",
          "Polling causes 500 server crashes in all browsers"
        ],
        "correctAnswer": 1,
        "explanation": "Polling wastes bandwidth by repeatedly asking for updates that haven't occurred. Webhooks push data instantaneously the exact millisecond the payment gateway confirms the charge.",
        "slideReference": "Day 2 Slide 7: Staying Updated",
        "difficulty": "Easy"
      },
      {
        "id": "q2-8",
        "question": "Why is 'Idempotency' a mandatory safety rule when building a webhook receiver for financial payments?",
        "options": [
          "To ensure that if the gateway accidentally sends the payment notification twice, the customer is NOT charged or credited twice",
          "To convert HTTP requests from JSON to XML format",
          "To compress the image payload for mobile devices",
          "To guarantee zero latency across satellite connections"
        ],
        "correctAnswer": 0,
        "explanation": "Due to network retries, payment gateways often send duplicate webhook notifications. Idempotency guarantees that processing the duplicate notification produces the exact same outcome as processing it once, preventing duplicate billing.",
        "slideReference": "Day 2 Slide 7: Staying Updated",
        "difficulty": "Hard"
      },
      {
        "id": "q2-9",
        "question": "During a Diwali flash sale, order confirmation SMS messages silently stop delivering. The SMS gateway API is healthy, but your traffic surged 10x. What happened?",
        "options": [
          "Your app was hit by a SQL injection attack",
          "Your application exceeded the partner API's agreed Rate Limit cap (speed limit)",
          "The client browser disabled TLS certificates",
          "The mobile device battery drained completely"
        ],
        "correctAnswer": 1,
        "explanation": "Every API enforces a rate limit (calls per second/minute). Exceeding the rate limit causes the API to reject calls (status 429), silently dropping messages if error handling is missing.",
        "slideReference": "Day 2 Slide 8: Partner Integrations",
        "difficulty": "Medium"
      },
      {
        "id": "q2-10",
        "question": "According to the Build vs Buy Sorting Matrix, what should a company build in-house versus purchase from a vendor?",
        "options": [
          "Build commodity plumbing (SMS, payments, maps); Buy your secret sauce algorithms",
          "Build your Secret Sauce (proprietary algorithms, fraud models); Buy commodity plumbing (SMS delivery, maps, card processing)",
          "Build everything from scratch; never use third-party vendors",
          "Buy all software; never hire software engineers"
        ],
        "correctAnswer": 1,
        "explanation": "Build what makes your company unique (your Secret Sauce like proprietary risk scoring or recommendation engines); Buy standardized commodity plumbing that all competitors use (Twilio SMS, Stripe payments, Google Maps).",
        "slideReference": "Day 2 Slide 9: The Big Decision",
        "difficulty": "Medium"
      },
      {
        "id": "q2-11",
        "question": "What happened when Google Maps restructured its API pricing tiers in 2018?",
        "options": [
          "Google Maps was acquired by Microsoft",
          "Costs jumped up to 14x overnight for many applications, highlighting the business risk of vendor dependency",
          "Google made the API completely free for all commercial apps",
          "Google replaced REST endpoints with COBOL scripts"
        ],
        "correctAnswer": 1,
        "explanation": "In 2018, Google Maps drastically raised prices—costs jumped 14x for many startups overnight. The lesson for PMs: 'Free or cheap today does not mean cheap tomorrow; always model costs at scale.'",
        "slideReference": "Day 2 Slide 10: Real Stories",
        "difficulty": "Hard"
      },
      {
        "id": "q2-12",
        "question": "When an executive claims 'It is just a simple API call, it should take 2 days,' why does production integration actually take 2 to 4 weeks?",
        "options": [
          "Because engineers are intentionally working slowly",
          "Because integration requires reading docs, auth setup, data schema mapping, error handling, edge-case testing, and observability",
          "Because Python requires 3 weeks to compile bytecode",
          "Because DNS records take 14 days to propagate globally"
        ],
        "correctAnswer": 1,
        "explanation": "Beyond the raw network call, reliable integrations require understanding partner docs (1-3d), setting up auth (1-2d), mapping data schemas (2-5d), building error and retry logic (2-3d), and rigorous testing (2-5d) = 2-4 weeks minimum.",
        "slideReference": "Day 2 Slide 11: Time & Effort",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "id": "quiz-databases-modeling",
    "courseId": "pm2-03-databases-data-modeling",
    "title": "Module 3 Assessment: Databases, Data Modeling & SQL",
    "description": "Demonstrate your understanding of relational tables, primary/foreign keys, SQL vs NoSQL, ER diagrams, normalization anomalies, SQL query commands, and tracking plans.",
    "timeLimitMinutes": 15,
    "passingScore": 75,
    "totalQuestions": 12,
    "badgeTitle": "Certified Data Architect & SQL Specialist",
    "questions": [
      {
        "id": "q3-1",
        "question": "How is a production relational database fundamentally different from a spreadsheet like Microsoft Excel?",
        "options": [
          "A database can only store text, not numbers",
          "A database is a strict spreadsheet that strictly enforces data types, uniqueness, referential integrity, and relationships",
          "A database cannot be hosted in the cloud",
          "A database does not use rows or columns"
        ],
        "correctAnswer": 1,
        "explanation": "Unlike Excel where users can type anything anywhere, a database strictly enforces constraints: types, primary key uniqueness, foreign key relationships, and ACID transaction rules.",
        "slideReference": "Day 3 Slide 3: Foundations",
        "difficulty": "Easy"
      },
      {
        "id": "q3-2",
        "question": "What is the primary function of a Foreign Key (FK) in a relational database?",
        "options": [
          "It encrypts passwords on the client device",
          "It links a record in one table to the Primary Key of another table, enforcing business relationships at the data layer",
          "It converts SQL queries into JSON documents",
          "It creates a backup of the database on an external drive"
        ],
        "correctAnswer": 1,
        "explanation": "A Foreign Key establishes referential integrity: e.g. An `order` record contains a `user_id` foreign key referencing the `users` table, preventing orders without valid users.",
        "slideReference": "Day 3 Slide 3: Foundations",
        "difficulty": "Easy"
      },
      {
        "id": "q3-3",
        "question": "A fintech PM is choosing a database for account ledger balances and financial money transfers. Which database type should they select?",
        "options": [
          "NoSQL document store (MongoDB) for flexible schemas",
          "Relational SQL database (PostgreSQL) for strict ACID transaction consistency",
          "In-memory Redis cache with no disk persistence",
          "Unstructured text files stored on AWS S3"
        ],
        "correctAnswer": 1,
        "explanation": "Financial accounting requires strict ACID consistency (Atomicity, Consistency, Isolation, Durability) to guarantee money is neither created nor destroyed during balance transfers. SQL is non-negotiable.",
        "slideReference": "Day 3 Slide 4: Choosing Your Database",
        "difficulty": "Medium"
      },
      {
        "id": "q3-4",
        "question": "In an Entity-Relationship (ER) diagram, what does a 'Crow's Foot' branch symbol indicate?",
        "options": [
          "A One-to-One (1:1) relationship",
          "The 'Many' side of a One-to-Many (1:N) relationship",
          "A corrupted database index",
          "A server that is offline"
        ],
        "correctAnswer": 1,
        "explanation": "The Crow's Foot fork symbol visually denotes 'Many' cardinality: for instance, one User (1) can have Many Orders (Crow's foot).",
        "slideReference": "Day 3 Slide 5: Data Modeling",
        "difficulty": "Easy"
      },
      {
        "id": "q3-5",
        "question": "In an unnormalized flat table where customer name and address are stored inside every order row, what happens if an order row is deleted?",
        "options": [
          "The database automatically creates a new backup table",
          "A Delete Anomaly occurs: deleting the customer's last order accidentally erases their entire customer profile from the system",
          "The database converts to MongoDB automatically",
          "The server shuts down to prevent data loss"
        ],
        "correctAnswer": 1,
        "explanation": "A Delete Anomaly occurs when deleting a transaction unintentionally wipes out the underlying entity record because data was denormalized into a single flat table.",
        "slideReference": "Day 3 Slide 6: Data Design",
        "difficulty": "Medium"
      },
      {
        "id": "q3-6",
        "question": "Which SQL command is used to filter rows based on specific conditions (e.g. city = 'Delhi')?",
        "options": [
          "SELECT",
          "FROM",
          "WHERE",
          "GROUP BY"
        ],
        "correctAnswer": 2,
        "explanation": "WHERE filters the dataset to return only rows that satisfy the specified logical conditions.",
        "slideReference": "Day 3 Slide 7: SQL Fluency",
        "difficulty": "Easy"
      },
      {
        "id": "q3-7",
        "question": "What is the Golden Rule of Analytics Instrumentation for Product Managers?",
        "options": [
          "Always track every mouse movement on screen",
          "If you didn't instrument it before launch, you can NEVER measure it after (retroactive tracking is impossible)",
          "Never include properties on tracking events",
          "Data warehouses automatically track user intent without engineering code"
        ],
        "correctAnswer": 1,
        "explanation": "If code to capture an event was not deployed before users interacted with the feature, that historical behavioral data is permanently lost. You cannot retroactively query past events.",
        "slideReference": "Day 3 Slide 8: Measurement",
        "difficulty": "Medium"
      },
      {
        "id": "q3-8",
        "question": "In product analytics tracking, what is the relationship between an Event and a Property?",
        "options": [
          "An Event is the action ('What happened'); a Property is the context ('Details about what happened')",
          "An Event is a SQL database table; a Property is an API endpoint",
          "An Event is a financial payment; a Property is real estate",
          "An Event is client-side; a Property is server-side"
        ],
        "correctAnswer": 0,
        "explanation": "Event = the action (e.g., `order_placed`); Property = context metadata (e.g., `amount: 499`, `payment_method: 'UPI'`, `city: 'Bengaluru'`).",
        "slideReference": "Day 3 Slide 8: Measurement",
        "difficulty": "Easy"
      },
      {
        "id": "q3-9",
        "question": "Why shouldn't marketing and business teams run heavy analytical dashboard queries directly on the live production database?",
        "options": [
          "Because analytical queries cannot read SQL syntax",
          "Because massive table-scan queries lock database resources and cause the live consumer app to slow down or crash for users",
          "Because production databases only store data for 24 hours",
          "Because data warehouses are illegal under GDPR"
        ],
        "correctAnswer": 1,
        "explanation": "Heavy analytical queries consume massive CPU and memory and can lock tables, degrading performance or completely crashing the app for real customers. Analytics should run on read-replicas or data warehouses.",
        "slideReference": "Day 3 Slide 9: Data Flow",
        "difficulty": "Medium"
      },
      {
        "id": "q3-10",
        "question": "Why did WhatsApp take over 6 months to ship their 'Communities' (group of groups) feature?",
        "options": [
          "Because they had to write their own programming language",
          "Because WhatsApp's simple flat message schema required a total hierarchical schema overhaul for 2 billion users without breaking chat history",
          "Because Apple rejected the update 12 times",
          "Because WhatsApp switched to COBOL mainframes"
        ],
        "correctAnswer": 1,
        "explanation": "WhatsApp had a very simple schema for years. Adding group hierarchies required a fundamental database schema migration across billions of accounts with zero downtime and zero data loss.",
        "slideReference": "Day 3 Slide 10: Product Impact",
        "difficulty": "Hard"
      },
      {
        "id": "q3-11",
        "question": "Which database does PhonePe rely on to process over 46 billion monthly UPI transactions with strict ACID compliance across distributed cloud regions?",
        "options": [
          "MongoDB",
          "CockroachDB (Distributed SQL)",
          "SQLite",
          "Firebase Realtime Database"
        ],
        "correctAnswer": 1,
        "explanation": "PhonePe uses CockroachDB, a Distributed SQL database that provides both ACID compliance for banking transactions and horizontal cloud scaling across data centers.",
        "slideReference": "Day 3 Slide 12: India Context",
        "difficulty": "Hard"
      },
      {
        "id": "q3-12",
        "question": "What is 'Polyglot Persistence' in modern software architecture?",
        "options": [
          "Writing SQL queries in multiple spoken human languages",
          "Using different specialized database technologies (e.g. Postgres for core data, Redis for cache, Elasticsearch for search) within the same application",
          "Migrating all enterprise databases back to IBM mainframes",
          "Storing passwords in plain text for easy recovery"
        ],
        "correctAnswer": 1,
        "explanation": "Polyglot Persistence recognizes that no single database solves every problem: modern architectures use relational DBs for transactions, Redis for fast caching, and Elasticsearch for search.",
        "slideReference": "Day 3 Slide 12: India Context",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "id": "quiz-tech-stacks-guide",
    "courseId": "pm2-04-tech-stacks-guide",
    "title": "Module 4 Assessment: Modern Technology Stacks Field Guide",
    "description": "Test your strategic command of the 4 stack layers, 10 backend languages, cloud platforms AWS vs Azure vs GCP, AI/ML RAG architectures, ERPs, OWASP Top 10 security, and the 7 Dimensions framework.",
    "timeLimitMinutes": 20,
    "passingScore": 75,
    "totalQuestions": 15,
    "badgeTitle": "Enterprise Technology Strategist",
    "questions": [
      {
        "id": "q4-1",
        "question": "What are the four foundational layers of a modern technology stack?",
        "options": [
          "HTML, CSS, JavaScript, TypeScript",
          "Frontend, Backend, Database, Infrastructure",
          "Sales, Marketing, Engineering, HR",
          "CPU, RAM, Hard Drive, Motherboard"
        ],
        "correctAnswer": 1,
        "explanation": "The four standard architectural layers of every software product are: Frontend (UI), Backend (Logic/APIs), Database (Data persistence), and Infrastructure (Cloud/Hosting/DevOps).",
        "slideReference": "Tech Stacks Guide Slide 2: Chapter 1",
        "difficulty": "Easy"
      },
      {
        "id": "q4-2",
        "question": "Which programming language is considered the undisputed industry leader for Artificial Intelligence, Machine Learning, and Data Science?",
        "options": [
          "PHP",
          "Ruby",
          "Python",
          "Go"
        ],
        "correctAnswer": 2,
        "explanation": "Python dominates AI/ML because libraries like PyTorch, TensorFlow, Hugging Face, scikit-learn, and LangChain are all built Python-first.",
        "slideReference": "Tech Stacks Guide Slide 4: Chapters 3-7",
        "difficulty": "Easy"
      },
      {
        "id": "q4-3",
        "question": "Why is Go (Golang) frequently chosen by cloud infrastructure and high-concurrency microservice teams at Google, Uber, and Twitch?",
        "options": [
          "It compiles to a single standalone binary with ultra-fast startup and lightweight goroutines",
          "It has the largest component library for native iOS and Android mobile development",
          "It runs directly inside web browsers without WebAssembly",
          "It is the official language for writing WordPress plugins"
        ],
        "correctAnswer": 0,
        "explanation": "Go compiles directly to machine code, starts instantaneously, and uses lightweight 'goroutines' that consume only kilobytes of memory, making it exceptional for high-throughput APIs and network infrastructure.",
        "slideReference": "Tech Stacks Guide Slide 4: Chapters 3-7",
        "difficulty": "Medium"
      },
      {
        "id": "q4-4",
        "question": "What is the primary killer feature of TypeScript over standard vanilla JavaScript for enterprise web applications?",
        "options": [
          "TypeScript executes 10x faster inside the browser than JavaScript",
          "TypeScript adds static compile-time typing, catching bugs and typos before code is deployed to production",
          "TypeScript eliminates the need for CSS styling",
          "TypeScript replaces the need for a backend database"
        ],
        "correctAnswer": 1,
        "explanation": "TypeScript enforces strict static types, preventing runtime bugs (like `undefined is not a function`) before code ever deploys.",
        "slideReference": "Tech Stacks Guide Slide 4: Chapters 3-7",
        "difficulty": "Easy"
      },
      {
        "id": "q4-5",
        "question": "What proportion of newly launched mobile business applications in 2024+ utilize cross-platform frameworks (React Native or Flutter)?",
        "options": [
          "Under 10%",
          "Approximately 25%",
          "Approximately 80%",
          "100%"
        ],
        "correctAnswer": 2,
        "explanation": "Roughly 80% of new business apps pick cross-platform (React Native or Flutter) because it cuts development costs by half while delivering 90–95% native performance.",
        "slideReference": "Tech Stacks Guide Slide 8: Chapter 8",
        "difficulty": "Medium"
      },
      {
        "id": "q4-6",
        "question": "Which database category is specifically architected to store high-dimensional mathematical embeddings to power Generative AI semantic search (RAG)?",
        "options": [
          "Relational SQL Database (SQLite)",
          "Vector Database (e.g. Pinecone, pgvector)",
          "Key-Value Store (Redis)",
          "Hierarchical Mainframe DB"
        ],
        "correctAnswer": 1,
        "explanation": "Vector databases store mathematical representations (embeddings) of text and images, allowing LLMs to search by meaning ('semantic search') rather than exact keyword matches.",
        "slideReference": "Tech Stacks Guide Slide 9: Chapter 9",
        "difficulty": "Medium"
      },
      {
        "id": "q4-7",
        "question": "Which cloud provider holds the largest global market share (~31%) with the deepest breadth of mature infrastructure services?",
        "options": [
          "Google Cloud Platform (GCP)",
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "DigitalOcean"
        ],
        "correctAnswer": 1,
        "explanation": "AWS remains the global cloud infrastructure leader with ~31% market share and over 200 distinct cloud services.",
        "slideReference": "Tech Stacks Guide Slide 10: Chapter 10",
        "difficulty": "Easy"
      },
      {
        "id": "q4-8",
        "question": "What is the equivalent Google Cloud Platform (GCP) service for AWS EC2 virtual machines?",
        "options": [
          "Cloud Functions",
          "Compute Engine",
          "Cloud Storage",
          "BigQuery"
        ],
        "correctAnswer": 1,
        "explanation": "AWS EC2 = Azure Virtual Machines = GCP Compute Engine.",
        "slideReference": "Tech Stacks Guide Slide 10: Chapter 10",
        "difficulty": "Medium"
      },
      {
        "id": "q4-9",
        "question": "What technique allows an enterprise to connect LLMs (like GPT-4 or Claude) to private internal company documents without spending millions training a custom model?",
        "options": [
          "WebAssembly (WASM)",
          "Retrieval-Augmented Generation (RAG)",
          "Containerization with Docker",
          "Monolithic Refactoring"
        ],
        "correctAnswer": 1,
        "explanation": "RAG converts private company files into vector embeddings, retrieves relevant excerpts upon user queries, and injects them into the prompt context for accurate, hallucination-free answers.",
        "slideReference": "Tech Stacks Guide Slide 12: Chapter 11",
        "difficulty": "Hard"
      },
      {
        "id": "q4-10",
        "question": "What surprising legacy programming language (created in 1959) still processes 95% of global ATM swipes and 90% of credit card transactions?",
        "options": [
          "COBOL",
          "Fortran",
          "Pascal",
          "Basic"
        ],
        "correctAnswer": 0,
        "explanation": "COBOL, running on IBM z/OS mainframes, continues to process over 90% of global financial transactions because the risk of rewriting 40 years of banking business logic is too high.",
        "slideReference": "Tech Stacks Guide Slide 13: Chapters 12-13",
        "difficulty": "Medium"
      },
      {
        "id": "q4-11",
        "question": "When modernizing a critical legacy enterprise system, what is the lowest-risk initial strategy for Product Managers to propose?",
        "options": [
          "Replace: Shut down legacy software immediately and force users onto SaaS",
          "Encapsulate: Leave legacy code running and wrap it in modern REST/GraphQL APIs",
          "Refactor: Rewrite the entire application in Rust over a 3-year project",
          "Ignore: Pretend the legacy system does not exist"
        ],
        "correctAnswer": 1,
        "explanation": "Encapsulation wraps the legacy system in modern APIs. This unlocks new web and mobile apps in months without risking the stability of core transaction processing.",
        "slideReference": "Tech Stacks Guide Slide 13: Chapters 12-13",
        "difficulty": "Hard"
      },
      {
        "id": "q4-12",
        "question": "What combination represents the 'Modern Startup Stack' standard in 2024+?",
        "options": [
          "Linux, Apache, MySQL, PHP (LAMP)",
          "Next.js (React) + TypeScript + PostgreSQL + Tailwind CSS + Vercel",
          "Java Spring Boot + Angular + Oracle DB + On-Premise Servers",
          "WordPress + cPanel + Shared Web Hosting"
        ],
        "correctAnswer": 1,
        "explanation": "Next.js + TypeScript + PostgreSQL + Tailwind CSS + Vercel is the dominant 2024+ startup stack, delivering fast prototyping, type safety, and automated edge deployment.",
        "slideReference": "Tech Stacks Guide Slide 14: Chapter 14",
        "difficulty": "Easy"
      },
      {
        "id": "q4-13",
        "question": "Under the OWASP Top 10, what is 'Broken Access Control'?",
        "options": [
          "A power outage in an AWS data center",
          "A security flaw where authenticated users can view, edit, or delete records belonging to other users because permissions aren't verified on the server",
          "A cracked smartphone screen that prevents touch input",
          "A broken Wi-Fi router password"
        ],
        "correctAnswer": 1,
        "explanation": "Broken Access Control (#1 in OWASP Top 10) occurs when the backend fails to verify whether the logged-in user actually has permission to view or manipulate the requested data record.",
        "slideReference": "Tech Stacks Guide Slide 16: Chapter 16",
        "difficulty": "Medium"
      },
      {
        "id": "q4-14",
        "question": "What is the maximum penalty for a data fiduciary under India's Digital Personal Data Protection (DPDP) Act 2023 for failing to prevent a significant personal data breach?",
        "options": [
          "₹50,000",
          "₹25 Lakh",
          "Up to ₹250 Crore per incident",
          "There are no financial penalties"
        ],
        "correctAnswer": 2,
        "explanation": "India's DPDP Act 2023 establishes penalties of up to ₹250 Crore per incident for organizations that fail to implement reasonable security safeguards to prevent personal data breaches.",
        "slideReference": "Tech Stacks Guide Slide 16: Chapter 16",
        "difficulty": "Hard"
      },
      {
        "id": "q4-15",
        "question": "Which of the following is cited as the '#1 architectural mistake' made by early-stage tech startups?",
        "options": [
          "Using relational PostgreSQL databases",
          "Premature Microservices: splitting a product into dozens of services before achieving product-market fit or team scale",
          "Writing code in TypeScript instead of vanilla JavaScript",
          "Deploying software on cloud infrastructure"
        ],
        "correctAnswer": 1,
        "explanation": "Premature microservices burden tiny startup squads with distributed network overhead, complex orchestration, and slow deployment cycles. Startups should start with a clean modular monolith.",
        "slideReference": "Tech Stacks Guide Slide 18: Stack Evolution",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "id": "quiz-python-ecosystem",
    "courseId": "pm2-05-python-ecosystem",
    "title": "Module 5 Assessment: The Python Ecosystem for Product Leaders",
    "description": "Evaluate your understanding of Python's strengths, the Global Interpreter Lock (GIL), desktop GUI tools, Django vs Flask vs FastAPI, FinTech cloud architecture, and the packaging pipeline.",
    "timeLimitMinutes": 15,
    "passingScore": 75,
    "totalQuestions": 10,
    "badgeTitle": "Python Ecosystem Leader",
    "questions": [
      {
        "id": "q5-1",
        "question": "In standard multi-tier software architecture, which tier is Python's primary home?",
        "options": [
          "The Presentation Tier (Client browser UI)",
          "The Logic Tier (Backend server / APIs)",
          "The Hardware Firmware Tier",
          "The Physical Fiber-Optic Cable Tier"
        ],
        "correctAnswer": 1,
        "explanation": "Python lives predominantly in the Logic (Backend) Tier, where it runs business calculations, API endpoints, authentication checks, and database coordination.",
        "slideReference": "Tech Stacks Python Slide 3: The Language",
        "difficulty": "Easy"
      },
      {
        "id": "q5-2",
        "question": "Why is Python often the fastest language for a small engineering squad to ship an MVP in?",
        "options": [
          "Because Python executes CPU operations faster than C++ and Rust",
          "Because its syntax is close to plain English, minimizing boilerplate and cognitive friction",
          "Because Python does not require a database to store data",
          "Because Apple bundles Python directly into iOS App Store downloads"
        ],
        "correctAnswer": 1,
        "explanation": "Python's human-readable, concise syntax allows engineers to write, review, and iterate on features with far less boilerplate code than compiled enterprise languages.",
        "slideReference": "Tech Stacks Python Slide 3: The Language",
        "difficulty": "Easy"
      },
      {
        "id": "q5-3",
        "question": "What is the Global Interpreter Lock (GIL) in standard Python (CPython)?",
        "options": [
          "A security feature that blocks SQL injection attacks",
          "A mutex lock that restricts Python bytecode execution to one native thread at a time, limiting true CPU multi-threading",
          "A paid license required to sell Python code",
          "A firewall that prevents unauthorized API access"
        ],
        "correctAnswer": 1,
        "explanation": "The GIL ensures memory safety in CPython by permitting only one native thread to execute Python bytecode simultaneously. CPU-bound concurrency requires multi-processing or C extensions.",
        "slideReference": "Tech Stacks Python Slide 4: Trade-offs",
        "difficulty": "Hard"
      },
      {
        "id": "q5-4",
        "question": "An engineering team needs to build a simple internal warehouse desktop utility in 2 days with zero setup. Which built-in Python toolkit should they use?",
        "options": [
          "React Native",
          "Tkinter",
          "Kubernetes",
          "FastAPI"
        ],
        "correctAnswer": 1,
        "explanation": "Tkinter is built into Python's standard library and requires zero third-party installation, making it the fastest choice for internal desktop utilities.",
        "slideReference": "Tech Stacks Python Slide 5: Desktop",
        "difficulty": "Easy"
      },
      {
        "id": "q5-5",
        "question": "Which Python web framework is known for its 'Batteries Included' philosophy, providing built-in ORM, admin dashboard, user auth, and security out of the box?",
        "options": [
          "Flask",
          "FastAPI",
          "Django",
          "Tornado"
        ],
        "correctAnswer": 2,
        "explanation": "Django is the classic 'batteries included' framework: it provides built-in authentication, ORM, URL routing, and a production-ready admin panel out of the box.",
        "slideReference": "Tech Stacks Python Slide 6: Web Backend",
        "difficulty": "Easy"
      },
      {
        "id": "q5-6",
        "question": "Why is FastAPI currently the recommended default framework for building new Python REST APIs and ML model endpoints?",
        "options": [
          "Because it is older and more mature than Django",
          "Because it is async-first, automatically validates data payloads with Pydantic, and auto-generates interactive OpenAPI documentation (/docs)",
          "Because it only runs inside Google Chrome",
          "Because it eliminates the need for Python virtual environments"
        ],
        "correctAnswer": 1,
        "explanation": "FastAPI leverages modern Python async/await, delivers automatic Swagger/OpenAPI documentation, and automatically validates request bodies using type hints.",
        "slideReference": "Tech Stacks Python Slide 6: Web Backend",
        "difficulty": "Medium"
      },
      {
        "id": "q5-7",
        "question": "In the FinTech cloud architecture example, why is FastAPI's async support critical when calling external bank APIs (like Plaid)?",
        "options": [
          "Async support automatically encrypts the user's bank password",
          "While the server waits 800ms for the bank API to respond, the async server thread is not blocked and can handle other users' requests",
          "Async support converts the bank's response into Bitcoin",
          "Async support bypasses AWS hosting bills entirely"
        ],
        "correctAnswer": 1,
        "explanation": "In an async architecture, slow I/O calls to external third parties (like banking partners) don't freeze the server thread. The server can process hundreds of other incoming requests in parallel.",
        "slideReference": "Tech Stacks Python Slide 8: Real Example",
        "difficulty": "Hard"
      },
      {
        "id": "q5-8",
        "question": "What is the primary Python library used for tabular data manipulation, data cleaning, and CSV dataframe analysis?",
        "options": [
          "PyTorch",
          "Pandas",
          "Flask",
          "Tkinter"
        ],
        "correctAnswer": 1,
        "explanation": "Pandas is the universal standard for manipulating structured tabular dataframes, filtering records, and computing statistical aggregations.",
        "slideReference": "Tech Stacks Python Slide 9: Data & AI",
        "difficulty": "Easy"
      },
      {
        "id": "q5-9",
        "question": "What is the correct 4-step packaging pipeline every Python engineering team should follow to avoid 'works on my machine' bugs?",
        "options": [
          "Install globally -> Deploy to server -> Delete code -> Backup",
          "Install (`pip`) -> Isolate environment (`venv`) -> Lock exact versions (`Poetry`/`uv`) -> Containerize (`Docker`)",
          "Write code -> Upload via FTP -> Restart server -> Hope for the best",
          "Run on localhost -> Ship directly to AWS S3"
        ],
        "correctAnswer": 1,
        "explanation": "The reliable Python pipeline: Install packages via `pip`, isolate project dependencies in a `venv`, lock exact dependency checksums via `Poetry`/`uv`, and package inside a `Docker` container.",
        "slideReference": "Tech Stacks Python Slide 10: Operations",
        "difficulty": "Medium"
      },
      {
        "id": "q5-10",
        "question": "Across desktop tools, web backends, and AI pipelines, what is Python's overarching strategic competitive advantage?",
        "options": [
          "Raw CPU mathematical execution throughput",
          "Speed of development and iteration velocity over raw execution speed",
          "Zero memory consumption",
          "Native cross-compilation to Apple iOS App Store packages"
        ],
        "correctAnswer": 1,
        "explanation": "Python wins in the marketplace because it maximizes human development speed and team iteration velocity, allowing companies to build and test ideas faster than competitors.",
        "slideReference": "Tech Stacks Python Slide 13: Takeaways",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "id": "quiz-pm2-final-certification",
    "courseId": "pm2-final-exam",
    "title": "PM2 Comprehensive Technical Certification Exam",
    "description": "The ultimate 20-question capstone examination covering the complete Product Management II curriculum: Software Architecture, APIs & Integrations, Databases & Data Modeling, Tech Stacks, and Python.",
    "timeLimitMinutes": 30,
    "passingScore": 80,
    "totalQuestions": 20,
    "badgeTitle": "PM2 Certified Technical Product Manager",
    "questions": [
      {
        "id": "qc-1",
        "question": "A customer taps 'Book Ride' on Ola. The app calls Google Maps for the route, Razorpay for payment, and Twilio for an OTP. What architectural pattern is this?",
        "options": [
          "Monolithic mainframe processing",
          "Composing multiple specialized third-party APIs to deliver a single product experience",
          "Single Page Application with no backend servers",
          "Offline-first PWA caching"
        ],
        "correctAnswer": 1,
        "explanation": "Modern digital products compose multiple specialized APIs (maps, payments, SMS) to deliver complex multi-party user experiences rapidly without building everything in-house.",
        "slideReference": "Day 2 Slide 3: The Big Idea",
        "difficulty": "Easy"
      },
      {
        "id": "qc-2",
        "question": "Which HTTP status code indicates that your application made too many API calls in a short window and has been temporarily blocked by the partner's rate limiter?",
        "options": [
          "200 OK",
          "401 Unauthorized",
          "404 Not Found",
          "429 Too Many Requests"
        ],
        "correctAnswer": 3,
        "explanation": "HTTP 429 Too Many Requests specifically communicates that the caller has exceeded the API rate limit quota.",
        "slideReference": "Day 2 Slide 6: When Things Go Wrong",
        "difficulty": "Easy"
      },
      {
        "id": "qc-3",
        "question": "Why is database Normalization critical in transactional relational databases?",
        "options": [
          "To convert SQL tables into NoSQL documents",
          "To eliminate duplicate data and prevent insert, update, and delete anomalies",
          "To speed up full-table scan queries",
          "To bypass database indexes"
        ],
        "correctAnswer": 1,
        "explanation": "Normalization breaks data into related tables so each fact lives in exactly one place, preventing data duplication, update inconsistencies, and accidental deletions.",
        "slideReference": "Day 3 Slide 6: Data Design",
        "difficulty": "Medium"
      },
      {
        "id": "qc-4",
        "question": "In SQL, what is the role of the `GROUP BY` clause?",
        "options": [
          "To filter which rows are displayed",
          "To aggregate records by a category (e.g., summarize total revenue by city)",
          "To delete corrupted database records",
          "To establish a new Primary Key"
        ],
        "correctAnswer": 1,
        "explanation": "`GROUP BY` groups rows sharing common attribute values to perform aggregate computations (COUNT, SUM, AVG) by category.",
        "slideReference": "Day 3 Slide 7: SQL Fluency",
        "difficulty": "Easy"
      },
      {
        "id": "qc-5",
        "question": "What is the primary difference between Batch Processing and Stream Processing in data pipelines?",
        "options": [
          "Batch runs scheduled runs at intervals with minutes-to-hours latency; Stream processes continuous events in real-time with sub-second latency",
          "Batch is for mobile apps; Stream is for desktop browsers",
          "Batch is 10x more expensive than Stream",
          "Batch is only supported by NoSQL databases"
        ],
        "correctAnswer": 0,
        "explanation": "Batch processing executes scheduled jobs at lower cost with latency; stream processing processes event-by-event continuously with millisecond latency at 5-10x higher infrastructure cost.",
        "slideReference": "Day 3 Slide 9: Data Flow",
        "difficulty": "Medium"
      },
      {
        "id": "qc-6",
        "question": "A PM wants to add a 'Save for Later' wishlist feature to an e-commerce app. The tech lead checks the ER diagram and sees `Users` and `Products` tables exist. How long should this take?",
        "options": [
          "6 months of total database rewrites",
          "1 sprint: the schema exists, simply create a new `wishlists` junction table",
          "3 years of COBOL modernization",
          "It cannot be done in a relational database"
        ],
        "correctAnswer": 1,
        "explanation": "Because the core user and product entities already exist, adding a wishlist only requires adding a simple linking table (`user_id`, `product_id`), which fits neatly into a single sprint.",
        "slideReference": "Day 3 Slide 10: Product Impact",
        "difficulty": "Medium"
      },
      {
        "id": "qc-7",
        "question": "Which database does stock brokerage Zerodha use to query high-frequency stock tick time-series data while preserving relational account ledgers?",
        "options": [
          "MongoDB",
          "PostgreSQL + TimescaleDB",
          "Firebase",
          "Microsoft Access"
        ],
        "correctAnswer": 1,
        "explanation": "Zerodha combines PostgreSQL with TimescaleDB to handle over 15 million time-series stock orders every day while keeping relational ledger consistency.",
        "slideReference": "Day 3 Slide 12: India Context",
        "difficulty": "Hard"
      },
      {
        "id": "qc-8",
        "question": "What is the core difference between Authentication (AuthN) and Authorization (AuthZ)?",
        "options": [
          "AuthN is for front-end; AuthZ is for back-end",
          "AuthN verifies WHO you are (identity); AuthZ checks WHAT you are allowed to do (permissions)",
          "AuthN encrypts data; AuthZ deletes data",
          "AuthN is HTTP; AuthZ is HTTPS"
        ],
        "correctAnswer": 1,
        "explanation": "Authentication (AuthN) confirms identity (login credentials, 2FA). Authorization (AuthZ) verifies permissions (can this user edit this customer's invoice?).",
        "slideReference": "Day 1 Slide 15: DevOps & Reliability",
        "difficulty": "Easy"
      },
      {
        "id": "qc-9",
        "question": "Why is 'Premature Microservices' considered an architectural trap for early startups?",
        "options": [
          "Because microservices cannot be hosted on AWS or GCP",
          "Because managing distributed network calls, tracing, and multi-service deployments overwhelms small teams before they achieve product-market fit",
          "Because microservices are illegal under SOC 2 compliance",
          "Because microservices require using Python"
        ],
        "correctAnswer": 1,
        "explanation": "Microservices introduce distributed systems complexity (network failures, data consistency across services, deployment coordination) that slows down small teams.",
        "slideReference": "Tech Stacks Guide Slide 18: Stack Evolution",
        "difficulty": "Medium"
      },
      {
        "id": "qc-10",
        "question": "Which Python web framework is known as 'batteries included' and powers Instagram and Pinterest?",
        "options": [
          "FastAPI",
          "Flask",
          "Django",
          "Bottle"
        ],
        "correctAnswer": 2,
        "explanation": "Django provides built-in ORM, admin panel, authentication, and routing out of the box, powering large consumer platforms like Instagram and Pinterest.",
        "slideReference": "Tech Stacks Python Slide 6: Web Backend",
        "difficulty": "Easy"
      },
      {
        "id": "qc-11",
        "question": "What does an API Contract (e.g., OpenAPI / Swagger specification) allow engineering teams to achieve?",
        "options": [
          "It allows front-end and back-end engineers to build concurrently in parallel using mock data",
          "It automatically files legal patents for your product features",
          "It converts relational databases into NoSQL document stores",
          "It replaces the need for product managers"
        ],
        "correctAnswer": 0,
        "explanation": "Once an API contract defines the endpoints, parameters, and response schemas, front-end and back-end teams can build in parallel without waiting for each other.",
        "slideReference": "Day 1 Slide 6: The Division of Labour",
        "difficulty": "Medium"
      },
      {
        "id": "qc-12",
        "question": "A banking app user enters another user's account ID into a URL parameter and is able to see their bank balance. Which OWASP Top 10 vulnerability is this?",
        "options": [
          "Cryptographic Failure",
          "Broken Access Control (#1 in OWASP Top 10)",
          "SQL Injection",
          "Denial of Service"
        ],
        "correctAnswer": 1,
        "explanation": "Broken Access Control occurs when the server fails to verify that the logged-in user actually has permission to access the requested record ID.",
        "slideReference": "Tech Stacks Guide Slide 16: Chapter 16",
        "difficulty": "Medium"
      },
      {
        "id": "qc-13",
        "question": "Which cloud computing model runs code purely on-demand, charges strictly per invocation, and requires zero virtual machine management?",
        "options": [
          "Bare-metal dedicated servers",
          "Serverless (Function-as-a-Service, e.g. AWS Lambda)",
          "On-premise private data centers",
          "Mainframe time-sharing"
        ],
        "correctAnswer": 1,
        "explanation": "Serverless (FaaS) runs functions only when triggered by events, automatically scaling and charging zero dollars when idle.",
        "slideReference": "Day 1 Slide 10: Architecture Patterns",
        "difficulty": "Easy"
      },
      {
        "id": "qc-14",
        "question": "What is the primary architectural benefit of utilizing an asynchronous framework like FastAPI for backend APIs?",
        "options": [
          "It eliminates the need for unit tests",
          "Worker threads do not freeze while waiting for slow database queries or external third-party APIs, allowing massive concurrency",
          "It automatically styles frontend buttons in Tailwind CSS",
          "It converts Python code into native Swift for iOS"
        ],
        "correctAnswer": 1,
        "explanation": "Asynchronous event loops allow a single server process to juggle thousands of concurrent I/O requests without blocking threads while waiting for external services.",
        "slideReference": "Tech Stacks Python Slide 8: Real Example",
        "difficulty": "Hard"
      },
      {
        "id": "qc-15",
        "question": "Under India's Digital Personal Data Protection (DPDP) Act 2023, what is the maximum regulatory penalty for a data breach?",
        "options": [
          "₹50,000",
          "₹10 Lakh",
          "Up to ₹250 Crore per incident",
          "Criminal imprisonment for the Product Manager"
        ],
        "correctAnswer": 2,
        "explanation": "India's DPDP Act imposes financial penalties of up to ₹250 Crore for serious failures to protect citizens' personal data from breach or unauthorized exposure.",
        "slideReference": "Tech Stacks Guide Slide 16: Chapter 16",
        "difficulty": "Hard"
      },
      {
        "id": "qc-16",
        "question": "In data pipeline architecture, what does the ETL acronym stand for?",
        "options": [
          "Encrypt, Transfer, Lock",
          "Extract, Transform, Load",
          "Evaluate, Test, Launch",
          "Edit, Transmit, Log"
        ],
        "correctAnswer": 1,
        "explanation": "ETL stands for Extract (pull raw data from sources), Transform (clean, standardize, and join), and Load (store into a data warehouse).",
        "slideReference": "Day 3 Slide 9: Data Flow",
        "difficulty": "Easy"
      },
      {
        "id": "qc-17",
        "question": "Why did Twitter/X migrate from a sprawling microservices mesh back into a simplified monolithic architecture in 2023?",
        "options": [
          "Because microservices are incompatible with mobile phones",
          "To cut millions in cloud infrastructure costs, eliminate cross-network RPC latency, and streamline engineering ownership",
          "Because Linux stopped supporting containers",
          "Because Twitter switched to COBOL mainframes"
        ],
        "correctAnswer": 1,
        "explanation": "Twitter simplified its architecture to reduce cloud spend, eliminate the overhead of coordinating hundreds of services, and regain rapid deployment speed.",
        "slideReference": "Day 1 Slide 16: The PM's Perspective",
        "difficulty": "Hard"
      },
      {
        "id": "qc-18",
        "question": "Which of the following is an example of 'Commodity Plumbing' that a fintech product manager should BUY rather than build?",
        "options": [
          "Proprietary loan underwriting algorithm",
          "SMS OTP verification delivery (Twilio / MSG91)",
          "Custom credit risk scoring model",
          "Exclusive customer loyalty program logic"
        ],
        "correctAnswer": 1,
        "explanation": "SMS delivery is a commodity utility used by every competitor. Building an SMS telco infrastructure in-house wastes valuable engineering time.",
        "slideReference": "Day 2 Slide 9: The Big Decision",
        "difficulty": "Easy"
      },
      {
        "id": "qc-19",
        "question": "What is a 'Pull Request' (PR) in modern software engineering workflows?",
        "options": [
          "A customer request to pull a feature from the roadmap",
          "A formal code proposal where an engineer submits changes to be reviewed, tested by CI, and approved by a peer before merging into production",
          "A SQL query that pulls records from a database table",
          "A request to reboot the server"
        ],
        "correctAnswer": 1,
        "explanation": "A Pull Request (PR) in Git is the standard peer-review checkpoint where automated CI tests run and fellow engineers inspect code before it enters the production codebase.",
        "slideReference": "Day 1 Slide 15: DevOps & Reliability",
        "difficulty": "Easy"
      },
      {
        "id": "qc-20",
        "question": "What is the ultimate definition of the Product Manager's role in technical architecture decisions?",
        "options": [
          "The PM dictates the programming language, framework, and database choices to engineers",
          "The PM writes the production database migration scripts",
          "The PM clearly defines business constraints (timeline, budget, scale, latency) and lets engineering leadership determine the technical solution",
          "The PM ignores all technology discussions completely"
        ],
        "correctAnswer": 2,
        "explanation": "Great Product Managers define the business problem, user requirements, timeline constraints, and scale parameters, while empowering engineering leaders to select the best technical solution.",
        "slideReference": "Day 1 Slide 16 & Day 2 Slide 12",
        "difficulty": "Medium"
      }
    ]
  }
];
