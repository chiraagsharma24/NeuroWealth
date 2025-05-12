import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image"; //1,5,21
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-4 sm:my-6 md:my-8">
      <HeroSection />

      <section className="py-12 sm:py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {statsData.map((statsData, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  {statsData.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Why Should you use Neuro-Wealth?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuresData.map((featuresData, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-md transition-shadow">
                <CardContent className="space-y-3 sm:space-y-4 pt-4">
                  {featuresData.icon}
                  <h3 className="text-lg sm:text-xl font-semibold">{featuresData.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{featuresData.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Image
                      src={"/logo"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-3 sm:ml-4">
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join hundreds of users who are already managing their finances
            smarter with Neuro-Wealth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="h-10 sm:h-11 md:h-12 px-5 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Join Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
