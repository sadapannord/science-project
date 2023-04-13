import Footer from "../components/Footer";
import LoginHeader from "../components/LoginHeader";
import AboutSearchFunction from "../components/AboutSearchFunction";
import LoginCreateButton from "../components/LoginCreateButton";
import SignUp from "../pages/Signup";

function Login() {
  return (
    <div>
      <LoginHeader />
      <AboutSearchFunction />
      <LoginCreateButton />
      <SignUp />
      <Footer />
    </div>
  );
}

export default Login;
