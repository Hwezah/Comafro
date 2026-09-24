import Link from "next/link";

export function EnResourcesPage() {
  return (
    <div>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)" }}>
          <p
            style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: "11.5px",
              letterSpacing: "0.08em",
              color: "var(--ochre-deep)",
            }}
          >
            Buyer resources
          </p>
          <h1 style={{ fontSize: "clamp(32px,4.4vw,52px)", marginTop: "14px", maxWidth: "26ch" }}>
            Everything your procurement and QA teams will ask for.
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.65",
              color: "var(--ink-soft)",
              marginTop: "18px",
              maxWidth: "54ch",
            }}
          >
            Request any of these and we send them the same working day. Documents are shared directly rather than
            published, so we know who holds our certificates.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
              gap: "0",
              marginTop: "clamp(24px,3vw,40px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <div
              style={{
                padding: "22px 24px 26px 0",
                borderRight: "1px solid rgba(var(--ink-rgb),0.16)",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                PDF · per line
              </p>
              <h3 style={{ fontSize: "19px", marginTop: "10px" }}>Product specification sheets</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "9px" }}>
                Grade, size count, maturity criteria, carton dimensions, pallet configuration and labelling for each of
                the four lines.
              </p>
            </div>
            <div
              style={{
                padding: "22px 24px 26px",
                borderRight: "1px solid rgba(var(--ink-rgb),0.16)",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                PDF
              </p>
              <h3 style={{ fontSize: "19px", marginTop: "10px" }}>Container loading plans</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "9px" }}>
                Cartons per pallet, pallets per 40&apos; HC reefer, stacking and airflow diagrams, and expected net
                weight per container.
              </p>
            </div>
            <div style={{ padding: "22px 0 26px 24px", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                PDF
              </p>
              <h3 style={{ fontSize: "19px", marginTop: "10px" }}>Certificate pack sample</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "9px" }}>
                A redacted example shipment file — phytosanitary, halal, veterinary, origin, invoice, packing list, bill
                of lading.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px 0", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                PDF
              </p>
              <h3 style={{ fontSize: "19px", marginTop: "10px" }}>Company credentials</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "9px" }}>
                Certificate of incorporation, URA TIN, export registration and bank reference details for KYC and vendor
                onboarding.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                XLSX
              </p>
              <h3 style={{ fontSize: "19px", marginTop: "10px" }}>Price indication sheet</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "9px" }}>
                Current indicative FOB and CFR levels by line and destination, with the freight and certification
                components shown separately.
              </p>
            </div>
            <div style={{ padding: "22px 0 26px 24px" }}>
              <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11px", color: "var(--muted)" }}>
                PDF · عربي
              </p>
              <h3 style={{ fontSize: "19px", marginTop: "10px" }}>Arabic company profile</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "9px" }}>
                Full company and product profile in Arabic for Gulf importers and their halal authorities.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "26px" }}>
            <Link
              className="hover-btn"
              href="/en/contact"
              data-btn-solo=""
              style={{
                fontSize: "15px",
                fontWeight: "500",
                background: "var(--ink)",
                color: "var(--bg)",
                padding: "13px 22px",
                display: "inline-block",
              }}
            >
              <span data-lbl-full="">Request the buyer pack</span>
              <span data-lbl-short="">Buyer pack</span>
            </Link>
          </p>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>Trading terms, plainly</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: "clamp(20px,3vw,44px)",
              marginTop: "clamp(22px,3vw,34px)",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--ochre-deep)",
                }}
              >
                Incoterms
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "9px" }}>
                FOB Mombasa as standard. CFR and CIF to Gulf and European ports on request; EXW Kampala if you have your
                own forwarder.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--ochre-deep)",
                }}
              >
                Payment
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "9px" }}>
                Trial shipments on 50% advance, balance against documents. Established programmes on irrevocable L/C at
                sight or documents against payment.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--ochre-deep)",
                }}
              >
                Claims
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "9px" }}>
                Quality claims accepted within 48 hours of discharge with photographs and the temperature trace. Where
                the fault is ours, we credit — we do not argue.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--ochre-deep)",
                }}
              >
                Currency
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "9px" }}>
                Quoted and invoiced in USD. EUR on request for European buyers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>Questions buyers ask us</h2>
          <div
            style={{
              marginTop: "clamp(22px,3vw,32px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
              maxWidth: "900px",
            }}
          >
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>
                You are two years old. Why should we risk a container with you?
              </p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "8px" }}>
                Start with a trial pallet by air, on 50% advance, with photographs and weights at loading and a
                third-party inspector if you want one. Our downside on a first order is deliberately larger than yours.
              </p>
            </div>
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>Whose halal certification do you carry?</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "8px" }}>
                Slaughter is supervised and certified locally by a recognised Islamic authority, and where your market
                requires attestation from its own halal body we arrange that before the consignment is booked. Name your
                certifier and we will work to them.
              </p>
            </div>
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>Can you hold a weekly programme, not just one load?</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "8px" }}>
                On matoke and beef, yes, year-round. On avocado and pineapple we commit inside the peak windows on the
                calendar and will not promise programme volume outside them.
              </p>
            </div>
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>Who clears the goods at origin?</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "8px" }}>
                We do — customs, phytosanitary, veterinary and origin documentation are ours. You receive one shipment
                file and deal with one contact.
              </p>
            </div>
            <div style={{ padding: "18px 0" }}>
              <p style={{ fontSize: "17px", fontWeight: "500" }}>Will you pack under our brand?</p>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "8px" }}>
                Yes. Cartons, punnets and labels to your artwork, with Arabic marks and destination declarations applied
                at packing. Print lead time is about two weeks on a first run.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
