
import useAuth from "../../hooks/useAuth";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleSignIn = () => {
    googleLogin();
  };
  return (
    <div>
      <Button
        onClick={handleGoogleSignIn}
        className="w-full flex gap-2 text-md"
      >
        <FcGoogle />
        <span>Google</span>
      </Button>
    </div>
  );
};

export default SocialLogin;
