import { useAuthCallback } from "@usehercules/auth/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { status, error, retry } = useAuthCallback({
    onSuccess: () => navigate("/", { replace: true }),
    onNoAuthParams: () => navigate("/", { replace: true }),
  });

  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-black">Sign-in failed</h1>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={retry}>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-semibold text-muted-foreground">Signing you in...</p>
    </div>
  );
}
