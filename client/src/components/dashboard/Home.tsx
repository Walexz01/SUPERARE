import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  Grid,
  GridItem,
  Heading,
  CardBody,
  Stack,
  Image,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import background from "../../assets/image 19.png";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Grid templateColumns="2.5fr 1fr" gap={6} py={"1rem"}>
      <GridItem w="100%">
        <Card
          p={"4rem"}
          overflow={"hidden"}
          borderRadius={"1rem"}
          className="discover"
          backgroundImage={background}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          bgPos={"center"}
        >
          <CardHeader>
            <Heading
              size={"md"}
              fontSize={"3.2rem"}
              color={"white"}
              fontFamily={"'Ubuntu', sans-serif"}
            >
              Discover, Create and Sell Your Own NFTs
            </Heading>
          </CardHeader>
          <CardFooter>
            <ButtonGroup variant="outline" spacing="6">
              <Button
                py={"20px"}
                px={"30px"}
                borderColor={"white"}
                bgColor={"white"}
                borderRadius={"2rem"}
              >
                Discover
              </Button>
              <Button py={"20px"} px={"30px"} borderRadius={"2rem"}>
                Create
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Box fontFamily={"DM Sans"} className="hot_bids" pt={"3rem"}>
          <Flex
            pb={"2rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
              <NavLink className="auct__link" to="">
                Art
              </NavLink>
              <NavLink to="/">Music</NavLink>
              <NavLink to="/">Collectibles</NavLink>
              <NavLink to="/">Utility</NavLink>
            </Box>
          </Flex>
          <SimpleGrid columns={3} spacing={5} className="bids">
            <Card maxW="sm" className="bid">
              <CardBody p={"12px"}>
                <Image src={background} width={"100%"} />
                <Stack mt="6" spacing="3">
                  <Flex justifyContent={"space-between"}>
                    <Heading size="md">Ape In Love</Heading>
                    <Text>300 Likes</Text>
                  </Flex>
                  <Flex gap={"2"} alignItems={"center"} pt={"5px"}>
                    <Avatar size={"sm"} />
                    <Heading size={"sm"}>@walexz19</Heading>
                  </Flex>
                </Stack>
              </CardBody>
              <CardFooter
                pt={"0"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Text fontSize={"1.2rem"}>Curent Bid</Text>
                <Text>10ETH</Text>
              </CardFooter>
            </Card>
            <Card maxW="sm" className="bid">
              <CardBody p={"12px"}>
                <Image src={background} width={"100%"} />
                <Stack mt="6" spacing="3">
                  <Flex justifyContent={"space-between"}>
                    <Heading size="md">Ape In Love</Heading>
                    <Text>300 Likes</Text>
                  </Flex>
                  <Flex gap={"2"} alignItems={"center"} pt={"5px"}>
                    <Avatar size={"sm"} />
                    <Heading size={"sm"}>@walexz19</Heading>
                  </Flex>
                </Stack>
              </CardBody>
              <CardFooter
                pt={"0"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Text fontSize={"1.2rem"}>Curent Bid</Text>
                <Text>10ETH</Text>
              </CardFooter>
            </Card>
            <Card maxW="sm" className="bid">
              <CardBody p={"12px"}>
                <Image src={background} width={"100%"} />
                <Stack mt="6" spacing="3">
                  <Flex justifyContent={"space-between"}>
                    <Heading size="md">Ape In Love</Heading>
                    <Text>300 Likes</Text>
                  </Flex>
                  <Flex gap={"2"} alignItems={"center"} pt={"5px"}>
                    <Avatar size={"sm"} />
                    <Heading size={"sm"}>@walexz19</Heading>
                  </Flex>
                </Stack>
              </CardBody>
              <CardFooter
                pt={"0"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Text fontSize={"1.2rem"}>Curent Bid</Text>
                <Text>10ETH</Text>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </GridItem>
      <GridItem w="100%" className="Top creator">
        <Flex justifyContent={"space-between"}>
          <Heading size={"md"} pb={"20px"}>
            Top Creator
          </Heading>
          <Link to={"/"}>Sell All</Link>
        </Flex>
        <Flex
          flexDir={"column"}
          gap="5"
          bgColor={"white"}
          borderRadius={"20px"}
          py={"15px"}
          px={"10px"}
        >
          <Flex className="creator" flex={1} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={"5px"}>
              <Avatar size={"md"} />
              <Box>
                <Heading size={"xs"}>Micheal Johnson</Heading>
                <Text>@micheal</Text>
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
              Button
            </Button>
          </Flex>
          <Flex className="creator" flex={1} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={"5px"}>
              <Avatar size={"md"} />
              <Box>
                <Heading size={"xs"}>Micheal Johnson</Heading>
                <Text>@micheal</Text>
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
              Button
            </Button>
          </Flex>
          <Flex className="creator" flex={1} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={"5px"}>
              <Avatar size={"md"} />
              <Box>
                <Heading size={"xs"}>Micheal Johnson</Heading>
                <Text>@micheal</Text>
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
              Button
            </Button>
          </Flex>
          <Flex className="creator" flex={1} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={"5px"}>
              <Avatar size={"md"} />
              <Box>
                <Heading size={"xs"}>Micheal Johnson</Heading>
                <Text>@micheal</Text>
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
              Button
            </Button>
          </Flex>
          <Flex className="creator" flex={1} justifyContent={"space-between"}>
            <Flex alignItems={"center"} gap={"5px"}>
              <Avatar size={"md"} />
              <Box>
                <Heading size={"xs"}>Micheal Johnson</Heading>
                <Text>@micheal</Text>
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
              Button
            </Button>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Home;
