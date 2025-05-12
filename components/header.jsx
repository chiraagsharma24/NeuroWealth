import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Neuro-Wealth Logo"
            width={200}
            height={80}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
              >
                <LayoutDashboard className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button 
                className="h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 bg-primary hover:bg-primary/90"
                size="sm"
              >
                <PenBox className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 sm:w-9 sm:h-9",
                  userButtonPopoverCard: "w-64 sm:w-72",
                  userButtonPopoverActionButton: "text-sm",
                  userButtonPopoverFooter: "text-xs",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
