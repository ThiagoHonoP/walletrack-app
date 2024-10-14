import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { userLoged } from "../../services/user";
import { Header } from "../../components/Header";
import { getTransactions } from "../../services/transactions";
import { ArrowRight } from "../../assets/ArrowRight";
import { PrimaryButton } from "../../components/Button";

const Main = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  async function getAllTransactions() {
    try {
      const transactions = await getTransactions();
      setTransactions(transactions);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
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

  function logout() {
    try {
      Cookies.remove("token");
      navigate("/signin");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
  useEffect(() => {
    validateToken();
    getUserLogged();
    getAllTransactions();
  }, []);

  return (
    <div className="h-screen bg-[#F5F6FA]">
      <Header>
        <h1>Logo</h1>

        <div onClick={logout}>
          <h1>{`Welcome! ${user}`}</h1>, Logout
        </div>
      </Header>
      <div className="w-full max-w-[960px] bg-white border-2 border-black mx-auto mt-6 p-4">
        <h1> Saldo </h1>
        <div className="flex justify-between gap-x-5">
          <PrimaryButton text="Entradas" type="button" />
          <PrimaryButton text="Saidas" type="button" />
        </div>
        <div>
          {transactions.length ? (
            <ul>
              {transactions.map((transaction: any) => (
                <li key={transaction._id}>
                  <div className="flex justify-between items-center border-2 border-black mt-4">
                    <div className="flex items-center gap-4">
                      <span> Icon </span>
                      <div>
                        <h1>{transaction.description}</h1>
                        <p> {transaction.value} </p>
                        <p> {transaction.created_at} </p>
                      </div>
                    </div>
                    <div>
                      <ArrowRight />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p> No transactions </p>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
