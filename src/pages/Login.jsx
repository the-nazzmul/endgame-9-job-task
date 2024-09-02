
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import SocialLogin from "../components/login-and-registration/SocialLogin";
import { Separator } from "../components/ui/separator";
import { EmailPasswordLogin } from "../components/login-and-registration/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card>
        <CardHeader>
          <CardTitle>Sign In </CardTitle>
          <CardDescription>
            Sign in with your email and password or with your Goolge account
          </CardDescription>
        </CardHeader>
        {/* social login */}
        <CardContent>
          <SocialLogin />
        </CardContent>

        {/* login with email password */}
        <Separator className="my-4" />
        <CardContent>
          <EmailPasswordLogin />
        </CardContent>
        <Separator className="my-4" />
        <CardFooter>
          <p className="text-sm">
            New here?{" "}
            <span className="text-red-500">
              {" "}
              <Link to="/register">Register</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
