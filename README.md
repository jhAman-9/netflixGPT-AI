# Header

- Netflix Logo

# Login

- Header
- bg movies logo
- Sign In Form
- Sign Up Form
- Validate Form data using regex

# Body

- "/" Login
- "/browse" Browse

# Firebase Setup for Auth and Host

- npm i firebase

- config firebase file

- npm install -g firebase-tools

- firebase login if Error (Run cmds - set-ExecutionPolicy RemoteSigned -Scope CurrentUser , Get-ExecutionPolicy, Get-ExecutionPolicy -list , firebase login)

- firebase init -> build

- npm run build

- firebase deploy (Hosting)

- Password base Firebase Sign Up logic

            import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

- Password base Firebase sign in logic

        import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

# Redux Stores

- Created Redux Store with userSlice having addUser(uid, email, displayName, photoURL) and removeUser

- adding the user data to redux store when user sign in or sign up and also navigate it to "/browse" written in header component (onAuthStateChanged)

- removing the user data to redux store when user sign out and alsi navigate him to "/" which is sign in , sign out page written in header component (onAuthStateChanged)

- created a sign out button in header and Click on it, the user get sign out using signOut api of firebase and navigate to "/" which is sign in, sign up page else error come then navigate to the error page..

- updateProfile Api Call to update photoURL and UserName of Firebase in login component

- Bug Fix Signed in user not get to the "/" (sign out) and "/" (sign out) page user not get the browse page(signed in page)

- There is one more problem that everytime my header componenets is render, it is called onAuthStateChanged eventListener again and again

- unsubscriber onAuthStateChanged callback when header not render

# WorkFlow Next

- Added Hardcode values to the constants file like logo url, avater url etc..

- Register to TMDB and get Access Token

- Get data from TMDB now_playing movie list ("https://api.themoviedb.org/3/movie/now_playing?page=1")

- making a custom hook (useNowPlayingMovies) for fecth now_playing movies data from TMDB and Updating the Redux movies store and then after just call that hook in Browse Component

- Thinks to build browse Component structure

       MainContainer
           - videoBackground
           - VideoTitle

       SecondryContainer
           - MovieList * n
           - cards * n

- Like that I have made MainContainer and SecondryContainer components

- Then made two more components which will hold background and title of MainContainer name as VideoBackGround and VideoTitle components

- VideoTitle container will display title, overview from the fetch data of now_playing api of 0th index.

- VideoBackground will display 0th index data trailer as Background fetch from the video api

- instead of state variable to store trailer key, storing trailer video details into redux movie store slice and then extracting the key of trailer video

- creating a seperate hook for fetch trailer video named as useMovieVideo and afetr that storing that trailer into my redux store

- then calling useMovieVideo hook into my videoBackground Component and extracting trailer video key from redux store.

- embaded the iframe tag from youtueb and add to the videoBackground component and apply CSS to fixed it as background

- SecondryContainer Structure

        MovieList - Popular
            MovieCards * n
        MovieList - Similar
            MovieCards * n
        MovieList - Trending
            MovieCards * n
        MovieList - Action
            MovieCards * n

- Then Alos Created MovieList Container and MovieCard Container 

- MovieList container has Title / Heading for movies And also has MovieCard which hold the Image Banner for Movies

- creatd useTopRatedMovies, useUpComingMovies, usePopularMovies hooks from movies suggestion according and Store All the fetched movies data into my redux store

- after then, through SecondryContainer extracting all data movies listed data one by one and passing props to MovieList Component to show all different banner of movies lists 


# GPT Search

- create GptSearchPage

- create a redux store for gptSearch

- create a gptSearcSlice and initilize the toggleGptSearch with false when the user sign in

- onClick on gptSearch Buttong redirect to the gpt SearchPage 

- Gpt Search page has two components GPT Search Bar and Gpt movies Suggestions

- In GptSearchbar Give to choice Language

- Create a new redux store config where I had store different languages

- through configSlice I inilized currentLanguage and data with user choicen language

- when showGptSearch (extract from redux store) is true then show choice Language and GPT search button become Home

# OpenAI

- find OpenAI API Key

- handle gptSearchInput to get the desired output from the OpenAI API

- and after the gptSuggestedMovies, we get the movies data from the TMDB API

- movies sugegsted by GPT Ai and after fetching them from TMDB Api and  Store in redux Store

- after Passing these value gptSuggestedMoivies and tmdbMovieData to MovieList components using map from GptMoviesSuggestion components to show shows Movies Poster of movies..

- Memoization done     !trailerVideo && getMovieVideos();
