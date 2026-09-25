"use client";

import { useState } from "react";
import { Select } from "@/components/site/select";

export function EnContactPage() {
  const [sent, setSent] = useState(false);
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const resetForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(false);
  };

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
            Trade desk
          </p>
          <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", marginTop: "14px", maxWidth: "24ch" }}>
            Tell us the product, the volume and the port.
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
            Enquiries are answered from Kampala within one working day. We reply with a specification sheet and an
            indicative price — and we will tell you plainly if a line or a volume is beyond us right now.
          </p>
        </div>
      </section>
      <section id="s2">
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,60px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(28px,4vw,60px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "24px" }}>Kampala office</h2>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Address
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>
                  Kireka, Wakiso District
                  <br />
                  Kampala metropolitan area, Uganda
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Trade enquiries
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>trade@comafro.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Logistics
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>logistics@comafro.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Telephone
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>+256 773 828 552</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "20px",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  WhatsApp
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>+256 773 828 552</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", padding: "14px 0" }}>
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Hours
                </span>
                <span style={{ fontSize: "15px", textAlign: "right" }}>Mon–Sat, 08:00–18:00 EAT (UTC+3)</span>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.55", color: "var(--muted)", marginTop: "18px" }}>
              Arabic-speaking contact available for Gulf buyers. Site visits to the feedlot and processing line can be
              arranged with a week&apos;s notice.
            </p>
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
                <span>Getting to us</span>
                <span>Kireka, Wakiso District</span>
              </figcaption>
              <svg
                viewBox="0 0 420 200"
                role="img"
                aria-label="Kireka sits on the Jinja road east of Kampala, with Entebbe airport to the south-west"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <line x1="20" y1="70" x2="400" y2="70" strokeWidth="3" style={{ stroke: "var(--ink)" }} />
                <text
                  x="20"
                  y="56"
                  fontSize="10"
                  style={{ fill: "var(--muted)", fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  Kampala–Jinja road
                </text>
                <line
                  x1="120"
                  y1="70"
                  x2="60"
                  y2="160"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  style={{ stroke: "var(--ink)" }}
                />
                <g fontSize="13" style={{ fontFamily: "var(--font-archivo), sans-serif", fill: "var(--ink)" }}>
                  <circle cx="120" cy="70" r="5" style={{ fill: "var(--ink-soft)" }} />
                  <text x="120" y="98" textAnchor="middle">
                    Kampala CBD
                  </text>
                  <circle cx="228" cy="70" r="8" style={{ fill: "var(--ochre)" }} />
                  <text x="228" y="102" textAnchor="middle" fontSize="15" fontWeight="600">
                    Kireka
                  </text>
                  <circle cx="380" cy="70" r="5" style={{ fill: "var(--ink-soft)" }} />
                  <text x="380" y="98" textAnchor="middle">
                    Mukono
                  </text>
                  <circle cx="60" cy="160" r="5" style={{ fill: "var(--ink-soft)" }} />
                  <text x="60" y="184" textAnchor="middle">
                    Entebbe (EBB)
                  </text>
                </g>
                <g
                  fontSize="10"
                  textAnchor="middle"
                  style={{ fill: "var(--muted)", fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  <text x="174" y="62">
                    10 km
                  </text>
                  <text x="304" y="62">
                    12 km
                  </text>
                  <text x="62" y="120">
                    45 km
                  </text>
                  <text x="228" y="120">
                    office & trade desk
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
                Schematic, not to scale · exact pin sent with your visit confirmation
              </p>
            </figure>
          </div>
          <div style={{ background: "var(--line-warm)", padding: "clamp(22px,3vw,36px)" }}>
            {sent && (
              <>
                <div>
                  <h2 style={{ fontSize: "24px" }}>Enquiry received</h2>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "14px" }}>
                    Thank you. Our trade desk will reply from a comafro.com address within one working day, East Africa
                    time.
                  </p>
                  <p style={{ marginTop: "20px" }}>
                    <a
                      href="#"
                      onClick={resetForm}
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        borderBottom: "1px solid var(--ochre)",
                        paddingBottom: "2px",
                      }}
                    >
                      Send another enquiry
                    </a>
                  </p>
                </div>
              </>
            )}{" "}
            {!sent && (
              <>
                <form onSubmit={submitForm}>
                  <h2 style={{ fontSize: "24px" }}>Trade enquiry</h2>
                  <p style={{ fontSize: "14.5px", lineHeight: "1.55", color: "var(--muted)", marginTop: "10px" }}>
                    Fields marked with a dot are needed for us to quote.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
                      gap: "16px",
                      marginTop: "22px",
                    }}
                  >
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Name ·
                      </span>
                      <input
                        name="name"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Company ·
                      </span>
                      <input
                        name="company"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Email ·
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Country / market ·
                      </span>
                      <input
                        name="country"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Product interest ·
                      </span>
                      <Select
                        name="product"
                        options={[
                          "Matoke",
                          "Avocado",
                          "Pineapple",
                          "Halal beef",
                          "Mixed programme",
                          "Feedlot or abattoir services",
                        ]}
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Volume & frequency
                      </span>
                      <input
                        name="volume"
                        placeholder="e.g. 1×40' reefer monthly"
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Destination port
                      </span>
                      <input
                        name="port"
                        placeholder="e.g. Jebel Ali, Jeddah, Rotterdam"
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-jetbrains),monospace",
                          fontSize: "11.5px",
                          color: "var(--muted)",
                        }}
                      >
                        Incoterms preference
                      </span>
                      <Select
                        name="incoterms"
                        options={["FOB", "CFR", "CIF", "Advise me"]}
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                        }}
                      />
                    </label>
                  </div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "16px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "11.5px",
                        color: "var(--muted)",
                      }}
                    >
                      Specification notes
                    </span>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Grade, size count, packing, certification required at your port"
                      style={{
                        border: "1px solid rgba(var(--ink-rgb),0.35)",
                        background: "var(--paper)",
                        padding: "11px 12px",
                        fontSize: "15px",
                        resize: "vertical",
                      }}
                    />
                  </label>{" "}
                  <button
                    className="hover-btn"
                    type="submit"
                    data-btn-solo=""
                    style={{
                      marginTop: "22px",
                      background: "var(--ink)",
                      color: "var(--bg)",
                      border: "0",
                      padding: "14px 24px",
                      fontSize: "15px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                  >
                    Send enquiry
                  </button>{" "}
                  <p style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--muted)", marginTop: "14px" }}>
                    This form is a demonstration and does not yet deliver mail — connect it to the trade desk inbox
                    before launch.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
