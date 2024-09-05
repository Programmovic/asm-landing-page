import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: undefined,
  seo: {
    title: 'ASM',
    description: 'ASM AutoStockMaster - The ultimate solution for managing your auto inventory efficiently.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://twitter.com/Pagebakers">B-Circles</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:support@autostockmaster.com',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/autostockmaster',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/b-circles/autostockmaster',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start managing your auto inventory with ASM AutoStockMaster',
    features: [
      {
        icon: FiCheck,
        title: 'Customer Relationship Management',
        description: 'Manage and maintain customer relationships effectively.',
      },
      {
        icon: FiCheck,
        title: 'Inventory Management',
        description: 'Keep track of your auto inventory with ease.',
      },
      {
        icon: FiCheck,
        title: 'Maintenance',
        description: 'Manage and schedule maintenance tasks efficiently.',
      },
      {
        icon: FiCheck,
        title: 'Human Resource Management',
        description: 'Organize and manage your team seamlessly.',
      },
      {
        icon: FiCheck,
        title: 'Sales & Purchase Management',
        description: 'Handle sales and purchase transactions professionally.',
      },
      {
        icon: FiCheck,
        title: 'Reports & Analytics',
        description: 'Gain insights with comprehensive reports and analytics.',
      },
    ],
  },
}

export default siteConfig
