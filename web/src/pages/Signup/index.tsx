import { Link } from "react-router-dom";
import { Box } from "../../components/Box";
import { PrimaryButton } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../schemas/signup";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  function handleSubmitForm(data: any) {
    console.log(data);
  }

  return (
    <main className="bg-black flex justify-center items-center h-screen">
      <Box>
        <div className="flex justify-between">
          <h1> Signup </h1>
          <p> img </p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            type="name"
            name="name"
            placeholder="Full name"
            register={register("name")}
          />
          {errors.name && <span>{errors.name?.message}</span>}
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
          />
          {errors.email && <span>{errors.email?.message}</span>}
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
          />
          {errors.password && <span>{errors.password?.message}</span>}
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword?.message}</span>
          )}
          <PrimaryButton text="Signup" type="submit" />
        </form>
        <Link to="/signin"> Voltar </Link>
      </Box>
    </main>
  );
};

export default Signup;
