import {
  ChakraProvider,
  Box,
  SimpleGrid,
  Flex,
  Grid,
  VStack,
  StackDivider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import ThreeTierPricing from "@components/Pricing";
import theme from "./theme";
import Fonts from "./Fonts";
import { useState, useRef, useEffect } from "react";
import useObserver from "./hooks/useObserver";

function App() {
  const [currentVisibleIndex, setcurrentVisibleIndex] = useState(0);
  const handleVisible = (index) => {
    return () => {
      setcurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));
  const featuresRef = useObserver(handleVisible(1));
  const statisticsRef = useObserver(handleVisible(2));
  const pricingRef = useObserver(handleVisible(3));
  // const heroTwoRef = useObserver(handleVisible(4));
  const handleClickNavLink = (index) => {
    const refs = [heroRef, featuresRef, statisticsRef];
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      blokc: "center",
    });
  };
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar
        currentVisibleIndex={currentVisibleIndex}
        onClickNavLink={handleClickNavLink}
      />
      <Hero ref={heroRef} />
      <Features ref={featuresRef} />
      <Statistics ref={statisticsRef} />
      <ThreeTierPricing ref={pricingRef} />
      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
