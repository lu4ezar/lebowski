import { useState } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import { AiOutlineGoogle } from "react-icons/ai";
import "./styles.scss";

const Login = () => {
  const clientId = process.env.CLIENT_ID as string;
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { signIn } = useGoogleLogin({
    clientId,
    onSuccess: () => setIsSignedIn(true),
    isSignedIn
  });
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: () => setIsSignedIn(false),
    onFailure: () => console.log("Error")
  });
  return isSignedIn ? (
    <button onClick={signIn} className="login-button sign-in">
      <AiOutlineGoogle />
      Sign In
    </button>
  ) : (
    <button onClick={signOut} className="login-button sign-out">
      <AiOutlineGoogle />
      Sign Out
    </button>
  );
};

export default Login;
