import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Hide,
} from "@chakra-ui/react";
import image from "../../assets/Clone X 11.png";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import Logo from "./Logo";

const Header = () => (
  <Box>
    <HStack
      py={"1rem"}
      px={{ md: "1rem", lg: "0", sm: "10px" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={{ lg: "2rem", md: "10px", sm: "5px" }}
    >
      <Hide above="lg">
        <Logo />
      </Hide>
      <Hide below="md">
        <InputGroup width={"auto"} justifySelf={"center"}>
          <InputLeftElement
            pointerEvents={"none"}
            color={"gray.700"}
            fontSize={"1.2rem"}
          >
            <BiSearch />
          </InputLeftElement>
          <Input
            width={{ lg: "500px", md: "300px" }}
            size={"md"}
            placeholder="Search Item, Collection and Account.."
            bgColor={"white"}
            borderRadius={"2rem"}
            type="search"
          />
        </InputGroup>
      </Hide>

      <HStack alignItems={"center"} gap={"1.2rem"}>
        <Box
          bgColor={"white"}
          fontSize={"1.5rem"}
          p={"10px"}
          borderRadius={"50%"}
        >
          <MdNotifications />
        </Box>
        <Avatar bgColor={"black"} src={image}></Avatar>
        <Hide above="lg">
          <Box
            fontSize={"2rem"}
            className="nav_toggle"
            pr={"1rem"}
            pl={".5rem"}
          >
            <GoThreeBars />
          </Box>
        </Hide>
      </HStack>
    </HStack>
  </Box>
);

export default Header;
