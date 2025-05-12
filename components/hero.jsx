"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[105px] pb-3 sm:pb-4 md:pb-6 gradient-title leading-tight tracking-tight">
          Manage your Finances <br className="hidden sm:block" /> with AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4 md:px-0 leading-relaxed">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real time insights
        </p>

        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="h-10 sm:h-11 md:h-12 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg bg-primary hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


