import { Link, Show } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink as ReactLink } from "react-router-dom";
import "../../pages/Dashboard/dash.css";
interface Props {
  icon: IconType;
  label: string;
  path: string;
}
const NavLink = ({ icon: Icon, label, path }: Props) => (
  <Link
    alignItems={"center"}
    gap={"8px"}
    className="dash_link"
    width={"100%"}
    color={"#7A797D"}
    fontSize={{ xl: "1.1rem", lg: "1.3rem" }}
    display={"flex"}
    as={ReactLink}
    to={path}
  >
    <Icon />
    <Show above="xl">{label}</Show>
  </Link>
);

export default NavLink;
