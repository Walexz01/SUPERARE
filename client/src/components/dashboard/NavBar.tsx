import { Box, VStack, Text, Button, Show } from "@chakra-ui/react";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillBagDashFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import NavLink from "./NavLink";

const NavBar = () => (
  <Box
    w={"100%"}
    height={"100%"}
    px={"1.4rem"}
    py={"1rem"}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-between"}
  >
    <Box>
      <Show above="xl">
        <Box className="logo__container">
          <Text
            fontSize={{ xl: "1.2rem", lg: "1.1rem" }}
            fontFamily={"'DM Serif Display', serif"}
            letterSpacing={"widest"}
            fontWeight={"medium"}
            color={"#bf7cdb"}
          >
            SUPERARE
          </Text>
        </Box>
      </Show>

      <Box className="dash__links" pt={{ xl: "2rem", lg: "3rem" }}>
        <VStack
          gap={{ xl: "1rem", lg: "2rem" }}
          className="dash__links--market"
          pl={"8px"}
        >
          <NavLink icon={RiDashboardFill} label="Dashboard" path="" />
          <NavLink icon={BsFillBagDashFill} label="Market" path="market" />
          <NavLink icon={BsCartDashFill} label="Active Bids" path="bid" />
        </VStack>
        <Box pt={"2rem"}>
          <Show above="xl">
            <Text
              fontWeight={"medium"}
              fontSize={"1rem"}
              fontFamily={"'Ubuntu', sans-serif"}
            >
              PROFILE
            </Text>
          </Show>
          <VStack
            gap={{ xl: "1rem", lg: "2rem" }}
            className="dash__links--act"
            pt={{ xl: "1rem", lg: "2rem" }}
            pl={"8px"}
          >
            <NavLink icon={FaUserAlt} label="My Profile" path="profile" />
            <NavLink icon={FaWallet} label="Wallet" path="wallet" />
            <NavLink icon={AiFillHeart} label="Favorites" path="favotite" />
            <NavLink icon={AiFillHeart} label="History" path="history" />
            <NavLink icon={AiFillHeart} label="Settings" path="setings" />
          </VStack>
        </Box>
      </Box>
    </Box>
    <Box pt={"2rem"} pb={"1rem"}>
      <Button
        size={"lg"}
        leftIcon={<FaSignOutAlt />}
        colorScheme="purple"
        bgGradient="linear(to-l, #5429FF, #BBAAFF)"
        variant="solid"
        width={"100%"}
        borderRadius={"2rem"}
        p={"1rem"}
        color={"white"}
        fontSize={"1.1rem"}
      >
        <Show above="xl">Logout</Show>
      </Button>
    </Box>
  </Box>
);

export default NavBar;
