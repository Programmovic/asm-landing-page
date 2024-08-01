import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Choose the plan that best suits your needs and get professional management tools.',
  plans: [
    {
      id: 'standard',
      title: 'Standard Package',
      description: 'Perfect for small operations.',
      price: '$ 115.00 / Month',
      features: [
        {
          title: 'Manage 50 cars',
        },
        {
          title: '5 user accounts',
        },
        {
          title: 'Technical support via email',
        },
        {
          title: '10 GB storage space',
        },
        {
          title: 'Basic reports',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'advanced',
      title: 'Advanced Package',
      description: 'Ideal for growing businesses.',
      price: '$ 165.00 / Month',
      isRecommended: true,
      features: [
        {
          title: 'Manage 200 cars',
        },
        {
          title: '20 user accounts',
        },
        {
          title: 'Technical support around the clock',
        },
        {
          title: '50 GB storage space',
        },
        {
          title: 'Advanced reports & Data Analysis',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'premium',
      title: 'Premium Package',
      description: 'For large enterprises and unlimited management.',
      price: '$ 220.00 / Month',
      features: [
        {
          title: 'Manage unlimited cars',
        },
        {
          title: 'Unlimited user accounts',
        },
        {
          title: 'Personal Technical support',
        },
        {
          title: 'Unlimited storage space',
        },
        {
          title: 'Special Reports & Data Analysis',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}
