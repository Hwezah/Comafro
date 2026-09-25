import Link from "next/link";

export function EnSourcingPage() {
  return (
    <div>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,68px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(26px,4vw,56px)",
            alignItems: "end",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "11.5px",
                letterSpacing: "0.08em",
                color: "var(--ochre-deep)",
              }}
            >
              Sourcing network
            </p>
            <h1 style={{ fontSize: "clamp(32px,4.4vw,52px)", marginTop: "14px", maxWidth: "24ch" }}>
              The farms behind the container.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-newsreader),Georgia,serif",
                fontSize: "19px",
                lineHeight: "1.55",
                color: "var(--ink-soft)",
                marginTop: "18px",
                maxWidth: "52ch",
              }}
            >
              We buy from contracted smallholders and farm groups inside a day&apos;s drive of Kampala — close enough
              that produce is graded and cooling the same day it is cut.
            </p>
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
              <span>District supply matrix</span>
              <span>km from Kireka</span>
            </figcaption>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 0.8fr repeat(4,1fr)",
                gap: "0",
                alignItems: "stretch",
              }}
            >
              <span />
              <span />
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                Matoke
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                Avocado
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                Pineapple
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "10px",
                  color: "var(--muted)",
                  textAlign: "center",
                  paddingBottom: "10px",
                }}
              >
                Passion
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "11px 8px 11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Wakiso
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                10–30
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "11px 8px 11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Mpigi
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                35–60
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "11px 8px 11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Luweero
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                60–90
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "11px 8px 11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Mubende
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                140–180
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    background: "var(--ochre)",
                    display: "block",
                  }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "11px 8px 11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Nakasongola
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                120–160
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
              <span
                style={{
                  padding: "11px 0",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ width: "11px", height: "1px", background: "rgba(var(--ink-rgb),0.3)", display: "block" }}
                />
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "10.5px",
                color: "var(--muted)",
                marginTop: "14px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
              }}
            >
              Nakasongola and the western corridor supply store cattle for finishing, not produce
            </p>
          </figure>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>Catchment</h2>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "720px", borderCollapse: "collapse", textAlign: "left" }}>
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
                    District
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
                    Distance from Kireka
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
                    Supplies
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
                    Arrangement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Wakiso</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    0–30 km
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Matoke, pineapple
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Contracted smallholders
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Mpigi</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    35–60 km
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Matoke, passion fruit
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Farm group agreement
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Luweero</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    60–90 km
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Pineapple, avocado
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Contracted smallholders
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "500", padding: "13px 14px 13px 0" }}>Mubende</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    140–180 km
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>Avocado (Hass)</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Commercial orchards
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "15.5px", fontWeight: "500", padding: "13px 14px 13px 0" }}>
                    Cattle corridor
                  </td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "13px 14px" }}>
                    Mbarara · Nakasongola
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    Store cattle for finishing
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 0 13px 14px" }}>
                    Market purchase, vetted
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="s3" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
            gap: "clamp(26px,4vw,56px)",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>What a grower gets from us</h2>
            <div style={{ marginTop: "20px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>A price agreed before planting</p>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "5px" }}>
                  Not a middleman&apos;s price on the day, discovered at the roadside.
                </p>
              </div>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>Collection at the farm gate</p>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "5px" }}>
                  We come to the garden. Transport risk is ours, not the farmer&apos;s.
                </p>
              </div>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>Payment on delivery</p>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "5px" }}>
                  Mobile money at intake, against a weighed and signed sheet.
                </p>
              </div>
              <div style={{ padding: "15px 0" }}>
                <p style={{ fontSize: "16px", fontWeight: "500" }}>Guidance on export grade</p>
                <p style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--ink-soft)", marginTop: "5px" }}>
                  Variety choice, spacing, harvest maturity and handling — so more of the crop makes the carton.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)" }}>Why that matters to a buyer</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)", marginTop: "16px" }}>
              Supply reliability in East Africa is a farmer-relations problem before it is a logistics problem. Growers
              who are paid fairly and on time sell to you again next season; growers squeezed on price divert the best
              fruit to whoever knocks first. Our contracting is the reason we can commit to a standing programme rather
              than a spot load.
            </p>
            <div style={{ background: "var(--line-warm)", padding: "clamp(20px,3vw,28px)", marginTop: "22px" }}>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "11.5px",
                  color: "var(--ochre-deep)",
                }}
              >
                Traceability
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "10px" }}>
                Every intake sheet carries the grower&apos;s name and parish, and the carton carries the intake batch.
                If a claim arises at your port, we can name the garden it came from — and go back to it.
              </p>
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
                <span>Traceability</span>
                <span>one code, five handovers</span>
              </figcaption>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid rgba(var(--ink-rgb),0.25)",
                      background: "var(--bg)",
                      padding: "11px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>Garden</span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "11.5px",
                        color: "var(--muted)",
                      }}
                    >
                      Nakawuka parish
                    </span>
                  </div>
                </div>
                <div
                  style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginLeft: "24px" }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid rgba(var(--ink-rgb),0.25)",
                      background: "var(--bg)",
                      padding: "11px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>Intake sheet</span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "11.5px",
                        color: "var(--muted)",
                      }}
                    >
                      weighed + signed
                    </span>
                  </div>
                </div>
                <div
                  style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginLeft: "24px" }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid rgba(var(--ink-rgb),0.25)",
                      background: "var(--bg)",
                      padding: "11px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600" }}>Batch code</span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "11.5px",
                        color: "var(--ochre)",
                      }}
                    >
                      UG-WK-0412
                    </span>
                  </div>
                </div>
                <div
                  style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginLeft: "24px" }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid rgba(var(--ink-rgb),0.25)",
                      background: "var(--bg)",
                      padding: "11px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>Carton</span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "11.5px",
                        color: "var(--muted)",
                      }}
                    >
                      code printed
                    </span>
                  </div>
                </div>
                <div
                  style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginLeft: "24px" }}
                />
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      flex: "1",
                      border: "1px solid rgba(var(--ink-rgb),0.25)",
                      background: "var(--bg)",
                      padding: "11px 14px",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "400" }}>Container</span>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains),monospace",
                        fontSize: "11.5px",
                        color: "var(--muted)",
                      }}
                    >
                      sealed + listed
                    </span>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains),monospace",
                  fontSize: "10.5px",
                  color: "var(--muted)",
                  marginTop: "14px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                }}
              >
                A claim at your port resolves back to the garden it came from
              </p>
            </figure>
          </div>
        </div>
      </section>
      <section id="s4">
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)",
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(22px,2.6vw,30px)", maxWidth: "30ch" }}>
              Farming near Kampala and want a contracted buyer?
            </h2>
            <p
              style={{
                fontSize: "15.5px",
                lineHeight: "1.6",
                color: "var(--ink-soft)",
                marginTop: "12px",
                maxWidth: "52ch",
              }}
            >
              We are adding grower capacity on avocado and pineapple. Tell us your district, acreage and variety.
            </p>
          </div>
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
            }}
          >
            <span data-lbl-full="">Register as a grower</span>
            <span data-lbl-short="">Register</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
