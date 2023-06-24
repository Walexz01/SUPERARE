import { useContext } from "react";
import { ContextProps, AuthContext } from "../context/authContext";

const Dashboard = () => {
  const { currentUser } = useContext<ContextProps>(AuthContext);

  return (
    <div>
      <h1>{currentUser?.fullname}</h1>
      Dashboard
    </div>
  );
};

export default Dashboard;
