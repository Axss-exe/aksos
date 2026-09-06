import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/sections/hero-section'
import { AtisSection } from '@/components/sections/atis-section'
import { RitaSection } from '@/components/sections/rita-section'
import { ProvenanceSection } from '@/components/sections/provenance-section'
import { PerspectiveSection } from '@/components/sections/perspective-section'
import { ParticipationSectionPreview } from '@/components/sections/participation-section-preview'
import { ZimbabweSection } from '@/components/sections/zimbabwe-section'
import { HorizonSection } from '@/components/sections/horizon-section'
import { ClosingSection } from '@/components/sections/closing-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AtisSection />
        <RitaSection />
        <ProvenanceSection />
        <PerspectiveSection />
        <ParticipationSectionPreview />
        <ZimbabweSection />
        <HorizonSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  )
}
