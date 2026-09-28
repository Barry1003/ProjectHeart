import { Navbar } from "@/components/Navbar";
import { Stripe } from "@/components/ui/Stripe";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Model } from "@/components/sections/Model";
import { Journey } from "@/components/sections/Journey";
import { Stewards } from "@/components/sections/Stewards";
import { HealthHub } from "@/components/sections/HealthHub";
import { Outcomes } from "@/components/sections/Outcomes";
import { Team } from "@/components/sections/Team";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Stripe />
        <Model />
        <Journey />
        <Stewards />
        <HealthHub />
        <Outcomes />
        <Team />
        <GetInvolved />
        <FAQ />
      </main>
      <Footer />
      <Button className="mobile-cta">Join the Outreach</Button>
    </div>
  );
}
