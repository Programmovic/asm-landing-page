import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ButtonLink, ButtonLinkProps } from "components/button-link/button-link";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Section, SectionProps, SectionTitle } from "components/section";
import { FiCheck } from "react-icons/fi";

const API_KEY = "74d40317fe94445ba66e23366ae1d063";
const BASE_CURRENCY = "AED";

const countryToCurrency = {
  US: "USD",
  AE: "AED",
  EG: "EGP",
  GB: "GBP",
  // Add more country-code to currency mappings here
};

// Function to convert prices
const convertPrice = (priceInAED: any, exchangeRate: any) => {
  const convertedPrice = priceInAED * exchangeRate;
  return (Math.round(convertedPrice / 100) * 100).toFixed(2);
};

export interface PricingPlan {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  price: number; // Changed to number for conversion
  features: Array<PricingFeatureProps | null>;
  action: ButtonLinkProps & { label?: string };
  isRecommended?: boolean;
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode;
  plans: Array<PricingPlan>;
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props;
  const [exchangeRate, setExchangeRate] = useState(1);
  const [currency, setCurrency] = useState(BASE_CURRENCY);

  useEffect(() => {
    const fetchUserCurrency = async () => {
      try {
        // Fetch the user's location
        const locationResponse = await fetch("https://ipapi.co/json/");
        const locationData = await locationResponse.json();
        const userCountryCode = locationData.country_code;

        // Determine currency from country code
        const userCurrency = countryToCurrency[userCountryCode] || BASE_CURRENCY;
        setCurrency(userCurrency);

        // Fetch exchange rates
        const response = await fetch(
          `https://api.currencyfreaks.com/latest?apikey=${API_KEY}`
        );
        const data = await response.json();

        const rate = data.rates[userCurrency];
        if (rate) {
          setExchangeRate(parseFloat(rate));
        } else {
          console.warn(`Exchange rate for ${userCurrency} not found.`);
        }
      } catch (error) {
        console.error("Error fetching user currency or exchange rate:", error);
      }
    };

    fetchUserCurrency();
  }, []);

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description}></SectionTitle>

        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {plans?.map((plan) => (
            <PricingBox
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={`${convertPrice(+plan.price, exchangeRate)} ${currency}`}
              sx={
                plan.isRecommended
                  ? {
                      borderColor: "primary.500",
                      _dark: {
                        borderColor: "primary.500",
                        bg: "blackAlpha.300",
                      },
                    }
                  : {}
              }
            >
              <PricingFeatures>
                {plan.features.map((feature, i) =>
                  feature ? (
                    <PricingFeature key={i} {...feature} />
                  ) : (
                    <br key={i} />
                  )
                )}
              </PricingFeatures>
              <ButtonLink colorScheme="primary" {...plan.action}>
                {plan.action.label || "Sign Up"}
              </ButtonLink>
            </PricingBox>
          ))}
        </SimpleGrid>

        {children}
      </Box>
    </Section>
  );
};

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  );
};

export interface PricingFeatureProps {
  title: React.ReactNode;
  iconColor?: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = "primary.500" } = props;
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  );
};

export interface PricingBoxProps extends Omit<StackProps, "title"> {
  title: React.ReactNode;
  description: React.ReactNode;
  price: React.ReactNode;
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props;
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.400"
      _dark={{
        bg: "blackAlpha.300",
        borderColor: "gray.800",
      }}
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      <Box color="muted">{description}</Box>
      <Box fontSize="2xl" fontWeight="bold" py="4">
        {price}
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  );
};
