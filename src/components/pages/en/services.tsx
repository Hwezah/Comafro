import Link from "next/link";

export function EnServicesPage() {
  return (
    <div>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: "11.5px",
              letterSpacing: "0.08em",
              color: "var(--ochre-deep)",
            }}
          >
            What we do
          </p>
          <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", marginTop: "14px", maxWidth: "26ch" }}>
            Four operations, run in sequence on the same chain.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-newsreader),Georgia,serif",
              fontSize: "20px",
              lineHeight: "1.55",
              color: "var(--ink-soft)",
              marginTop: "20px",
              maxWidth: "58ch",
            }}
          >
            Each of these can be bought on its own — feedlot management for a third-party herd, slaughterhouse design
            for an investor, freight for another exporter. Most buyers take the whole line.
          </p>
          <div
            style={{
              display: "flex",
              gap: "clamp(18px,2.5vw,34px)",
              flexWrap: "wrap",
              marginTop: "clamp(24px,3vw,36px)",
              paddingTop: "clamp(14px,1.8vw,20px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <a
              className="hover-accent-border"
              href="#field"
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12.5px",
                padding: "10px 2px",
                whiteSpace: "nowrap",
                borderBottom: "1px solid transparent",
                transition: "color .2s,border-color .2s",
              }}
            >
              01 · Field
            </a>
            <a
              className="hover-accent-border"
              href="#feedlot"
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12.5px",
                padding: "10px 2px",
                whiteSpace: "nowrap",
                borderBottom: "1px solid transparent",
                transition: "color .2s,border-color .2s",
              }}
            >
              02 · Feedlot
            </a>
            <a
              className="hover-accent-border"
              href="#processing"
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12.5px",
                padding: "10px 2px",
                whiteSpace: "nowrap",
                borderBottom: "1px solid transparent",
                transition: "color .2s,border-color .2s",
              }}
            >
              03 · Processing
            </a>
            <a
              className="hover-accent-border"
              href="#logistics"
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12.5px",
                padding: "10px 2px",
                whiteSpace: "nowrap",
                borderBottom: "1px solid transparent",
                transition: "color .2s,border-color .2s",
              }}
            >
              04 · Logistics
            </a>
          </div>
        </div>
      </section>
      <section id="field" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
            01 · Field
          </p>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", marginTop: "12px", maxWidth: "24ch" }}>
            Fruit and produce export
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "24px",
            }}
          >
            <div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
                We aggregate matoke, avocado and pineapple from contracted smallholders and farm groups in central
                Uganda. Varieties and harvest windows are agreed in advance so a buyer&apos;s programme is planted for,
                not scavenged at market. Produce is graded and packed at our collection point and moves under
                temperature control from there.
              </p>
              <h3 style={{ fontSize: "18px", marginTop: "26px" }}>What the service covers</h3>
              <ul
                style={{
                  margin: "14px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Grower contracting, input guidance and harvest scheduling
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Collection, sorting and grading to an agreed size and class
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Carton and pallet packing to buyer or retailer specification
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Pre-cooling and cold-chain handling to Entebbe or Mombasa
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Phytosanitary inspection and export clearance
                </li>
              </ul>
            </div>
            <div>
              <figure
                style={{
                  margin: "0",
                  background: "var(--paper)",
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  padding: "clamp(16px,2.2vw,24px)",
                }}
              >
                <figcaption
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingBottom: "12px",
                    marginBottom: "14px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  <span>Export carton · top view</span>
                  <span>count 18, single layer</span>
                </figcaption>
                <div style={{ display: "flex", gap: "14px", alignItems: "stretch" }}>
                  <div style={{ flex: "1", border: "2px solid var(--ink)", padding: "10px", background: "var(--bg)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                      <div
                        style={{
                          aspectRatio: "1/1",
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          borderRadius: "50%",
                          background: "var(--line-warm)",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "10.5px",
                      color: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      writingMode: "vertical-rl",
                    }}
                  >
                    300 mm
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    textAlign: "center",
                    marginTop: "8px",
                  }}
                >
                  400 mm
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(min(110px,100%),1fr))",
                    gap: "12px",
                    marginTop: "16px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "10.5px",
                        color: "var(--muted)",
                      }}
                    >
                      Net
                    </p>
                    <p style={{ fontSize: "16px", marginTop: "3px" }}>4 kg</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "10.5px",
                        color: "var(--muted)",
                      }}
                    >
                      Layers
                    </p>
                    <p style={{ fontSize: "16px", marginTop: "3px" }}>1</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "10.5px",
                        color: "var(--muted)",
                      }}
                    >
                      Per pallet
                    </p>
                    <p style={{ fontSize: "16px", marginTop: "3px" }}>54</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "10.5px",
                        color: "var(--muted)",
                      }}
                    >
                      Reject at
                    </p>
                    <p style={{ fontSize: "16px", marginTop: "3px" }}>&gt;2% defect</p>
                  </div>
                </div>
              </figure>
              <div style={{ background: "var(--line-warm)", padding: "22px", marginTop: "18px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11.5px",
                    color: "var(--ochre-deep)",
                  }}
                >
                  Typical terms
                </p>
                <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "9px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "14.5px" }}>
                    <span style={{ color: "var(--muted)" }}>Incoterms</span>
                    <span>FOB Mombasa · CFR buyer port</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "14.5px" }}>
                    <span style={{ color: "var(--muted)" }}>Air freight lead time</span>
                    <span>3–5 days from order</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "14.5px" }}>
                    <span style={{ color: "var(--muted)" }}>Sea freight lead time</span>
                    <span>21–28 days to Gulf ports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feedlot" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
            02 · Feedlot
          </p>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", marginTop: "12px", maxWidth: "24ch" }}>
            Cattle feedlot management
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "24px",
            }}
          >
            <div>
              <figure
                style={{
                  margin: "0",
                  background: "var(--paper2)",
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  padding: "clamp(16px,2.2vw,24px)",
                }}
              >
                <figcaption
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingBottom: "12px",
                    marginBottom: "14px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  <span>Weight gain · 120-day programme</span>
                  <span>pen average, kg live</span>
                </figcaption>
                <svg
                  viewBox="0 0 420 260"
                  role="img"
                  aria-label="Weight gain from 280 kg at intake to 430 kg at 120 days"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <g strokeWidth="1" style={{ stroke: "rgba(var(--ink-rgb),0.18)" }}>
                    <line x1="54" y1="30" x2="404" y2="30" />
                    <line x1="54" y1="85" x2="404" y2="85" />
                    <line x1="54" y1="140" x2="404" y2="140" />
                    <line x1="54" y1="195" x2="404" y2="195" />
                  </g>
                  <line
                    x1="54"
                    y1="30"
                    x2="54"
                    y2="210"
                    strokeWidth="1"
                    style={{ stroke: "rgba(var(--ink-rgb),0.5)" }}
                  />
                  <line
                    x1="54"
                    y1="210"
                    x2="404"
                    y2="210"
                    strokeWidth="1"
                    style={{ stroke: "rgba(var(--ink-rgb),0.5)" }}
                  />
                  <g
                    fontSize="11"
                    textAnchor="end"
                    style={{ fill: "var(--muted)", fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    <text x="46" y="34">
                      450
                    </text>
                    <text x="46" y="89">
                      400
                    </text>
                    <text x="46" y="144">
                      350
                    </text>
                    <text x="46" y="199">
                      300
                    </text>
                  </g>
                  <g
                    fontSize="11"
                    textAnchor="middle"
                    style={{ fill: "var(--muted)", fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    <text x="54" y="228">
                      0
                    </text>
                    <text x="170" y="228">
                      40
                    </text>
                    <text x="287" y="228">
                      80
                    </text>
                    <text x="404" y="228">
                      120
                    </text>
                    <text x="229" y="250">
                      days on feed
                    </text>
                  </g>
                  <polyline
                    points="54,217 112,196 170,170 229,140 287,110 345,86 404,69"
                    fill="none"
                    strokeWidth="2.5"
                    style={{ stroke: "var(--ochre)" }}
                  />
                  <g style={{ fill: "var(--ink)" }}>
                    <circle cx="54" cy="217" r="4" />
                    <circle cx="229" cy="140" r="4" />
                    <circle cx="404" cy="69" r="4" />
                  </g>
                  <g fontSize="13" style={{ fill: "var(--ink)", fontFamily: "var(--font-archivo), sans-serif" }}>
                    <text x="62" y="202">
                      280 kg in
                    </text>
                    <text x="237" y="132">
                      350 kg
                    </text>
                    <text x="398" y="60" textAnchor="end">
                      430 kg out
                    </text>
                  </g>
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  ≈1.25 kg/day average · carcass weight forecast inside a 5% band
                </p>
              </figure>
            </div>
            <div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
                Ugandan cattle arrive lean and inconsistent. We buy or take in stock, then finish it on a managed ration
                for 90–120 days with individual weight tracking, veterinary cover and pen-level records. The result is a
                predictable live weight and carcass grade that a slaughterhouse and a buyer can both plan around. We run
                this for our own export programme and as a managed service for herd owners and investors.
              </p>
              <h3 style={{ fontSize: "18px", marginTop: "26px" }}>What the service covers</h3>
              <ul
                style={{
                  margin: "14px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Stock selection and purchase at regional cattle markets
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Ration formulation from local by-products and forage
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Animal health programme, quarantine and treatment records
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Weight-gain tracking and traceability from pen to carcass
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Feedlot design, staffing and operating procedures for third parties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="processing" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
            03 · Processing
          </p>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", marginTop: "12px", maxWidth: "30ch" }}>
            Halal slaughterhouse design and operation
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "24px",
            }}
          >
            <div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
                We plan, commission and operate abattoirs to halal requirements — from the layout of lairage and the
                direction of the slaughter line to the paperwork issued with each carcass. Slaughter is performed by
                trained Muslim slaughtermen under the supervision of a recognised Islamic authority; clean and dirty
                flows are separated; chilling, cutting and packing follow the buyer&apos;s cut specification.
              </p>
              <h3 style={{ fontSize: "18px", marginTop: "26px" }}>What the service covers</h3>
              <ul
                style={{
                  margin: "14px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Facility design: lairage, slaughter hall, chillers, cutting room, effluent
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Halal procedure: supervised slaughter, no stunning conflict, blessing and bleed-out records
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Hygiene regime, HACCP-style controls and daily veterinary inspection
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Carcass grading, primal and retail cutting, carton or vacuum packing
                </li>
                <li style={{ fontSize: "15px", lineHeight: "1.55", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Certification pack per consignment for the importing market
                </li>
              </ul>
            </div>
            <div>
              <figure
                style={{
                  margin: "0",
                  background: "var(--paper)",
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  padding: "clamp(16px,2.2vw,24px)",
                }}
              >
                <figcaption
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingBottom: "12px",
                    marginBottom: "14px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  <span>Slaughter line · flow plan</span>
                  <span>clean and dirty separated</span>
                </figcaption>
                <svg
                  viewBox="0 0 420 300"
                  role="img"
                  aria-label="Floor plan showing lairage, slaughter hall, chiller, cutting room and dispatch with separated clean and dirty zones"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <rect x="10" y="10" width="400" height="128" stroke="none" style={{ fill: "var(--bg2)" }} />
                  <rect x="10" y="148" width="400" height="142" stroke="none" style={{ fill: "var(--sage-pale)" }} />
                  <g fill="none" strokeWidth="1.5" style={{ stroke: "var(--ink)" }}>
                    <rect x="24" y="30" width="112" height="86" />
                    <rect x="160" y="30" width="112" height="86" />
                    <rect x="296" y="30" width="98" height="86" />
                    <rect x="24" y="176" width="112" height="86" />
                    <rect x="160" y="176" width="112" height="86" />
                    <rect x="296" y="176" width="98" height="86" />
                  </g>
                  <line
                    x1="10"
                    y1="143"
                    x2="410"
                    y2="143"
                    strokeWidth="2"
                    strokeDasharray="8 6"
                    style={{ stroke: "var(--accent)" }}
                  />
                  <text
                    x="16"
                    y="136"
                    fontSize="10"
                    style={{ fill: "var(--accent)", fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    dirty side
                  </text>
                  <text
                    x="404"
                    y="163"
                    fontSize="10"
                    textAnchor="end"
                    style={{ fill: "var(--accent)", fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    clean side
                  </text>
                  <g
                    fontSize="13"
                    textAnchor="middle"
                    style={{ fill: "var(--ink)", fontFamily: "var(--font-archivo), sans-serif" }}
                  >
                    <text x="80" y="70">
                      Lairage
                    </text>
                    <text x="216" y="70">
                      Stun / slaughter
                    </text>
                    <text x="345" y="70">
                      Bleed rail
                    </text>
                    <text x="80" y="216">
                      Chillers
                    </text>
                    <text x="216" y="216">
                      Cutting room
                    </text>
                    <text x="345" y="216">
                      Dispatch
                    </text>
                  </g>
                  <g
                    fontSize="10"
                    textAnchor="middle"
                    style={{ fill: "var(--muted)", fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    <text x="80" y="88">
                      rest + water
                    </text>
                    <text x="216" y="88">
                      supervised
                    </text>
                    <text x="345" y="88">
                      timed
                    </text>
                    <text x="80" y="234">
                      0–4 °C
                    </text>
                    <text x="216" y="234">
                      primal + retail
                    </text>
                    <text x="345" y="234">
                      sealed reefer
                    </text>
                  </g>
                  <g strokeWidth="2" fill="none" style={{ stroke: "var(--ochre)" }}>
                    <path d="M136 73 L154 73" />
                    <path d="M272 73 L290 73" />
                    <path d="M345 116 L345 152 L136 152 L100 152 L100 170" strokeDasharray="0" />
                    <path d="M136 219 L154 219" />
                    <path d="M272 219 L290 219" />
                  </g>
                  <g style={{ fill: "var(--ochre)" }}>
                    <polygon points="154,69 160,73 154,77" />
                    <polygon points="290,69 296,73 290,77" />
                    <polygon points="96,170 104,170 100,176" />
                    <polygon points="154,215 160,219 154,223" />
                    <polygon points="290,215 296,219 290,223" />
                  </g>
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    marginTop: "12px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  No cross-traffic between sides · knives, chillers and cartons dedicated to halal product
                </p>
              </figure>
              <div data-band="" style={{ background: "var(--ink)", color: "var(--bg)", padding: "22px", marginTop: "18px" }}>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--sage)" }}>
                  For Middle East buyers
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", marginTop: "10px" }}>
                  Consignments are prepared to the certification and labelling requirements of the destination market,
                  including Arabic-language shipping marks and importer-country halal attestation where required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-band="" id="logistics" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
            04 · Logistics
          </p>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", marginTop: "12px", maxWidth: "24ch" }}>
            Logistics and shipping
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "24px",
            }}
          >
            <div>
              <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--sage-light)" }}>
                The last link is where African export usually fails. We handle inland haulage, customs, certification
                and the booking itself, so a buyer receives one shipment file rather than five phone numbers. Reefer and
                dry containers via Mombasa and Dar es Salaam; airfreight out of Entebbe for high-value fresh lines;
                consolidation for buyers taking mixed pallets.
              </p>
              <ul
                style={{
                  margin: "26px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.55",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Inland haulage from farm gate and packhouse to port
                </li>
                <li
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.55",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Export customs clearance and border documentation
                </li>
                <li
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.55",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Reefer booking, temperature setting and container sealing
                </li>
                <li
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.55",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Consolidation of mixed produce and meat programmes
                </li>
                <li
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.55",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Shipment file: certificates, invoice, packing list, bill of lading
                </li>
              </ul>
            </div>
            <div style={{ alignSelf: "start", border: "1px solid rgba(var(--bg-rgb),0.28)", padding: "24px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--sage)" }}>
                Routing reference
              </p>
              <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    fontSize: "14.5px",
                    padding: "11px 0",
                    borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  }}
                >
                  <span style={{ color: "var(--sage)" }}>Kampala → Mombasa</span>
                  <span>2–3 days road</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    fontSize: "14.5px",
                    padding: "11px 0",
                    borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  }}
                >
                  <span style={{ color: "var(--sage)" }}>Mombasa → Jebel Ali</span>
                  <span>12–16 days sea</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    fontSize: "14.5px",
                    padding: "11px 0",
                    borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  }}
                >
                  <span style={{ color: "var(--sage)" }}>Mombasa → Jeddah</span>
                  <span>14–18 days sea</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    fontSize: "14.5px",
                    padding: "11px 0",
                    borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  }}
                >
                  <span style={{ color: "var(--sage)" }}>Entebbe → Doha</span>
                  <span>1–2 days air</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    fontSize: "14.5px",
                    padding: "11px 0",
                  }}
                >
                  <span style={{ color: "var(--sage)" }}>Container types</span>
                  <span>40&apos; HC reefer · 20&apos; dry</span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11px",
                  color: "var(--sage)",
                  marginTop: "18px",
                }}
              >
                Transit times indicative; confirmed per booking.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "32px" }}>
            <Link
              className="hover-bg"
              href="/en/contact"
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "var(--bg)",
                borderBottom: "1px solid var(--ochre)",
                paddingBottom: "2px",
              }}
            >
              Discuss a programme with the trade desk
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
