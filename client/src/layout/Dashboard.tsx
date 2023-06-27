import { Grid, GridItem, Hide } from "@chakra-ui/react";
import NavBar from "../components/dashboard/NavBar";
import Header from "../components/dashboard/Header";
import Home from "../components/dashboard/Home";

// import { useContext } from "react";
// import { ContextProps, AuthContext } from "../context/authContext";

const Dashboard = () => {
  /* const { currentUser } = useContext<ContextProps>(AuthContext);*/
  return (
    <Grid
      boxSizing="border-box"
      bgColor={"#F0EAFE"}
      gridTemplateAreas={{
        lg: `"nav header header"
              "nav main main"`,
      }}
      display={{
        md: "block",
        lg: "grid",
      }}
      gridTemplateColumns={{
        xl: "220px 1fr 1fr",
        lg: "100px 1fr 1fr",
        md: "1fr",
      }}
      gap={{ xl: ".7rem", lg: ".6rem" }}
      pr={{ xl: "1rem", lg: ".6rem", md: "0px" }}
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

      <GridItem area={"main"}>
        <Home />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
