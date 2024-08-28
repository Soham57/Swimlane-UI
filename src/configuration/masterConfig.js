export const COLUMN_CONFIG = [
  {
    title: "Backlog",
    column: "backlog",
    headingColor: "text-neutral-500",
  },
  {
    title: "TODO",
    column: "todo",
    headingColor: "text-yellow-200",
  },
  {
    title: "In progress",
    column: "in-progress",
    headingColor: "text-blue-200",
  },
  {
    title: "Complete",
    column: "completed",
    headingColor: "text-emerald-200",
  },
];

export const CARDS_CONFIG = [
  { 
    title: "Optimize API Response Times", 
    id: "1", 
    column: "backlog", 
    attributes: ["High", "Performance"], 
    notAllowedColumns: ["completed"], 
    history: []
  },
  { 
    title: "Update System Health Dashboards", 
    id: "2", 
    column: "backlog", 
    attributes: ["Medium", "Monitoring"], 
    notAllowedColumns: [], 
    history: []
  },
  { 
    title: "Implement Service Auto-Scaling", 
    id: "3", 
    column: "backlog", 
    attributes: ["High", "Infrastructure"], 
    notAllowedColumns: ["todo"], 
    history: []
  },
  { 
    title: "Revise Incident Response Plan", 
    id: "4", 
    column: "todo", 
    attributes: ["Medium", "SRE"], 
    notAllowedColumns: [], 
    history: []
  },
  { 
    title: "Conduct Load Testing for API", 
    id: "5", 
    column: "todo", 
    attributes: ["High", "Testing"], 
    notAllowedColumns: ["completed"], 
    history: []
  },
  { 
    title: "Deploy New Logging Framework", 
    id: "6", 
    column: "in-progress", 
    attributes: ["Medium", "Operations"], 
    notAllowedColumns: ["completed"], 
    history: []
  },
  { 
    title: "Audit Cloud Costs and Usage", 
    id: "7", 
    column: "in-progress", 
    attributes: ["Medium", "Cost Management"], 
    notAllowedColumns: ["backlog"], 
    history: []
  },
  { 
    title: "Refactor CI/CD Pipelines", 
    id: "8", 
    column: "in-progress", 
    attributes: ["High", "DevOps"], 
    notAllowedColumns: [], 
    history: []
  },
  { 
    title: "Improve Error Handling in Services", 
    id: "9", 
    column: "in-progress", 
    attributes: ["High", "Reliability"], 
    notAllowedColumns: ["completed"], 
    history: []
  },
  { 
    title: "Create Documentation for Internal Tools", 
    id: "10", 
    column: "in-progress", 
    attributes: ["Low", "Documentation"], 
    notAllowedColumns: ["completed"], 
    history: []
  },
  { 
    title: "Update Onboarding Guide", 
    id: "11", 
    column: "completed", 
    attributes: ["Low", "Documentation"], 
    notAllowedColumns: [], 
    history: []
  },
  { 
    title: "Finalize Disaster Recovery Strategy", 
    id: "12", 
    column: "completed", 
    attributes: ["High", "SRE"], 
    notAllowedColumns: [], 
    history: []
  }
];
