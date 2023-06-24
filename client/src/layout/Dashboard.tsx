import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/dashboard/NavBar";

// import { useContext } from "react";
// import { ContextProps, AuthContext } from "../context/authContext";

const Dashboard = () => {
  // const { currentUser } = useContext<ContextProps>(AuthContext);

  return (
    <Grid
      bgColor={"#f9f6ff"}
      gridTemplateAreas={`"nav header header"
                          "nav main main"`}
      gridTemplateColumns={"250px 1fr 1fr"}
      gridTemplateRows={"50px 1fr"}
      gap={"1.2rem"}
    >
      <GridItem area={"header"} bgColor={"red"}>
        header
      </GridItem>
      <GridItem
        area={"nav"}
        bgColor={"#ffffff"}
        position={"fixed"}
        top={"0"}
        h={"100vh"}
        width={"250px"}
      >
        <NavBar />
      </GridItem>
      <GridItem area={"main"} bgColor={"yellow"} h={"400vh"}>
        main
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
