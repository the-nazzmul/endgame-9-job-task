import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import SocialLogin from "../components/login-and-registration/SocialLogin";
import { Separator } from "../components/ui/separator";
import EmailPasswordRegister from "../components/login-and-registration/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card>
        <CardHeader>
          <CardTitle>Sign up </CardTitle>
          <CardDescription>
            Sign up with your email and password or with your Goolge account
          </CardDescription>
        </CardHeader>
        {/* social login */}
        <CardContent>
          <SocialLogin />
        </CardContent>

        {/* login with email password */}
        <Separator className="my-4" />
        <CardContent>
          <EmailPasswordRegister />
        </CardContent>
        <Separator className="my-4" />
        <CardFooter>
          <p className="text-sm">
            Already have an account?{" "}
            <span className="text-red-500">
              {" "}
              <Link to="/login">Login</Link>
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationPage;
