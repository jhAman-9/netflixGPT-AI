import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gtpSearchSlice";
import languageChoice from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const {showGptSearch} = useSelector((store) => store.gptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  // Store User Detail in Redux Store to display sign in user Info
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // When User Sign in or Sign up
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // if sign in or sign up them navigate to browse route
        navigate("/browse")
      }
      // When User Sign Out
      else {
        dispatch(removeUser());
        // navigate to sign in sign up page
        navigate("/")
      }
    });
  }, []);

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      // When User Sign in or Sign up
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // if sign in or sign up them navigate to browse route
        navigate("/browse");
      }
      // When User Sign Out
      else {
        dispatch(removeUser());
        // navigate to sign in sign up page
        navigate("/");
      }
    });

    return () => unsubscriber();
  }, []);
  return (
    <div className="px-8 py-2 h-24 w-screen absolute flex flex-col md:flex-row justify-between bg-gradient-to-b from-black z-50">
      <img className="w-42 mx-auto md:mx-0 rounded-lg" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <select
            className="bg-blue-500 rounded-lg text-white m-2 py-1 px-4 font-bold"
            onChange={handleLanguageChange}
          >
            {languageChoice.map((language) => {
              const key = Object.keys(language)[0];
              return (
                <option
                  key={key}
                  className="bg-black text-teal-50 font-bold m-2 p-2"
                  value={Object.keys(language)[0]}
                >
                  {Object.keys(language)[0]}
                </option>
              );
            })}
          </select>}

          <button
            onClick={handleGptSearch}
            className="bg-yellow-600 rounded-lg text-white m-2 py-1 px-4 font-bold"
          >
           {showGptSearch ? "Home" :  "GPT Search"}
          </button>
          <img className="rounded-xl m-2" alt="userIcon" src={user?.photoURL} />
          <button className="font-bold text-white m-2" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
