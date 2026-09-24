import Link from "next/link";
import { Show, SignUpButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Welcome to Comafro
      </h1>
      <p className="text-lg text-muted-foreground">
        Built with Next.js App Router, Tailwind CSS, shadcn/ui and Clerk.
      </p>
      <Show when="signed-out">
        <SignUpButton>
          <Button size="lg">Get started</Button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <Button size="lg" asChild>
          <Link href="/dashboard">Go to dashboard</Link>
        </Button>
      </Show>
    </section>
  );
}
