import { useEffect, useState } from "react";

import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";

import Users from "./Users";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // fetch users info
  useEffect(() => {
    async function getUsersInfo() {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=6&page=${page}`
        );

        setUsers((prev) => [...prev, ...response.data.results]);
        setLoading(false);
      } catch (error) {
        throw error;
      }
    }
    getUsersInfo();
  }, [page]);

  // handle scroll event
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Users users={users} />
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScaleLoader />
        </div>
      )}
    </>
  );
};

export default Home;
