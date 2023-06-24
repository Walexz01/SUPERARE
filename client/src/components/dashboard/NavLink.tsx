import { Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  icon: IconType;
  label: string;
  path: string;
}
const NavLink = ({ icon: Icon, label, path }: Props) => {
  return (
    <Flex
      bgClip={"text"}
      bgColor={"#1b022a"}
      alignItems={"center"}
      gap={"8px"}
      className="dash_link"
      width={"100%"}
      fontSize={"1.2rem"}
    >
      <Icon color="#dabcff" />
      <Link to={path}>{label}</Link>
    </Flex>
  );
};

export default NavLink;
