import { SignUp } from "@clerk/nextjs";

import { AuthNotConfigured } from "@/components/auth-not-configured";
import { clerkEnabled } from "@/lib/clerk";

export default function SignUpPage() {
  if (!clerkEnabled) return <AuthNotConfigured />;
  return (
    <div className="flex justify-center py-16">
      <SignUp />
    </div>
  );
}
