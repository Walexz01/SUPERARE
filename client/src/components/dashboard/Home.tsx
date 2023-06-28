import { Box, Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import HometopCard from "./HometopCard";
import HotBidsheading from "./HotBidsheading";
import HotBidsCard from "./HotBidsCard";
import CreatorHeader from "./CreatorHeader";
import FollowCreator from "./FollowCreator";
import FeaturedCreatorCard from "./FeaturedCreatorCard";
import {
  featured__creator,
  headerCard,
  hot__bids,
  top_creators,
} from "../../components/dashboard/data/dash__home";
const Home = () => {
  return (
    <Grid
      templateColumns={{ xl: "2.5fr 1fr", lg: "1fr" }}
      px={"10px"}
      gap={6}
      py={"1rem"}
    >
      <GridItem w="100%">
        <HometopCard
          bgImage={headerCard.bgImage}
          heading={headerCard.heading}
        />
        <Box fontFamily={"DM Sans"} className="hot_bids" pt={"3rem"}>
          <HotBidsheading />
          <SimpleGrid
            justifyItems={"center"}
            columns={{ lg: 3, md: 2, sm: 2 }}
            spacing={5}
            className="bids"
          >
            {hot__bids.map(
              ({
                heading,
                image,
                likes,
                price,
                profileImage,
                username,
                id,
              }) => (
                <HotBidsCard
                  key={id}
                  image={image}
                  heading={heading}
                  likes={likes}
                  price={price}
                  profileImage={profileImage}
                  username={username}
                />
              )
            )}
          </SimpleGrid>
        </Box>
      </GridItem>
      <GridItem w="100%" className="dash_home--right">
        <Box className="Top creator">
          <CreatorHeader title="Top Creators" linkLabel="Sell All" path="/" />
          <Flex
            flexDir={"column"}
            gap="5"
            bgColor={"white"}
            borderRadius={"20px"}
            py={"15px"}
            px={"10px"}
          >
            {top_creators.map(({ fullname, userImage, username, id }) => (
              <FollowCreator
                fullname={fullname}
                userImage={userImage}
                username={username}
                key={id}
              />
            ))}
          </Flex>
        </Box>
        <Box className="featured__creators" py={"1.5rem"}>
          <CreatorHeader
            title="Featured Creator"
            linkLabel="Sell All"
            path="/"
          />
          <Flex
            className="featured__creators"
            flexDir={{ xl: "column", lg: "row" }}
            flexWrap={"wrap"}
            justifyContent={"center"}
            gap={"10px"}
          >
            {featured__creator.map(
              ({
                profileImage,
                profileName,
                username,
                nftImage,
                price,
                id,
              }) => (
                <FeaturedCreatorCard
                  key={id}
                  profileImage={profileImage}
                  nftImage={nftImage}
                  price={price}
                  profileName={profileName}
                  username={username}
                />
              )
            )}
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
