"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="pb-20 px-4">
      <div className="container m-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage your Finances <br /> with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real time insights
        </p>

        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


