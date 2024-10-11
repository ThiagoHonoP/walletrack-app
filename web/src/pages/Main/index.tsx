import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userLoged } from "../../services/user";
const Main = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [user, setUser] = useState({});

  async function getUserLogged() {
    try {
      const user = await userLoged();
      setUser(user.name);

      return user;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }

  function validateToken() {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/signin");
    }
  }

  useEffect(() => {
    validateToken();
    getUserLogged();
  }, []);

  return <h1>{`Welcome! ${user}`}</h1>;
};

export default Main;
