import { useEffect, useState } from "react";
import Users from "./Users";

const Home = () => {
  const [users, setUSers] = useState([]);

  const getUsersData = async () => {
    const res = await fetch(`https://randomuser.me/api/?results=10`);
    const data = await res.json();

    setUSers(data.results);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return <Users users={users} />;
};

export default Home;
