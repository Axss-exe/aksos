import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/sections/hero-section'
import { IdentitySection } from '@/components/sections/identity-section'
import { AtisSection } from '@/components/sections/atis-section'
import { FrontierSection } from '@/components/sections/frontier-section'
import { RitaSection } from '@/components/sections/rita-section'
import { ProvenanceSection } from '@/components/sections/provenance-section'
import { PerspectiveSection } from '@/components/sections/perspective-section'
import { ParticipationSectionPreview } from '@/components/sections/participation-section-preview'
import { ZimbabweSection } from '@/components/sections/zimbabwe-section'
import { HorizonSection } from '@/components/sections/horizon-section'
import { BatanaSection } from '@/components/sections/batana-section'
import { ClosingSection } from '@/components/sections/closing-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IdentitySection />
        <AtisSection />
        <FrontierSection />
        <RitaSection />
        <ProvenanceSection />
        <PerspectiveSection />
        <ParticipationSectionPreview />
        <ZimbabweSection />
        <HorizonSection />
        <BatanaSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  )
}
