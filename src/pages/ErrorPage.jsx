
import { Link, useRouteError } from "react-router-dom";
import { Button } from "../components/ui/button";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32">
      <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>
      <Button className="mt-8" variant="destructive">
        <Link to="/">HomePage</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
