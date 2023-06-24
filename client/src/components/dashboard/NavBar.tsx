import { Box, VStack, Text, Button } from "@chakra-ui/react";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillBagDashFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
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
        <Box className="logo__container">
          <Text
            fontSize={"1.2rem"}
            fontFamily={"'DM Serif Display', serif"}
            letterSpacing={"widest"}
            fontWeight={"medium"}
            color={"#bf7cdb"}
          >
            SUPERARE
          </Text>
        </Box>

        <Box className="dash__links" pt={"2rem"}>
          <VStack gap={"1rem"} className="dash__links--market" pl={"8px"}>
            <NavLink icon={RiDashboardFill} label="Dashboard" path="" />
            <NavLink icon={BsFillBagDashFill} label="Market" path="" />
            <NavLink icon={BsCartDashFill} label="Active Bids" path="" />
          </VStack>
          <Box pt={"2rem"}>
            <Text fontWeight={"medium"} fontSize={"1.2rem"} width={"100%"}>
              Profile
            </Text>
            <VStack
              gap={"1rem"}
              className="dash__links--act"
              pt={"1rem"}
              pl={"8px"}
            >
              <NavLink icon={FaUserAlt} label="My Profile" path="" />
              <NavLink icon={FaWallet} label="Wallet" path="" />
              <NavLink icon={AiFillHeart} label="Favorites" path="" />
              <NavLink icon={AiFillHeart} label="Favorites" path="" />
              <NavLink icon={AiFillHeart} label="Favorites" path="" />
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box pt={"2rem"} pb={"1rem"}>
        <Button
          top={"auto"}
          display={"flex"}
          gap={"5px"}
          alignItems={"center"}
          width={"100%"}
          borderRadius={"2rem"}
          p={"1rem"}
          bgColor={"#9100bd"}
          color={"white"}
          fontSize={"1.1rem"}
        >
          <FaSignOutAlt />
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
