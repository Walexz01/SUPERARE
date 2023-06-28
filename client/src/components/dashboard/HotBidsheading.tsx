import { Flex, Box, Text, Hide } from "@chakra-ui/react";
import Auct__link from "./Auct__link";
import { auct__link } from "./data/dash__home";

const HotBidsheading = () => {
  return (
    <Flex pb={"2rem"} justifyContent={"space-between"} alignItems={"center"}>
      <Text fontSize={"24px"} fontWeight={"bold"}>
        Hot Bids
      </Text>
      <Box
        display={"flex"}
        gap={"24px"}
        fontSize={"1.2rem"}
        fontWeight={"medium"}
        className="auct__types"
        color={"black"}
      >
        <Hide below={"md"}>
          {auct__link.map(({ label, path }, index) => (
            <Auct__link key={index} label={label} path={path} />
          ))}
        </Hide>
      </Box>
    </Flex>
  );
};

export default HotBidsheading;
