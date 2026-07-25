import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConvexProviderWithHerculesAuth } from "@usehercules/auth/convex-react";
import { HerculesAuthProvider } from "@usehercules/auth/react";
import { ConvexReactClient } from "convex/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

const queryClient = new QueryClient();
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL ?? "");

export function DefaultProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <HerculesAuthProvider
        authority={import.meta.env.VITE_AUTHORITY ?? ""}
        client_id={import.meta.env.VITE_CLIENT_ID ?? ""}
      >
        <ConvexProviderWithHerculesAuth client={convex}>
          <QueryClientProvider client={queryClient}>
            {children}
            <Toaster />
          </QueryClientProvider>
        </ConvexProviderWithHerculesAuth>
      </HerculesAuthProvider>
    </ThemeProvider>
  );
}
