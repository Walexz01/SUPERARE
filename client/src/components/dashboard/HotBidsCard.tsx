import {
  CardBody,
  Stack,
  Flex,
  Heading,
  Avatar,
  Card,
  CardFooter,
  Image,
  Text,
} from "@chakra-ui/react";
import { hotBidsType } from "./data/dash__home";

const HotBidsCard = ({
  image,
  heading,
  likes,
  price,
  profileImage,
  username,
}: hotBidsType) => {
  return (
    <Card maxW="sm" className="bid">
      <CardBody p={"12px"}>
        <Image src={image} width={"100%"} />
        <Stack mt="6" spacing="3">
          <Flex justifyContent={"space-between"}>
            <Heading size="md">{heading}</Heading>
            <Text>{likes} Likes</Text>
          </Flex>
          <Flex gap={"2"} alignItems={"center"} pt={"5px"}>
            <Avatar
              src={profileImage === null ? "" : profileImage}
              size={"sm"}
            />
            <Heading size={"sm"}>@{username}</Heading>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter pt={"0"} display={"flex"} justifyContent={"space-between"}>
        <Text fontSize={"1.2rem"}>Curent Bid</Text>
        <Text>{price}ETH</Text>
      </CardFooter>
    </Card>
  );
};

export default HotBidsCard;
