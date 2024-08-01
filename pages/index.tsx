import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiUser,
  FiTool,
  FiUsers,
  FiShoppingCart,
  FiBarChart,
} from "react-icons/fi";

import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Auto Stock Master"
        description="Free SaaS"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt="20" pb="20">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center" spacing={{ base: "10", lg: "20" }}>
          <VStack spacing="6" alignItems="flex-start" flex="1">
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={<FallInPlace>ASM</FallInPlace>}
              description={
                <FallInPlace delay={0.4} fontWeight="medium">
                  ASM, an innovative management system designed to streamline
                  business operations and enhance productivity. It is a
                  comprehensive software solution that integrates various business
                  functions into a unified platform.
                </FallInPlace>
              }
            >
              <FallInPlace delay={0.8}>
                <ButtonGroup spacing={4} alignItems="center" pt="4">
                  <ButtonLink colorScheme="primary" size="lg" href="/signup">
                    Sign Up
                  </ButtonLink>
                  <ButtonLink
                    size="lg"
                    href="https://demo.saas-ui.dev"
                    variant="outline"
                    rightIcon={
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: "common",
                          transitionDuration: "normal",
                          ".chakra-button:hover &": {
                            transform: "translate(5px)",
                          },
                        }}
                      />
                    }
                  >
                    View demo
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </Hero>
          </VStack>
          <Box
            display={{ base: "none", lg: "block" }}
            
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" flex="1"
            justifyContent='end'>
                <Image
                  src="/static/images/home-img.svg"
                  layout="intrinsic"
                  width={'500'}
                  height={500}
                  alt="Illustration of the management system"
                  quality="100"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={6}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Customer Relationship Management",
            icon: FiUser,
            description:
              "Manage your customer interactions and data professionally.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Inventory Management",
            icon: FiBox,
            description: "Track and manage your inventory efficiently.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Maintenance",
            icon: FiTool,
            description: "Keep track of maintenance schedules and tasks.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Human Resource Management",
            icon: FiUsers,
            description: "Manage your HR tasks and employee data with ease.",
            iconPosition: "left",
            delay: 1.1,
          },
          {
            title: "Sales & Purchase Management",
            icon: FiShoppingCart,
            description: "Handle sales and purchase processes effectively.",
            iconPosition: "left",
            delay: 1.2,
          },
          {
            title: "Reports & Analytics",
            icon: FiBarChart,
            description:
              "Generate detailed reports and analytics to make informed decisions.",
            iconPosition: "left",
            delay: 1.3,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("npm install asm-autostockmaster");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core Features">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started with ASM AutoStockMaster and manage your business with
            <em> ease and efficiency</em>. From customer relationship management to
            comprehensive reports and analytics, ASM has got you covered.
          </Text>

          
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid Foundations">
        <Text color="muted" fontSize="lg">
          ASM AutoStockMaster is built on reliable and established technologies
          to ensure high performance and scalability for your business needs.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="B-Circles"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “ASM AutoStockMaster helped us streamline our operations and manage our inventory efficiently. It&apos;s a game-changer for our business.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start Managing Your Business Efficiently"
      >
        <Text color="muted" fontSize="lg">
          ASM AutoStockMaster provides all the essential tools you need to run your business smoothly. 
          Focus on what makes your business unique while we take care of the rest.
        </Text>
        <Wrap mt="8">
          {[
            "customer relationship management",
            "inventory management",
            "maintenance",
            "human resource management",
            "sales management",
            "purchase management",
            "reports",
            "analytics",
            "technical support",
            "storage management",
            "user accounts",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};


const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Facilitate your work & manage it professionally
          <Br /> with ASM.
        </Heading>
      }
      description={
        <>
          ASM provides a comprehensive suite of tools to manage your business
          effectively.
          <Br />
          Explore the features and see how ASM can benefit your organization.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Customer Relationship Management",
          icon: FiUserPlus,
          description:
            "Manage customer interactions, track sales, and enhance customer satisfaction.",
          variant: "inline",
        },
        {
          title: "Inventory Management",
          icon: FiBox,
          description:
            "Keep track of your inventory, manage stock levels, and streamline your supply chain.",
          variant: "inline",
        },
        {
          title: "Maintenance",
          icon: FiTool,
          description:
            "Schedule and track maintenance tasks to ensure everything runs smoothly.",
          variant: "inline",
        },
        {
          title: "Human Resource Management",
          icon: FiUsers,
          description:
            "Manage employee records, track attendance, and handle payroll efficiently.",
          variant: "inline",
        },
        {
          title: "Sales & Purchase Management",
          icon: FiShoppingCart,
          description:
            "Manage sales orders, purchase orders, and keep your sales process organized.",
          variant: "inline",
        },
        {
          title: "Reports & Analytics",
          icon: FiTrendingUp,
          description:
            "Generate detailed reports and gain insights with comprehensive analytics tools.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;
