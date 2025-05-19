export interface Project {
  title: string;
  details: string[];
}

export interface CurriculumModule {
  title: string;
  topics: string[];
  problems?: string[];
  projects?: Project[];
}

export const curriculumData: CurriculumModule[] = [
  {
    title: "Python for Data Engineering",
    topics: [
      "Getting Started with Python & Setup",
      "Core Python Syntax: Variables, Data Types & Operators",
      "Control Flow & Functions: Writing Reusable Code",
      "Data Structures Deep Dive: Lists, Tuples, Dicts & Sets",
      "Working with Files & Regular Expressions",
      "Pandas & NumPy Essentials for Data Manipulation",
      "Virtual Environments & Package Management"
    ]
  },
  {
    title: "SQL Mastery",
    topics: [
      "Introduction to Relational Databases & SQL Basics",
      "Advanced Joins, Subqueries & Set Operations",
      "Window Functions, CTEs & Analytical Queries",
      "Indexing Strategies & Query Performance Tuning",
      "Stored Procedures, Views & Transaction Management"
    ]
  },
  {
    title: "SQL 50 LeetCode Challenges",
    topics: [
      "Problems 1-10: From 'Second Highest Salary' to 'Consecutive Numbers'",
      "Problems 11-20: Including 'Customers and Orders', 'Activity Notifications'",
      "Problems 21-30: Including 'Reservation Orders', 'Wealthiest Customer'",
      "Problems 31-40: Including 'Weather Observation', 'Project Milestones'",
      "Problems 41-50: Including 'Customer Churn', 'Real-Time Counts'"
    ],
    problems: [
      "Problem 1: 'Second Highest Salary'", 
      "Problem 2: 'Department Highest Salary'",
      "Problem 15: 'Sales by Month'",
      "Problem 30: 'Wealthiest Customer'"
    ]
  },
  {
    title: "Google Cloud Platform Fundamentals",
    topics: [
      "GCP Overview & Identity & Access Management (IAM)",
      "BigQuery Basics: Datasets, Tables & SQL Interface",
      "BigQuery Performance: Partitioning, Clustering & Cost Control",
      "Dataflow Fundamentals: Batch vs. Streaming Pipelines",
      "Pub/Sub Architecture & Real-Time Messaging Patterns",
      "Dataproc: Managed Hadoop & Spark Pipelines",
      "Cloud Functions: Building Serverless Data Endpoints",
      "Cloud Composer: Airflow as a Service on GCP"
    ]
  },
  {
    title: "Workflow Orchestration with Airflow",
    topics: [
      "Airflow Architecture & Core Concepts (DAGs, Tasks)",
      "Operators, Sensors & Hooks: Integrating with External Systems",
      "XComs, Variables & Connections for Dynamic Workflows",
      "Custom Plugins & Best Practices for Production",
      "Monitoring, Logging & Alerting in Airflow"
    ]
  },
  {
    title: "Big Data Ecosystem",
    topics: [
      "Hadoop Ecosystem Overview & HDFS Essentials",
      "YARN Resource Management & Cluster Operations",
      "Apache Spark Core: RDDs, DataFrames & Spark SQL",
      "Kafka Foundations & Integration in Data Pipelines",
      "NoSQL Databases: Cassandra & MongoDB for Scale"
    ]
  },
  {
    title: "Hands-On Real-Time Projects",
    topics: [
      "Streaming Analytics Pipeline",
      "Batch ETL with Airflow & Dataproc",
      "End-to-End Data Lake on GCP",
      "Real-Time E-Commerce Clickstream Analysis"
    ],
    projects: [
      {
        title: "Streaming Analytics Pipeline",
        details: [
          "Project Kickoff & Data Schema Design",
          "Implementing Pub/Sub Ingestion",
          "Real-Time Transformations with Dataflow",
          "Visualizing Streaming Results in BigQuery Dashboards"
        ]
      },
      {
        title: "Batch ETL with Airflow & Dataproc",
        details: [
          "Building the Airflow DAG & Task Dependencies",
          "Orchestrating Spark Jobs on Dataproc",
          "Data Quality Checks & Automated Testing",
          "Automated Alerts via Cloud Functions"
        ]
      },
      {
        title: "End-to-End Data Lake on GCP",
        details: [
          "Architecting a Scalable Data Lake",
          "Ingesting Data with Cloud Storage & Transfer Service",
          "Serverless Transformations: Cloud Functions & Dataflow",
          "Data Cataloging & Access Control Implementation"
        ]
      },
      {
        title: "Real-Time E-Commerce Clickstream Analysis",
        details: [
          "Designing a Clickstream Schema & Pub/Sub Topics",
          "Stream Processing with Spark Structured Streaming",
          "Enriching & Aggregating User Events in BigQuery",
          "Building a Live Dashboard with Data Studio"
        ]
      }
    ]
  },
  {
    title: "Big Data Special Topics",
    topics: [
      "Delta Lake & Streaming MERGE Patterns",
      "Data Governance & Metadata Management",
      "Introduction to Data Mesh & Lakehouse Architectures",
      "Cost Optimization Strategies in Cloud Data Platforms"
    ]
  },
  {
    title: "Job Portal Optimization & Career Prep",
    topics: [
      "Resume & LinkedIn Optimization for Data Engineering",
      "Crafting Project Portfolios & GitHub Best Practices",
      "Mock Interview Questions: SQL, Python & System Design",
      "Networking Strategies & Leveraging Referrals"
    ]
  },
  {
    title: "Job Guarantee & Career Success",
    topics: [
      "Personalized Mock Interviews & Feedback Sessions",
      "Salary Negotiation Techniques & Offer Evaluation",
      "Building Your Personal Brand in the Data Community",
      "Certification & Course Completion Deliverables"
    ]
  }
];