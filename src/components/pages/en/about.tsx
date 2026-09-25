export function EnAboutPage() {
  return (
    <div>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,72px) clamp(22px,5vw,80px)" }}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: "11.5px",
              letterSpacing: "0.08em",
              color: "var(--ochre-deep)",
            }}
          >
            About Comafro Limited
          </p>
          <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", marginTop: "14px", maxWidth: "26ch" }}>
            A Ugandan trading company built around the chain, not one link of it.
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,56px)",
              marginTop: "clamp(24px,3vw,42px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-newsreader),Georgia,serif",
                fontSize: "20px",
                lineHeight: "1.55",
                color: "var(--ink-soft)",
              }}
            >
              Comafro Limited is registered in Uganda and operates from Kireka in Wakiso District, on the eastern edge
              of the Kampala metropolitan area. We were formed to fix a gap our founders kept meeting: Ugandan farms and
              cattle keepers produce export-grade goods, and international buyers want them, but the chain between them
              breaks on aggregation, cold handling, slaughter standards and paperwork.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
              So we took on all of it. We contract growers and cattle suppliers, manage finishing in our own feedlot
              programme, design and run slaughter facilities to halal requirements, and handle certification and freight
              to the buyer&apos;s port. The company is young — under two years trading — and deliberately narrow: four
              product lines, a defined catchment around Kampala, and a small team that answers directly.
            </p>
          </div>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
          }}
        >
          <div
            style={{
              padding: "clamp(28px,3vw,44px) clamp(24px,3vw,40px) clamp(28px,3vw,44px) 0",
              borderRight: "1px solid rgba(var(--ink-rgb),0.16)",
            }}
          >
            <h2 style={{ fontSize: "24px" }}>Mission</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "14px" }}>
              To move Ugandan agricultural produce and halal protein into international markets on terms that are fair
              to the farmer and reliable for the buyer — with the standard, the certificate and the temperature record
              to prove it.
            </p>
          </div>
          <div
            style={{
              padding: "clamp(28px,3vw,44px) clamp(24px,3vw,40px)",
              borderRight: "1px solid rgba(var(--ink-rgb),0.16)",
            }}
          >
            <h2 style={{ fontSize: "24px" }}>Vision</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "14px" }}>
              A Uganda that exports finished, certified, buyer-ready goods rather than raw volume — and a company that
              Gulf and European importers treat as a first call, not a fallback.
            </p>
          </div>
          <div style={{ padding: "clamp(28px,3vw,44px) 0 clamp(28px,3vw,44px) clamp(24px,3vw,40px)" }}>
            <h2 style={{ fontSize: "24px" }}>How we work</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "14px" }}>
              Written specification before pricing. Trial shipment before programme. Photographs and weights at loading.
              One named contact from enquiry to arrival.
            </p>
          </div>
        </div>
      </section>
      <section id="s3" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
            gap: "clamp(28px,4vw,64px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)" }}>How the company was built</h2>
            <div
              style={{
                marginTop: "clamp(20px,2.5vw,32px)",
                borderLeft: "1px solid rgba(var(--ink-rgb),0.3)",
                paddingLeft: "clamp(18px,2.5vw,28px)",
                display: "flex",
                flexDirection: "column",
                gap: "26px",
              }}
            >
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--accent)" }}>
                  2025 · Q2
                </p>
                <p style={{ fontSize: "16.5px", fontWeight: "500", marginTop: "7px" }}>Incorporated in Uganda</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "7px" }}>
                  Registered as a limited company with a trade desk in Kireka. Grower contracting starts across Wakiso
                  and Mpigi.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                  2025 · Q4
                </p>
                <p style={{ fontSize: "16.5px", fontWeight: "500", marginTop: "7px" }}>Livestock side established</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "7px" }}>
                  Feedlot programme designed and stocked; halal slaughter procedure written and placed under standing
                  supervision.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                  2026 · Q1
                </p>
                <p style={{ fontSize: "16.5px", fontWeight: "500", marginTop: "7px" }}>First export clears</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "7px" }}>
                  Avocado and pineapple trial pallet out of Entebbe, accepted on arrival without claim — the proof we
                  needed to quote programmes.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                  2026 · Q3
                </p>
                <p style={{ fontSize: "16.5px", fontWeight: "500", marginTop: "7px" }}>Gulf programmes</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "7px" }}>
                  Standing reefer programmes agreed; Arabic shipping marks and importer-country attestation
                  standardised.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                  Next
                </p>
                <p style={{ fontSize: "16.5px", fontWeight: "500", marginTop: "7px" }}>Own packhouse and cold store</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "7px" }}>
                  Purpose-built pre-cooling and cold storage at the collection point, to cut the gap between harvest and
                  temperature control.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)" }}>Why buyers come to us</h2>
            <div
              style={{
                marginTop: "clamp(20px,2.5vw,32px)",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
              }}
            >
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16.5px", fontWeight: "500" }}>One counterparty, not five</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "6px" }}>
                  A buyer usually assembles a Ugandan shipment from an aggregator, an abattoir, a clearing agent and a
                  forwarder. We are all four, so nobody hands off blame.
                </p>
              </div>
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16.5px", fontWeight: "500" }}>Halal handled at source</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "6px" }}>
                  Supervision and certification are built into the slaughter line, not bolted on for the paperwork.
                </p>
              </div>
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16.5px", fontWeight: "500" }}>Small enough to answer</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "6px" }}>
                  You get a named contact on a phone, in your time zone&apos;s working hours, who knows what is in the
                  container.
                </p>
              </div>
              <div style={{ padding: "16px 0" }}>
                <p style={{ fontSize: "16.5px", fontWeight: "500" }}>Honest about limits</p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "6px" }}>
                  We decline volumes we cannot hold to specification. A young exporter&apos;s reputation survives one
                  refused order; it does not survive one rejected container.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s4" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(28px,4vw,56px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)" }}>Where we are</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)", marginTop: "16px" }}>
              Our office and trade desk sit in Kireka, Wakiso District. It is roughly 10 km from central Kampala,
              minutes from the Jinja–Kampala corridor, and within a day&apos;s drive of the growing districts we buy
              from. Entebbe International Airport is about an hour away for air freight; Mombasa is our standard sea
              port, with Dar es Salaam as an alternative routing.
            </p>
            <div style={{ marginTop: "24px", borderTop: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Registered office
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>Kireka, Wakiso District, Uganda</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Sourcing catchment
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>Wakiso · Mpigi · Luweero · Mubende</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Air freight
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>Entebbe International (EBB)</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Sea freight
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>Mombasa (KEMBA) · Dar es Salaam</span>
              </div>
            </div>
          </div>
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
              <span>By road from Kireka</span>
              <span>compressed scale</span>
            </figcaption>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>Kampala CBD</p>
                  <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                    10 km
                  </p>
                </div>
                <div style={{ height: "7px", background: "rgba(var(--ink-rgb),0.1)", marginTop: "6px" }}>
                  <div style={{ width: "9%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>Mpigi</p>
                  <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                    40 km
                  </p>
                </div>
                <div style={{ height: "7px", background: "rgba(var(--ink-rgb),0.1)", marginTop: "6px" }}>
                  <div style={{ width: "18%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>Entebbe airport (EBB)</p>
                  <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                    45 km
                  </p>
                </div>
                <div style={{ height: "7px", background: "rgba(var(--ink-rgb),0.1)", marginTop: "6px" }}>
                  <div style={{ width: "20%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>Luweero</p>
                  <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                    75 km
                  </p>
                </div>
                <div style={{ height: "7px", background: "rgba(var(--ink-rgb),0.1)", marginTop: "6px" }}>
                  <div style={{ width: "27%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>Mubende</p>
                  <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                    160 km
                  </p>
                </div>
                <div style={{ height: "7px", background: "rgba(var(--ink-rgb),0.1)", marginTop: "6px" }}>
                  <div style={{ width: "40%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>Mombasa port</p>
                  <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                    1,170 km
                  </p>
                </div>
                <div style={{ height: "7px", background: "rgba(var(--ink-rgb),0.1)", marginTop: "6px" }}>
                  <div style={{ width: "100%", height: "7px", background: "var(--ink)" }} />
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "10.5px",
                color: "var(--muted)",
                marginTop: "16px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
              }}
            >
              Sourcing catchment sits inside a day&apos;s drive · air freight 45 min away
            </p>
          </figure>
        </div>
      </section>
      <section id="s5" data-band="" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)", maxWidth: "24ch" }}>
            Credibility signals a buyer can check
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: "clamp(20px,3vw,40px)",
              marginTop: "clamp(24px,3vw,40px)",
            }}
          >
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "16px" }}>
              <h3 style={{ fontSize: "19px" }}>Company registration</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--sage-light)", marginTop: "10px" }}>
                Ugandan-registered limited company with URA tax registration. Certificate of incorporation and TIN
                shared with any serious buyer on request.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "16px" }}>
              <h3 style={{ fontSize: "19px" }}>Export registration</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--sage-light)", marginTop: "10px" }}>
                Registered exporter working with MAAIF inspection for phytosanitary clearance and with the national
                veterinary authority for meat consignments.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "16px" }}>
              <h3 style={{ fontSize: "19px" }}>Halal supervision</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--sage-light)", marginTop: "10px" }}>
                Slaughter carried out under the supervision of a recognised Islamic authority, with certification issued
                per consignment to the importing market&apos;s requirement.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "16px" }}>
              <h3 style={{ fontSize: "19px" }}>Site visits welcome</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--sage-light)", marginTop: "10px" }}>
                Buyers and their agents are invited to inspect the feedlot, processing line and packing before
                contracting. We will arrange the visit and the schedule.
              </p>
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: "11.5px",
              color: "var(--sage)",
              marginTop: "32px",
              maxWidth: "70ch",
            }}
          >
            Registration numbers, certificate scans and referee contacts are supplied directly rather than published.
            Ask the trade desk.
          </p>
        </div>
      </section>
      <section id="s6">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)" }}>The team</h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "var(--ink-soft)",
              marginTop: "14px",
              maxWidth: "60ch",
            }}
          >
            A small operating team covering sourcing, livestock, processing and trade. Buyers deal with a named contact
            throughout.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))",
              gap: "clamp(18px,2.5vw,32px)",
              marginTop: "clamp(24px,3vw,36px)",
            }}
          >
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  Owns
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Pricing and contracts
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Buyer relationships
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Final release of a consignment
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px" }}>Managing Director</p>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  marginTop: "5px",
                }}
              >
                name to confirm
              </p>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  Owns
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Grower contracting
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Intake grading and rejection
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Harvest scheduling
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px" }}>Head of Sourcing</p>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  marginTop: "5px",
                }}
              >
                name to confirm
              </p>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  Owns
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Ration and animal health
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Weight-gain tracking
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Slaughter scheduling
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px" }}>Livestock & Feedlot Manager</p>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  marginTop: "5px",
                }}
              >
                name to confirm
              </p>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  Owns
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Certification pack
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Customs and border clearance
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.45", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    Reefer booking and sealing
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px" }}>Export & Logistics Lead</p>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  marginTop: "5px",
                }}
              >
                name to confirm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
