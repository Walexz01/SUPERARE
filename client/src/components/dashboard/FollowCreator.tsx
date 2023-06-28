import { Flex, Avatar, Heading, Button, Box, Text } from "@chakra-ui/react";
import { top_creators__type } from "./data/dash__home";

const FollowCreator = ({
  userImage,
  fullname,
  username,
}: top_creators__type) => {
  return (
    <Flex className="creator" flex={1} justifyContent={"space-between"}>
      <Flex alignItems={"center"} gap={"5px"}>
        <Avatar src={userImage === null ? "" : userImage} size={"md"} />
        <Box>
          <Heading size={"xs"}>{fullname}</Heading>
          <Text>@{username}</Text>
        </Box>
      </Flex>
      <Button
        borderRadius={"1rem"}
        py={"10px"}
        fontSize={"1rem"}
        px={"20px"}
        colorScheme="teal"
        variant="outline"
      >
        Follow
      </Button>
    </Flex>
  );
};

export default FollowCreator;
