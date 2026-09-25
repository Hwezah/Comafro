import Link from "next/link";

export function EnQualityPage() {
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
            Quality & compliance
          </p>
          <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", marginTop: "14px", maxWidth: "26ch" }}>
            The part of the file your QA team will read first.
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
            Everything below is a procedure we run, not an aspiration. Where a control is still being built we have said
            so — a buyer can verify each line on a site visit.
          </p>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,60px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>The halal procedure, step by step</h2>
          <div style={{ marginTop: "clamp(22px,3vw,36px)", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
            <div
              data-steprow=""
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr 1.1fr",
                gap: "clamp(12px,2.5vw,28px)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                01
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>Lairage and rest</span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)" }}>
                Cattle rest with water access before slaughter. Handling is low-stress and without prodding; the pen
                record follows the animal.
              </span>
            </div>
            <div
              data-steprow=""
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr 1.1fr",
                gap: "clamp(12px,2.5vw,28px)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                02
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>Ante-mortem inspection</span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)" }}>
                Every animal inspected by the attending veterinary officer before it enters the hall. Rejections are
                recorded and removed from the consignment.
              </span>
            </div>
            <div
              data-steprow=""
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr 1.1fr",
                gap: "clamp(12px,2.5vw,28px)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                03
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>Supervised slaughter</span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)" }}>
                Performed by a trained Muslim slaughterman facing the qibla, with the invocation, in a single cut
                severing trachea, oesophagus and both vessels. A recognised Islamic authority supervises and signs.
              </span>
            </div>
            <div
              data-steprow=""
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr 1.1fr",
                gap: "clamp(12px,2.5vw,28px)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                04
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>Bleed-out and dressing</span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)" }}>
                Full bleed period timed and logged before dressing begins. Clean and dirty flows are physically
                separated; no cross-traffic between them.
              </span>
            </div>
            <div
              data-steprow=""
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr 1.1fr",
                gap: "clamp(12px,2.5vw,28px)",
                padding: "16px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                05
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>Post-mortem and grading</span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)" }}>
                Carcass and offal inspected, stamped and graded. Weight recorded against the pen record, closing the
                traceability loop.
              </span>
            </div>
            <div
              data-steprow=""
              style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr 1.1fr",
                gap: "clamp(12px,2.5vw,28px)",
                padding: "16px 0",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                06
              </span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>Chill, cut, certify</span>
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)" }}>
                Chilled to core temperature before cutting, packed to your specification, and released with the halal
                and veterinary certificates for your market.
              </span>
            </div>
          </div>
          <div data-band=""
            style={{
              background: "var(--ink)",
              color: "var(--bg)",
              padding: "clamp(20px,3vw,30px)",
              marginTop: "clamp(24px,3vw,36px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: "clamp(18px,3vw,36px)",
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--sage)" }}>
                On stunning
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", marginTop: "9px", color: "var(--sage-pale)" }}>
                Our default is slaughter without stunning. Where an importing market or certifier requires reversible
                stunning, we will operate to that standard instead — stated in writing before the consignment is booked,
                never changed silently.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--sage)" }}>
                On segregation
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", marginTop: "9px", color: "var(--sage-pale)" }}>
                No non-halal product passes through the line, so there is no cross-contamination case to make. Knives,
                chillers and cartons are dedicated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s3" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,60px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>Cold chain, recorded</h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.65",
              color: "var(--ink-soft)",
              marginTop: "14px",
              maxWidth: "58ch",
            }}
          >
            Rejected containers almost always come down to temperature, not quality at origin. So we log it at every
            handover and give you the record with the shipment file.
          </p>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "680px", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr
                  style={{
                    borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.35)",
                  }}
                >
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px 11px 0",
                    }}
                  >
                    Handover point
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px",
                    }}
                  >
                    Target
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px",
                    }}
                  >
                    Recorded by
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 0 11px 14px",
                    }}
                  >
                    Evidence to buyer
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15px", fontWeight: "500", padding: "13px 14px 13px 0" }}>
                    Harvest to collection
                  </td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    &lt; 6 hrs
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Field supervisor
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Timed intake sheet
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Pre-cooling</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    to product spec
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>Packhouse log</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Pulp temperature readings
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Loading</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    set point ± 1 °C
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Reefer set & seal
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Photos, seal no., set point
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "15px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Transit</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    continuous
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Container data logger
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Downloadable trace on arrival
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="s4">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,60px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>Standards and registrations</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(250px,100%),1fr))",
              gap: "0",
              marginTop: "clamp(22px,3vw,34px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <div style={{ padding: "22px 24px 22px 0", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>In place</p>
              <ul
                style={{
                  margin: "12px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                }}
              >
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Ugandan company registration & URA TIN
                </li>
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  MAAIF phytosanitary inspection per consignment
                </li>
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Veterinary health certification for meat
                </li>
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Halal slaughter supervision & per-consignment certificate
                </li>
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  Certificate of origin via the national chamber
                </li>
              </ul>
            </div>
            <div style={{ padding: "22px 24px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>In progress</p>
              <ul
                style={{
                  margin: "12px 0 0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                }}
              >
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  Documented HACCP plan for the processing line
                </li>
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  GlobalG.A.P. group certification for contracted growers
                </li>
                <li style={{ fontSize: "15px", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  Own cold store at the collection point
                </li>
              </ul>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11px",
                  color: "var(--muted)",
                  marginTop: "14px",
                }}
              >
                Target dates shared on request.
              </p>
            </div>
            <div style={{ padding: "22px 0 22px 24px" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>Audit & inspection</p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "12px" }}>
                We accept third-party pre-shipment inspection at the buyer&apos;s cost and will hold a container for
                your nominated surveyor. Site audits of the feedlot and processing line are welcome with a week&apos;s
                notice.
              </p>
              <p style={{ marginTop: "16px" }}>
                <Link
                  href="/en/contact"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    borderBottom: "1px solid var(--ochre)",
                    paddingBottom: "2px",
                  }}
                >
                  Arrange an audit
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
