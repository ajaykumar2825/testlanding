'use client';

import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { TrustedBy } from '@/components/sections/TrustedBy';
import { WhatIsAgentForge } from '@/components/sections/WhatIsAgentForge';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { AgentsShowcase } from '@/components/sections/AgentsShowcase';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { SupportedModels } from '@/components/sections/SupportedModels';
import { UseCases } from '@/components/sections/UseCases';
import { ProductDemo } from '@/components/sections/ProductDemo';
import { AgentTemplates } from '@/components/sections/AgentTemplates';
import { MultiAgentWorkflow } from '@/components/sections/MultiAgentWorkflow';
import { Integrations } from '@/components/sections/Integrations';
import { SecurityPrivacy } from '@/components/sections/SecurityPrivacy';
import { PerformanceAnalytics } from '@/components/sections/PerformanceAnalytics';
import { WhyChooseAgentForge } from '@/components/sections/WhyChoose';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen bg-white">
        <Hero />
        <TrustedBy />
        <WhatIsAgentForge />
        <CoreFeatures />
        <AgentsShowcase />
        <HowItWorks />
        <SupportedModels />
        <UseCases />
        <ProductDemo />
        <AgentTemplates />
        <MultiAgentWorkflow />
        <Integrations />
        <SecurityPrivacy />
        <PerformanceAnalytics />
        <WhyChooseAgentForge />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}