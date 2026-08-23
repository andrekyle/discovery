import type { UnitContent } from "../types";

/**
 * AZ-900 — Microsoft Azure Fundamentals: full course content.
 * Structured as three lessons matching the three skill areas of the official
 * study guide (cloud concepts · Azure architecture and services · management
 * and governance), with per-slide knowledge checks, exercises and a quiz per
 * skill area.
 */
export const AZ900_CONTENT: UnitContent = {
  lesson: [
    /* ============ LESSON 1 — DESCRIBE CLOUD CONCEPTS (25–30%) ============ */
    {
      heading: "Welcome to Azure Fundamentals — what this course covers",
      icon: "presenter",
      flat: true,
      lessonStart: { n: 1, title: "Describe cloud concepts (25–30% of the exam)" },
      paragraphs: [
        "Microsoft Certified: Azure Fundamentals (exam AZ-900) proves you understand cloud concepts, the core services Microsoft Azure offers, and how Azure is managed and governed. It is Microsoft's entry-level cloud certification — there are no prerequisites, and it suits technical and non-technical learners alike.",
        "Audience profile: as a candidate for this exam, you're a technology professional who wants to demonstrate foundational knowledge of cloud concepts in general and Microsoft Azure in particular. This exam is a common starting point in a journey towards a career in Azure. You should have skills and experience working with an area of IT, such as infrastructure management, database management or software development.",
        "The exam measures three skill areas, and this course follows them exactly: Lesson 1 — Describe cloud concepts (25–30%); Lesson 2 — Describe Azure architecture and services (35–40%); Lesson 3 — Describe Azure management and governance (30–35%).",
        "Exam at a glance: ±40–60 multiple-choice/multiple-select questions · 45 minutes · passing score 700 out of 1000 · delivered at Pearson VUE test centres or online proctored.",
        "Official certification page, study guide and free practice assessment: https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
      ],
      figures: [
        { id: "az900-exam-areas", caption: "The three AZ-900 skill areas and their exam weightings" },
      ],
      embed: {
        url: "https://datacenters.microsoft.com/globe/explore/",
        title: "Live: Microsoft's global datacenter infrastructure — explore the globe",
        height: 620,
        note: "Drag to spin the globe, zoom into regions, and use 'Take a tour' to fly through Microsoft's datacenters, subsea cables and edge sites. This is the real infrastructure you are learning about in this course.",
      },
      slideQuiz: [
        {
          q: "Which three skill areas does AZ-900 measure?",
          options: [
            "Cloud concepts; Azure architecture and services; Azure management and governance",
            "Programming; databases; networking",
            "Windows Server; Linux; macOS",
            "Word; Excel; PowerPoint",
          ],
          answer: 0,
          explain: "The official study guide lists exactly these three areas — and they are the three lessons of this course.",
        },
        {
          q: "What score do you need to pass AZ-900?",
          options: ["700 out of 1000", "50%", "900 out of 1000", "There is no pass mark"],
          answer: 0,
          explain: "Microsoft fundamentals exams are scored out of 1000 with a passing score of 700.",
        },
        {
          q: "What are the prerequisites for taking AZ-900?",
          options: ["None", "Two years of Azure administration", "A programming certification", "Grade 12 mathematics"],
          answer: 0,
          explain: "AZ-900 is the entry point to Azure certification — no prior certification or experience is required.",
        },
        {
          q: "According to the audience profile, AZ-900 candidates typically have experience in areas such as…",
          options: [
            "Infrastructure management, database management or software development",
            "Carpentry, plumbing or welding",
            "Only cybersecurity",
            "None — you may not have any IT experience",
          ],
          answer: 0,
          explain: "The official audience profile lists infrastructure management, database management and software development as typical backgrounds.",
        },
        {
          q: "Which skill area carries the LARGEST share of the AZ-900 exam?",
          options: [
            "Describe Azure architecture and services (35–40%)",
            "Describe cloud concepts (25–30%)",
            "Describe Azure management and governance (30–35%)",
            "They are all exactly equal",
          ],
          answer: 0,
          explain: "Architecture and services is weighted 35–40% — the biggest of the three skill areas.",
        },
      ],
    },
    {
      heading: "What is cloud computing?",
      icon: "globe",
      flat: true,
      paragraphs: [
        "Cloud computing is the delivery of computing services over the internet. Instead of buying, owning and maintaining your own datacenters and servers, you rent compute power, storage, networking and other services from a cloud provider such as Microsoft Azure, and pay only for what you use.",
        "Because the cloud is not constrained by the physical hardware you own, it lets you expand (and shrink) your IT footprint quickly. Compute and storage are the two most common resources, but the cloud also delivers databases, AI and machine learning, Internet of Things (IoT) platforms and much more.",
        "The virtual world of the cloud still runs on very real hardware: Microsoft operates hundreds of physical datacenters around the world, each containing racks of servers, storage, networking and independent power, cooling and connectivity.",
      ],
      bullets: [
        "Compute — virtual machines, containers and serverless functions that run your code",
        "Storage — file shares, disks, and object storage that hold your data",
        "Networking — virtual networks and connections that link everything together securely",
        "Higher-level services — databases, AI, analytics, IoT: ready-made building blocks you rent instead of build",
      ],
      figures: [
        { id: "az900-cloud-services", caption: "What the cloud delivers over the internet — compute, storage, networking and higher-level services" },
        { id: "datacentre-aisle", caption: "Inside a cloud datacenter — racks of servers behind every 'virtual' resource" },
        { id: "hyperscale-aerial", caption: "A hyperscale datacenter campus — the physical scale behind the cloud" },
      ],
      slideQuiz: [
        {
          q: "Which is the best definition of cloud computing?",
          options: [
            "The delivery of computing services over the internet, paid for as you use them",
            "Any computer that is kept in a cold room",
            "Software that only runs offline",
            "A private network cable between two offices",
          ],
          answer: 0,
          explain: "Cloud computing delivers compute, storage, networking and other services over the internet on a pay-for-use basis.",
        },
        {
          q: "Which two services are the MOST common cloud resources?",
          options: ["Compute and storage", "Printing and scanning", "Email and chat", "Backup tapes and DVDs"],
          answer: 0,
          explain: "Compute power and storage are the two core building blocks nearly every cloud solution uses.",
        },
        {
          q: "The 'virtual' cloud ultimately runs on…",
          options: [
            "Real physical datacenters full of servers, storage and networking",
            "Nothing — it is entirely imaginary",
            "Weather balloons",
            "A single giant computer",
          ],
          answer: 0,
          explain: "Microsoft operates hundreds of physical datacenters — every virtual resource is backed by real hardware.",
        },
        {
          q: "Besides compute and storage, cloud providers also deliver…",
          options: [
            "Databases, AI/ML, IoT and other higher-level services",
            "Only printing services",
            "Office furniture",
            "Physical laptops posted to your door",
          ],
          answer: 0,
          explain: "The cloud offers ready-made building blocks — databases, AI, analytics, IoT — that you rent instead of build.",
        },
        {
          q: "Because the cloud is not limited by hardware you own, you can…",
          options: [
            "Expand and shrink your IT footprint quickly as needs change",
            "Never change anything again",
            "Only ever grow, never shrink",
            "Avoid paying for anything",
          ],
          answer: 0,
          explain: "Rented capacity scales in both directions — a key advantage over fixed on-premises hardware.",
        },
      ],
    },
    {
      heading: "The shared responsibility model",
      icon: "shield",
      flat: true,
      paragraphs: [
        "In a traditional on-premises datacenter, your organisation is responsible for everything: the building, cooling, network, servers, operating systems, applications and data. In the cloud, those responsibilities are shared between you and the cloud provider.",
        "The split depends on the type of service. The provider is always responsible for the physical datacenter, physical network and physical hosts. You always keep responsibility for your data, the devices that connect to the cloud, and your accounts and identities — no matter which service type you use.",
        "Everything in between — the operating system, network controls, applications, identity infrastructure — shifts between you and the provider depending on whether you use IaaS, PaaS or SaaS.",
      ],
      table: {
        headers: ["Responsibility", "On-premises", "IaaS", "PaaS", "SaaS"],
        rows: [
          ["Data, devices, accounts & identities", "You", "You", "You", "You"],
          ["Applications", "You", "You", "Shared", "Provider"],
          ["Operating system", "You", "You", "Provider", "Provider"],
          ["Physical hosts, network & datacenter", "You", "Provider", "Provider", "Provider"],
        ],
      },
      figures: [
        { id: "az900-shared-responsibility", caption: "Who manages what — on-premises vs IaaS vs PaaS vs SaaS" },
      ],
      slideQuiz: [
        {
          q: "In EVERY cloud service type, which of these always remains YOUR responsibility?",
          options: [
            "Your data, devices, accounts and identities",
            "The physical datacenter",
            "The physical network",
            "Replacing failed hard drives",
          ],
          answer: 0,
          explain: "The customer always owns their information, data, devices and identities; the provider always owns the physical infrastructure.",
        },
        {
          q: "Who is responsible for the operating system on a PaaS service?",
          options: ["The cloud provider", "The customer", "The end user", "Nobody — PaaS has no operating system"],
          answer: 0,
          explain: "With Platform as a Service the provider manages the OS and platform; you manage your application and data.",
        },
        {
          q: "You run SQL Server inside an Azure virtual machine. Who patches that operating system?",
          options: ["You — a VM is IaaS, so the OS is your responsibility", "Microsoft", "The ISP", "Pearson VUE"],
          answer: 0,
          explain: "IaaS gives you the most control — and with it responsibility for the OS, patching and everything installed on it.",
        },
        {
          q: "Which responsibility is ALWAYS the cloud provider's, in every service type?",
          options: [
            "The physical datacenter, physical network and physical hosts",
            "Your user accounts",
            "Your data classification",
            "Your connected devices",
          ],
          answer: 0,
          explain: "The provider always owns the physical layer; the customer always owns data, devices and identities.",
        },
        {
          q: "In SaaS, the customer's remaining responsibilities are…",
          options: [
            "Their data, devices, accounts and identities",
            "Patching the application servers",
            "Replacing datacenter cooling",
            "Nothing at all",
          ],
          answer: 0,
          explain: "Even in SaaS you still govern your information, endpoints and sign-ins — everything else is the provider's.",
        },
      ],
    },
    {
      heading: "Cloud models: public, private and hybrid",
      icon: "layers",
      flat: true,
      paragraphs: [
        "The cloud model defines where your cloud resources are deployed and who can use them. There are three main models — public, private and hybrid — plus the increasingly common multi-cloud approach.",
        "Public cloud: services are built, controlled and maintained by a third-party provider (like Azure) and offered to anyone who wants to purchase them. Resources are delivered over the public internet with no capital expenditure to scale up.",
        "Private cloud: the cloud (still delivering IT services over a network) is used by a single organisation. It may run in your own datacenter or be hosted by a third party, and it offers the greatest control — at greater cost and with you carrying the hardware responsibility.",
        "Hybrid cloud: connects a private cloud (or on-premises infrastructure) with a public cloud, letting workloads move between them. It is the most flexible model — for example keeping sensitive data on-premises while bursting into the public cloud for extra demand.",
        "Multi-cloud: using services from more than one public cloud provider (for example Azure and another vendor) — common in large organisations. Azure Arc helps manage resources consistently across on-premises, multi-cloud and edge environments.",
      ],
      table: {
        headers: ["Model", "Who uses it", "Key traits"],
        rows: [
          ["Public cloud", "Anyone who purchases services", "No capital expenditure to scale up · quick provisioning · you don't own the hardware"],
          ["Private cloud", "A single organisation", "Maximum control · higher cost · organisation carries hardware and maintenance"],
          ["Hybrid cloud", "One organisation across both", "Most flexible · choose where each workload runs · extend on-prem with cloud capacity"],
          ["Multi-cloud", "One organisation, several providers", "Avoid lock-in / use best-of-breed · managed consistently with Azure Arc"],
        ],
      },
      figures: [
        { id: "az900-cloud-models", caption: "Public, private and hybrid — hybrid bridges the other two" },
      ],
      slideQuiz: [
        {
          q: "A hospital keeps patient records on servers in its own building but runs its public website in Azure. Which cloud model is this?",
          options: ["Hybrid cloud", "Public cloud only", "Private cloud only", "Community cloud"],
          answer: 0,
          explain: "Combining on-premises/private infrastructure with public cloud services is the hybrid model.",
        },
        {
          q: "Which model requires NO capital expenditure to scale up?",
          options: ["Public cloud", "Private cloud", "On-premises datacenter", "A server room"],
          answer: 0,
          explain: "In the public cloud you rent capacity as you need it — no upfront hardware purchases.",
        },
        {
          q: "Which Azure service helps you manage resources across on-premises, multi-cloud and edge from one place?",
          options: ["Azure Arc", "Azure DNS", "Azure Files", "Azure Advisor"],
          answer: 0,
          explain: "Azure Arc extends Azure management to servers and services running anywhere.",
        },
        {
          q: "Which cloud model gives an organisation the GREATEST control over hardware and data?",
          options: ["Private cloud", "Public cloud", "Hybrid cloud", "Spot instances"],
          answer: 0,
          explain: "A private cloud is dedicated to one organisation — maximum control, at higher cost and responsibility.",
        },
        {
          q: "Which is the best use case for the PUBLIC cloud?",
          options: [
            "A startup that wants to launch quickly with no upfront hardware investment",
            "A workload legally required to run on hardware only you control",
            "A factory with no internet connection",
            "Storing paper documents",
          ],
          answer: 0,
          explain: "Public cloud excels when you need speed and scale without capital expenditure.",
        },
      ],
    },
    {
      heading: "The consumption-based model — pricing models and serverless",
      icon: "trend",
      flat: true,
      paragraphs: [
        "There are two ways organisations spend money on IT. Capital expenditure (CapEx) is a one-time, up-front purchase of physical infrastructure — servers, storage, buildings — whose value depreciates over time. Operational expenditure (OpEx) is ongoing spending on services as you use them.",
        "Cloud computing is OpEx: it works on a consumption-based model. You pay only for the resources you actually use — no up-front hardware cost, no paying for idle capacity, and you can stop paying the moment you stop using a resource.",
        "The benefits: no upfront costs · no need to buy and manage costly infrastructure that you might not use to its fullest · the ability to pay for more resources only when needed · the ability to stop paying for resources that are no longer needed.",
        "Comparing cloud pricing models: pay-as-you-go charges the metered rate with no commitment — maximum flexibility. Reserved instances / reservations commit you to one or three years of a resource in exchange for a large discount (up to ~72%) — ideal for steady, predictable workloads. Savings plans commit to a fixed hourly spend on compute across services for one or three years — discounts with more flexibility than reservations. Spot pricing buys Azure's spare capacity at the deepest discounts, but workloads can be evicted at any time — only for interruptible jobs like batch processing.",
        "Serverless computing takes consumption-based pricing to its limit: you write code (or build workflows) and the platform runs it on demand — no servers to provision, size or manage at all. Billing is per execution/per second of actual use, and the platform scales automatically from zero to peak. Azure examples: Azure Functions (event-driven code) and Azure Logic Apps (workflows).",
        "This also gives better cost prediction: prices for services are known, and tools such as the Pricing calculator and Microsoft Cost Management (covered in Lesson 3) forecast and track what you will spend.",
      ],
      table: {
        headers: ["Pricing model", "Commitment", "Best for"],
        rows: [
          ["Pay-as-you-go", "None — metered usage", "Variable or unpredictable workloads"],
          ["Reserved instances", "1 or 3 years on a specific resource", "Steady production workloads (biggest discounts)"],
          ["Savings plan", "1 or 3 years of fixed hourly compute spend", "Predictable spend across changing services"],
          ["Spot", "None — capacity can be reclaimed", "Interruptible batch jobs and test runs"],
        ],
      },
      figures: [
        { id: "az900-pricing-models", caption: "Four pricing models — commitment buys discount" },
        { id: "az900-serverless", caption: "Serverless: event in, code runs, pay per execution" },
      ],
      slideQuiz: [
        {
          q: "Buying a rack of servers for your own server room is an example of…",
          options: ["Capital expenditure (CapEx)", "Operational expenditure (OpEx)", "The consumption-based model", "Serverless computing"],
          answer: 0,
          explain: "An up-front purchase of physical infrastructure is CapEx; cloud pay-as-you-go spending is OpEx.",
        },
        {
          q: "The cloud's consumption-based model means…",
          options: [
            "You pay only for the resources you actually use",
            "You pay a fixed fee whether you use anything or not",
            "You must sign a 10-year hardware lease",
            "Only large companies can use the cloud",
          ],
          answer: 0,
          explain: "Pay-as-you-go: usage is metered, and you can stop paying when you deallocate or delete resources.",
        },
        {
          q: "A production database will run 24/7 for the next three years. Which pricing model gives the biggest discount?",
          options: ["Reserved instances (1- or 3-year reservation)", "Pay-as-you-go", "Spot pricing", "A free trial"],
          answer: 0,
          explain: "Reservations trade a 1/3-year commitment for discounts of up to ~72% on steady workloads.",
        },
        {
          q: "Which pricing model risks your workload being EVICTED when Azure needs the capacity back?",
          options: ["Spot pricing", "Reserved instances", "Savings plan", "Pay-as-you-go"],
          answer: 0,
          explain: "Spot buys spare capacity at deep discounts — fine for interruptible batch jobs, never for production services.",
        },
        {
          q: "Which statement best describes SERVERLESS computing?",
          options: [
            "The platform runs your code on demand and bills per execution — no servers for you to provision or manage",
            "Computing without any physical servers existing anywhere",
            "A VM with the monitor unplugged",
            "Free computing",
          ],
          answer: 0,
          explain: "Servers still exist — but provisioning, scaling and management are entirely the platform's job (e.g. Azure Functions).",
        },
      ],
    },
    {
      heading: "Benefits of the cloud — availability, scalability, elasticity",
      icon: "checkCircle",
      flat: true,
      paragraphs: [
        "High availability ensures services remain accessible even when components fail, expressed as an uptime percentage in a Service Level Agreement (SLA). Azure publishes an SLA for every paid service — and each extra 'nine' dramatically reduces allowed downtime.",
        "Scalability is the ability to adjust resources to meet demand. Vertical scaling (scaling up/down) adds or removes power — more CPU or RAM on a virtual machine. Horizontal scaling (scaling out/in) adds or removes instances — more VMs or containers working side by side.",
        "Elasticity is automatic scaling: resources grow when demand spikes and shrink when it drops, so you are neither overloaded nor paying for idle capacity.",
      ],
      table: {
        headers: ["SLA", "Downtime per week", "Downtime per month", "Downtime per year"],
        rows: [
          ["99%", "1.68 hours", "7.2 hours", "3.65 days"],
          ["99.9%", "10.1 minutes", "43.2 minutes", "8.76 hours"],
          ["99.99%", "1.01 minutes", "4.32 minutes", "52.56 minutes"],
          ["99.999%", "6.05 seconds", "25.9 seconds", "5.26 minutes"],
        ],
      },
      figures: [
        { id: "az900-scaling", caption: "Vertical scaling changes the machine; horizontal scaling changes the number of machines" },
      ],
      slideQuiz: [
        {
          q: "Adding two more identical web-server VMs behind a load balancer is an example of…",
          options: ["Horizontal scaling (scaling out)", "Vertical scaling (scaling up)", "Descaling", "Failover"],
          answer: 0,
          explain: "Adding instances = horizontal scaling; adding CPU/RAM to one machine = vertical scaling.",
        },
        {
          q: "A service with a 99.9% SLA may be down for roughly how long per year?",
          options: ["About 8.76 hours", "About 3.65 days", "About 52 minutes", "It may never be down"],
          answer: 0,
          explain: "99.9% allows about 8.76 hours of downtime a year; 99.99% allows under an hour.",
        },
        {
          q: "Elasticity means…",
          options: [
            "Resources automatically scale out when demand spikes and back in when it drops",
            "Servers are physically stretchy",
            "You must resize manually every night",
            "The SLA changes every day",
          ],
          answer: 0,
          explain: "Elasticity is automatic scaling that follows demand — capacity when you need it, savings when you don't.",
        },
        {
          q: "Where is a service's guaranteed uptime formally defined?",
          options: [
            "In its Service Level Agreement (SLA)",
            "In the marketing brochure",
            "In the source code",
            "Nowhere — uptime is never promised",
          ],
          answer: 0,
          explain: "Azure publishes an SLA per service — the uptime commitment and remedies if it is missed.",
        },
        {
          q: "Upgrading one database server from 8 GB to 64 GB of RAM is…",
          options: ["Vertical scaling (scaling up)", "Horizontal scaling (scaling out)", "Elastic eviction", "Geo-replication"],
          answer: 0,
          explain: "Changing the power of a single machine is vertical scaling; adding machines is horizontal.",
        },
      ],
    },
    {
      heading: "Benefits of the cloud — reliability, predictability, security, governance and manageability",
      icon: "award",
      flat: true,
      paragraphs: [
        "Reliability is the ability of a system to recover from failures and continue to function. The cloud's decentralised design — regions, availability zones and automatic backups — means one failure doesn't take your whole solution down.",
        "Predictability comes in two forms. Performance predictability: autoscaling, load balancing and high-availability designs keep the user experience consistent as demand changes. Cost predictability: real-time tracking, forecasting and calculators let you plan spend with confidence.",
        "Security and governance: cloud templates, policies and standardised deployments keep every resource compliant with corporate standards, and the provider handles physical security and threat protection at a scale few organisations could match on their own.",
        "Manageability of the cloud: automatically scale, deploy from templates, monitor health and replace failing resources automatically, and receive alerts. Manageability in the cloud: manage everything through the web portal, command line, APIs or PowerShell — from anywhere.",
      ],
      figures: [
        { id: "az900-benefits", caption: "The eight cloud benefits the exam expects you to define" },
      ],
      slideQuiz: [
        {
          q: "The ability of a system to recover from failures and continue to function is…",
          options: ["Reliability", "Elasticity", "Portability", "Density"],
          answer: 0,
          explain: "Reliability — supported in Azure by regions, availability zones, replication and backups.",
        },
        {
          q: "Which pair correctly describes the two kinds of predictability the cloud offers?",
          options: [
            "Performance predictability and cost predictability",
            "Weather predictability and market predictability",
            "Hardware predictability and cable predictability",
            "There is only one kind",
          ],
          answer: 0,
          explain: "Autoscaling and HA give predictable performance; metering, forecasting and calculators give predictable cost.",
        },
        {
          q: "Which cloud benefit means one failure doesn't take your whole solution down?",
          options: [
            "Reliability — decentralised regions, zones and backups let the system recover",
            "Portability",
            "Anonymity",
            "Bandwidth",
          ],
          answer: 0,
          explain: "Reliability is the ability to recover from failures and continue functioning — built into the cloud's design.",
        },
        {
          q: "'Manageability OF the cloud' includes…",
          options: [
            "Auto-scaling, template deployments, health monitoring and automatic replacement of failing resources",
            "Dusting the servers yourself",
            "Driving to the datacenter to reboot machines",
            "Printing the portal",
          ],
          answer: 0,
          explain: "Managing cloud resources: autoscale, templates, monitoring, alerts. (Manageability IN the cloud = portal/CLI/API access from anywhere.)",
        },
        {
          q: "How does the cloud help with GOVERNANCE?",
          options: [
            "Templates and policies keep every deployed resource compliant with corporate standards",
            "It removes all rules",
            "It hides resources from auditors",
            "It makes compliance impossible",
          ],
          answer: 0,
          explain: "Set the standard once (policy/template) and every deployment inherits it — with audit trails built in.",
        },
      ],
    },
    {
      heading: "Cloud service types: IaaS, PaaS and SaaS",
      icon: "server",
      flat: true,
      paragraphs: [
        "Infrastructure as a Service (IaaS) rents the building blocks — virtual machines, storage and networking. You get maximum control and maximum responsibility: the OS, patching, and everything installed is yours to manage. Typical scenarios: lift-and-shift migration of on-premises servers; test and development environments that must mirror production exactly.",
        "Platform as a Service (PaaS) adds the operating system, middleware and runtime, so you focus on your application and data. Typical scenarios: development teams building web apps or APIs without managing servers; analytics and business-intelligence platforms.",
        "Software as a Service (SaaS) is the complete, ready-to-use application — you just sign in. Typical scenarios: email and messaging (Microsoft 365), business productivity apps, finance and expense tracking.",
        "Memory hook: IaaS = you manage the most; SaaS = you manage the least; PaaS sits in the middle.",
      ],
      table: {
        headers: ["Service type", "You manage", "Provider manages", "Azure examples"],
        rows: [
          ["IaaS", "Apps, data, runtime, OS", "Physical hosts, network, datacenter", "Virtual Machines, virtual networks, managed disks"],
          ["PaaS", "Apps and data", "OS, middleware, runtime, infrastructure", "Azure App Service, Azure SQL Database, Azure Functions"],
          ["SaaS", "Your data and users", "Everything else", "Microsoft 365, Dynamics 365"],
        ],
      },
      figures: [
        { id: "az900-service-types", caption: "The management stack — where 'You' ends and 'Provider' begins in each service type" },
      ],
      slideQuiz: [
        {
          q: "Your team wants to deploy a web app without managing any servers or OS patching, but still deploy its own code. Choose the service type.",
          options: ["PaaS", "IaaS", "SaaS", "On-premises"],
          answer: 0,
          explain: "PaaS (e.g. Azure App Service) hosts your code on a managed platform.",
        },
        {
          q: "Microsoft 365 email is an example of…",
          options: ["SaaS", "IaaS", "PaaS", "A hypervisor"],
          answer: 0,
          explain: "Software as a Service — a finished application you simply use.",
        },
        {
          q: "Which service type gives you the MOST control — and the most responsibility?",
          options: ["IaaS", "PaaS", "SaaS", "They are identical"],
          answer: 0,
          explain: "IaaS: you control the OS and software stack, so patching and configuration are your job.",
        },
        {
          q: "A 'lift-and-shift' migration of existing on-premises servers to the cloud most commonly uses…",
          options: ["IaaS virtual machines", "SaaS subscriptions", "Static websites", "Paper forms"],
          answer: 0,
          explain: "Lift-and-shift moves servers as-is onto cloud VMs — no re-architecting required.",
        },
        {
          q: "Which service type sits BETWEEN 'you manage everything' and 'you manage almost nothing'?",
          options: ["PaaS", "IaaS", "SaaS", "On-premises"],
          answer: 0,
          explain: "PaaS is the middle ground: the provider runs the platform, you bring the app and data.",
        },
      ],
    },

    /* ============ LESSON 2 — AZURE ARCHITECTURE AND SERVICES (35–40%) ============ */
    {
      heading: "Azure's physical infrastructure: datacenters, regions and availability zones",
      icon: "globe",
      flat: true,
      lessonStart: { n: 2, title: "Describe Azure architecture and services (35–40% of the exam)" },
      paragraphs: [
        "Azure's foundation is physical: datacenters around the world — facilities with racks of servers, independent power, cooling and networking. You never rent 'a datacenter' directly; they are grouped for resilience and availability.",
        "A region is a geographical area containing at least one (usually several) datacenters networked together with low-latency links. You choose a region when you deploy most resources — for example South Africa North (Johannesburg), which brings services close to South African users and helps meet data-residency requirements.",
        "An availability zone is a physically separate location within a region — with its own power, cooling and networking. Regions that support zones have at least three, so even a datacenter-level disaster leaves your zone-redundant services running. Zones are connected by high-speed private fibre and are ideal for mission-critical applications.",
        "Region pairs: most regions are paired with another region in the same geography at least 300 miles (≈480 km) away — for example South Africa North pairs with South Africa West (Cape Town). If a massive event affects one region, services can fail over to the pair, and platform updates roll out to one region of the pair at a time.",
        "Sovereign regions are isolated instances of Azure for compliance-sensitive customers — for example the US Government regions, which run on separate infrastructure with additional compliance certifications.",
      ],
      figures: [
        { id: "az900-regions-zones", caption: "A region with three availability zones, and its paired region 300+ miles away" },
        { id: "undersea-cable-map", caption: "The global network — regions connect over Microsoft's backbone and the world's undersea cables" },
      ],
      slideQuiz: [
        {
          q: "What is an Azure region?",
          options: [
            "A geographical area containing one or more low-latency-linked datacenters",
            "A single physical server",
            "A rack of network switches",
            "A billing report",
          ],
          answer: 0,
          explain: "Regions group datacenters in a geographic area; you pick one when deploying most resources.",
        },
        {
          q: "Availability zones protect your application against…",
          options: [
            "The failure of an entire datacenter within a region",
            "Typing errors in your code",
            "Expired passwords",
            "Slow mobile phones",
          ],
          answer: 0,
          explain: "Each zone is a physically separate datacenter (or group) with independent power, cooling and networking.",
        },
        {
          q: "How far apart are Azure region pairs (with rare exceptions)?",
          options: ["At least 300 miles (≈480 km)", "At least 3 km", "In the same building", "On different planets"],
          answer: 0,
          explain: "Pairing at 300+ miles means one natural disaster is very unlikely to affect both regions.",
        },
        {
          q: "A defence department requires Azure services physically isolated from the public cloud with extra compliance. It should use…",
          options: ["A sovereign region (e.g. US Government)", "A free trial subscription", "Any region with zones", "A content delivery network"],
          answer: 0,
          explain: "Sovereign regions are isolated Azure instances for government/compliance-critical workloads.",
        },
        {
          q: "What is an Azure datacenter?",
          options: [
            "A physical facility with racks of servers and independent power, cooling and networking",
            "A folder in the portal",
            "A billing report",
            "A type of subscription",
          ],
          answer: 0,
          explain: "Datacenters are the physical buildings; regions group them; zones keep them independent.",
        },
      ],
    },
    {
      heading: "Organising your cloud: resources, resource groups, subscriptions and management groups",
      icon: "layers",
      flat: true,
      paragraphs: [
        "Azure organises everything you create in a strict hierarchy. Understanding it is essential for the exam — and for real-world governance.",
        "Resource: the basic building block — a VM, a database, a virtual network, a storage account.",
        "Resource group: a container that groups related resources. Every resource lives in exactly one resource group; groups cannot be nested. Act on the group and you act on everything in it — delete the group and you delete all its resources, grant access to the group and the access applies to its contents. Group by lifecycle: things deployed, updated and deleted together belong together.",
        "Subscription: a unit of management, billing and scale, linking your resource groups to a billing account and identity tenant. Organisations often use separate subscriptions per environment (production vs development), per department, or per billing need.",
        "Management group: a container for subscriptions. Apply a policy or access rule at the management-group level and every subscription (and all their resources) inherits it. Management groups can be nested up to six levels deep and support up to 10,000 groups in a directory.",
        "The hierarchy, top to bottom: Management groups → Subscriptions → Resource groups → Resources.",
      ],
      example: {
        title: "Worked example — Discovery's IT department",
        lines: [
          "Management group 'Corp-IT' enforces a policy: resources may only be created in South African regions.",
          "Under it: subscription 'Prod' (production billing) and subscription 'Dev' (developer sandboxes).",
          "In 'Prod': resource group 'rg-website' holds the web app, its SQL database and its storage account — one lifecycle, one group.",
          "Deleting 'rg-website' would remove all three resources at once; the region policy is inherited from 'Corp-IT' automatically.",
        ],
      },
      figures: [
        { id: "az900-hierarchy", caption: "The four levels — policy and access flow downwards" },
      ],
      slideQuiz: [
        {
          q: "Put the hierarchy in order, largest to smallest:",
          options: [
            "Management group → subscription → resource group → resource",
            "Resource → resource group → subscription → management group",
            "Subscription → management group → resource → resource group",
            "Resource group → management group → subscription → resource",
          ],
          answer: 0,
          explain: "Management groups contain subscriptions, which contain resource groups, which contain resources.",
        },
        {
          q: "How many resource groups can a single resource belong to at once?",
          options: ["Exactly one", "Two", "Unlimited", "Zero — resources float freely"],
          answer: 0,
          explain: "A resource lives in exactly one resource group, and resource groups cannot be nested.",
        },
        {
          q: "What happens when you delete a resource group?",
          options: [
            "All resources inside it are deleted too",
            "The resources move to another group",
            "Only the group's name is removed",
            "Nothing — groups cannot be deleted",
          ],
          answer: 0,
          explain: "Acting on a group acts on its contents — deleting the group deletes everything in it.",
        },
        {
          q: "You must apply one policy to 40 subscriptions at once. Use…",
          options: ["A management group", "40 sticky notes", "A resource group", "An availability zone"],
          answer: 0,
          explain: "Policies applied to a management group are inherited by every subscription under it.",
        },
        {
          q: "A subscription is best described as…",
          options: [
            "A unit of management, billing and scale linking resource groups to a billing account",
            "A physical server",
            "A type of virtual network",
            "An email newsletter",
          ],
          answer: 0,
          explain: "Subscriptions separate billing and environments (e.g. Prod vs Dev) under a tenant.",
        },
      ],
    },
    {
      heading: "Azure compute services",
      icon: "server",
      flat: true,
      paragraphs: [
        "Virtual machines (VMs) are IaaS: virtualised servers where you control the OS. Use them for total control, custom software, or lift-and-shift migrations. VMs are billed while running and support images for rapid, repeatable builds.",
        "VM scale sets create and manage a group of identical, load-balanced VMs that automatically scale out and in with demand — you define the rules once instead of managing dozens of machines by hand.",
        "Availability sets place your VMs across separate update domains (which reboot for maintenance at different times) and fault domains (separate power and network) inside a datacenter — protecting you from single-point failures at no extra cost (you pay only for the VMs).",
        "Containers (Azure Container Instances, Azure Kubernetes Service) are lightweight, fast-starting packages of an app and its dependencies. Unlike a VM, a container does not carry its own operating system, so you can run many per host and restart or replace them in seconds. ACI runs single containers serverlessly; AKS orchestrates fleets of them.",
        "Azure Functions is serverless computing: your code runs only in response to an event (an HTTP request, a timer, a message) and you are billed only for the execution time. No servers to size, patch or scale.",
        "Azure App Service is PaaS hosting for websites, APIs and web apps with built-in load balancing, autoscaling, deployment slots and CI/CD integration.",
        "Azure Virtual Desktop delivers full Windows desktops and apps from the cloud to any device — users get a secure, centrally-managed desktop experience anywhere.",
        "Resources required for a virtual machine: a size (the CPU cores and RAM you choose), disks (a managed OS disk, plus optional data disks — Standard HDD/SSD or Premium SSD), a network interface in a virtual network subnet, usually a public or private IP address, and typically a network security group to filter traffic. Creating a VM in the portal creates these supporting resources with it.",
        "Application hosting options compared: virtual machines give maximum control (and maximum responsibility) for hosting any app; containers package the app for fast, dense, portable hosting; Azure App Service hosts web apps and APIs on a fully managed platform. Choose by how much of the stack you want to own.",
      ],
      table: {
        headers: ["Need", "Best-fit service", "Why"],
        rows: [
          ["Full OS control / lift-and-shift", "Virtual Machines", "IaaS — you own the OS and stack"],
          ["Dozens of identical, auto-scaling VMs", "VM scale sets", "One definition, automatic scale-out"],
          ["Run code only when events happen", "Azure Functions", "Serverless — pay per execution"],
          ["Host a web app without servers", "App Service", "Managed platform with slots and autoscale"],
          ["Run containers without managing hosts", "Container Instances / AKS", "Fast start, high density, orchestration"],
          ["Windows desktops from the cloud", "Azure Virtual Desktop", "Central, secure desktop delivery"],
        ],
      },
      figures: [
        { id: "az900-compute-services", caption: "Four compute options — from full control to fully serverless" },
        { id: "az900-vm-resources", caption: "A VM never travels alone — size, disks, NIC, IP and NSG come with it" },
        { id: "hypervisor-diagram", caption: "Virtualisation — the hypervisor shares one physical host among many isolated VMs" },
      ],
      slideQuiz: [
        {
          q: "Which service runs your code ONLY when an event fires, billing you per execution?",
          options: ["Azure Functions", "A domain controller", "Azure DNS", "A storage account"],
          answer: 0,
          explain: "Functions is Azure's serverless compute — ideal for event-driven tasks.",
        },
        {
          q: "The key difference between a container and a VM is…",
          options: [
            "A container does not include its own operating system",
            "A container is always slower",
            "A VM cannot run Windows",
            "There is no difference",
          ],
          answer: 0,
          explain: "Containers share the host OS kernel, so they start in seconds and pack densely onto hosts.",
        },
        {
          q: "To keep VMs available during BOTH planned maintenance and rack failures, availability sets spread them across…",
          options: [
            "Update domains and fault domains",
            "Time zones and languages",
            "Subscriptions and tenants",
            "Hot and cool tiers",
          ],
          answer: 0,
          explain: "Update domains stagger maintenance reboots; fault domains separate power and networking.",
        },
        {
          q: "Your web traffic doubles every lunch time. Which compute feature adds and removes identical VMs automatically?",
          options: ["VM scale sets", "Resource locks", "Region pairs", "Azure DNS"],
          answer: 0,
          explain: "Scale sets manage groups of identical VMs with autoscaling rules.",
        },
        {
          q: "Which resources are created alongside a new Azure VM?",
          options: [
            "A size (CPU/RAM), managed disks, a network interface in a subnet, an IP address and usually a network security group",
            "A printer and a scanner",
            "A new subscription",
            "Nothing — a VM needs no other resources",
          ],
          answer: 0,
          explain: "A VM is a bundle: compute size, OS/data disks, NIC in a VNet subnet, IP and NSG.",
        },
      ],
    },
    {
      heading: "Azure networking services",
      icon: "network",
      flat: true,
      paragraphs: [
        "Azure Virtual Network (VNet) is your private network in the cloud: an isolated address space you subdivide into subnets for organisation and security. VNets enable Azure resources — VMs, App Service environments, AKS nodes — to communicate with each other, with the internet, and with your on-premises network.",
        "Virtual network peering connects VNets so they behave as one network — traffic between peered VNets travels over Microsoft's private backbone, never the public internet. Peering works within a region or globally across regions.",
        "Public endpoints have a public IP address reachable from the internet; private endpoints give a service a private IP inside your VNet so it is reachable only from your network — a key security control.",
        "Azure VPN Gateway connects your on-premises network to Azure through an encrypted tunnel over the public internet: site-to-site for whole offices, point-to-site for individual remote workers.",
        "Azure ExpressRoute is a private, dedicated connection between your premises and Azure that never touches the public internet — higher bandwidth, consistent latency and greater reliability for serious hybrid workloads.",
        "Azure DNS hosts your DNS domains on Azure's global anycast network, answering name lookups with the same credentials, tools and billing as your other Azure services.",
      ],
      figures: [
        { id: "az900-vnet", caption: "One picture of Azure networking — VNet with subnets, endpoints, peering, VPN and ExpressRoute" },
        { id: "router-firewall", caption: "On the on-premises side: the router/firewall that terminates your VPN tunnel" },
      ],
      slideQuiz: [
        {
          q: "Which service provides a PRIVATE dedicated connection to Azure that never crosses the public internet?",
          options: ["ExpressRoute", "VPN Gateway", "Public endpoint", "Azure DNS"],
          answer: 0,
          explain: "ExpressRoute is a dedicated private circuit; a VPN is encrypted but still rides the public internet.",
        },
        {
          q: "An encrypted tunnel over the public internet between your office and Azure is…",
          options: ["A site-to-site VPN via VPN Gateway", "ExpressRoute", "Peering", "A CDN"],
          answer: 0,
          explain: "Site-to-site VPN encrypts traffic across the internet — cheaper than ExpressRoute, but shares the public network.",
        },
        {
          q: "To let two VNets communicate privately over Microsoft's backbone, configure…",
          options: ["Virtual network peering", "A public IP on every VM", "A paper form", "Archive storage"],
          answer: 0,
          explain: "Peering joins VNets (even across regions) with private backbone traffic.",
        },
        {
          q: "A private endpoint…",
          options: [
            "Gives a service a private IP inside your VNet so only your network can reach it",
            "Publishes a service to the whole internet",
            "Is a type of keyboard",
            "Speeds up your printer",
          ],
          answer: 0,
          explain: "Private endpoints remove public exposure — access flows through your private address space.",
        },
        {
          q: "What do SUBNETS do inside a virtual network?",
          options: [
            "Divide the address space into segments for organisation and security",
            "Convert electricity",
            "Store blobs",
            "Print network diagrams",
          ],
          answer: 0,
          explain: "Subnets segment a VNet — e.g. separate web, app and database tiers with different security rules.",
        },
      ],
    },
    {
      heading: "Azure storage services",
      icon: "database",
      flat: true,
      paragraphs: [
        "An Azure storage account provides a unique namespace for your data, accessible worldwide over HTTPS. Within it you use different services for different shapes of data.",
        "Storage account options: Standard general-purpose v2 covers blobs, files, queues and tables on standard tiers and supports every redundancy option; Premium accounts run on SSDs for low latency — premium block blobs (high-transaction blob workloads), premium file shares (SMB and NFS) and premium page blobs (disk-style workloads). Every account's name must be globally unique because it forms the endpoint URL (e.g. https://mydata.blob.core.windows.net).",
        "Blob storage is massively scalable object storage for unstructured data — documents, images, video, backups, log files. Blobs live in containers and are served over HTTP/HTTPS.",
        "Blob access tiers optimise cost by how often you touch the data: Hot (frequent access), Cool (infrequent — stored ≥30 days), Cold (rare — ≥90 days) and Archive (offline, cheapest — ≥180 days, hours to rehydrate). Cooler tiers cost less to store but more to access.",
        "Azure Files provides fully managed SMB/NFS file shares in the cloud — mount them like a normal network drive from Windows, Linux or macOS. Azure File Sync caches Azure file shares on local Windows Servers for fast branch-office access.",
        "Azure Disk storage supplies the managed virtual disks attached to VMs. Queue storage holds messages between application components; Table storage stores structured NoSQL key/value data.",
        "Redundancy protects your data by keeping copies: LRS (locally redundant — three copies in one datacenter), ZRS (zone-redundant — copies across three availability zones), GRS (geo-redundant — LRS plus three copies in the paired region), GZRS (zone + geo). Read-access variants (RA-GRS/RA-GZRS) let you read from the secondary region at any time.",
        "Moving data: AzCopy is a command-line utility for copying blobs and files; Azure Storage Explorer is a graphical app for browsing and transferring storage; Azure File Sync keeps on-premises Windows shares and Azure Files in sync.",
        "Migrating at scale: Azure Migrate discovers, assesses and migrates whole servers, databases and applications to Azure; Azure Data Box is a rugged appliance Microsoft ships to you — load up to 80 TB and courier it back when the network would be too slow.",
      ],
      table: {
        headers: ["Redundancy", "Copies", "Survives", "Notes"],
        rows: [
          ["LRS", "3 in one datacenter", "Drive/rack failure", "Cheapest"],
          ["ZRS", "3 across availability zones", "A whole datacenter failing", "Zone-level protection"],
          ["GRS", "3 local + 3 in paired region", "A regional disaster", "Geo protection"],
          ["GZRS", "3 zonal + 3 in paired region", "Zone AND regional disasters", "Highest durability"],
        ],
      },
      figures: [
        { id: "az900-storage-tiers", caption: "Hot → Cool → Cold → Archive: cheaper to keep, slower and dearer to touch" },
        { id: "az900-redundancy", caption: "Redundancy options — how many copies and how far apart" },
        { id: "san-array", caption: "Behind the API: enterprise storage arrays hold the physical copies" },
      ],
      slideQuiz: [
        {
          q: "Ten years of compliance records must be kept as cheaply as possible and are almost never read. Choose the blob tier.",
          options: ["Archive", "Hot", "Cool", "Premium"],
          answer: 0,
          explain: "Archive is offline and cheapest — perfect for long-term retention with rare access (rehydration takes hours).",
        },
        {
          q: "Which redundancy option protects data against an entire REGION being lost?",
          options: ["GRS (geo-redundant storage)", "LRS", "A second folder", "Hot tier"],
          answer: 0,
          explain: "GRS/GZRS replicate to the paired region hundreds of kilometres away.",
        },
        {
          q: "You must move 60 TB to Azure from a site with a very slow internet link. Best option?",
          options: ["Azure Data Box", "AzCopy overnight", "Email attachments", "Peering"],
          answer: 0,
          explain: "Data Box is a shipped appliance for offline bulk transfer — built exactly for this.",
        },
        {
          q: "Which service gives you SMB file shares you can mount like a network drive?",
          options: ["Azure Files", "Blob containers", "Queue storage", "Azure DNS"],
          answer: 0,
          explain: "Azure Files serves managed SMB/NFS shares; File Sync can cache them on local servers.",
        },
        {
          q: "Why must a storage account's name be globally unique?",
          options: [
            "It forms part of the public endpoint URL, e.g. https://name.blob.core.windows.net",
            "Microsoft charges per letter",
            "It is stored on one worldwide server",
            "It doesn't have to be unique",
          ],
          answer: 0,
          explain: "The account name becomes the DNS name of your storage endpoints, so no two accounts can share it.",
        },
      ],
    },
    {
      heading: "Identity, access and security",
      icon: "shield",
      flat: true,
      paragraphs: [
        "Microsoft Entra ID (formerly Azure Active Directory) is Azure's cloud-based identity and access management service — the directory where user accounts, groups and app registrations live, and the service that signs everyone in. Microsoft Entra Domain Services adds managed domain join, group policy and Kerberos/NTLM for legacy applications, without you running domain controllers.",
        "Authentication (AuthN) proves who you are; authorisation (AuthZ) decides what you may do. Azure strengthens authentication with: single sign-on (SSO — one credential for many applications), multifactor authentication (MFA — something you know plus something you have or are), and passwordless methods (Windows Hello, the Microsoft Authenticator app, FIDO2 security keys).",
        "External identities let people outside the organisation work with you securely: B2B collaboration invites partners to use their own credentials, while B2C serves customer-facing apps.",
        "Conditional Access grants or blocks sign-ins based on identity signals — who the user is, where they sign in from, what device and app they use — for example requiring MFA from unknown locations while letting the office network sign in seamlessly.",
        "Azure role-based access control (RBAC) applies the principle of least privilege: assign built-in or custom roles (Owner, Contributor, Reader, and many service-specific roles) at a scope — management group, subscription, resource group or resource — and the permissions flow down that scope. RBAC is enforced on every action that passes through Azure Resource Manager.",
        "Zero Trust is the modern security model: verify explicitly, use least-privilege access, and always assume breach. No user or device is trusted just for being on the corporate network.",
        "Defence-in-depth layers protections so no single failure exposes your data: physical security → identity & access → perimeter (DDoS protection) → network (segmentation, NSGs) → compute (hardened, patched hosts) → application (secure code, secrets management) → data (encryption).",
        "Microsoft Defender for Cloud continuously assesses your posture across Azure, on-premises and other clouds — scoring your security, recommending hardening steps, and detecting and responding to threats.",
      ],
      figures: [
        { id: "az900-identity", caption: "Microsoft Entra ID and the controls built on it" },
        { id: "az900-defence-in-depth", caption: "Defence in depth — every ring must fail before the data is exposed" },
      ],
      slideQuiz: [
        {
          q: "Which service is Azure's cloud identity and access management directory?",
          options: ["Microsoft Entra ID", "Azure DNS", "Blob storage", "Azure Advisor"],
          answer: 0,
          explain: "Microsoft Entra ID (formerly Azure AD) manages identities and sign-in for Azure and Microsoft 365.",
        },
        {
          q: "Requiring a password PLUS a code from your phone is an example of…",
          options: ["Multifactor authentication", "Single sign-on", "Peering", "Elasticity"],
          answer: 0,
          explain: "MFA combines two or more of: something you know, have, or are.",
        },
        {
          q: "\"Verify explicitly, use least privilege, assume breach\" summarises…",
          options: ["The Zero Trust model", "The waterfall model", "The OSI model", "The CapEx model"],
          answer: 0,
          explain: "Zero Trust trusts nothing by default — every access is verified, scoped and monitored.",
        },
        {
          q: "To give a colleague read-only access to ONE resource group, you should…",
          options: [
            "Assign the Reader role at that resource group's scope",
            "Share your own password",
            "Make them Owner of the subscription",
            "Email them the resources",
          ],
          answer: 0,
          explain: "RBAC at the narrowest scope needed = least privilege done right.",
        },
        {
          q: "In defence-in-depth, encrypting stored information belongs to which layer?",
          options: ["Data", "Perimeter", "Physical", "Application"],
          answer: 0,
          explain: "The data layer is the innermost ring — encryption protects it even if outer layers fail.",
        },
      ],
    },

    /* ============ LESSON 3 — MANAGEMENT AND GOVERNANCE (30–35%) ============ */
    {
      heading: "Cost management in Azure",
      icon: "chart",
      flat: true,
      lessonStart: { n: 3, title: "Describe Azure management and governance (30–35% of the exam)" },
      paragraphs: [
        "What affects cost in Azure? Resource type (a big VM costs more than a small one; premium storage more than standard), consumption (pay-as-you-go usage — or savings plans and reserved capacity for predictable workloads, which can cut costs substantially), maintenance (idle resources still bill — deallocate or delete what you don't use), geography (prices differ by region), network traffic (inbound is generally free; outbound bandwidth between regions and to the internet is billed), and subscription type (free trial, pay-as-you-go, enterprise agreements have different terms).",
        "The Pricing calculator estimates the monthly cost of a solution you are planning — pick services, sizes and regions and get a shareable estimate before you deploy anything.",
        "The TCO (Total Cost of Ownership) calculator compares the full cost of running workloads on-premises (hardware, electricity, cooling, IT labour, licences) against running them in Azure — the tool for the 'is migrating worth it?' conversation.",
        "Microsoft Cost Management shows what you are actually spending: analyse usage, set budgets, receive spending alerts (budget alerts, credit alerts, department quota alerts) and forecast future spend.",
        "Tags are name/value pairs attached to resources — for example CostCentre: Marketing or Env: Production. They power cost reporting by team or project, and also help with resource organisation, operations and security classification. Tags can be enforced and auto-applied with Azure Policy.",
      ],
      figures: [
        { id: "az900-cost-factors", caption: "Six factors that drive the bill — plus the calculators and Cost Management" },
      ],
      slideQuiz: [
        {
          q: "Which tool compares the cost of your on-premises datacenter with running the same workloads in Azure?",
          options: ["The TCO calculator", "The Pricing calculator", "Azure Monitor", "Azure DNS"],
          answer: 0,
          explain: "TCO = Total Cost of Ownership — it includes hidden on-prem costs like power, cooling and labour.",
        },
        {
          q: "Which tool estimates the monthly bill of a solution BEFORE you build it?",
          options: ["The Pricing calculator", "The TCO calculator", "Service Health", "Resource locks"],
          answer: 0,
          explain: "The Pricing calculator prices out planned architectures service by service.",
        },
        {
          q: "To see costs broken down by department, the simplest mechanism is…",
          options: ["Tags (e.g. CostCentre: Sales) analysed in Cost Management", "Guessing", "One subscription for everything with no metadata", "Printing invoices"],
          answer: 0,
          explain: "Tags attach metadata to resources; Cost Management can then group and report spend by tag.",
        },
        {
          q: "Which of these does NOT affect your Azure bill?",
          options: [
            "The colour of the Azure portal theme",
            "Resource type and size",
            "Region (geography) chosen",
            "Outbound network traffic",
          ],
          answer: 0,
          explain: "Portal cosmetics are free; type, size, region, consumption and egress traffic all influence cost.",
        },
        {
          q: "Network traffic pricing in Azure generally means…",
          options: [
            "Inbound data is free; outbound (egress) data is billed",
            "Everything network-related is free",
            "Inbound data is billed; outbound is free",
            "You pay per email sent",
          ],
          answer: 0,
          explain: "Ingress is typically free; egress between regions and to the internet is metered — a real cost factor in architectures.",
        },
      ],
    },
    {
      heading: "Governance and compliance: Policy, locks and the Service Trust Portal",
      icon: "checklist",
      flat: true,
      paragraphs: [
        "Azure Policy creates, assigns and manages rules that resources must obey — allowed regions, allowed VM sizes, required tags, mandatory encryption. Policies evaluate existing and new resources, can automatically remediate (for example, apply a missing tag), and can block non-compliant deployments outright. Related policies group into initiatives for big goals like regulatory compliance.",
        "Resource locks protect critical resources from accidents — even from people who have the permissions to change them. A Delete (CanNotDelete) lock allows changes but prevents deletion; a ReadOnly lock prevents any change at all. Locks apply to a subscription, resource group or resource, and must be removed before the protected action can proceed.",
        "Microsoft Purview is a unified data-governance service that maps, catalogues and classifies data across Azure, on-premises and other clouds — answering 'what data do we hold, where is it, and is it sensitive?'.",
        "The Service Trust Portal (servicetrust.microsoft.com) publishes Microsoft's audit reports, compliance certifications and security documentation — the evidence your auditors ask for when you build on Azure.",
      ],
      figures: [
        { id: "az900-governance", caption: "The governance toolbox — Policy, locks, Purview, Service Trust Portal" },
      ],
      slideQuiz: [
        {
          q: "A junior admin with Contributor rights keeps nearly deleting the production database. The safeguard is…",
          options: ["A CanNotDelete resource lock", "A bigger VM", "An extra subscription", "Cool-tier storage"],
          answer: 0,
          explain: "Locks stop destructive actions regardless of RBAC permissions until the lock is removed.",
        },
        {
          q: "To BLOCK anyone from creating resources outside South African regions, use…",
          options: ["Azure Policy", "A tag", "An SLA", "Azure Files"],
          answer: 0,
          explain: "Policy enforces organisational rules — allowed locations is one of the most common assignments.",
        },
        {
          q: "Where do you download Microsoft's independent audit reports and compliance certificates?",
          options: ["The Service Trust Portal", "The Pricing calculator", "Azure DNS", "GitHub"],
          answer: 0,
          explain: "The Service Trust Portal hosts audit reports and compliance resources for Microsoft's cloud services.",
        },
        {
          q: "Which service maps, catalogues and classifies your data across Azure, on-premises and other clouds?",
          options: ["Microsoft Purview", "Azure DNS", "Azure Functions", "The Pricing calculator"],
          answer: 0,
          explain: "Purview is the unified data-governance service — what data exists, where it lives, how sensitive it is.",
        },
        {
          q: "Grouping several related policies into one assignable unit is called…",
          options: ["An initiative", "A resource lock", "A subscription", "A blob container"],
          answer: 0,
          explain: "Initiatives bundle policies for big goals — e.g. a whole regulatory-compliance standard at once.",
        },
      ],
    },
    {
      heading: "Tools for managing and deploying Azure resources",
      icon: "wrench",
      flat: true,
      paragraphs: [
        "The Azure portal is the web-based graphical interface — build, manage and monitor everything from dashboards you customise. Great for learning and one-off tasks.",
        "Azure Cloud Shell runs a browser-based command line inside the portal — no local install, already authenticated, with your choice of shell.",
        "The Azure CLI (az commands) and Azure PowerShell (cmdlets like New-AzVM) are the scriptable interfaces — Windows, Linux and macOS — for repeatable, automatable administration. If you can click it, you can script it.",
        "Azure Arc extends Azure's management plane to machines and services running OUTSIDE Azure — on-premises servers, other clouds, edge sites — so one set of tools, policies and security covers your whole estate.",
        "Infrastructure as Code (IaC) describes your environment in files instead of clicks. ARM templates (JSON) declare what to deploy; Azure Resource Manager (ARM) — the deployment and management engine every tool talks to — makes it so, repeatably and verifiably. IaC gives identical dev/test/prod environments, code review for infrastructure, and disaster recovery by redeployment.",
      ],
      figures: [
        { id: "az900-management-tools", caption: "Every tool — portal, Cloud Shell, CLI/PowerShell, templates — talks to Azure Resource Manager" },
      ],
      slideQuiz: [
        {
          q: "Every management tool — portal, CLI, PowerShell, templates — ultimately sends its requests to…",
          options: ["Azure Resource Manager (ARM)", "The nearest printer", "Blob storage", "Cloud Shell"],
          answer: 0,
          explain: "ARM is Azure's single deployment and management layer — RBAC, locks and policy are enforced there.",
        },
        {
          q: "You must manage 200 on-premises Windows servers with Azure Policy alongside your cloud VMs. Use…",
          options: ["Azure Arc", "AzCopy", "A longer HDMI cable", "The TCO calculator"],
          answer: 0,
          explain: "Arc projects non-Azure machines into Azure so governance and monitoring work everywhere.",
        },
        {
          q: "Deploying identical dev, test and production environments over and over is best done with…",
          options: ["ARM templates (Infrastructure as Code)", "Manual portal clicks each time", "Screenshots", "Email instructions"],
          answer: 0,
          explain: "Declarative templates are repeatable, reviewable and version-controlled — no click-drift between environments.",
        },
        {
          q: "Which pair are Azure's SCRIPTABLE command-line tools?",
          options: [
            "Azure CLI (az) and Azure PowerShell",
            "Notepad and Paint",
            "Word and Excel",
            "Task Manager and Control Panel",
          ],
          answer: 0,
          explain: "Both run on Windows, Linux and macOS — anything clickable in the portal can be scripted with them.",
        },
        {
          q: "The Azure portal is best described as…",
          options: [
            "The web-based graphical interface for building, managing and monitoring Azure resources",
            "A physical building",
            "A programming language",
            "An exam voucher",
          ],
          answer: 0,
          explain: "The portal is the GUI — with customisable dashboards — over the same ARM API the CLI and PowerShell use.",
        },
      ],
    },
    {
      heading: "Monitoring: Advisor, Service Health and Azure Monitor",
      icon: "monitor",
      flat: true,
      paragraphs: [
        "Azure Advisor is your free personal cloud consultant: it evaluates your resources and makes recommendations in five categories — Reliability, Security, Performance, Cost and Operational Excellence — each with the actions to fix it.",
        "Azure Service Health tells you about the platform itself, combining: Azure Status (global outages across all of Azure), Service Health (the services and regions YOU use — incidents and planned maintenance) and Resource Health (the health of your individual resources, like a specific VM). You can raise alerts so incidents notify you immediately.",
        "Azure Monitor is the platform-wide telemetry pipeline: it collects metrics and logs from every layer — applications, OS, resources, subscription, tenant — stores them centrally, and turns them into insight and action.",
        "Azure Log Analytics is where you write queries against that collected log data — from simple record searches to complex analysis across sources. Azure Monitor Alerts watch the telemetry and notify you (or trigger automated runbooks) when thresholds are crossed. Application Insights instruments your web applications — request rates, response times, failures, dependency performance — both in Azure and on-premises.",
      ],
      figures: [
        { id: "az900-monitoring", caption: "Advisor recommends · Service Health warns · Monitor measures (Log Analytics, alerts, App Insights)" },
      ],
      slideQuiz: [
        {
          q: "Which free service recommends improvements across reliability, security, performance, cost and operational excellence?",
          options: ["Azure Advisor", "Azure DNS", "Data Box", "ExpressRoute"],
          answer: 0,
          explain: "Advisor analyses your actual usage and lists prioritised, actionable recommendations.",
        },
        {
          q: "Microsoft schedules maintenance that will reboot hosts in a region you use. Which service warns you?",
          options: ["Azure Service Health", "The Pricing calculator", "Azure Policy", "AzCopy"],
          answer: 0,
          explain: "Service Health covers incidents AND planned maintenance for the services and regions you use.",
        },
        {
          q: "Your web app is intermittently slow and you need per-request telemetry — response times, failures, dependencies. Use…",
          options: ["Application Insights", "Resource locks", "A savings plan", "Azure Files"],
          answer: 0,
          explain: "Application Insights (part of Azure Monitor) instruments applications for exactly this.",
        },
        {
          q: "To be phoned/alerted automatically when a VM's CPU stays above 90% for 15 minutes, configure…",
          options: ["An Azure Monitor alert rule", "A ReadOnly lock", "A region pair", "A blob tier"],
          answer: 0,
          explain: "Alert rules watch metrics/logs and trigger notifications or automated actions on thresholds.",
        },
        {
          q: "Which THREE views make up Azure Service Health?",
          options: [
            "Azure Status, Service Health and Resource Health",
            "North, South and Central",
            "Portal, CLI and PowerShell",
            "Hot, Cool and Archive",
          ],
          answer: 0,
          explain: "Global platform status → the services/regions you use → the health of your individual resources.",
        },
      ],
    },
    {
      heading: "Exam preparation and booking",
      icon: "certificate",
      flat: true,
      paragraphs: [
        "You have now covered every skill area in the AZ-900 study guide. Before booking, test yourself honestly: work through this unit's three quizzes (one per skill area) until you score at least 80% on each, then take Microsoft's free official practice assessment.",
        "Free practice assessment and exam registration: https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/ — choose 'Take the practice assessment', and when you are ready, 'Schedule exam' books your seat with Pearson VUE (test centre or online proctored from home with a webcam).",
        "Exam-day tips: 45 minutes is generous for ±40–60 questions — read each question fully, watch for words like 'ONLY', 'ALWAYS' and 'MOST cost-effective', answer every question (there is no negative marking), and flag doubtful ones for review. Results are shown immediately when you finish.",
        "After AZ-900, natural next steps are AI-900 (Azure AI Fundamentals — Module 9 of this course), then role-based certifications such as AZ-104 Azure Administrator.",
      ],
      figures: [
        { id: "az900-exam-path", caption: "The path from this course to certified" },
      ],
      slideQuiz: [
        {
          q: "Is there negative marking on AZ-900?",
          options: ["No — so answer every question", "Yes — wrong answers subtract points", "Only on Mondays", "Only for online exams"],
          answer: 0,
          explain: "Unanswered and wrong score the same (zero) — never leave a question blank.",
        },
        {
          q: "Where do you take Microsoft's FREE official practice assessment?",
          options: [
            "On the AZ-900 certification page at learn.microsoft.com",
            "It doesn't exist",
            "Printed in the newspaper",
            "Only at a test centre",
          ],
          answer: 0,
          explain: "The certification page links the free practice assessment and the exam scheduling.",
        },
        {
          q: "A sensible readiness target before booking the real exam is…",
          options: [
            "At least 80% on every skill-area quiz plus a pass on the official practice assessment",
            "Reading the syllabus once",
            "Memorising three questions",
            "No preparation at all",
          ],
          answer: 0,
          explain: "Consistent 80%+ on all three quizzes and the practice assessment shows you cover every weighted area.",
        },
        {
          q: "Words like 'ONLY', 'ALWAYS' and 'MOST cost-effective' in exam questions signal that you should…",
          options: [
            "Read carefully — they change which answer is correct",
            "Skip the question",
            "Always pick option A",
            "Complain to the proctor",
          ],
          answer: 0,
          explain: "Qualifiers narrow the correct choice — e.g. several options may work, but only one is MOST cost-effective.",
        },
        {
          q: "After passing AZ-900, which certification is this course's natural next step?",
          options: [
            "AI-900 — Azure AI Fundamentals (Module 9)",
            "A driving licence",
            "Grade 12 again",
            "There is nothing after AZ-900",
          ],
          answer: 0,
          explain: "AI-900 follows in Module 9; role-based paths like AZ-104 come after the fundamentals.",
        },
      ],
    },
  ],

  exercises: [
    {
      id: "az900-ex1",
      title: "Choose the cloud model and service type",
      task: "Time: 30 minutes · Activity: Self",
      scenario: [
        "You are the junior cloud consultant at Discovery. Three internal teams describe their needs below. For each one, recommend a cloud model (public, private or hybrid) and/or service type (IaaS, PaaS or SaaS), and justify it in one or two sentences using the concepts from Lesson 1.",
      ],
      steps: [
        "Team A must keep member medical records on infrastructure only Discovery controls, for regulatory reasons — but wants the marketing website to scale cheaply for campaigns. Which cloud model fits, and why?",
        "Team B's developers want to deploy a new claims-tracking web app without managing any operating systems or patching. Which service type should they use, and why?",
        "Team C wants to move 12 old application servers to the cloud exactly as they are, with full control of the OS. Which service type is this, and what responsibility does the team keep?",
      ],
      checks: [
        {
          answer: [
            "Hybrid cloud — sensitive records stay on the private/on-premises side that Discovery controls, while the public-facing website runs in the public cloud for cheap, elastic scale.",
          ],
          concepts: [
            ["hybrid"],
            ["private", "on-prem", "on prem", "own", "control"],
            ["public", "scale", "elastic", "cheap"],
          ],
          labels: ["Names the hybrid model", "Sensitive data on the private side", "Website on the public cloud for scale"],
          min: 2,
        },
        {
          answer: [
            "PaaS (e.g. Azure App Service) — the platform manages the OS, patching and runtime, so developers focus only on their application code and data.",
          ],
          concepts: [
            ["paas", "platform as a service", "app service"],
            ["no os", "manages the os", "patching", "platform manages", "focus on code", "focus on the app"],
          ],
          labels: ["Names PaaS", "Explains the platform manages OS/patching"],
          min: 2,
        },
        {
          answer: [
            "IaaS (Azure Virtual Machines) — a lift-and-shift migration. The team keeps responsibility for the operating system: patching, updates and all software installed on it.",
          ],
          concepts: [
            ["iaas", "infrastructure as a service", "virtual machine"],
            ["lift", "as they are", "as-is", "migration"],
            ["patch", "operating system", "os", "updates", "responsib"],
          ],
          labels: ["Names IaaS/VMs", "Recognises lift-and-shift", "Keeps OS/patching responsibility"],
          min: 2,
        },
      ],
    },
    {
      id: "az900-ex2",
      title: "Pick the right Azure service",
      task: "Time: 30 minutes · Activity: Self",
      scenario: [
        "For each requirement below, name the single most appropriate Azure service and say in one sentence why it fits better than the nearby alternatives.",
      ],
      steps: [
        "Run a small piece of code every time a file lands in storage — paying only while the code executes.",
        "Connect head office to Azure with a private, dedicated link that never crosses the public internet.",
        "Store 40 TB of old CCTV footage that must be kept for five years but will almost never be watched — as cheaply as possible.",
        "Force every future resource in the company to be created only in the South Africa North region.",
        "Get an early warning when Microsoft plans maintenance that affects the services and regions your workloads use.",
      ],
      checks: [
        {
          answer: ["Azure Functions — serverless, event-driven compute billed per execution; no servers to run between events."],
          concepts: [["function"], ["serverless", "event", "per execution", "only when", "pay per"]],
          labels: ["Names Azure Functions", "Serverless / event-driven / pay-per-execution"],
          min: 1,
        },
        {
          answer: ["Azure ExpressRoute — a private dedicated circuit; a VPN Gateway would be encrypted but still travel the public internet."],
          concepts: [["expressroute", "express route"], ["private", "dedicated", "not public", "never public"]],
          labels: ["Names ExpressRoute", "Private/dedicated (vs VPN over internet)"],
          min: 1,
        },
        {
          answer: ["Blob storage in the Archive access tier — the cheapest tier, built for rarely-accessed long-term retention (rehydration takes hours)."],
          concepts: [["archive"], ["blob", "tier"], ["cheap", "cost", "rarely", "long"]],
          labels: ["Names the Archive tier", "Blob/access tiers", "Cost/rare-access reasoning"],
          min: 2,
        },
        {
          answer: ["Azure Policy — assign an allowed-locations policy at the management group or subscription so non-compliant deployments are blocked."],
          concepts: [["policy"], ["allowed location", "region", "block", "enforce", "complian"]],
          labels: ["Names Azure Policy", "Allowed locations / enforcement"],
          min: 1,
        },
        {
          answer: ["Azure Service Health — it reports incidents and planned maintenance for exactly the services and regions you use, with alerts."],
          concepts: [["service health"], ["planned maintenance", "incident", "alert", "regions you use"]],
          labels: ["Names Service Health", "Planned maintenance / alerts"],
          min: 1,
        },
      ],
    },
    {
      id: "az900-ex3",
      title: "Governance starter pack for a new subscription",
      task: "Time: 45 minutes · Activity: Self & Group",
      scenario: [
        "Discovery is opening a new Azure subscription for the Claims department. As a group, design its 'governance starter pack'. Write your plan as short bullet points — the checker looks for the four control types from Lesson 3 and correct scoping from Lesson 2.",
      ],
      steps: [
        "How will you organise resources so the claims web app, its database and its storage can be deployed, updated and deleted together — and how does the subscription fit under company-wide rules?",
        "Name the four governance/cost controls you would apply from day one (think: who can do what · which rules resources must obey · what must never be deleted · how spend is tracked), with one example each.",
      ],
      checks: [
        {
          answer: [
            "Put the app, database and storage in one resource group (grouped by lifecycle) inside the new subscription, and place the subscription under the company management group so corporate policies are inherited.",
          ],
          concepts: [
            ["resource group"],
            ["lifecycle", "together", "one group"],
            ["management group", "inherit"],
          ],
          labels: ["Resource group per lifecycle", "Deploy/update/delete together", "Subscription under a management group"],
          min: 2,
        },
        {
          answer: [
            "RBAC roles at least-privilege scopes (e.g. Reader for auditors, Contributor for the claims team on their resource group); Azure Policy (e.g. allowed regions and required tags); resource locks (CanNotDelete on the production database); tags plus Cost Management budgets and alerts (e.g. CostCentre: Claims with a monthly budget alert).",
          ],
          concepts: [
            ["rbac", "role", "least privilege"],
            ["policy"],
            ["lock"],
            ["tag", "budget", "cost management"],
          ],
          labels: ["RBAC / least privilege", "Azure Policy", "Resource locks", "Tags + budgets/Cost Management"],
          min: 3,
        },
      ],
    },
  ],

  assignments: [],

  quiz: [],
  quizzes: [
    {
      id: "az900-q1",
      title: "Skill area 1 — Cloud concepts",
      questions: [
        {
          q: "Which statement best describes the consumption-based model?",
          options: [
            "You pay only for the resources you use, when you use them",
            "You buy all hardware up front",
            "You pay a flat annual fee regardless of usage",
            "Everything in the cloud is free",
          ],
          answer: 0,
          explain: "Cloud spend is OpEx — metered usage, no up-front hardware purchase.",
        },
        {
          q: "Which scenario is the classic use of a HYBRID cloud?",
          options: [
            "Keeping regulated data on-premises while running the public website in Azure",
            "Running everything on one laptop",
            "Using only Microsoft 365",
            "Hosting everything in one public region",
          ],
          answer: 0,
          explain: "Hybrid joins private/on-prem with public cloud so each workload runs where it fits best.",
        },
        {
          q: "In the shared responsibility model, who is ALWAYS responsible for the physical datacenter?",
          options: ["The cloud provider", "The customer", "The end users", "The ISP"],
          answer: 0,
          explain: "Physical hosts, network and datacenters are the provider's responsibility in every service type.",
        },
        {
          q: "Scaling UP a virtual machine means…",
          options: [
            "Giving it more CPU and RAM",
            "Adding more identical VMs",
            "Moving it to another region",
            "Turning it off",
          ],
          answer: 0,
          explain: "Vertical scaling changes the size of one machine; horizontal scaling changes the number of machines.",
        },
        {
          q: "Which service type requires YOU to patch the operating system?",
          options: ["IaaS", "PaaS", "SaaS", "None of them"],
          answer: 0,
          explain: "In IaaS you control (and must maintain) the OS; in PaaS and SaaS the provider does.",
        },
        {
          q: "A 99.99% SLA allows roughly how much downtime per year?",
          options: ["Under an hour (≈52.5 minutes)", "About 9 hours", "About 3.65 days", "One week"],
          answer: 0,
          explain: "Each additional 'nine' cuts allowed downtime by ~10× — 99.99% is ≈52.5 minutes/year.",
        },
        {
          q: "Which is a benefit of moving from CapEx to OpEx?",
          options: [
            "No large up-front investment and you stop paying when you stop using resources",
            "You own more physical servers",
            "Higher electricity bills",
            "Longer procurement cycles",
          ],
          answer: 0,
          explain: "OpEx aligns cost with usage — no idle capital assets depreciating in a server room.",
        },
        {
          q: "Which is the best example of SaaS?",
          options: ["Microsoft 365 email", "An Azure virtual machine", "A virtual network", "An ARM template"],
          answer: 0,
          explain: "SaaS is finished software you subscribe to and use — like Microsoft 365.",
        },
      ],
    },
    {
      id: "az900-q2",
      title: "Skill area 2 — Azure architecture and services",
      questions: [
        {
          q: "Availability zones within a region are…",
          options: [
            "Physically separate locations with independent power, cooling and networking",
            "Different billing accounts",
            "Marketing regions",
            "Time zones",
          ],
          answer: 0,
          explain: "Zone-redundant deployments survive the loss of an entire datacenter.",
        },
        {
          q: "Which is TRUE about resource groups?",
          options: [
            "A resource belongs to exactly one resource group, and groups cannot be nested",
            "Resources can belong to five groups",
            "Groups may contain other groups",
            "Deleting a group keeps its resources",
          ],
          answer: 0,
          explain: "One resource → one group; no nesting; deleting the group deletes its contents.",
        },
        {
          q: "Which compute service delivers full Windows desktops from the cloud to any device?",
          options: ["Azure Virtual Desktop", "Azure Functions", "Azure DNS", "Azure Files"],
          answer: 0,
          explain: "AVD centralises desktop delivery with cloud scale and security.",
        },
        {
          q: "Traffic between two PEERED virtual networks travels…",
          options: [
            "Over Microsoft's private backbone network",
            "Over the public internet",
            "By courier",
            "It is not possible",
          ],
          answer: 0,
          explain: "Peering keeps inter-VNet traffic on Microsoft's private network — even across regions.",
        },
        {
          q: "Which storage redundancy keeps copies in a SECOND region hundreds of kilometres away?",
          options: ["GRS / GZRS", "LRS", "ZRS", "Hot tier"],
          answer: 0,
          explain: "Geo-redundant options replicate to the paired region for disaster recovery.",
        },
        {
          q: "Which tool is a GRAPHICAL desktop app for browsing and transferring Azure storage?",
          options: ["Azure Storage Explorer", "AzCopy", "Azure Arc", "Cost Management"],
          answer: 0,
          explain: "Storage Explorer is the GUI; AzCopy is its command-line sibling.",
        },
        {
          q: "Conditional Access is best described as…",
          options: [
            "Granting or blocking sign-ins based on identity signals like user, location and device",
            "A firewall rule on a VM",
            "A storage tier",
            "A pricing model",
          ],
          answer: 0,
          explain: "Conditional Access applies the right controls (e.g. require MFA) based on the sign-in's context.",
        },
        {
          q: "Which service continuously assesses security posture and recommends hardening steps across clouds?",
          options: ["Microsoft Defender for Cloud", "Azure DNS", "Data Box", "App Service"],
          answer: 0,
          explain: "Defender for Cloud scores posture, recommends fixes and detects threats.",
        },
      ],
    },
    {
      id: "az900-q3",
      title: "Skill area 3 — Management and governance",
      questions: [
        {
          q: "Which factor does NOT affect the cost of an Azure VM?",
          options: ["The name you give it", "Its size (CPU/RAM)", "The region it runs in", "How many hours it runs"],
          answer: 0,
          explain: "Names are free; size, region and runtime hours all drive cost.",
        },
        {
          q: "A ReadOnly resource lock…",
          options: [
            "Prevents ALL changes to the resource until removed",
            "Allows changes but blocks deletion",
            "Only hides the resource in the portal",
            "Deletes the resource",
          ],
          answer: 0,
          explain: "ReadOnly blocks modification and deletion; CanNotDelete allows changes but not deletion.",
        },
        {
          q: "Azure Policy differs from RBAC because Policy controls…",
          options: [
            "WHAT is allowed to be deployed / how resources must be configured",
            "WHO can sign in",
            "The colour of dashboards",
            "The exam fee",
          ],
          answer: 0,
          explain: "RBAC governs who may act; Policy governs what a resource may be — they work together.",
        },
        {
          q: "Which tool lets you run az CLI commands in the browser with no local installation?",
          options: ["Azure Cloud Shell", "Notepad", "Azure Data Box", "Service Trust Portal"],
          answer: 0,
          explain: "Cloud Shell is an authenticated, browser-based shell built into the portal.",
        },
        {
          q: "ARM templates give you which benefit?",
          options: [
            "Repeatable, declarative deployments with no configuration drift",
            "Cheaper electricity",
            "Automatic marketing campaigns",
            "Faster keyboards",
          ],
          answer: 0,
          explain: "Infrastructure as Code deploys the same environment identically every time.",
        },
        {
          q: "Azure Advisor's five recommendation categories are…",
          options: [
            "Reliability, Security, Performance, Cost, Operational Excellence",
            "Speed, Colour, Size, Weight, Price",
            "North, South, East, West, Central",
            "Word, Excel, PowerPoint, Outlook, Teams",
          ],
          answer: 0,
          explain: "Advisor scores and recommends across these five pillars.",
        },
        {
          q: "Which Azure Monitor component do you QUERY to analyse collected log data?",
          options: ["Log Analytics", "Resource locks", "Azure DNS", "Region pairs"],
          answer: 0,
          explain: "Log Analytics is the query workspace over Azure Monitor's collected logs.",
        },
        {
          q: "To track actual spending against a monthly limit and get warned at 80%, configure…",
          options: [
            "A budget with alerts in Microsoft Cost Management",
            "A bigger subscription",
            "An availability zone",
            "A VPN gateway",
          ],
          answer: 0,
          explain: "Cost Management budgets + alerts watch real spend against your threshold.",
        },
      ],
    },
  ],

  studyGuide: {
    asOf: "Skills measured as of July 20, 2026",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900",
    audience: [
      "As a candidate for this exam, you're a technology professional who wants to demonstrate foundational knowledge of cloud concepts in general and Microsoft Azure in particular. This exam is a common starting point in a journey towards a career in Azure.",
      "You can describe Azure architectural components and Azure services, such as compute, networking and storage. You can also describe features and tools to secure, govern, and administer Azure.",
      "You should have skills and experience working with an area of IT, such as infrastructure management, database management or software development.",
    ],
    skillsAtAGlance: [
      "Describe cloud concepts (25–30%)",
      "Describe Azure architecture and services (35–40%)",
      "Describe Azure management and governance (30–35%)",
    ],
    areas: [
      {
        heading: "Describe cloud concepts (25–30%)",
        groups: [
          {
            heading: "Describe cloud computing",
            items: [
              "Define cloud computing",
              "Describe the shared responsibility model",
              "Define cloud models, including public, private, and hybrid",
              "Identify appropriate use cases for each cloud model",
              "Describe the consumption-based model",
              "Compare cloud pricing models",
              "Describe serverless",
            ],
          },
          {
            heading: "Describe the benefits of using cloud services",
            items: [
              "Describe the benefits of high availability and scalability in the cloud",
              "Describe the benefits of reliability and predictability in the cloud",
              "Describe the benefits of security and governance in the cloud",
              "Describe the benefits of manageability in the cloud",
            ],
          },
          {
            heading: "Describe cloud service types",
            items: [
              "Describe infrastructure as a service (IaaS)",
              "Describe platform as a service (PaaS)",
              "Describe software as a service (SaaS)",
              "Identify appropriate use cases for each cloud service type (IaaS, PaaS, and SaaS)",
            ],
          },
        ],
      },
      {
        heading: "Describe Azure architecture and services (35–40%)",
        groups: [
          {
            heading: "Describe the core architectural components of Azure",
            items: [
              "Describe Azure regions, region pairs, and sovereign regions",
              "Describe availability zones",
              "Describe Azure datacenters",
              "Describe Azure resources and resource groups",
              "Describe subscriptions",
              "Describe management groups",
              "Describe the hierarchy of resource groups, subscriptions, and management groups",
            ],
          },
          {
            heading: "Describe Azure compute and networking services",
            items: [
              "Compare compute types, including containers, virtual machines, and functions",
              "Describe virtual machine options, including Azure virtual machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop",
              "Describe the resources required for virtual machines",
              "Describe application hosting options, including web apps, containers, and virtual machines",
              "Describe virtual networking, including the purpose of Azure virtual networks, subnets, peering, Azure DNS, Azure VPN Gateway, and ExpressRoute",
              "Define public and private endpoints",
            ],
          },
          {
            heading: "Describe Azure storage services",
            items: [
              "Compare Azure Storage services",
              "Describe storage tiers",
              "Describe redundancy options",
              "Describe storage account options and storage types",
              "Identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync",
              "Describe migration options, including Azure Migrate and Azure Data Box",
            ],
          },
          {
            heading: "Describe Azure identity, access, and security",
            items: [
              "Describe directory services in Azure, including Microsoft Entra ID and Microsoft Entra Domain Services",
              "Describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication (MFA), and passwordless",
              "Describe external identities in Azure",
              "Describe Microsoft Entra Conditional Access",
              "Describe Azure role-based access control (RBAC)",
              "Describe the concept of Zero Trust",
              "Describe the purpose of the defense-in-depth model",
              "Describe the purpose of Microsoft Defender for Cloud",
            ],
          },
        ],
      },
      {
        heading: "Describe Azure management and governance (30–35%)",
        groups: [
          {
            heading: "Describe cost management in Azure",
            items: [
              "Describe factors that can affect costs in Azure",
              "Explore the pricing calculator",
              "Describe cost management capabilities in Azure",
              "Describe the purpose of tags",
            ],
          },
          {
            heading: "Describe features and tools in Azure for governance and compliance",
            items: [
              "Describe the purpose of Microsoft Purview in Azure",
              "Describe the purpose of Azure Policy",
              "Describe the purpose of resource locks",
            ],
          },
          {
            heading: "Describe features and tools for managing and deploying Azure resources",
            items: [
              "Describe the Azure portal",
              "Describe Azure Cloud Shell, Azure CLI, and Azure PowerShell",
              "Describe the purpose of Azure Arc",
              "Describe infrastructure as code (IaC)",
              "Describe Azure Resource Manager (ARM) and ARM templates",
            ],
          },
          {
            heading: "Describe monitoring tools in Azure",
            items: [
              "Describe the purpose of Azure Advisor",
              "Describe Azure Service Health",
              "Describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Azure Monitor Application Insights",
            ],
          },
        ],
      },
    ],
  },

  selfAssessment: {
    intro: [
      "You are now ready to go through a check list. Be honest with yourself.",
      "Tick the box with either a \u221A or an X to indicate your response.",
    ],
    items: [
      "I can define cloud computing and describe the shared responsibility model.",
      "I can compare public, private and hybrid cloud models and pick the right one for a scenario.",
      "I can explain the consumption-based model and the difference between CapEx and OpEx.",
      "I can describe high availability, scalability, elasticity, reliability and predictability.",
      "I can compare IaaS, PaaS and SaaS and give an appropriate use case for each.",
      "I can describe regions, region pairs, sovereign regions and availability zones.",
      "I can explain the hierarchy of resources, resource groups, subscriptions and management groups.",
      "I can choose between VMs, scale sets, App Service, containers and Functions for a workload.",
      "I can describe Azure networking: VNets, peering, VPN Gateway, ExpressRoute, DNS and endpoints.",
      "I can compare storage services, blob tiers and redundancy options, and pick data-migration tools.",
      "I can describe Microsoft Entra ID, MFA, SSO, Conditional Access, RBAC, Zero Trust and defence-in-depth.",
      "I can use the Pricing and TCO calculators, Cost Management, and tags to control spend.",
      "I can apply Azure Policy, resource locks and the Service Trust Portal for governance and compliance.",
      "I can manage Azure with the portal, Cloud Shell, CLI, PowerShell, Azure Arc and ARM templates.",
      "I can monitor with Azure Advisor, Service Health and Azure Monitor (Log Analytics, alerts, Application Insights).",
    ],
    outro: [
      "You must think about any point you could not tick. Write this down as a goal.",
      "Decide on a plan of action to achieve these goals. Regularly review these goals.",
      "When every box is ticked, take the free official practice assessment — then book your exam.",
    ],
  },
};
