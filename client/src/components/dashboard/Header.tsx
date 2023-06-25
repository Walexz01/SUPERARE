import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Hide,
  Text,
} from "@chakra-ui/react";
import image from "../../assets/Clone X 11.png";
import { BiSearch } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

const Header = () => (
  <Box py={"1rem"}>
    <HStack justifyContent={"space-between"} alignItems={"center"} gap={"2rem"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents={"none"}
          color={"gray.700"}
          fontSize={"1.2rem"}
        >
          <BiSearch />
        </InputLeftElement>
        <Input
          width={"500px"}
          size={"md"}
          placeholder="Search Item, Collection and Account.."
          bgColor={"white"}
          borderRadius={"2rem"}
          type="search"
        />
      </InputGroup>
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
          <Box className="nav_toggle" pl={"3rem"}>
            <GoThreeBars />
          </Box>
        </Hide>
      </HStack>
    </HStack>
  </Box>
);

export default Header;
