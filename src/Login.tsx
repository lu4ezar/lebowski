import { useState } from "react";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";

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
    <button onClick={signIn}>Sign In</button>
  ) : (
    <button onClick={signOut}>Sign Out</button>
  );
};

export default Login;
