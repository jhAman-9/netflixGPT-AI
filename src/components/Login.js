import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateFormData";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO, userAvater } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true); // sign in sign up form change
  const [errorMess, setErrorMess] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  // Validating the form data
  const handleButtonClick = () => {
    // extracting input form data using useref hook
    const mess = checkValidData(email.current.value, password.current.value);
    setErrorMess(mess);

    // if isSignUp and form data is validated then sign up
    if (mess === null && !isSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // user resgister then update name and photo url
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvater,
          })
            .then(() => {
              // updated User
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMess(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMess(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMess(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_LOGO}
          alt="BackgroundImg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-800"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800"
          type="text"
          placeholder="Email address"
        />

        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600">{errorMess}</p>

        <button
          className="py-4 my-4 bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={handleSignInForm}>
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Have a Account ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
