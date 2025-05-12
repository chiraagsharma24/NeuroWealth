import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "100+",
      label: "Active Users",
    },
    {
      value: " ₹10 lakh+",
      label: "Transactions Tracked",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "4.89/5",
      label: "User Rating",
    },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description:
        "Get detailed insights into your spending patterns with AI-powered analytics",
    },
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Smart Receipt Scanner",
      description:
        "Extract data automatically from receipts using advanced AI technology",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "Budget Planning",
      description: "Create and manage budgets with intelligent recommendations",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Multi-Account Support",
      description: "Manage multiple accounts and credit cards in one place",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Multi-Currency",
      description: "Support for multiple currencies with real-time conversion",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Automated Insights",
      description: "Get automated financial insights and recommendations",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Create Your Account",
      description:
        "Get started in minutes with our simple and secure sign-up process",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "2. Track Your Spending",
      description:
        "Automatically categorize and track your transactions in real-time",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "3. Get Insights",
      description:
        "Receive AI-powered insights and recommendations to optimize your finances",
    },
  ];
  
  // Testimonials Data
  export const testimonialsData = [
  {
    name: "Ratan Patel",
    role: "SDE @Microsoft",
    image: "/ratan.jpg",
    quote:
      "As an SDE at Microsoft, I'm constantly evaluating tools that enhance productivity. NeuroWealth's intuitive AI-based financial analysis is a game-changer for tech professionals managing complex finances.",
  },
  {
    name: "Satish Chauhan",
    role: "Unicorn Founder",
    image: "/satish.jpg",
    quote:
      "Running a unicorn demands precision and speed. NeuroWealth helps me automate my expense tracking and make fast, data-backed decisions that scale with my business.",
  },
  {
    name: "Asif Ali",
    role: "SDE @Google",
    image: "/asif.jpg",
    quote:
      "NeuroWealth’s AI-powered receipt scanning has made expense reporting effortless. I also love the monthly email summaries—they give me a clear snapshot of where my money goes without lifting a finger.",
  },
];
