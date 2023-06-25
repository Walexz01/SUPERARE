import { Grid, GridItem, Hide } from "@chakra-ui/react";
import NavBar from "../components/dashboard/NavBar";
import Header from "../components/dashboard/Header";

// import { useContext } from "react";
// import { ContextProps, AuthContext } from "../context/authContext";

const Dashboard = () => {
  /* const { currentUser } = useContext<ContextProps>(AuthContext);*/
  return (
    <Grid
      bgColor={"#F0EAFE"}
      gridTemplateAreas={{
        lg: `"nav header header"
              "nav main main"`,
        md: `"header header"
              "main main"`,
      }}
      gridTemplateColumns={{
        xl: "220px 1fr 1fr",
        lg: "100px 1fr 1fr",
      }}
      gap={{ xl: "1rem", lg: ".6rem" }}
      pe={{ xl: "1rem", lg: ".6rem" }}
    >
      <GridItem area={"header"}>
        <Header />
      </GridItem>
      <Hide below="lg">
        <GridItem
          area={"nav"}
          bgColor={"#ffffff"}
          position={"fixed"}
          h={"100vh"}
          width={{
            xl: "220px",
            lg: "100px",
          }}
        >
          <NavBar />
        </GridItem>
      </Hide>

      <GridItem area={"main"} bgColor={"yellow"} h={"400vh"}>
        main
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
