import { Link } from "react-router-dom";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/Button";
import { Input } from "../../components/Input";

const Signin = () => {
  return (
    <main className="bg-teal-300 flex justify-center items-center h-screen">
      <Box>
        <div className="flex justify-between">
          <h1> Login </h1>
          <p> img </p>
        </div>
        <form>
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <PrimaryButton text="Login" type="submit" />
        </form>
        <Link to="/signup"> Don't have account ? Signup </Link>
      </Box>
    </main>
  );
};

export default Signin;
