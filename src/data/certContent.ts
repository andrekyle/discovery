import type { UnitContent } from "../types";

/**
 * Vendor certification courses (Python Institute, Microsoft, Oracle) offered
 * alongside the National Certificate. Each unit carries the official exam
 * syllabus as its lesson, plus a short knowledge check.
 */
export const CERT_CONTENT: Record<string, UnitContent> = {
  /* ================= PCAP — Certified Associate in Python Programming ================= */
  PCAP: {
    lesson: [
      {
        heading: "About this certification",
        icon: "info",
        flat: true,
        paragraphs: [
          "PCAP™ – Certified Associate in Python Programming is a professional credential from the Python Institute (OpenEDG). It measures your ability to accomplish coding tasks related to the essentials of programming in Python — modules and packages, exceptions, strings, object-oriented programming, and functional-programming tools such as lambdas, closures and generators.",
          "Official exam syllabus: https://pythoninstitute.org/pcap-exam-syllabus",
        ],
        table: {
          headers: ["Exam at a glance", "Detail"],
          rows: [
            ["Exam code", "PCAP-31-03"],
            ["Questions", "40 single- and multiple-select items"],
            ["Duration", "65 minutes (+ 10 minutes NDA / tutorial)"],
            ["Passing score", "70%"],
            ["Delivery", "Pearson VUE test centres / OnVUE online"],
            ["Prerequisites", "None (PCEP™ recommended)"],
          ],
        },
      },
      {
        heading: "Section 1: Modules and Packages — 12% of the exam",
        icon: "layers",
        paragraphs: ["Import and use Python modules, and build your own modules and packages."],
        bullets: [
          "import variants: import, from … import, import … as, and the * wildcard",
          "Advanced qualifying for nested modules and the dir() function",
          "The sys.path variable and how Python locates modules",
          "Working with selected math, random and platform module functions",
          "Creating and using your own modules and packages: __init__.py, __pycache__, __name__, public variables, searching for and nesting packages",
        ],
      },
      {
        heading: "Section 2: Exceptions — 14% of the exam",
        icon: "shield",
        paragraphs: ["Handle errors cleanly and design your own exception classes."],
        bullets: [
          "try-except with multiple except branches, else and finally",
          "The exception hierarchy: BaseException, Exception and ordering except branches",
          "raise and raise ex; the assert statement",
          "Exceptions as objects: args and the exception message",
          "Chained exceptions (implicit and explicit): __context__ and __cause__",
          "Defining and using self-defined exception classes",
        ],
      },
      {
        heading: "Section 3: Strings — 18% of the exam",
        icon: "document",
        paragraphs: ["Work confidently with text — encodings, operations and methods."],
        bullets: [
          "Machine representation: ASCII, Unicode, UTF-8, code points and escape sequences",
          "ord() and chr(); indexing, slicing and immutability",
          "Iterating through strings; concatenating, multiplying and comparing strings",
          "The in and not in operators",
          "String methods: .isxxx(), .join(), .split(), .sort()/sorted(), .index(), .find(), .rfind()",
        ],
      },
      {
        heading: "Section 4: Object-Oriented Programming — 34% of the exam",
        icon: "chip",
        paragraphs: ["The largest exam block: classes, objects, inheritance and polymorphism."],
        bullets: [
          "Core ideas and terminology: class, instance, object, attribute, method, type",
          "Instance vs class variables; declaring, initialising and __dict__",
          "Private components, name mangling and encapsulation",
          "Constructors (__init__) and the role of self",
          "Introspection: __name__, __module__, __bases__, hasattr(), isinstance(), issubclass()",
          "Inheritance — single and multiple; Method Resolution Order (MRO); the diamond problem",
          "Polymorphism, overriding and super(); the __str__() method",
        ],
      },
      {
        heading: "Section 5: Miscellaneous — 22% of the exam",
        icon: "exercise",
        paragraphs: ["Functional-programming tools, generators and file processing."],
        bullets: [
          "List comprehensions — including nested and conditional forms",
          "Lambda functions; map(), filter() and functions as parameters",
          "Closures and the scope of names",
          "Generators, iterators and the yield statement",
          "File I/O: open() modes, read(), readline(), readlines(), write(), text vs binary streams, errno",
        ],
      },
    ],
    exercises: [],
    assignments: [],
    quiz: [
      {
        q: "Which statement lets you call pi directly (without the math. prefix)?",
        options: ["import math", "from math import pi", "import math.pi", "import pi from math"],
        answer: 1,
        explain: "from math import pi binds the name pi in your namespace; plain import math requires math.pi.",
      },
      {
        q: "What does an __init__.py file do?",
        options: [
          "Compiles the module to bytecode",
          "Marks a directory as a Python package",
          "Starts the Python interpreter",
          "Documents the module",
        ],
        answer: 1,
        explain: "A directory containing __init__.py is treated as a package that can be imported.",
      },
      {
        q: "Which try-statement branch runs whether or not an exception occurred?",
        options: ["else", "except", "finally", "raise"],
        answer: 2,
        explain: "finally always executes — it is used for clean-up such as closing files.",
      },
      {
        q: "What happens when you run: s = \"abc\"; s[0] = \"x\"?",
        options: [
          "s becomes \"xbc\"",
          "A TypeError is raised — strings are immutable",
          "s becomes \"x\"",
          "Nothing — the assignment is silently ignored",
        ],
        answer: 1,
        explain: "Python strings are immutable; item assignment raises TypeError.",
      },
      {
        q: "In a subclass method, super() is used to…",
        options: [
          "Create a private attribute",
          "Access methods of the superclass",
          "Delete the current instance",
          "Freeze the class hierarchy",
        ],
        answer: 1,
        explain: "super() returns a proxy to the parent class, e.g. super().__init__().",
      },
      {
        q: "What does [x * x for x in range(3)] evaluate to?",
        options: ["[1, 4, 9]", "[0, 1, 4]", "[0, 1, 2]", "[1, 2, 3]"],
        answer: 1,
        explain: "range(3) yields 0, 1, 2 — squared: 0, 1, 4.",
      },
    ],
  },

  /* ================= AZ-900 — Microsoft Azure Fundamentals ================= */
  "AZ-900": {
    lesson: [
      {
        heading: "About this certification",
        icon: "info",
        flat: true,
        paragraphs: [
          "Microsoft Certified: Azure Fundamentals validates foundational knowledge of cloud concepts and Microsoft Azure — how the cloud works, the core services Azure offers, and how Azure is managed and governed. It suits both technical and non-technical people starting their cloud journey.",
          "Official certification page and study guide: https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
        ],
        table: {
          headers: ["Exam at a glance", "Detail"],
          rows: [
            ["Exam code", "AZ-900"],
            ["Questions", "±40–60 (multiple choice / multiple select)"],
            ["Duration", "45 minutes"],
            ["Passing score", "700 / 1000"],
            ["Delivery", "Pearson VUE test centres / online proctored"],
            ["Prerequisites", "None"],
          ],
        },
      },
      {
        heading: "Skill area 1: Describe cloud concepts — 25–30% of the exam",
        icon: "globe",
        paragraphs: ["What cloud computing is and why organisations use it."],
        bullets: [
          "Define cloud computing and the shared responsibility model",
          "Cloud models: public, private and hybrid — and when each is appropriate",
          "The consumption-based model and cloud pricing models",
          "Benefits: high availability, scalability, reliability, predictability, security, governance and manageability",
          "Service types: IaaS, PaaS and SaaS — with appropriate use cases for each",
        ],
      },
      {
        heading: "Skill area 2: Describe Azure architecture and services — 35–40% of the exam",
        icon: "server",
        paragraphs: ["The building blocks of Azure and its core service families."],
        bullets: [
          "Core components: regions, region pairs, sovereign regions, availability zones, datacenters",
          "Resources, resource groups, subscriptions and management groups",
          "Compute: virtual machines, VM scale sets, containers, Azure Functions, App Service, Azure Virtual Desktop",
          "Networking: virtual networks, subnets, peering, VPN Gateway, ExpressRoute, DNS, public and private endpoints",
          "Storage: Blob, Disk and File storage; tiers, redundancy options; AzCopy, Storage Explorer, File Sync; Azure Migrate and Data Box",
          "Identity, access and security: Microsoft Entra ID, MFA, SSO, external identities, Conditional Access, RBAC, Zero Trust, defence-in-depth, Microsoft Defender for Cloud",
        ],
      },
      {
        heading: "Skill area 3: Describe Azure management and governance — 30–35% of the exam",
        icon: "clipboard",
        paragraphs: ["Controlling cost, enforcing standards and operating Azure day to day."],
        bullets: [
          "Factors that affect cost; the Pricing and Total Cost of Ownership (TCO) calculators; Microsoft Cost Management; tags",
          "Governance and compliance: Azure Policy, resource locks, Microsoft Purview, the Service Trust portal",
          "Managing resources: Azure portal, Cloud Shell, Azure CLI, Azure PowerShell, Azure Arc",
          "Infrastructure as Code and ARM templates",
          "Monitoring: Azure Advisor, Azure Service Health, Azure Monitor (Log Analytics, alerts, Application Insights)",
        ],
      },
    ],
    exercises: [],
    assignments: [],
    quiz: [
      {
        q: "Azure SQL Database — where you manage the data but Microsoft manages the OS and infrastructure — is an example of…",
        options: ["IaaS", "PaaS", "SaaS", "On-premises"],
        answer: 1,
        explain: "Platform as a Service: you bring the data/app; the platform, patching and infrastructure are managed for you.",
      },
      {
        q: "Which cloud model combines on-premises infrastructure with public cloud services?",
        options: ["Public", "Private", "Hybrid", "Community"],
        answer: 2,
        explain: "A hybrid cloud joins private/on-premises resources with public cloud services.",
      },
      {
        q: "Availability zones primarily protect applications against…",
        options: [
          "A whole geography failing",
          "Datacenter-level failures within a region",
          "Subscription overspend",
          "Weak passwords",
        ],
        answer: 1,
        explain: "Zones are physically separate datacenters inside one region — an outage in one zone leaves the others running.",
      },
      {
        q: "Which tool estimates the monthly cost of Azure services before you deploy them?",
        options: ["Azure Advisor", "The Pricing calculator", "Azure Monitor", "Service Health"],
        answer: 1,
        explain: "The Pricing calculator models the monthly cost of a planned architecture; the TCO calculator compares on-prem vs cloud.",
      },
      {
        q: "Role-Based Access Control (RBAC) is used to…",
        options: [
          "Encrypt data at rest",
          "Grant users only the access they need to Azure resources",
          "Speed up virtual machines",
          "Pair Azure regions",
        ],
        answer: 1,
        explain: "RBAC assigns roles at a scope (subscription, resource group, resource) to enforce least privilege.",
      },
    ],
  },

  /* ================= AI-900 — Microsoft Azure AI Fundamentals ================= */
  "AI-900": {
    lesson: [
      {
        heading: "About this certification",
        icon: "info",
        flat: true,
        paragraphs: [
          "Microsoft Certified: Azure AI Fundamentals demonstrates knowledge of common AI and machine-learning workloads — and the Azure services that implement them, from computer vision and natural language processing to generative AI. No data-science or engineering background is required.",
          "Official certification page and study guide: https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
        ],
        table: {
          headers: ["Exam at a glance", "Detail"],
          rows: [
            ["Exam code", "AI-900"],
            ["Questions", "±40–60 (multiple choice / multiple select)"],
            ["Duration", "45 minutes"],
            ["Passing score", "700 / 1000"],
            ["Delivery", "Pearson VUE test centres / online proctored"],
            ["Prerequisites", "None"],
          ],
        },
      },
      {
        heading: "Skill area 1: AI workloads and considerations — 15–20% of the exam",
        icon: "target",
        paragraphs: ["Recognise the main families of AI workloads and the principles of responsible AI."],
        bullets: [
          "Common workloads: computer vision, natural language processing, document processing and knowledge mining, generative AI",
          "Responsible AI: fairness, reliability & safety, privacy & security, inclusiveness, transparency, accountability",
        ],
      },
      {
        heading: "Skill area 2: Machine learning on Azure — 20–25% of the exam",
        icon: "trend",
        paragraphs: ["Core machine-learning techniques and the Azure Machine Learning service."],
        bullets: [
          "Regression, classification and clustering — what each predicts and example scenarios",
          "Core concepts: features and labels; training and validation datasets",
          "Deep learning vs classic machine learning; the Transformer architecture",
          "Azure Machine Learning capabilities: automated ML, data & compute services, model registration and deployment",
        ],
      },
      {
        heading: "Skill area 3: Computer vision workloads on Azure — 15–20% of the exam",
        icon: "eye",
        paragraphs: ["Solutions that interpret images and documents."],
        bullets: [
          "Image classification and object detection",
          "Optical character recognition (OCR)",
          "Facial detection and facial analysis",
          "Azure services: Azure AI Vision, Azure AI Face, Azure AI Document Intelligence",
        ],
      },
      {
        heading: "Skill area 4: Natural Language Processing workloads on Azure — 15–20% of the exam",
        icon: "chat",
        paragraphs: ["Solutions that understand written and spoken language."],
        bullets: [
          "Key phrase extraction, entity recognition, sentiment analysis, language modelling",
          "Speech recognition, speech synthesis and translation",
          "Azure services: Azure AI Language, Azure AI Speech, Azure AI Translator",
        ],
      },
      {
        heading: "Skill area 5: Generative AI workloads on Azure — 20–25% of the exam",
        icon: "award",
        paragraphs: ["The newest exam block: large language models and Azure OpenAI."],
        bullets: [
          "Features and common scenarios of generative AI (text, code and image generation)",
          "Responsible generative AI: content filters, grounding and transparency notes",
          "Azure OpenAI Service and the Microsoft Copilot ecosystem",
        ],
      },
    ],
    exercises: [],
    assignments: [],
    quiz: [
      {
        q: "Predicting the sale price of a house from its size and location is an example of…",
        options: ["Classification", "Clustering", "Regression", "Translation"],
        answer: 2,
        explain: "Regression predicts a continuous numeric value.",
      },
      {
        q: "Drawing labelled boxes around each car and pedestrian in a photo is…",
        options: ["Image classification", "Object detection", "OCR", "Sentiment analysis"],
        answer: 1,
        explain: "Object detection locates and labels multiple objects with bounding boxes; classification labels the whole image.",
      },
      {
        q: "Working out whether product reviews are positive or negative is which workload?",
        options: ["Computer vision", "Natural language processing", "Knowledge mining", "IoT"],
        answer: 1,
        explain: "Sentiment analysis is an NLP capability (Azure AI Language).",
      },
      {
        q: "\"An AI system should perform equally well for all groups of people.\" Which responsible-AI principle is this?",
        options: ["Transparency", "Accountability", "Fairness", "Reliability & safety"],
        answer: 2,
        explain: "Fairness means avoiding bias so the system treats all people equitably.",
      },
      {
        q: "Which Azure service gives applications access to large language models such as GPT-4?",
        options: ["Azure AI Vision", "Azure OpenAI Service", "Azure Monitor", "Azure DNS"],
        answer: 1,
        explain: "Azure OpenAI Service hosts generative models for chat, completion, embeddings and image generation.",
      },
    ],
  },

  /* ================= 1Z0-808 — Oracle Java SE 8 Programmer I ================= */
  "1Z0-808": {
    lesson: [
      {
        heading: "About this certification",
        icon: "info",
        flat: true,
        paragraphs: [
          "Java SE 8 Programmer I (exam 1Z0-808) is the first step towards the Oracle Certified Associate, Java SE 8 Programmer credential. It tests the fundamentals of the Java language: syntax, data types, control flow, arrays, methods, encapsulation, inheritance, exceptions and key classes from the Java API.",
          "Official exam page: https://mylearn.oracle.com/ou/exam/java-se-8-programmer-i-1z0-808/105037/110679/170387",
        ],
        table: {
          headers: ["Exam at a glance", "Detail"],
          rows: [
            ["Exam code", "1Z0-808"],
            ["Questions", "56 multiple choice"],
            ["Duration", "120 minutes"],
            ["Passing score", "65%"],
            ["Delivery", "Oracle / Pearson VUE test centres and online"],
            ["Prerequisites", "None"],
          ],
        },
      },
      {
        heading: "Topic 1: Java basics",
        icon: "book",
        paragraphs: ["The structure of a Java program and its runtime."],
        bullets: [
          "Define the scope of variables",
          "The structure of a Java class; main() and running a program from the command line",
          "Import other Java packages into your code",
          "Platform-independence, garbage collection and other key features of Java",
        ],
      },
      {
        heading: "Topic 2: Working with Java data types",
        icon: "database",
        paragraphs: ["Primitives, object references and wrappers."],
        bullets: [
          "Declare and initialise variables, including casting of primitive types",
          "Differentiate object references from primitives",
          "Read and write object fields",
          "Object lifecycle: creation, dereference by reassignment, garbage collection",
          "Wrapper classes such as Boolean, Double and Integer",
        ],
      },
      {
        heading: "Topic 3: Operators and decision constructs",
        icon: "target",
        paragraphs: ["Expressions, equality and branching."],
        bullets: [
          "Java operators and overriding precedence with parentheses",
          "Equality: == vs equals()",
          "if / else and the ternary operator",
          "The switch statement",
        ],
      },
      {
        heading: "Topic 4: Creating and using arrays",
        icon: "layers",
        paragraphs: ["Fixed-size sequences of values."],
        bullets: ["Declare, instantiate, initialise and use a one-dimensional array", "Declare, instantiate, initialise and use a multi-dimensional array"],
      },
      {
        heading: "Topic 5: Loop constructs",
        icon: "trend",
        paragraphs: ["Repetition and flow control."],
        bullets: [
          "while, do/while, for and the enhanced for loop",
          "Compare the loop constructs and choose appropriately",
          "break and continue",
        ],
      },
      {
        heading: "Topic 6: Methods and encapsulation",
        icon: "shield",
        paragraphs: ["Designing well-encapsulated classes."],
        bullets: [
          "Create methods with arguments and return values; overloaded methods",
          "The static keyword for methods and fields",
          "Constructors — default and user-defined",
          "Access modifiers and encapsulation principles",
          "The effect of passing object references and primitives into methods",
        ],
      },
      {
        heading: "Topic 7: Inheritance",
        icon: "network",
        paragraphs: ["Reusing and specialising behaviour."],
        bullets: [
          "Inheritance and its benefits; polymorphism",
          "Reference type vs object type; casting",
          "super and this to access objects and constructors",
          "Abstract classes and interfaces — when to use each",
        ],
      },
      {
        heading: "Topic 8: Handling exceptions",
        icon: "wrench",
        paragraphs: ["Robust error handling."],
        bullets: [
          "Checked exceptions vs unchecked exceptions vs Errors",
          "try-catch and how exceptions alter program flow",
          "Why exception handling matters; methods that throw exceptions",
          "Common exception classes and categories",
        ],
      },
      {
        heading: "Topic 9: Selected classes from the Java API",
        icon: "search",
        paragraphs: ["The classes every Java programmer must know."],
        bullets: [
          "Manipulate data using StringBuilder and its methods",
          "Create and manipulate Strings",
          "Date/time: LocalDateTime and java.time formatting",
          "ArrayList — declare, use and iterate",
          "Write a simple lambda expression that consumes a Predicate",
        ],
      },
    ],
    exercises: [],
    assignments: [],
    quiz: [
      {
        q: "Which is a valid entry point for a Java application?",
        options: [
          "public void main(String[] args)",
          "public static void main(String[] args)",
          "static main(String args)",
          "void Main(String[] args)",
        ],
        answer: 1,
        explain: "main must be public, static, void and take a String array.",
      },
      {
        q: "int x = 5; x += 2.5; — what happens?",
        options: [
          "Compile error — you cannot add a double to an int",
          "It compiles: the compound operator casts implicitly, so x becomes 7",
          "x becomes 7.5",
          "A runtime exception is thrown",
        ],
        answer: 1,
        explain: "Compound assignment operators include an implicit cast — x = (int)(x + 2.5) = 7.",
      },
      {
        q: "Which of these is a CHECKED exception?",
        options: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
        answer: 1,
        explain: "IOException must be caught or declared; the others are unchecked RuntimeExceptions.",
      },
      {
        q: "String s = \"a\"; s.concat(\"b\"); System.out.println(s); prints…",
        options: ["ab", "a", "b", "Compile error"],
        answer: 1,
        explain: "Strings are immutable — concat returns a new String which is discarded here.",
      },
      {
        q: "Which type keeps insertion order and allows duplicate elements?",
        options: ["HashSet", "ArrayList", "HashMap", "TreeSet"],
        answer: 1,
        explain: "ArrayList is an ordered, index-based list that permits duplicates.",
      },
    ],
  },

  /* ================= OFFICE — Microsoft Word & Excel essentials ================= */
  OFFICE: {
    lesson: [
      {
        heading: "About this course",
        icon: "info",
        flat: true,
        paragraphs: [
          "Practical productivity skills used in every workplace: producing professional documents in Microsoft Word and working with data in Microsoft Excel. This course prepares you for day-to-day business use and provides the foundation for the Microsoft Office Specialist (MOS) exams.",
          "Free official training: https://support.microsoft.com/en-us/training",
        ],
        table: {
          headers: ["Course at a glance", "Detail"],
          rows: [
            ["Applications", "Microsoft Word · Microsoft Excel (Microsoft 365)"],
            ["Level", "Beginner to intermediate"],
            ["Assessment", "Practical exercises + knowledge check"],
            ["Pathway", "Microsoft Office Specialist: Word / Excel Associate"],
          ],
        },
      },
      {
        heading: "Word syllabus: professional documents",
        icon: "document",
        paragraphs: ["Create, format and finalise business documents."],
        bullets: [
          "Create and manage documents; navigation, views and saving formats (docx, PDF)",
          "Character and paragraph formatting; bullets and numbering",
          "Styles and themes for consistent, one-click formatting",
          "Page layout: margins, orientation, breaks, headers & footers, page numbers",
          "Tables and pictures; captions and text wrapping",
          "References: table of contents, footnotes and citations",
          "Mail merge: letters, labels and envelopes from a data source",
          "Review and collaborate: spelling & grammar, track changes, comments, compare",
          "Protect and share documents",
        ],
      },
      {
        heading: "Excel syllabus: working with data",
        icon: "chart",
        paragraphs: ["From first formulas to PivotTable analysis."],
        bullets: [
          "Workbooks and worksheets; entering and importing data; fill series",
          "Formulas and cell references — relative, absolute ($A$1) and mixed",
          "Core functions: SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, ROUND",
          "Logical and lookup functions: IF, COUNTIF, SUMIF, VLOOKUP and XLOOKUP",
          "Number formatting and conditional formatting",
          "Tables, sorting and filtering",
          "Charts: column, line, pie — choosing and formatting the right chart",
          "PivotTables and PivotCharts for interactive summaries",
          "Data validation and drop-down lists; printing and page setup",
        ],
      },
    ],
    exercises: [],
    assignments: [],
    quiz: [
      {
        q: "The fastest way to apply consistent heading formatting across a long Word document is…",
        options: ["Format Painter on every heading", "Styles", "Manual bold + font size", "WordArt"],
        answer: 1,
        explain: "Styles apply consistent formatting everywhere and power the table of contents and navigation pane.",
      },
      {
        q: "To send one personalised letter to 200 customers from a spreadsheet of names, use…",
        options: ["Track changes", "Mail merge", "A table of contents", "SmartArt"],
        answer: 1,
        explain: "Mail merge combines a Word template with a data source to generate personalised copies.",
      },
      {
        q: "In Excel, =SUM(A1:A5)…",
        options: [
          "Adds cells A1 and A5 only",
          "Adds every value from A1 through A5",
          "Counts the cells with numbers",
          "Averages A1 to A5",
        ],
        answer: 1,
        explain: "The colon defines a range — all cells from A1 to A5 inclusive.",
      },
      {
        q: "Which reference stays fixed on cell A1 when the formula is copied elsewhere?",
        options: ["A1", "$A$1", "A$1", "#A1#"],
        answer: 1,
        explain: "$ locks both the column and the row — an absolute reference.",
      },
      {
        q: "The best Excel tool for interactively summarising 10 000 rows of sales by region and month is…",
        options: ["Conditional formatting", "A PivotTable", "Spell check", "Freeze panes"],
        answer: 1,
        explain: "PivotTables group, aggregate and re-arrange large datasets without formulas.",
      },
    ],
  },

  /* ================= AZ-SQL — Microsoft Azure SQL for Beginners ================= */
  "AZ-SQL": {
    lesson: [
      {
        heading: "About this course",
        icon: "info",
        flat: true,
        paragraphs: [
          "Based on Microsoft's official “Azure SQL for Beginners” video series, this course covers translating your SQL Server skills to Azure SQL — choosing between deployment options, then deploying, securing, tuning and keeping databases available in the cloud.",
          "Official video series: https://learn.microsoft.com/en-us/shows/azure-sql-for-beginners/",
        ],
        table: {
          headers: ["Course at a glance", "Detail"],
          rows: [
            ["Source", "Microsoft Learn show — Azure SQL for Beginners (±60 episodes)"],
            ["Level", "Beginner"],
            ["Assessment", "Knowledge check"],
            ["Pathway", "Exam DP-300: Administering Microsoft Azure SQL Solutions"],
          ],
        },
      },
      {
        heading: "Part 1: Introduction to Azure SQL",
        icon: "database",
        paragraphs: ["What Azure SQL is and which option to use when."],
        bullets: [
          "The Azure SQL family: SQL Server on Azure VMs (IaaS), Azure SQL Managed Instance and Azure SQL Database (PaaS)",
          "Deployment options: single database, elastic pools, instance pools",
          "Purchasing models (vCore vs DTU) and service tiers — General Purpose, Business Critical, Hyperscale",
          "Serverless compute and auto-pause",
        ],
      },
      {
        heading: "Part 2: Deploy and configure",
        icon: "wrench",
        paragraphs: ["Getting a database running and connected."],
        bullets: [
          "Deploy with the Azure portal, Azure CLI and PowerShell",
          "Configure networking and firewall rules; private endpoints",
          "Connect with SQL Server Management Studio and Azure Data Studio",
          "Load data: bacpac import, bcp, Azure Data Factory",
          "Verify deployments and baseline configuration",
        ],
      },
      {
        heading: "Part 3: Security",
        icon: "shield",
        paragraphs: ["Layered protection for data in the cloud."],
        bullets: [
          "Authentication: SQL authentication and Microsoft Entra ID",
          "Network security: firewalls, virtual network rules, private link",
          "Encryption: TLS in transit, Transparent Data Encryption (TDE) at rest, Always Encrypted in use",
          "Data protection: Dynamic Data Masking, row-level security",
          "Auditing, Microsoft Defender for SQL and vulnerability assessment",
        ],
      },
      {
        heading: "Part 4: Performance",
        icon: "trend",
        paragraphs: ["Monitoring and improving database performance."],
        bullets: [
          "Monitoring tools: Azure Monitor, Query Store, dynamic management views",
          "Intelligent performance: automatic tuning and intelligent query processing",
          "Indexing and query tuning fundamentals",
          "Scaling up/down and read scale-out",
        ],
      },
      {
        heading: "Part 5: Availability",
        icon: "checkCircle",
        paragraphs: ["Keeping the service running and the data safe."],
        bullets: [
          "Automatic backups and point-in-time restore",
          "High-availability architecture in General Purpose vs Business Critical tiers",
          "Geo-replication and auto-failover groups",
          "SLAs and designing for disaster recovery",
        ],
      },
      {
        heading: "Part 6: Working with data (T-SQL refresher)",
        icon: "exercise",
        paragraphs: ["The language skills used throughout the series."],
        bullets: [
          "SELECT with WHERE, ORDER BY, GROUP BY and joins",
          "INSERT, UPDATE and DELETE",
          "Creating tables, keys and constraints",
          "Views and stored procedures",
        ],
      },
    ],
    exercises: [],
    assignments: [],
    quiz: [
      {
        q: "Which option is a fully managed PaaS database — no OS or SQL patching for you at all?",
        options: ["SQL Server on an Azure VM", "Azure SQL Database", "SQL Server on your laptop", "A Docker container"],
        answer: 1,
        explain: "Azure SQL Database is fully managed; on a VM (IaaS) you still manage the OS and SQL Server.",
      },
      {
        q: "You need near-100% compatibility with an on-premises SQL Server (agent jobs, cross-database queries) with minimal management. Choose…",
        options: ["Azure SQL Database single database", "Azure SQL Managed Instance", "Azure Table Storage", "Azure Cosmos DB"],
        answer: 1,
        explain: "Managed Instance offers instance-scoped features for lift-and-shift migrations, still as PaaS.",
      },
      {
        q: "Transparent Data Encryption (TDE) protects data…",
        options: ["In transit on the network", "At rest on disk", "On the user's screen", "In the developer's source code"],
        answer: 1,
        explain: "TDE encrypts database files and backups at rest; TLS protects data in transit.",
      },
      {
        q: "Which T-SQL statement retrieves rows from a table?",
        options: ["GET", "SELECT", "FETCHALL", "SHOW"],
        answer: 1,
        explain: "SELECT is the query statement — e.g. SELECT * FROM Sales WHERE Region = 'Gauteng'.",
      },
      {
        q: "Point-in-time restore of an Azure SQL database is possible because…",
        options: [
          "The service takes automatic backups continuously",
          "Azure keeps a copy of every query",
          "The database is read-only",
          "TDE reverses data changes",
        ],
        answer: 0,
        explain: "Automatic full, differential and log backups let you restore to any moment within the retention period.",
      },
    ],
  },
};
