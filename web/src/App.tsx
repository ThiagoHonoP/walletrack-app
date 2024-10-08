import { Box } from "./components/Box";
import { PrimaryButton } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Box>
        <div className="flex justify-between">
          <h1> Signup </h1>
          <p> img </p>
        </div>
        <form>
          <Input type="text" placeholder="Full name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
          <Input type="password" placeholder="Confirm password" />
          <PrimaryButton text="Login" type="submit" />
        </form>
        <p className="text-center"> Don't have account ? Signup </p>
      </Box>
    </main>
  );
}

export default App;
