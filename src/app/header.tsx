"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Header() {
    const session = useSession();
    return (
        <header>
            <div>
                {session.data ? (
                    <Button onClick={() => signOut()}>Sign Out</Button>
                ) : (
                    <Button onClick={() => signIn("google")}>Sign Out</Button>
                )}
                < ModeToggle />
            </div>
        </header>
    )
}