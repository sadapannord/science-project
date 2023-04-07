function SignUpForm() {
    return (
        <div>
            <form>
                <label>
                    First Name
                    <input type = 'text' name = 'First Name'/>
                </label>
                <label>
                    Last Name
                    <input type = 'text' name = 'Last Name'/>
                </label>
                <label>
                    Username
                    <input type = 'text' name = 'Username'/>
                </label>
                <label>
                    Email
                    <input type = 'text' name = 'Email'/>
                </label>
                <label>
                    Password
                    <input type = 'text' name = 'Password'/>
                </label>
                <label>
                    Confirm Password
                    <input type = 'text' name = 'Confirm Password'/>
                </label>
                <input type = 'submit' value = 'Login/Create Account'/>
            </form>
        </div>
    );
}

export default SignUpForm;