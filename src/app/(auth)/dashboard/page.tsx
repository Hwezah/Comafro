import { currentUser } from "@clerk/nextjs/server";

import { AuthNotConfigured } from "@/components/auth-not-configured";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { clerkEnabled } from "@/lib/clerk";

export default async function DashboardPage() {
  if (!clerkEnabled) return <AuthNotConfigured />;

  const user = await currentUser();

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>This route is protected by Clerk.</CardDescription>
        </CardHeader>
        <CardContent>
          Signed in as {user?.primaryEmailAddress?.emailAddress ?? user?.id}
        </CardContent>
      </Card>
    </section>
  );
}
