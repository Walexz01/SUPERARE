import {
  CardHeader,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  Card,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
interface Props {
  bgImage: string;
  heading: string;
}

const HometopCard = ({ bgImage, heading }: Props) => {
  return (
    <Card
      p={"4rem"}
      overflow={"hidden"}
      borderRadius={"1rem"}
      className="discover"
      backgroundImage={bgImage}
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
          {heading}
        </Heading>
      </CardHeader>
      <CardFooter>
        <ButtonGroup variant="outline" spacing="6">
          <Button
            as={Link}
            to={"/discover"}
            py={"20px"}
            px={"30px"}
            borderColor={"white"}
            bgColor={"white"}
            borderRadius={"2rem"}
          >
            Discover
          </Button>
          <Button
            as={Link}
            to={"/create"}
            py={"20px"}
            px={"30px"}
            borderRadius={"2rem"}
          >
            Create
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default HometopCard;
