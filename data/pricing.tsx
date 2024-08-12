import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description:
    "Choose the plan that best suits your needs and get professional management tools.",
  plans: [
    {
      id: "basic",
      title: "Basic Package",
      description: "Essential features for starting out.",
      price: "136.13",
      features: [
        {
          title: "Inventory Management",
        },
        {
          title: "Basic Reporting",
        },
        {
          title: "Customer Management",
        },
        {
          title: "Basic User Support",
        },
      ],
      action: {
        href: "#",
      },
    },
    {
      id: "standard",
      title: "Standard Package",
      description: "Perfect for small operations.",
      price: "272.26",
      isRecommended: true,
      features: [
        {
          title: "Inventory Management",
        },
        {
          title: "Basic Reporting",
        },
        {
          title: "Customer Management",
        },
        {
          title: "Basic User Support",
        },
        {
          title: "Advanced Reporting and Analytics",
        },
        {
          title: "Integration with Accounting Systems",
        },
        {
          title: "Customizable User Roles",
        },
        {
          title: "Email and Phone Support",
        },
      ],
      action: {
        href: "#",
      },
    },
    {
      id: "premium",
      title: "Premium Package",
      description: "For large enterprises and unlimited management.",
      price: "408.39",
      features: [
        {
          title: "Inventory Management",
        },
        {
          title: "Basic Reporting",
        },
        {
          title: "Customer Management",
        },
        {
          title: "Basic User Support",
        },
        {
          title: "Advanced Reporting and Analytics",
        },
        {
          title: "Integration with Accounting Systems",
        },
        {
          title: "Customizable User Roles",
        },
        {
          title: "Email and Phone Support",
        },
        {
          title: "Advanced Inventory Management",
        },
        {
          title: "Integration with CRM Systems",
        },
        {
          title: "Automated Notifications and Alerts",
        },
        {
          title: "24/7 Support",
        },
        {
          title: "Custom Development and Integration",
        },
      ],
      action: {
        href: "#",
      },
    },
  ],
};
