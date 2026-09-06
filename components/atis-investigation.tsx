'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

type NodeType = 'entity' | 'event' | 'place' | 'resource' | 'question'
type Confidence = 'high' | 'medium' | 'low'

type NodeData = {
  id: string
  label: string
  type: NodeType
  description: string
  evidenceCount: number
  confidence: Confidence
  x: number
  y: number
}

type RelationshipData = {
  id: string
  source: string
  target: string
  type: string
  description: string
  evidenceCount: number
  confidence: Confidence
}

type Investigation = {
  id: string
  question: string
  startingNode: string
  nodes: NodeData[]
  relationships: RelationshipData[]
  answer: string
  opportunity: string
  risk: string
  openQuestion: string
}

const investigations: Investigation[] = [
  {
    id: 'regulation',
    question: 'WHO BECOMES EXPOSED WHEN A REGULATION CHANGES?',
    startingNode: 'regulatory-change',
    answer: 'The regulation matters because it changes relationships across the operating chain.',
    opportunity: 'Suppliers already capable of meeting the changed requirement may become more strategically relevant.',
    risk: 'Operators dependent on affected processing capacity may face increased exposure.',
    openQuestion: 'Which suppliers currently have sufficient available capacity?',
    nodes: [
      { id: 'regulatory-change', label: 'REGULATORY CHANGE', type: 'event', description: 'A simulated change to mineral processing requirements.', evidenceCount: 4, confidence: 'high', x: 18, y: 50 },
      { id: 'regulator', label: 'REGULATOR', type: 'entity', description: 'Institution responsible for issuing the changed requirement.', evidenceCount: 3, confidence: 'high', x: 40, y: 22 },
      { id: 'requirement', label: 'REQUIREMENT', type: 'resource', description: 'Processing threshold introduced by the simulated regulation.', evidenceCount: 2, confidence: 'medium', x: 40, y: 78 },
      { id: 'operator', label: 'MINING OPERATOR', type: 'entity', description: 'Operator whose processing model is affected by the requirement.', evidenceCount: 5, confidence: 'high', x: 64, y: 35 },
      { id: 'supplier', label: 'EQUIPMENT SUPPLIER', type: 'entity', description: 'Supplier with a possible capability advantage under the changed requirement.', evidenceCount: 3, confidence: 'medium', x: 84, y: 66 },
      { id: 'logistics', label: 'LOGISTICS PROVIDER', type: 'entity', description: 'Provider connecting equipment availability to the operating site.', evidenceCount: 2, confidence: 'low', x: 84, y: 20 },
    ],
    relationships: [
      { id: 'r1', source: 'regulatory-change', target: 'regulator', type: 'ISSUED BY', description: 'The regulator is identified as the issuing authority for the change.', evidenceCount: 3, confidence: 'high' },
      { id: 'r2', source: 'regulatory-change', target: 'requirement', type: 'INTRODUCES', description: 'The change introduces a new processing requirement.', evidenceCount: 2, confidence: 'medium' },
      { id: 'r3', source: 'requirement', target: 'operator', type: 'AFFECTS', description: 'The requirement changes the operator’s processing exposure.', evidenceCount: 4, confidence: 'high' },
      { id: 'r4', source: 'operator', target: 'supplier', type: 'REQUIRES', description: 'The operator may require equipment that satisfies the new threshold.', evidenceCount: 2, confidence: 'medium' },
      { id: 'r5', source: 'supplier', target: 'logistics', type: 'CONNECTED THROUGH', description: 'Equipment availability depends on a logistics connection.', evidenceCount: 1, confidence: 'low' },
    ],
  },
  {
    id: 'investment',
    question: 'WHERE DOES THE MONEY ACTUALLY MOVE?',
    startingNode: 'investment',
    answer: 'The investment creates an economic network rather than a single event.',
    opportunity: 'Businesses several relationships away may become relevant through new procurement, logistics or service requirements.',
    risk: 'A concentrated supply chain may create dependency on a small number of providers.',
    openQuestion: 'Which suppliers have the capability and capacity to participate?',
    nodes: [
      { id: 'investment', label: 'INFRASTRUCTURE INVESTMENT', type: 'event', description: 'A simulated capital commitment announced for Project Atlas.', evidenceCount: 5, confidence: 'high', x: 16, y: 50 },
      { id: 'project', label: 'PROJECT ATLAS', type: 'entity', description: 'Development program receiving the investment.', evidenceCount: 4, confidence: 'high', x: 38, y: 50 },
      { id: 'bank', label: 'NORTHSTAR BANK', type: 'entity', description: 'Fictional financing institution attached to the project.', evidenceCount: 3, confidence: 'high', x: 62, y: 20 },
      { id: 'contractor', label: 'MAVUNO ENGINEERING', type: 'entity', description: 'Fictional contractor with the primary construction relationship.', evidenceCount: 4, confidence: 'medium', x: 62, y: 80 },
      { id: 'logistics', label: 'ZAMBEZI LOGISTICS', type: 'entity', description: 'Fictional logistics provider supporting project movement.', evidenceCount: 2, confidence: 'medium', x: 86, y: 52 },
      { id: 'zone', label: 'DELTA INDUSTRIAL ZONE', type: 'place', description: 'Industrial location where downstream activity may cluster.', evidenceCount: 2, confidence: 'low', x: 86, y: 18 },
    ],
    relationships: [
      { id: 'i1', source: 'investment', target: 'project', type: 'FUNDS', description: 'The capital commitment is associated with Project Atlas.', evidenceCount: 5, confidence: 'high' },
      { id: 'i2', source: 'project', target: 'bank', type: 'FINANCED BY', description: 'Northstar Bank is identified in the financing structure.', evidenceCount: 3, confidence: 'high' },
      { id: 'i3', source: 'project', target: 'contractor', type: 'CONTRACTED BY', description: 'Mavuno Engineering is connected to project construction.', evidenceCount: 4, confidence: 'medium' },
      { id: 'i4', source: 'contractor', target: 'logistics', type: 'SERVES', description: 'The contractor’s procurement path connects to logistics support.', evidenceCount: 2, confidence: 'medium' },
      { id: 'i5', source: 'logistics', target: 'zone', type: 'LOCATED IN', description: 'The logistics relationship is associated with the industrial zone.', evidenceCount: 1, confidence: 'low' },
    ],
  },
  {
    id: 'dependency', question: 'WHAT HAPPENS IF THIS COMPANY FAILS?', startingNode: 'company', answer: 'The risk is not necessarily the company itself. It is the dependency structure surrounding it.', opportunity: 'An alternative supplier could potentially serve multiple connected entities.', risk: 'Multiple downstream entities depend on the same relationship, indicating concentration risk.', openQuestion: 'Which alternative suppliers could absorb the dependency?', nodes: [
      { id: 'company', label: 'KUDA INFRASTRUCTURE', type: 'entity', description: 'Fictional company occupying a central operating position.', evidenceCount: 5, confidence: 'high', x: 22, y: 50 },
      { id: 'supplier', label: 'MOSI EQUIPMENT', type: 'entity', description: 'Fictional supplier on which the company depends.', evidenceCount: 4, confidence: 'high', x: 50, y: 20 },
      { id: 'customer', label: 'ORBITAL PROCESSING', type: 'entity', description: 'Fictional downstream customer receiving the company’s output.', evidenceCount: 3, confidence: 'medium', x: 50, y: 80 },
      { id: 'project', label: 'PROJECT ATLAS', type: 'entity', description: 'Fictional project that relies on the customer relationship.', evidenceCount: 2, confidence: 'medium', x: 80, y: 50 },
      { id: 'bank', label: 'NORTHSTAR BANK', type: 'entity', description: 'Fictional bank exposed through project finance.', evidenceCount: 2, confidence: 'low', x: 80, y: 18 },
    ], relationships: [
      { id: 'd1', source: 'company', target: 'supplier', type: 'DEPENDS ON', description: 'The company’s operating model depends on this supplier.', evidenceCount: 4, confidence: 'high' },
      { id: 'd2', source: 'company', target: 'customer', type: 'SUPPLIES', description: 'The company supplies the downstream customer.', evidenceCount: 3, confidence: 'medium' },
      { id: 'd3', source: 'customer', target: 'project', type: 'OPERATES', description: 'The customer operates inside the project structure.', evidenceCount: 2, confidence: 'medium' },
      { id: 'd4', source: 'project', target: 'bank', type: 'FUNDED BY', description: 'The project has a financing relationship with the bank.', evidenceCount: 1, confidence: 'low' },
    ]
  },
  {
    id: 'missing', question: 'WHO IS MISSING FROM THE STORY?', startingNode: 'announcement', answer: 'The investigation can identify what is known without filling the gap with an invented entity.', opportunity: 'The evidence gap points to a targeted next step: identify the expected input provider.', risk: 'The downstream supplier structure is not established by the available evidence.', openQuestion: 'Who is expected to provide the required inputs?', nodes: [
      { id: 'announcement', label: 'INVESTMENT ANNOUNCEMENT', type: 'event', description: 'A simulated announcement establishing the existence of a project.', evidenceCount: 4, confidence: 'high', x: 18, y: 50 },
      { id: 'investor', label: 'INVESTOR', type: 'entity', description: 'Named capital provider in the announcement.', evidenceCount: 3, confidence: 'high', x: 44, y: 20 },
      { id: 'project', label: 'PROJECT ATLAS', type: 'entity', description: 'Project established by the available records.', evidenceCount: 4, confidence: 'high', x: 44, y: 80 },
      { id: 'government', label: 'GOVERNMENT COUNTERPARTY', type: 'entity', description: 'Public counterpart identified in the project records.', evidenceCount: 2, confidence: 'medium', x: 72, y: 50 },
      { id: 'unknown', label: '? SUPPLIER', type: 'question', description: 'An unresolved relationship requiring further investigation; this is not a factual entity.', evidenceCount: 0, confidence: 'low', x: 88, y: 80 },
    ], relationships: [
      { id: 'm1', source: 'announcement', target: 'investor', type: 'NAMED', description: 'The investor is explicitly named in the announcement.', evidenceCount: 3, confidence: 'high' },
      { id: 'm2', source: 'announcement', target: 'project', type: 'ESTABLISHES', description: 'The announcement establishes the project record.', evidenceCount: 4, confidence: 'high' },
      { id: 'm3', source: 'project', target: 'government', type: 'PARTNERS WITH', description: 'The government counterpart is documented as a project partner.', evidenceCount: 2, confidence: 'medium' },
      { id: 'm4', source: 'project', target: 'unknown', type: 'REQUIRES', description: 'The project appears to require a supplier, but the relationship is unresolved.', evidenceCount: 0, confidence: 'low' },
    ]
  },
  {
    id: 'zimbabwe', question: 'WHAT DOES THIS DEVELOPMENT MEAN FOR ZIMBABWE?', startingNode: 'development', answer: 'The development indicates movement within a regional economic network.', opportunity: 'Increased regional demand could create opportunities for capable Zimbabwean suppliers.', risk: 'Zimbabwean businesses competing in the same market may face increased regional competition.', openQuestion: 'Which Zimbabwean entities currently have the capability to participate?', nodes: [
      { id: 'development', label: 'REGIONAL DEVELOPMENT', type: 'event', description: 'A simulated Zambia mining investment used to test perspective.', evidenceCount: 5, confidence: 'high', x: 16, y: 50 },
      { id: 'mining', label: 'ZAMBIA MINING PROJECT', type: 'entity', description: 'Fictional regional mining project receiving new capital.', evidenceCount: 4, confidence: 'high', x: 40, y: 50 },
      { id: 'demand', label: 'REGIONAL DEMAND', type: 'resource', description: 'Potential demand for equipment and services as production expands.', evidenceCount: 3, confidence: 'medium', x: 64, y: 22 },
      { id: 'corridor', label: 'TRANSPORT CORRIDOR', type: 'place', description: 'Regional route connecting demand to Zimbabwean actors.', evidenceCount: 2, confidence: 'medium', x: 64, y: 78 },
      { id: 'zimbabwe', label: 'ZIMBABWE', type: 'place', description: 'Selected perspective: interpret the development from this position.', evidenceCount: 2, confidence: 'low', x: 88, y: 50 },
    ], relationships: [
      { id: 'z1', source: 'development', target: 'mining', type: 'AFFECTS', description: 'The regional development is expressed through the mining project.', evidenceCount: 4, confidence: 'high' },
      { id: 'z2', source: 'mining', target: 'demand', type: 'CREATES', description: 'Production expansion may create regional equipment demand.', evidenceCount: 3, confidence: 'medium' },
      { id: 'z3', source: 'demand', target: 'corridor', type: 'MOVES THROUGH', description: 'Demand is connected to a transport corridor.', evidenceCount: 2, confidence: 'medium' },
      { id: 'z4', source: 'corridor', target: 'zimbabwe', type: 'CONNECTS TO', description: 'The corridor connects the development to a Zimbabwean perspective.', evidenceCount: 1, confidence: 'low' },
    ]
  },
]

const typeLabel: Record<NodeType, string> = { entity: 'ENTITY', event: 'EVENT', place: 'PLACE', resource: 'RESOURCE', question: 'QUESTION' }

export function AtisInvestigation() {
  const [investigationId, setInvestigationId] = useState('investment')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)
  const investigation = investigations.find((item) => item.id === investigationId) ?? investigations[1]
  const selectedNode = investigation.nodes.find((node) => node.id === selectedId)
  const selectedEdge = investigation.relationships.find((edge) => edge.id === selectedEdgeId)
  const visibleNodeIds = useMemo(() => {
    if (!selectedId) return new Set([investigation.startingNode, ...investigation.relationships.filter((edge) => edge.source === investigation.startingNode).map((edge) => edge.target)])
    return new Set([selectedId, ...investigation.relationships.filter((edge) => edge.source === selectedId || edge.target === selectedId).flatMap((edge) => [edge.source, edge.target])])
  }, [investigation, selectedId])
  const visibleEdges = investigation.relationships.filter((edge) => visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target))

  function reset() { setSelectedId(null); setSelectedEdgeId(null) }
  function selectNode(id: string) { setSelectedId(id); setSelectedEdgeId(null) }

  return (
    <section className="border-b border-border/60" aria-labelledby="follow-connections">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">ATIS / CONNECTED INTELLIGENCE</p>
        <h2 id="follow-connections" className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-6xl">FOLLOW THE CONNECTIONS.</h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">A single piece of information can tell you what happened. The relationships around it can begin to explain why it matters. Choose a question below and follow the relationships.</p>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-y border-border/60 py-5" role="tablist" aria-label="Choose an investigation">
          {investigations.map((item, index) => (
            <button key={item.id} type="button" role="tab" aria-selected={investigationId === item.id} onClick={() => { setInvestigationId(item.id); reset() }} onKeyDown={(event) => { if (event.key === 'ArrowRight') { const next = investigations[(index + 1) % investigations.length]; setInvestigationId(next.id); reset() } }} className={cn('border-b-2 pb-2 text-left font-mono text-[11px] uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background', investigationId === item.id ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground')}>
              <span className="mr-2 text-muted-foreground/60">{String(index + 1).padStart(2, '0')}</span>{item.id}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="border border-border/60 bg-card/20" aria-label="Interactive investigation graph">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span>SIMULATED INVESTIGATION / DEMONSTRATION DATA</span>
              <span>{visibleEdges.length} RELATIONSHIPS REVEALED</span>
            </div>
            <div className="relative aspect-[1.45] min-h-[360px] overflow-hidden bg-background p-3 sm:min-h-[430px]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" role="img" aria-label={`Investigation graph for ${investigation.question}`}>
                {visibleEdges.map((edge) => { const source = investigation.nodes.find((node) => node.id === edge.source)!; const target = investigation.nodes.find((node) => node.id === edge.target)!; const active = selectedEdgeId === edge.id || selectedId === edge.source || selectedId === edge.target; return <g key={edge.id} className="cursor-pointer" onClick={() => { setSelectedEdgeId(edge.id); setSelectedId(null) }} role="button" tabIndex={0} aria-label={`${edge.type}: ${source.label} to ${target.label}`} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedEdgeId(edge.id); setSelectedId(null) } }}><line x1={source.x} y1={source.y} x2={target.x} y2={target.y} className={cn('transition-all duration-500', active ? 'stroke-foreground' : 'stroke-border')} strokeWidth={active ? 0.55 : 0.3} /><text x={(source.x + target.x) / 2} y={(source.y + target.y) / 2 - 2} textAnchor="middle" className={cn('pointer-events-none fill-muted-foreground font-mono text-[2.3px] uppercase tracking-[0.1em]', active ? 'opacity-100' : 'opacity-70')}>{edge.type}</text></g> })}
                {investigation.nodes.map((node) => { const visible = visibleNodeIds.has(node.id); const selected = selectedId === node.id; return <g key={node.id} className={cn('cursor-pointer transition-opacity duration-500', visible ? 'opacity-100' : 'opacity-25')} onClick={() => selectNode(node.id)} role="button" tabIndex={0} aria-label={`${typeLabel[node.type]}: ${node.label}`} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectNode(node.id) } }}><circle cx={node.x} cy={node.y} r={selected ? 5 : 4} className={cn('fill-background stroke-foreground transition-all duration-500', node.type === 'question' && 'stroke-dashed', selected && 'fill-foreground')} strokeWidth={selected ? 0.8 : 0.55} /><circle cx={node.x} cy={node.y} r={1.2} className={cn(selected ? 'fill-background' : 'fill-foreground')} /><text x={node.x} y={node.y + 9} textAnchor="middle" className={cn('fill-foreground font-mono text-[2.7px] uppercase tracking-[0.08em]', selected && 'font-bold')}>{node.label}</text></g> })}
              </svg>
              <div className="pointer-events-none absolute bottom-4 left-4 max-w-[220px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground/70">Select a node or relationship to reveal context.</div>
            </div>
            <div className="flex items-center justify-between border-t border-border/60 px-4 py-3"><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{String(investigations.findIndex((item) => item.id === investigation.id) + 1).padStart(2, '0')} / 05</span><button type="button" onClick={reset} className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">Reset investigation</button></div>
          </div>

          <aside className="border border-border/60 bg-card/20 p-5" aria-live="polite">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Investigation</p>
            <h3 className="mt-4 text-pretty font-serif text-2xl font-light leading-tight text-foreground">{investigation.question}</h3>
            <div className="mt-6 flex flex-col gap-5">
              {selectedNode ? <div className="border-t border-border/60 pt-4"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{typeLabel[selectedNode.type]} / RECORD</p><p className="mt-2 font-serif text-lg text-foreground">{selectedNode.label}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedNode.description}</p><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{selectedNode.evidenceCount} supporting records · {selectedNode.confidence} confidence</p></div> : selectedEdge ? <div className="border-t border-border/60 pt-4"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Relationship</p><p className="mt-2 font-serif text-lg text-foreground">{selectedEdge.type}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedEdge.description}</p><p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{selectedEdge.evidenceCount} supporting records · {selectedEdge.confidence} confidence</p></div> : <div className="border-t border-border/60 pt-4"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Start here</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Select the starting node to expand the investigation through its evidence-backed relationships.</p></div>}
              {[['Answer', investigation.answer], ['Opportunity', investigation.opportunity], ['Risk', investigation.risk], ['Open question', investigation.openQuestion]].map(([label, text]) => <div key={label} className="border-t border-border/60 pt-4"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p><p className="mt-2 text-sm leading-relaxed text-foreground/80">{text}</p></div>)}
            </div>
          </aside>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">This demonstration uses fictional entities and simulated relationships. It shows how ATIS can expose context, possible risk, opportunity and evidence gaps without presenting inference as certainty.</p>
      </div>
    </section>
  )
}
