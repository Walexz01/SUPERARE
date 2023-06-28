import {
  CardBody,
  Flex,
  Avatar,
  Heading,
  CardFooter,
  Box,
  Card,
  Image,
  Text,
} from "@chakra-ui/react";
import { featured__creator__types } from "./data/dash__home";
const FeaturedCreatorCard = ({
  profileImage,
  nftImage,
  price,
  profileName,
  username,
}: featured__creator__types) => {
  return (
    <Card maxW="sm" className="bid" borderRadius={"1rem"}>
      <CardBody p={"10px"}>
        <Flex gap={"2"} alignItems={"center"} py={"9px"}>
          <Avatar src={profileImage === null ? "" : profileImage} size={"md"} />
          <Box>
            <Heading size={"xs"}>{profileName} </Heading>
            <Text>@{username}</Text>
          </Box>
        </Flex>

        <Image
          src={nftImage}
          width={"100%"}
          h={"18rem"}
          borderRadius={"1rem"}
        />
      </CardBody>
      <CardFooter
        pt={"0"}
        display={"flex"}
        flexDir={"column"}
        gap={1}
        justifyContent={"space-between"}
      >
        <Heading fontSize={"1.2rem"}>Curent Bid</Heading>
        <Text fontSize={"1.2rem"} color={"gray.600"}>
          {price}ETH
        </Text>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCreatorCard;
