import { Link, useNavigate } from "react-router-dom";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/Signin";
import { signin } from "../../services/user";
import Cookies from "js-cookie";
import { useState } from "react";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmitForm(data: any) {
    try {
      setLoading(true);
      const token = await signin(data);

      Cookies.set("token", token, { expires: 1 });

      setLoading(false);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setLoading(false);
        setError(err.message);
        console.log(err.message);
      }
    }
  }

  return (
    <main className="bg-black flex justify-center items-center h-screen">
      <Box>
        <div className="flex justify-between">
          <h1> Login </h1>
          <p> img </p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
          />
          {errors.email && <span>{`${errors.email?.message}`}</span>}
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
          />
          {errors.password && <span>{`${errors.password?.message}`}</span>}
          {error && <span>{error}</span>}
          <PrimaryButton
            text={loading ? "Loading..." : "Login"}
            type="submit"
          />
        </form>
        <Link to="/signup"> Don't have account ? Signup </Link>
      </Box>
    </main>
  );
};

export default Signin;
