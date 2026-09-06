/**
 * Sourced facts for the Zimbabwe case study section.
 * Every entity, mechanism, and event referenced here is real and publicly
 * documented. No relationships or figures are fabricated — this file is the
 * single point of truth for the section's copy, kept separate from
 * rendering so it can be audited independently.
 */

export const zimbabweStory = {
  label: 'Case Study — Zimbabwe',
  headline: 'When the official rate and the real rate disagree, the gap is data.',
  summary:
    'For years, Zimbabwe ran two exchange rates at once: the official rate, and the rate the market actually believed. The distance between them was never a secret — it was published daily, derived from a single dual-listed stock.',
  mechanism: {
    title: 'The Old Mutual Implied Rate',
    body: [
      'Old Mutual, the insurance and financial services group, has long been dual- and triple-listed — trading simultaneously on the Zimbabwe Stock Exchange (ZSE), the Johannesburg Stock Exchange (JSE), and the London Stock Exchange (LSE). Because the shares were fungible, an investor could in principle buy the stock in Harare and sell the same underlying position in Johannesburg or London.',
      'That fungibility turned a single, ordinary equity into an unofficial thermometer for the Zimbabwean dollar. Dividing the ZSE price of Old Mutual by its JSE or LSE price — after currency conversion — produced what market participants called the Old Mutual Implied Rate (OMIR): a market-derived exchange rate that moved independently of, and usually far beyond, the central bank\'s official quotation.',
      'The Reserve Bank of Zimbabwe repeatedly intervened in this mechanism directly — suspending fungibility, halting OMIR-linked trading, and restricting the stock exchange itself at points in 2008 and again in 2020 — precisely because the implied rate kept surfacing a gap the official rate did not want visible.',
    ],
  },
  whyItMatters: {
    title: 'Why this is the case study',
    body: 'This is not a story about a broken market. It is a story about what happens when a single, well-understood data relationship is allowed to be seen. The OMIR did not require new instruments, new regulation, or new institutions — it required someone to keep computing the ratio, publicly, without interruption, regardless of who found the answer inconvenient. That is the operating premise behind ATIS: intelligence infrastructure that keeps computing the ratio.',
  },
  sources: [
    {
      label: 'Reserve Bank of Zimbabwe — historical monetary policy statements on fungibility restrictions',
    },
    {
      label: 'Zimbabwe Stock Exchange — Old Mutual dual-listing and trading suspension record',
    },
    {
      label: 'Public financial reporting on the Old Mutual Implied Rate, 2008 and 2019–2020',
    },
  ],
}
