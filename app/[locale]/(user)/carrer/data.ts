// data/careers.ts
export const careers = [
  {
    title: "Sales Consultant Executive",
    businessUnit: "East Land and Home",
    closingDate: "30-Aug-2025",
    jobType: "Full time",
    numberOfHiring: 1,
    description: [
      "Uses strong consultative sales skill to convince customer",
      "Provide full pack of product detail & benefits to close sales.",
      "Contact to customers by phone",
      "Recruit agency level 2 and support their sale activities",
      "Follow up with both new and old customers",
      "Solve problem that effect to sales activities",
      "Make report for superior (Weekly and monthly)",
      "Other job is assigned by superior/manager",
    ],
    requirements: [
      "University Degree, Sale & Marketing field",
      "At least 2 years of work experience in Sale or related field",
      "Experience in real estate or relate field",
      "Good in English Communication",
      "Able to use basic computer skills (MS Office)",
      "Knowledge how to tracking on workflow by using system and design and analysist report and data",
      "Design plan and execute the plan",
      "Good in communication and interpersonal skills",
      "Effective team and relationship building",
      "Good knowledge in consultation, coaching and advisory",
      "Work under pressure and flexible",
      "Strong commitment",
      "Strong negotiation skills",
      "Good at solving problem and customer support",
    ],
    contact: {
      phones: ["085 230 168", "085 227 168", "086 584 168", "086 764 168"],
      email: "recruitment@eastlandandhome.com",
      telegram: "085 227 168",
    },
  },
];


// data/careers.ts
export interface Career {
  title: string;
  businessUnit: string;
  closingDate: string;
  jobType: string;
  numberOfHiring: number;
  description: string[];
  requirements: string[];
}

export const careers2: Career[] = [
  {
    title: "Merchant Operations Supervisor",
    businessUnit: "EAST BUY",
    closingDate: "30-Aug-2025",
    jobType: "Full time",
    numberOfHiring: 1,
    description: [
      "Execute and monitor merchant processes (onboarding, support, leaving)",
      "Key-In merchant into system",
      "Menu Uploading and Translation",
      "Handle data discrepancies in merchant records",
      "Supervise merchant support team & assign tasks",
      "Conduct regular training for team",
      "Monitor food quality, order accuracy, prep time",
      "Resolve disputes and collaborate with cross-functional teams",
      "Identify process bottlenecks and improve workflow",
      "Build merchant relationships & gather feedback",
      "Generate reports and provide insights to management",
    ],
    requirements: [
      "Bachelor’s degree in Business or related field",
      "2+ years in merchant operations or similar role",
      "Strong leadership and decision-making skills",
      "Excellent communication and interpersonal skills",
      "Ability to work in a fast-paced environment"
    ],
  },
  {
    title: "Sales Consultant Officer",
    businessUnit: "East Land and Home",
    closingDate: "30-Aug-2025",
    jobType: "Full time",
    numberOfHiring: 1,
    description: [
      "Uses strong consultative sales skills to convince customers",
      "Provide full product details and benefits",
      "Contact and follow up with customers by phone",
      "Prepare weekly/monthly sales reports",
      "Other tasks assigned by manager"
    ],
    requirements: [
      "University Degree in Sales & Marketing",
      "At least 1 year of experience in sales or related field",
      "Experience in real estate is a plus",
      "Strong communication and interpersonal skills",
      "Able to use MS Office and track workflows",
      "Good problem-solving and customer support"
    ],
  },
  {
    title: "Sales Consultant Supervisor",
    businessUnit: "East Land and Home",
    closingDate: "30-Aug-2025",
    jobType: "Full time",
    numberOfHiring: 1,
    description: [
      "Determine client needs and offer financial solutions",
      "Achieve personal monthly sales targets",
      "Implement selling process and company resources",
      "Recruit and train agency level 2",
      "Manage sales team and report daily",
      "Negotiate and advise clients on property sales",
      "Promote property listings and conduct site visits"
    ],
    requirements: [
      "University Degree in Sales & Marketing",
      "At least 3 years of sales experience",
      "Experience in real estate is a must",
      "Strong English communication skills",
      "Proficient in MS Office",
      "Ability to manage teams, coach, and close deals"
    ],
  }
];
