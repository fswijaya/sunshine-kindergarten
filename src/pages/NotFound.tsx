import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-black text-orange-500">404</h1>
        <p className="text-xl font-semibold text-muted-foreground">Page not found</p>
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
