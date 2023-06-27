import { Box, Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box className="logo__container">
      <Text
        fontSize={{ xl: "1.2rem", lg: "1.1rem", sm: "1.3rem" }}
        fontFamily={"'DM Serif Display', serif"}
        letterSpacing={"widest"}
        fontWeight={"medium"}
        color={"#bf7cdb"}
      >
        SUPERARE
      </Text>
    </Box>
  );
};

export default Logo;
