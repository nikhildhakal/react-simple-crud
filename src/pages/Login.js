import signin from "../images/signin.png";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  let navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        localStorage.setItem("isLogin", true);
        setIsLogin(true);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <a onClick={handleGoogleLogin}>
        <img src={signin} alt="" />
      </a>
    </div>
  );
};

export default Login;
