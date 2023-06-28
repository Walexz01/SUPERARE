import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  path: string;
  linkLabel: string;
}
const CreatorHeader = ({ title, path, linkLabel }: Props) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Heading size={"md"} pb={"20px"}>
        {title}
      </Heading>
      <Link to={path}>{linkLabel}</Link>
    </Flex>
  );
};

export default CreatorHeader;
