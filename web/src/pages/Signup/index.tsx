import { Link } from "react-router-dom";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/Button";
import { Input } from "../../components/Input";

const Signup = () => {
  return (
    <main className="bg-teal-300 flex justify-center items-center h-screen">
      <Box>
        <div className="flex justify-between">
          <h1> Signup </h1>
          <Link to="/signin"> Voltar </Link>
        </div>
        <form>
          <Input type="text" placeholder="Full name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <Input type="password" placeholder="Confirm password" />
          <PrimaryButton text="Signup" type="submit" />
        </form>
      </Box>
    </main>
  );
};

export default Signup;
