// Structured research data and source metadata for AKSOS knowledge layer
// All sources are real, verifiable, and explicitly labeled with analysis framing

export interface Source {
  id: string;
  title: string;
  url: string;
  organization: string;
  publishedDate: string;
  accessedDate: string;
}

export interface Entity {
  id: string;
  name: string;
  type: 'organization' | 'region' | 'technology' | 'policy' | 'framework';
  description: string;
  relatedTopics: string[];
}

export interface Research {
  id: string;
  slug: string;
  question: string;
  directAnswer: string;
  whyItMatters: string;
  landscape: string;
  evidence: string;
  entities: Entity[];
  limitations: string;
  analysis: string;
  relatedQuestions: string[];
  sources: Source[];
  topics: string[];
  regions: string[];
  projects: string[];
  published: string;
  updated: string;
}

export interface Topic {
  id: string;
  slug: string;
  name: string;
  description: string;
  relatedResearch: string[];
}

export interface Region {
  id: string;
  slug: string;
  name: string;
  description: string;
  context: string;
  relatedResearch: string[];
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  researchQuestions: string[];
  relatedResearch: string[];
}

// Topics
export const topics: Topic[] = [
  {
    id: 'ai-strategy',
    slug: 'ai-strategy',
    name: 'National AI Strategy',
    description: 'Government and institutional approaches to artificial intelligence adoption and governance',
    relatedResearch: ['zimbabwe-ai-strategy', 'african-ai-landscape', 'ai-governance-frameworks'],
  },
  {
    id: 'digital-infrastructure',
    slug: 'digital-infrastructure',
    name: 'Digital Infrastructure',
    description: 'Connectivity, data centers, and foundational digital systems',
    relatedResearch: ['zimbabwe-digital-transformation', 'african-connectivity-gap'],
  },
  {
    id: 'skills-education',
    slug: 'skills-education',
    name: 'Skills and Education',
    description: 'Workforce development, technical literacy, and educational pathways',
    relatedResearch: ['african-ai-workforce', 'digital-skills-gap'],
  },
  {
    id: 'policy-governance',
    slug: 'policy-governance',
    name: 'Policy and Governance',
    description: 'Regulatory frameworks, data governance, and institutional capacity',
    relatedResearch: ['african-ai-policy', 'data-governance-frameworks'],
  },
];

// Regions
export const regions: Region[] = [
  {
    id: 'africa',
    slug: 'africa',
    name: 'Africa',
    description: 'Continental perspective on AI adoption and digital transformation',
    context: 'The African Union and continental institutions are shaping AI strategy across 54 countries with diverse economic, regulatory, and technical contexts.',
    relatedResearch: ['african-ai-landscape', 'african-ai-workforce', 'african-ai-policy', 'african-connectivity-gap'],
  },
  {
    id: 'southern-africa',
    slug: 'southern-africa',
    name: 'Southern Africa',
    description: 'Regional context for SADC countries and cross-border digital initiatives',
    context: 'Southern African Development Community countries share economic ties and are increasingly coordinating on digital policy and infrastructure.',
    relatedResearch: ['zimbabwe-ai-strategy', 'zimbabwe-digital-transformation'],
  },
  {
    id: 'zimbabwe',
    slug: 'zimbabwe',
    name: 'Zimbabwe',
    description: 'Country-specific perspective on AI adoption, digital transformation, and institutional development',
    context: 'Zimbabwe is developing its National AI Strategy while addressing digital infrastructure gaps and building institutional capacity for AI governance.',
    relatedResearch: ['zimbabwe-ai-strategy', 'zimbabwe-digital-transformation'],
  },
];

// Projects
export const projects: Project[] = [
  {
    id: 'atis',
    slug: 'atis',
    name: 'ATIS: AI Transparency for Intelligence Systems',
    description: 'Understanding intelligence systems, their connections, and participation pathways',
    researchQuestions: [
      'How can environments with high information density become easier to understand?',
      'What participation pathways exist for stakeholders in intelligence systems?',
    ],
    relatedResearch: [],
  },
  {
    id: 'batana',
    slug: 'batana',
    name: 'Batana: Building Bridges',
    description: 'Connecting African institutions, researchers, and practitioners in AI development',
    researchQuestions: [
      'How can Africa-focused AI research be made more discoverable and actionable?',
      'What institutional bridges enable collaboration across the continent?',
    ],
    relatedResearch: ['african-ai-landscape', 'african-ai-workforce'],
  },
];

// Entities
export const entities: Entity[] = [
  {
    id: 'african-union',
    name: 'African Union',
    type: 'organization',
    description: 'Continental organization developing AI strategy and digital policy',
    relatedTopics: ['ai-strategy', 'policy-governance'],
  },
  {
    id: 'zimbabwe-government',
    name: 'Government of Zimbabwe',
    type: 'organization',
    description: 'National government developing AI and digital transformation strategies',
    relatedTopics: ['ai-strategy', 'policy-governance', 'digital-infrastructure'],
  },
  {
    id: 'world-bank',
    name: 'World Bank',
    type: 'organization',
    description: 'International financial institution supporting digital transformation',
    relatedTopics: ['digital-infrastructure', 'skills-education'],
  },
  {
    id: 'unesco',
    name: 'UNESCO',
    type: 'organization',
    description: 'UN agency supporting education, culture, and digital development',
    relatedTopics: ['skills-education', 'policy-governance'],
  },
];

// Research data - source-backed and labeled as AKSOS analysis/synthesis
export const research: Research[] = [
  {
    id: 'zimbabwe-ai-strategy',
    slug: 'zimbabwe-ai-strategy',
    question: 'What is Zimbabwe\'s approach to national AI strategy?',
    directAnswer: 'Zimbabwe launched its National Artificial Intelligence Strategy in 2025, focusing on AI adoption in healthcare, agriculture, education, and public administration while building institutional capacity for AI governance.',
    whyItMatters: 'National AI strategies set the policy and investment foundations for how countries integrate AI into their economies. Zimbabwe\'s strategy signals institutional commitment to AI development and creates frameworks for responsible adoption.',
    landscape: 'Zimbabwe\'s strategy emerges within a broader African context. The African Union released its Continental AI Strategy in August 2024, establishing principles for AI governance across the continent. Individual countries like Zimbabwe, South Africa, and Kenya are developing complementary national strategies that align with AU frameworks while addressing local contexts.',
    evidence: 'According to UNESCO (March 2025), Zimbabwe\'s National AI Strategy emphasizes public sector modernization and addresses skills gaps through education partnerships. The World Bank (June 2021) documented Zimbabwe\'s digital transformation needs, noting that infrastructure investment and institutional capacity are prerequisites for effective AI adoption.',
    entities: [
      { id: 'zimbabwe-government', name: 'Government of Zimbabwe', type: 'organization', description: '', relatedTopics: [] },
      { id: 'african-union', name: 'African Union', type: 'organization', description: '', relatedTopics: [] },
      { id: 'unesco', name: 'UNESCO', type: 'organization', description: '', relatedTopics: [] },
    ],
    limitations: 'This research is based on published government announcements and international agency documentation. Implementation details, budget allocations, and real-world outcomes are still emerging. Regional and sectoral variations within Zimbabwe are not detailed here.',
    analysis: 'AKSOS synthesis: Zimbabwe\'s strategy reflects the broader continental shift toward AI governance. The emphasis on public sector transformation aligns with AU principles but faces real constraints—infrastructure gaps, skills shortages, and limited investment capital are well-documented in World Bank assessments. Understanding these constraints is essential for assessing whether adoption pathways are realistic.',
    relatedQuestions: ['african-ai-landscape', 'ai-governance-frameworks', 'african-ai-workforce'],
    sources: [
      {
        id: 'unesco-zimbabwe-ai-2025',
        title: 'Zimbabwe launches National Artificial Intelligence Strategy',
        url: 'https://www.unesco.org/en/articles/zimbabwe-launches-national-artificial-intelligence-strategy',
        organization: 'UNESCO',
        publishedDate: '2025-03-25',
        accessedDate: '2025-09-07',
      },
      {
        id: 'au-ai-strategy-2024',
        title: 'Continental Artificial Intelligence Strategy',
        url: 'https://www.au.int/en/documents/20240809/continental-artificial-intelligence-strategy',
        organization: 'African Union',
        publishedDate: '2024-08-09',
        accessedDate: '2025-09-07',
      },
      {
        id: 'worldbank-zimbabwe-digital-2021',
        title: 'Digital Transformation a Key Enabler of Long-Term Resilient Growth in Zimbabwe',
        url: 'https://www.worldbank.org/en/country/zimbabwe/publication/digital-transformation-a-key-enabler-of-long-term-resilient-growth-in-zimbabwe',
        organization: 'World Bank',
        publishedDate: '2021-06-03',
        accessedDate: '2025-09-07',
      },
    ],
    topics: ['ai-strategy', 'policy-governance'],
    regions: ['zimbabwe', 'southern-africa', 'africa'],
    projects: ['batana'],
    published: '2025-09-07',
    updated: '2025-09-07',
  },
  {
    id: 'african-ai-landscape',
    slug: 'african-ai-landscape',
    question: 'What is the current landscape of AI development and adoption across Africa?',
    directAnswer: 'Africa is rapidly developing AI capabilities and policies, with the African Union\'s Continental AI Strategy providing a coordinating framework. Individual countries are advancing AI research, building institutional capacity, and integrating AI into sectors like healthcare, agriculture, and education, though infrastructure and investment gaps persist.',
    whyItMatters: 'The African AI landscape determines the region\'s ability to shape global AI development, ensure AI benefits reach African populations, and build local capacity rather than remaining dependent on external solutions.',
    landscape: 'The AU\'s Continental AI Strategy establishes principles for responsible AI development, emphasizing sovereignty, equity, and accountability. Simultaneously, countries are implementing national strategies, universities are expanding AI research, and private sector initiatives are growing. However, connectivity gaps, limited investment capital, and brain drain remain significant constraints.',
    evidence: 'The African Union\'s August 2024 strategy document outlines continental priorities and country-led implementation. Individual country announcements (including Zimbabwe\'s 2025 strategy) reflect AU alignment. Research institutions across Africa are publishing AI research, though publication volume remains lower than global leaders.',
    entities: [
      { id: 'african-union', name: 'African Union', type: 'organization', description: '', relatedTopics: [] },
      { id: 'zimbabwe-government', name: 'Government of Zimbabwe', type: 'organization', description: '', relatedTopics: [] },
    ],
    limitations: 'This overview synthesizes public strategy documents and announcements. Detailed sectoral adoption rates, investment figures, and implementation progress vary significantly by country and are not comprehensively documented here. Brain drain and capacity constraints are real but difficult to quantify precisely.',
    analysis: 'AKSOS synthesis: Africa\'s AI landscape is characterized by high policy ambition and growing institutional commitment, but significant implementation challenges. The gap between strategy and execution—driven by infrastructure, capital, and skills constraints—is the key variable determining real-world AI impact over the next five years.',
    relatedQuestions: ['zimbabwe-ai-strategy', 'african-ai-workforce', 'african-ai-policy', 'african-connectivity-gap'],
    sources: [
      {
        id: 'au-ai-strategy-2024',
        title: 'Continental Artificial Intelligence Strategy',
        url: 'https://www.au.int/en/documents/20240809/continental-artificial-intelligence-strategy',
        organization: 'African Union',
        publishedDate: '2024-08-09',
        accessedDate: '2025-09-07',
      },
    ],
    topics: ['ai-strategy', 'policy-governance'],
    regions: ['africa'],
    projects: ['batana'],
    published: '2025-09-07',
    updated: '2025-09-07',
  },
  {
    id: 'zimbabwe-digital-transformation',
    slug: 'zimbabwe-digital-transformation',
    question: 'What are the key barriers and opportunities for digital transformation in Zimbabwe?',
    directAnswer: 'Digital transformation in Zimbabwe faces infrastructure challenges—connectivity gaps, limited broadband access, and aging digital infrastructure—but also emerging opportunities through targeted investment, institutional reform, and skills development programs.',
    whyItMatters: 'Digital infrastructure is a prerequisite for AI adoption. Understanding Zimbabwe\'s digital transformation pathway illuminates both the realistic pace of AI integration and the investments required to move from strategy to implementation.',
    landscape: 'The World Bank (2021) documented Zimbabwe\'s digital infrastructure gaps, identifying connectivity as a primary bottleneck. Since then, infrastructure investment has been announced, but deployment remains uneven—urban areas have better connectivity than rural regions. Skills development is also a constraint; technical education requires curriculum updates and educator training.',
    evidence: 'World Bank assessments detail infrastructure investment needs and implementation barriers. Government announcements signal infrastructure expansion, but independent monitoring of deployment rates and service quality is limited.',
    entities: [
      { id: 'zimbabwe-government', name: 'Government of Zimbabwe', type: 'organization', description: '', relatedTopics: [] },
      { id: 'world-bank', name: 'World Bank', type: 'organization', description: '', relatedTopics: [] },
    ],
    limitations: 'Infrastructure data varies in recency and comprehensiveness. Rural connectivity assessments are less detailed than urban analyses. Implementation timelines and actual deployment figures are not uniformly documented across all provinces.',
    analysis: 'AKSOS synthesis: Zimbabwe\'s digital transformation is the foundation layer for AI adoption. Current constraints suggest realistic AI integration timelines are measured in years, not months. Infrastructure investment is the enabling variable; without it, national AI strategies remain aspirational.',
    relatedQuestions: ['zimbabwe-ai-strategy', 'african-connectivity-gap', 'african-ai-workforce'],
    sources: [
      {
        id: 'worldbank-zimbabwe-digital-2021',
        title: 'Digital Transformation a Key Enabler of Long-Term Resilient Growth in Zimbabwe',
        url: 'https://www.worldbank.org/en/country/zimbabwe/publication/digital-transformation-a-key-enabler-of-long-term-resilient-growth-in-zimbabwe',
        organization: 'World Bank',
        publishedDate: '2021-06-03',
        accessedDate: '2025-09-07',
      },
    ],
    topics: ['digital-infrastructure', 'skills-education'],
    regions: ['zimbabwe', 'southern-africa'],
    projects: ['batana'],
    published: '2025-09-07',
    updated: '2025-09-07',
  },
  {
    id: 'ai-governance-frameworks',
    slug: 'ai-governance-frameworks',
    question: 'What governance frameworks are emerging for AI in developing regions?',
    directAnswer: 'The African Union\'s Continental AI Strategy and individual country strategies are establishing governance principles focused on responsible AI development, data sovereignty, and accountability. These frameworks emphasize local control, equity, and alignment with African values.',
    whyItMatters: 'AI governance determines who controls AI systems, how risks are managed, and whether benefits are distributed equitably. For African countries, governance frameworks that prioritize sovereignty and local capacity are essential for ensuring AI development serves regional interests.',
    landscape: 'The AU\'s Continental AI Strategy sets overarching principles. Individual countries like Zimbabwe are developing national governance frameworks that operationalize these principles. These frameworks address data governance, ethical AI development, investment incentives, and sectoral regulation.',
    evidence: 'The AU strategy document (August 2024) outlines governance principles. Country-level announcements reflect operationalization of these principles within national contexts.',
    entities: [
      { id: 'african-union', name: 'African Union', type: 'organization', description: '', relatedTopics: [] },
      { id: 'zimbabwe-government', name: 'Government of Zimbabwe', type: 'organization', description: '', relatedTopics: [] },
    ],
    limitations: 'Implementation is early-stage. Real-world effectiveness of these frameworks has not yet been demonstrated. Enforcement mechanisms and institutional capacity to implement governance are still being built.',
    analysis: 'AKSOS synthesis: Governance frameworks represent institutional maturity in AI development. The AU and country-level initiatives signal that Africa is not passively adopting AI but actively shaping how it should be governed. The gap between frameworks and enforcement is the key implementation challenge.',
    relatedQuestions: ['african-ai-landscape', 'zimbabwe-ai-strategy', 'african-ai-policy'],
    sources: [
      {
        id: 'au-ai-strategy-2024',
        title: 'Continental Artificial Intelligence Strategy',
        url: 'https://www.au.int/en/documents/20240809/continental-artificial-intelligence-strategy',
        organization: 'African Union',
        publishedDate: '2024-08-09',
        accessedDate: '2025-09-07',
      },
    ],
    topics: ['policy-governance', 'ai-strategy'],
    regions: ['africa'],
    projects: ['batana'],
    published: '2025-09-07',
    updated: '2025-09-07',
  },
];

// Search index for client-side discovery
export function buildSearchIndex() {
  const index: Array<{ id: string; slug: string; type: string; title: string; text: string }> = [];

  research.forEach((r) => {
    index.push({
      id: r.id,
      slug: r.slug,
      type: 'research',
      title: r.question,
      text: `${r.question} ${r.directAnswer} ${r.landscape} ${r.topics.join(' ')} ${r.regions.join(' ')}`.toLowerCase(),
    });
  });

  topics.forEach((t) => {
    index.push({
      id: t.id,
      slug: t.slug,
      type: 'topic',
      title: t.name,
      text: `${t.name} ${t.description}`.toLowerCase(),
    });
  });

  regions.forEach((r) => {
    index.push({
      id: r.id,
      slug: r.slug,
      type: 'region',
      title: r.name,
      text: `${r.name} ${r.description} ${r.context}`.toLowerCase(),
    });
  });

  projects.forEach((p) => {
    index.push({
      id: p.id,
      slug: p.slug,
      type: 'project',
      title: p.name,
      text: `${p.name} ${p.description}`.toLowerCase(),
    });
  });

  return index;
}

// Search function for deterministic client-side search
export function search(query: string, index: ReturnType<typeof buildSearchIndex>) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return index
    .filter((item) => item.text.includes(q))
    .sort((a, b) => {
      // Exact match first
      if (a.title.toLowerCase() === q && b.title.toLowerCase() !== q) return -1;
      if (b.title.toLowerCase() === q && a.title.toLowerCase() !== q) return 1;
      // Title match second
      const aTitle = a.title.toLowerCase().includes(q);
      const bTitle = b.title.toLowerCase().includes(q);
      if (aTitle && !bTitle) return -1;
      if (bTitle && !aTitle) return 1;
      return 0;
    })
    .slice(0, 10);
}

// Helper to get research by ID
export function getResearchById(id: string): Research | undefined {
  return research.find((r) => r.id === id);
}

// Helper to get related research
export function getRelatedResearch(ids: string[]): Research[] {
  return ids
    .map((id) => getResearchById(id))
    .filter((r) => r !== undefined) as Research[];
}
