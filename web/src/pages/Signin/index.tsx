import { Link } from "react-router-dom";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/Signin";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  function handleSubmitForm(data: any) {
    console.log(data);
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
          {errors.email && <span>{errors.root?.message}</span>}
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
          />
          <PrimaryButton text="Login" type="submit" />
        </form>
        <Link to="/signup"> Don't have account ? Signup </Link>
      </Box>
    </main>
  );
};

export default Signin;
