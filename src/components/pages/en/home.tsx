import Link from "next/link";
import { HeroWord } from "@/components/site/hero-word";

export function EnHomePage() {
  return (
    <div>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(40px,6vw,84px) clamp(22px,5vw,80px) clamp(30px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
            gap: "clamp(28px,4vw,56px)",
            alignItems: "end",
          }}
        >
          <div>
            <p
              data-reveal=""
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "11.5px",
                letterSpacing: "0.1em",
                color: "var(--ochre-deep)",
                marginBottom: "22px",
              }}
            >
              Kireka, Wakiso District · Uganda
            </p>
            <h1 style={{ fontSize: "clamp(38px,5.6vw,68px)", lineHeight: "1.02" }}>
              Ugandan produce and halal protein, moved from the field to{" "}
              <span style={{ color: "var(--accent)", whiteSpace: "nowrap" }}>
                <HeroWord lang="en" />
                <span
                  style={{
                    display: "inline-block",
                    width: "0.055em",
                    height: "0.82em",
                    background: "var(--accent)",
                    verticalAlign: "baseline",
                    marginLeft: "0.06em",
                    animation: "comafro-caret 1s step-end infinite",
                  }}
                />
              </span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-newsreader),Georgia,serif",
                fontSize: "clamp(18px,1.7vw,22px)",
                lineHeight: "1.5",
                color: "var(--ink-soft)",
                marginTop: "24px",
                maxWidth: "56ch",
              }}
            >
              Comafro Limited owns the whole chain: contracted growers and cattle supply in central Uganda, our own
              feedlot management, halal-standard processing, and the export documentation and freight that get a
              container onto the water.
            </p>
            <div data-btnrow="" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" }}>
              <Link
                className="hover-btn"
                href="/en/products"
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  background: "var(--ink)",
                  color: "var(--bg)",
                  padding: "13px 22px",
                }}
              >
                <span data-lbl-full="">See what we export</span>
                <span data-lbl-short="">See exports</span>
              </Link>
              <Link
                className="hover-btn-outline"
                href="/en/contact"
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  padding: "13px 22px",
                  border: "1px solid rgba(var(--ink-rgb),0.4)",
                }}
              >
                <span data-lbl-full="">Talk to our trade desk</span>
                <span data-lbl-short="">Talk to desk</span>
              </Link>
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
              <span>Chain of custody</span>
              <span>Comafro holds all four stages</span>
            </figcaption>
            <div style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    background: "var(--ochre)",
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    marginTop: "6px",
                  }}
                />
                <span style={{ flex: "1", width: "1px", background: "rgba(var(--ink-rgb),0.3)" }} />
              </div>
              <div style={{ paddingBottom: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ fontSize: "15.5px", fontWeight: "600" }}>Field</p>
                  <p
                    style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--muted)" }}
                  >
                    day 0
                  </p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.5", marginTop: "4px" }}>
                  Contracted gardens in Wakiso, Mpigi and Luweero. Graded and packed at our collection point.
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    background: "var(--ochre)",
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    marginTop: "6px",
                  }}
                />
                <span style={{ flex: "1", width: "1px", background: "rgba(var(--ink-rgb),0.3)" }} />
              </div>
              <div style={{ paddingBottom: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ fontSize: "15.5px", fontWeight: "600" }}>Feedlot</p>
                  <p
                    style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--muted)" }}
                  >
                    90–120 days
                  </p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.5", marginTop: "4px" }}>
                  Managed ration, individual weight tracking, veterinary cover and pen records.
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    background: "var(--ochre)",
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    marginTop: "6px",
                  }}
                />
                <span style={{ flex: "1", width: "1px", background: "rgba(var(--ink-rgb),0.3)" }} />
              </div>
              <div style={{ paddingBottom: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ fontSize: "15.5px", fontWeight: "600" }}>Processing</p>
                  <p
                    style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--muted)" }}
                  >
                    0–4 °C
                  </p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.5", marginTop: "4px" }}>
                  Halal slaughter under standing supervision, then chill, cut and carton to your spec.
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "14px 1fr", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    background: "var(--ochre)",
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    marginTop: "6px",
                  }}
                />
              </div>
              <div style={{ paddingBottom: "0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                  }}
                >
                  <p style={{ fontSize: "15.5px", fontWeight: "600" }}>Logistics</p>
                  <p
                    style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--muted)" }}
                  >
                    FOB Mombasa
                  </p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.5", marginTop: "4px" }}>
                  Certificates, customs and a sealed reefer booked to your port.
                </p>
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "16px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
              }}
            >
              One counterparty · one shipment file · one named contact
            </div>
          </figure>
        </div>
        <div style={{ borderTop: "1px solid rgba(var(--ink-rgb),0.16)" }}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              padding: "0 clamp(22px,5vw,80px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
            }}
          >
            <div style={{ padding: "18px 22px 18px 0", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                Export lines
              </p>
              <p style={{ fontSize: "15px", marginTop: "6px" }}>Matoke · Avocado · Pineapple · Halal beef</p>
            </div>
            <div style={{ padding: "18px 22px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                Primary markets
              </p>
              <p style={{ fontSize: "15px", marginTop: "6px" }}>Gulf states, Middle East, EU</p>
            </div>
            <div style={{ padding: "18px 22px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                Processing standard
              </p>
              <p style={{ fontSize: "15px", marginTop: "6px" }}>Halal slaughter, supervised</p>
            </div>
            <div style={{ padding: "18px 0 18px 22px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                Routing
              </p>
              <p style={{ fontSize: "15px", marginTop: "6px" }}>Entebbe air · Mombasa sea</p>
            </div>
          </div>
        </div>
      </section>
      <section data-band="" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(40px,5vw,72px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ fontSize: "clamp(26px,3vw,38px)", maxWidth: "28ch" }}>
              From a garden in Wakiso to a buyer&apos;s cold store in the Gulf
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "11.5px",
                color: "var(--sage)",
                maxWidth: "34ch",
              }}
            >
              Typical routing for consolidated sea freight. Air freight via Entebbe for avocado and pineapple in peak
              weeks.
            </p>
          </div>
          <div style={{ marginTop: "clamp(24px,3vw,40px)" }}>
            <svg
              viewBox="0 0 1000 230"
              role="img"
              aria-label="Export route from Kampala through Mombasa and Jebel Ali to Doha"
              style={{ width: "100%", height: "auto", overflow: "visible" }}
            >
              <path
                d="M110 165 Q 250 80 400 150 Q 545 215 690 115 Q 820 40 930 105"
                fill="none"
                strokeWidth="1.5"
                style={{ stroke: "rgba(var(--bg-rgb),0.28)" }}
              />
              <path
                d="M110 165 Q 250 80 400 150 Q 545 215 690 115 Q 820 40 930 105"
                fill="none"
                strokeWidth="2.5"
                strokeDasharray="18 242"
                strokeDashoffset="0"
                style={{ animation: "comafro-dash 5s linear infinite", stroke: "var(--ochre)" }}
              />
              <circle cx="110" cy="165" r="6" style={{ fill: "var(--ochre)" }} />
              <circle cx="400" cy="150" r="4.5" style={{ fill: "var(--bg)" }} />
              <circle cx="690" cy="115" r="4.5" style={{ fill: "var(--bg)" }} />
              <circle cx="930" cy="105" r="6" style={{ fill: "var(--ochre)" }} />
              <text
                x="110"
                y="196"
                fontSize="17"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-archivo), sans-serif" }}
              >
                Kampala
              </text>
              <text
                x="110"
                y="216"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                origin · packhouse
              </text>
              <text
                x="400"
                y="182"
                fontSize="17"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-archivo), sans-serif" }}
              >
                Mombasa
              </text>
              <text
                x="400"
                y="202"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                load port
              </text>
              <text
                x="690"
                y="88"
                fontSize="17"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-archivo), sans-serif" }}
              >
                Jebel Ali
              </text>
              <text
                x="690"
                y="68"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                transhipment
              </text>
              <text
                x="930"
                y="78"
                fontSize="17"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-archivo), sans-serif" }}
              >
                Doha / Riyadh
              </text>
              <text
                x="930"
                y="58"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                buyer market
              </text>
            </svg>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(40px,5vw,76px) clamp(22px,5vw,80px)" }}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: "11.5px",
              letterSpacing: "0.08em",
              color: "var(--ochre-deep)",
            }}
          >
            The chain · four links
          </p>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,44px)", marginTop: "14px", maxWidth: "30ch" }}>
            One company across every step, so nothing is lost between hands.
          </h2>
          <div
            style={{
              marginTop: "clamp(28px,3vw,48px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))",
              gap: "0",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <div style={{ padding: "24px 24px 28px 0", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                01 · Field
              </p>
              <h3 style={{ fontSize: "22px", marginTop: "12px" }}>Growers and cattle supply</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "10px" }}>
                Contracted smallholders and farm groups across Wakiso, Mpigi and Luweero. We agree varieties and harvest
                windows before planting, and we buy at the collection point.
              </p>
            </div>
            <div style={{ padding: "24px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                02 · Feedlot
              </p>
              <h3 style={{ fontSize: "22px", marginTop: "12px" }}>Finishing on programme</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "10px" }}>
                Cattle enter a managed 90–120 day ration with weight tracking, veterinary cover and traceable pen
                records — so carcass weight and grade are predictable, not a gamble.
              </p>
            </div>
            <div style={{ padding: "24px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                03 · Processing
              </p>
              <h3 style={{ fontSize: "22px", marginTop: "12px" }}>Halal slaughter and pack</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "10px" }}>
                Slaughterhouse design and operation to halal requirements — supervised slaughter, separated clean and
                dirty flows, chilling, cutting and carton packing to the buyer&apos;s specification.
              </p>
            </div>
            <div style={{ padding: "24px 0 28px 24px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--ochre)" }}>
                04 · Logistics
              </p>
              <h3 style={{ fontSize: "22px", marginTop: "12px" }}>Documents and freight</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "10px" }}>
                Phytosanitary and halal certification, certificate of origin, customs clearance, reefer booking and
                consolidation — one set of paperwork, one point of contact.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "28px" }}>
            <Link
              href="/en/services"
              style={{
                fontSize: "15px",
                fontWeight: "500",
                borderBottom: "1px solid var(--ochre)",
                paddingBottom: "2px",
              }}
            >
              Read how each step works
            </Link>
          </p>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)" }}>What we have actually done</h2>
            <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", color: "var(--muted)" }}>
              Operating record · updated quarterly
            </p>
          </div>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--accent)" }}>
                2026 · Q3
              </span>
              <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                Second reefer programme agreed for matoke into the Gulf; Arabic shipping marks standardised across all
                meat cartons.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                2026 · Q2
              </span>
              <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                Feedlot pen records moved to individual weight tracking, giving carcass-weight forecasting inside a 5%
                band.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                2026 · Q1
              </span>
              <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                First consolidated trial shipment cleared Entebbe — avocado and pineapple, one pallet, accepted on
                arrival without claim.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                2025 · Q4
              </span>
              <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                Halal slaughter procedure written and put under standing supervision by a recognised Islamic authority.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "96px 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}>
                2025 · Q2
              </span>
              <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                Comafro Limited incorporated in Uganda; grower contracting begins in Wakiso and Mpigi.
              </span>
            </div>
          </div>
          <div
            data-stats=""
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(180px,100%),1fr))",
              gap: "clamp(18px,3vw,36px)",
              marginTop: "clamp(28px,3.5vw,48px)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(40px,4.5vw,58px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                4
              </p>
              <p style={{ fontSize: "14.5px", color: "var(--muted)", marginTop: "8px", maxWidth: "22ch" }}>
                export lines under written specification
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(40px,4.5vw,58px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                120
              </p>
              <p style={{ fontSize: "14.5px", color: "var(--muted)", marginTop: "8px", maxWidth: "22ch" }}>
                days maximum feedlot finishing programme
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(40px,4.5vw,58px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                4
              </p>
              <p style={{ fontSize: "14.5px", color: "var(--muted)", marginTop: "8px", maxWidth: "22ch" }}>
                sourcing districts around Kampala
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(40px,4.5vw,58px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                1
              </p>
              <p style={{ fontSize: "14.5px", color: "var(--muted)", marginTop: "8px", maxWidth: "22ch" }}>
                working day to answer a trade enquiry
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(40px,5vw,76px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(28px,4vw,60px)",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,36px)", maxWidth: "24ch" }}>
              What a first order with us looks like
            </h2>
            <p
              style={{
                fontFamily: "var(--font-newsreader),Georgia,serif",
                fontSize: "19px",
                lineHeight: "1.55",
                color: "var(--ink-soft)",
                marginTop: "18px",
              }}
            >
              We are a young company and we do not ask buyers to take that on faith. A first order starts small, runs on
              documented specification, and is inspected before it leaves Uganda.
            </p>
            <div
              style={{
                marginTop: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "12px",
                    color: "var(--muted)",
                    minWidth: "48px",
                  }}
                >
                  Step 1
                </span>
                <span style={{ fontSize: "15px" }}>
                  You send product, volume, packing and destination. We reply with a quoted FOB or CFR price and a lead
                  time.
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "12px",
                    color: "var(--muted)",
                    minWidth: "48px",
                  }}
                >
                  Step 2
                </span>
                <span style={{ fontSize: "15px" }}>
                  We agree a written specification: variety, grade, size count, carton, temperature, and the
                  certificates you need at your port.
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "12px",
                    color: "var(--muted)",
                    minWidth: "48px",
                  }}
                >
                  Step 3
                </span>
                <span style={{ fontSize: "15px" }}>
                  Trial shipment — usually one pallet by air or a single reefer — with photos and weights at loading.
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "12px",
                    color: "var(--muted)",
                    minWidth: "48px",
                  }}
                >
                  Step 4
                </span>
                <span style={{ fontSize: "15px" }}>
                  On acceptance, we move to a standing weekly or monthly programme against a supply contract.
                </span>
              </div>
            </div>
          </div>
          <div style={{ background: "var(--line-warm)", padding: "clamp(24px,3vw,36px)", alignSelf: "start" }}>
            <h3 style={{ fontSize: "20px" }}>Documentation we prepare per shipment</h3>
            <ul
              style={{
                margin: "18px 0 0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <li style={{ fontSize: "15px", display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--ochre)" }}>·</span>
                Phytosanitary certificate (fresh produce)
              </li>
              <li style={{ fontSize: "15px", display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--ochre)" }}>·</span>
                Halal slaughter certificate (meat)
              </li>
              <li style={{ fontSize: "15px", display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--ochre)" }}>·</span>
                Veterinary health certificate
              </li>
              <li style={{ fontSize: "15px", display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--ochre)" }}>·</span>
                Certificate of origin
              </li>
              <li style={{ fontSize: "15px", display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--ochre)" }}>·</span>
                Commercial invoice and packing list
              </li>
              <li style={{ fontSize: "15px", display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--ochre)" }}>·</span>
                Bill of lading or air waybill
              </li>
            </ul>
            <p
              style={{
                fontSize: "13.5px",
                lineHeight: "1.5",
                color: "var(--muted)",
                marginTop: "20px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                paddingTop: "16px",
              }}
            >
              Additional market-specific documents — including importer-country halal body attestation — are arranged on
              request.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(40px,5vw,76px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
            gap: "clamp(24px,3vw,44px)",
            alignItems: "center",
          }}
        >
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
              <span>Loading plan · 40′ HC reefer</span>
              <span>cartons per pallet shown</span>
            </figcaption>
            <div style={{ border: "2px solid var(--ink)", padding: "8px", background: "var(--bg)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)", gap: "4px" }}>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--line-warm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                >
                  54
                </div>
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--paper)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                />
                <div
                  style={{
                    aspectRatio: "1/1.15",
                    border: "1px solid rgba(var(--ink-rgb),0.3)",
                    background: "var(--paper)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "9px",
                    color: "var(--muted)",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginTop: "8px",
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "10.5px",
                color: "var(--muted)",
              }}
            >
              <span>door</span>
              <span>← 12.03 m →</span>
              <span>bulkhead</span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(120px,100%),1fr))",
                gap: "14px",
                marginTop: "18px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
              }}
            >
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "10.5px", color: "var(--muted)" }}>
                  Pallets
                </p>
                <p style={{ fontSize: "17px", marginTop: "3px" }}>20</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "10.5px", color: "var(--muted)" }}>
                  Cartons
                </p>
                <p style={{ fontSize: "17px", marginTop: "3px" }}>1,080</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "10.5px", color: "var(--muted)" }}>
                  Net weight
                </p>
                <p style={{ fontSize: "17px", marginTop: "3px" }}>4,320 kg</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "10.5px", color: "var(--muted)" }}>
                  Set point
                </p>
                <p style={{ fontSize: "17px", marginTop: "3px" }}>5 °C</p>
              </div>
            </div>
          </figure>
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,36px)", maxWidth: "26ch" }}>Ready to price a container?</h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "var(--ink-soft)",
                marginTop: "16px",
                maxWidth: "48ch",
              }}
            >
              Tell us the product, the volume and the port. You will get a specification sheet and an indicative price
              from our Kampala desk, not a brochure.
            </p>
            <div data-btnrow="" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "26px" }}>
              <Link
                className="hover-btn"
                href="/en/contact"
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  background: "var(--ink)",
                  color: "var(--bg)",
                  padding: "13px 22px",
                }}
              >
                <span data-lbl-full="">Send an enquiry</span>
                <span data-lbl-short="">Enquire</span>
              </Link>
              <Link
                className="hover-btn-outline"
                href="/en/resources"
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  padding: "13px 22px",
                  border: "1px solid rgba(var(--ink-rgb),0.4)",
                }}
              >
                <span data-lbl-full="">Request the buyer pack</span>
                <span data-lbl-short="">Buyer pack</span>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                gap: "0",
                flexWrap: "wrap",
                marginTop: "28px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <Link
                className="hover-accent"
                href="/en/quality"
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "12px",
                  padding: "12px 18px 12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0)",
                }}
              >
                Quality & compliance
              </Link>
              <Link
                className="hover-accent"
                href="/en/seasonality"
                style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", padding: "12px 18px" }}
              >
                Seasonality
              </Link>
              <Link
                className="hover-accent"
                href="/en/sourcing"
                style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", padding: "12px 18px" }}
              >
                Sourcing network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
