import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const shadowColor = useColorModeValue("rgba(0, 0, 0, 0.3)", "rgba(255, 255, 255, 0.3)");

  return (
    <Flex align="center" justify="center" position="fixed" mt={4} bg="white">
      <Box position="relative" display="inline-block">
        <Text
          display="inline-block"
          fontSize="4xl"
          fontWeight="bold"
          color={textColor}
          textShadow={`2px 2px ${shadowColor}`}
          position="relative"
          // top={-2}
          // left={-2}
          // mr="-0.5rem"
        >
          CPMS
        </Text>
      </Box>
    </Flex>
  );
};

export default Logo;
