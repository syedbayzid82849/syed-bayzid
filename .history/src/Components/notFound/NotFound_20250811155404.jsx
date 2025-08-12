import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl mb-4 text-muted-foreground">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
