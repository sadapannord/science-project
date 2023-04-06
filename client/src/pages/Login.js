import Footer from '../components/Footer';
import LoginHeader from '../components/LoginHeader';
import AboutSearchFunction from '../components/AboutSearchFunction';
import LoginCreateButton from '../components/LoginCreateButton';
import SignUpForm from '../components/SignUpForm';


function Login() {
    return (
        <div>
        <LoginHeader />
        <AboutSearchFunction />
        <LoginCreateButton />
        <SignUpForm />
        <Footer />
        </div>
    );
}

export default Login;