// // import { set } from "mongoose";
// import React, { useState } from "react";

// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";
// import Auth from "../utils/auth";

// function SignUpForm(props) {
//   const [formState, setFormState] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     // event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div>
//       <form>
//         {/* <label>
//           First Name
//           <input type="text" name="First Name" />
//         </label>
//         <label>
//           Last Name
//           <input type="text" name="Last Name" />
//         </label> */}
//         <label>
//           Username
//           <input
//             type="text"
//             name="Username"
//             onChange={handleChange}
//             value={formState.username}
//             placeholder="Username"
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="text"
//             name="Email"
//             onChange={handleChange}
//             value={formState.email}
//             placeholder="Email"
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="text"
//             name="Password"
//             onChange={handleChange}
//             value={formState.password}
//             placeholder="Password"
//           />
//         </label>
//         {/* <label>
//           Confirm Password
//           <input type="text" name="Confirm Password" />
//         </label> */}
//         <input
//           type="submit"
//           value="Create Account"
//           onClink={handleFormSubmit}
//         />
//       </form>
//     </div>
//   );
// }

// export default SignUpForm;
