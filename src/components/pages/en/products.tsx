import Link from "next/link";

export function EnProductsPage() {
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
            Export catalogue
          </p>
          <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", marginTop: "14px", maxWidth: "24ch" }}>
            Four lines, specified the way buyers order them.
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.65",
              color: "var(--ink-soft)",
              marginTop: "18px",
              maxWidth: "56ch",
            }}
          >
            Volumes and calendars below are indicative for a standard programme. Variety, grade, count and packing are
            confirmed in a written specification before pricing.
          </p>
          <div style={{ marginTop: "clamp(26px,3.5vw,44px)", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "760px", borderCollapse: "collapse", textAlign: "left" }}>
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
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px 11px 0",
                    }}
                  >
                    Line
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px",
                    }}
                  >
                    Variety
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px",
                    }}
                  >
                    Peak window
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px",
                    }}
                  >
                    Pack
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px",
                    }}
                  >
                    Temp
                  </th>
                  <th
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 0 11px 14px",
                    }}
                  >
                    Indicative MOQ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "16px", fontWeight: "500", padding: "14px 14px 14px 0" }}>Matoke</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>EA Highland</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Dec–Mar</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Ventilated carton</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "14px" }}>
                    13–14 °C
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px 0 14px 14px" }}>
                    1 pallet air · 1×40&apos; sea
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "16px", fontWeight: "500", padding: "14px 14px 14px 0" }}>Avocado</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Hass · Fuerte</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Feb–Sep</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>4 kg single layer</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "14px" }}>
                    5–7 °C
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px 0 14px 14px" }}>
                    1 pallet air · 1×40&apos; sea
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "16px", fontWeight: "500", padding: "14px 14px 14px 0" }}>Pineapple</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Sugarloaf · Cayenne</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>May–Aug · Nov–Jan</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>
                    Telescopic, 6–10 fruit
                  </td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "14px" }}>
                    7–8 °C
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px 0 14px 14px" }}>
                    1×40&apos; sea
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "16px", fontWeight: "500", padding: "14px 14px 14px 0" }}>Halal beef</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>
                    Ankole · Boran cross
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Year-round</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px" }}>Vacuum in carton</td>
                  <td style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "14px", padding: "14px" }}>
                    0–4 °C · −18 °C
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "14px 0 14px 14px" }}>
                    1×40&apos; reefer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontFamily: "var(--font-jetbrains),monospace",
              fontSize: "11px",
              color: "var(--muted)",
              marginTop: "14px",
            }}
          >
            Full grade and size-count tables per line are in the specification sheet.{" "}
            <Link href="/en/seasonality" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.4)" }}>
              See the month-by-month calendar
            </Link>
          </p>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
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
              <span>Pack forms</span>
              <span>cut green, shipped hard</span>
            </figcaption>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "0",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
              }}
            >
              <div style={{ padding: "16px 14px 16px 0", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <div style={{ display: "flex", gap: "4px", alignItems: "flex-end", minHeight: "34px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <p style={{ fontSize: "14.5px", fontWeight: "600", marginTop: "12px" }}>Whole bunch</p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  18–35 kg
                </p>
              </div>
              <div style={{ padding: "16px 14px", borderRight: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "flex-end", minHeight: "34px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <p style={{ fontSize: "14.5px", fontWeight: "600", marginTop: "12px" }}>Hands</p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  4–7 kg carton
                </p>
              </div>
              <div style={{ padding: "16px 0 16px 14px" }}>
                <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", minHeight: "34px" }}>
                  <div style={{ display: "flex", gap: "2px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        width: "5px",
                        height: "26px",
                        borderRadius: "3px",
                        background: "var(--ink)",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
                <p style={{ fontSize: "14.5px", fontWeight: "600", marginTop: "12px" }}>De-handed fingers</p>
                <p
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "11px",
                    color: "var(--muted)",
                    marginTop: "4px",
                  }}
                >
                  10 kg carton
                </p>
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
              Harvest → carton in under 6 hours · ventilated cartons, 13–14 °C
            </p>
          </figure>
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,34px)" }}>Matoke</h2>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12px",
                color: "var(--muted)",
                marginTop: "8px",
              }}
            >
              Green cooking banana · Musa spp. (East African Highland)
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)", marginTop: "16px" }}>
              Uganda&apos;s staple and our highest-volume line. Cut green and hard, moved fast: matoke is bought by
              diaspora retail and wholesale markets that want it firm on arrival. Available as whole bunches, hands, or
              de-handed fingers.
            </p>
            <div style={{ marginTop: "22px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Availability
                </span>
                <span style={{ textAlign: "right" }}>Year-round, peak Dec–Mar</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Packing
                </span>
                <span style={{ textAlign: "right" }}>Ventilated cartons, hands or fingers</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Transport
                </span>
                <span style={{ textAlign: "right" }}>Air 13–14 °C · reefer for sea</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Indicative MOQ
                </span>
                <span style={{ textAlign: "right" }}>1 pallet air · 1×40&apos; reefer sea</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s3" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,34px)" }}>Avocado</h2>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12px",
                color: "var(--muted)",
                marginTop: "8px",
              }}
            >
              Hass and Fuerte · Persea americana
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)", marginTop: "16px" }}>
              Our premium fresh line. Hass for Gulf and European retail on size counts 14–24; Fuerte for markets that
              prefer a larger, greener fruit. Harvested on dry-matter testing rather than calendar date, pre-cooled
              within hours of picking.
            </p>
            <div style={{ marginTop: "22px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Season
                </span>
                <span style={{ textAlign: "right" }}>Hass Feb–Sep · Fuerte Mar–Aug</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Size counts
                </span>
                <span style={{ textAlign: "right" }}>14 · 16 · 18 · 20 · 22 · 24</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Packing
                </span>
                <span style={{ textAlign: "right" }}>4 kg cartons, single layer</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Transport
                </span>
                <span style={{ textAlign: "right" }}>5–7 °C reefer · air in peak weeks</span>
              </div>
            </div>
          </div>
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
              <span>Size counts · 4 kg carton</span>
              <span>fruit per carton</span>
            </figcaption>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "6px", alignItems: "end" }}>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "0" }}
              >
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50% 50% 48% 48%",
                    background: "var(--ink-soft)",
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "13px", fontWeight: "500" }}>
                  14
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  260–300 g
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "0" }}
              >
                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50% 50% 48% 48%",
                    background: "var(--ink-soft)",
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "13px", fontWeight: "500" }}>
                  16
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  240–265 g
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "0" }}
              >
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50% 50% 48% 48%",
                    background: "var(--ink-soft)",
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "13px", fontWeight: "500" }}>
                  18
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  210–240 g
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "0" }}
              >
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50% 50% 48% 48%",
                    background: "var(--ink-soft)",
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "13px", fontWeight: "500" }}>
                  20
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  190–210 g
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "0" }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50% 50% 48% 48%",
                    background: "var(--ink-soft)",
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "13px", fontWeight: "500" }}>
                  22
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  170–190 g
                </span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", minWidth: "0" }}
              >
                <span
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50% 50% 48% 48%",
                    background: "var(--ink-soft)",
                    display: "block",
                  }}
                />
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "13px", fontWeight: "500" }}>
                  24
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains),monospace",
                    fontSize: "10px",
                    color: "var(--muted)",
                    textAlign: "center",
                  }}
                >
                  150–170 g
                </span>
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
              Picked on dry-matter testing, not calendar date · pre-cooled within hours
            </p>
          </figure>
        </div>
      </section>
      <section id="s4" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,56px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
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
              <span>Sugarloaf vs Smooth Cayenne</span>
              <span>typical range</span>
            </figcaption>
            <div
              style={{
                display: "flex",
                gap: "16px",
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "11px",
                color: "var(--muted)",
                marginBottom: "12px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ width: "16px", height: "9px", background: "var(--ochre)" }} />
                Sugarloaf
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ width: "16px", height: "9px", background: "var(--ink-soft)" }} />
                Smooth Cayenne
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <p style={{ fontSize: "13.5px" }}>Sugar (°Brix)</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "88%", height: "8px", background: "var(--ochre)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    16–18
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "70%", height: "8px", background: "var(--ink-soft)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    13–15
                  </span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "13.5px" }}>Fruit weight</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "62%", height: "8px", background: "var(--ochre)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    1.2–2.0 kg
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "80%", height: "8px", background: "var(--ink-soft)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    1.5–2.5 kg
                  </span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "13.5px" }}>Acidity</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "35%", height: "8px", background: "var(--ochre)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    low
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "62%", height: "8px", background: "var(--ink-soft)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    medium
                  </span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "13.5px" }}>Crown uniformity</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "45%", height: "8px", background: "var(--ochre)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    variable
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
                  <div style={{ flex: "1", height: "8px", background: "rgba(var(--ink-rgb),0.1)" }}>
                    <div style={{ width: "90%", height: "8px", background: "var(--ink-soft)" }} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains),monospace",
                      fontSize: "11px",
                      color: "var(--muted)",
                      minWidth: "76px",
                      textAlign: "right",
                    }}
                  >
                    high
                  </span>
                </div>
              </div>
            </div>
          </figure>
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,34px)" }}>Pineapple</h2>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12px",
                color: "var(--muted)",
                marginTop: "8px",
              }}
            >
              Smooth Cayenne and Sugarloaf · Ananas comosus
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--ink-soft)", marginTop: "16px" }}>
              Ugandan pineapple carries high sugar and low acid — Sugarloaf in particular, which arrives sweet and
              pale-fleshed and sells on taste rather than looks. Smooth Cayenne for buyers who need uniform crowns and
              processing yield.
            </p>
            <div style={{ marginTop: "22px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Availability
                </span>
                <span style={{ textAlign: "right" }}>Year-round, peak May–Aug & Nov–Jan</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Fruit weight
                </span>
                <span style={{ textAlign: "right" }}>1.2–2.5 kg</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Packing
                </span>
                <span style={{ textAlign: "right" }}>Telescopic cartons, 6–10 fruit</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  fontSize: "14.5px",
                }}
              >
                <span
                  style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--muted)" }}
                >
                  Transport
                </span>
                <span style={{ textAlign: "right" }}>7–8 °C reefer · air for Sugarloaf</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s5" data-band="" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4vw,60px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(26px,3vw,34px)" }}>Halal beef</h2>
            <p
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "12px",
                color: "var(--sage)",
                marginTop: "8px",
              }}
            >
              Feedlot-finished Ankole and Boran crosses
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.65", color: "var(--sage-light)", marginTop: "16px" }}>
              Cattle finished in our own feedlot programme and slaughtered under halal supervision, so the animal is
              traceable from pen record to carton. Supplied chilled or frozen as carcass, primal or retail cuts against
              the buyer&apos;s cutting specification.
            </p>
            <div style={{ marginTop: "22px", borderTop: "1px solid rgba(var(--bg-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  fontSize: "14.5px",
                }}
              >
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--sage)" }}>
                  Form
                </span>
                <span style={{ textAlign: "right" }}>Carcass · primal · retail cuts · offal</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  fontSize: "14.5px",
                }}
              >
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--sage)" }}>
                  Temperature
                </span>
                <span style={{ textAlign: "right" }}>Chilled 0–4 °C · frozen −18 °C</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                  fontSize: "14.5px",
                }}
              >
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--sage)" }}>
                  Packing
                </span>
                <span style={{ textAlign: "right" }}>Vacuum bag in carton, labelled Arabic/English</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  fontSize: "14.5px",
                }}
              >
                <span style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "12px", color: "var(--sage)" }}>
                  Certification
                </span>
                <span style={{ textAlign: "right" }}>Halal · veterinary health · origin</span>
              </div>
            </div>
          </div>
          <figure
            style={{
              margin: "0",
              background: "var(--ink-deep)",
              border: "1px solid rgba(var(--bg-rgb),0.25)",
              padding: "clamp(16px,2.2vw,24px)",
            }}
          >
            <figcaption
              style={{
                fontFamily: "var(--font-jetbrains),monospace",
                fontSize: "11px",
                color: "var(--sage)",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
                paddingBottom: "12px",
                marginBottom: "14px",
                borderBottom: "1px solid rgba(var(--bg-rgb),0.25)",
              }}
            >
              <span>Primal breakdown</span>
              <span>cut to your specification</span>
            </figcaption>
            <svg
              viewBox="0 0 420 240"
              role="img"
              aria-label="Primal cut breakdown: chuck, rib, loin, rump, silverside, brisket, flank and shin"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <g strokeWidth="1.5" style={{ stroke: "var(--bg)", fill: "rgba(var(--bg-rgb),0.07)" }}>
                <rect x="14" y="30" width="96" height="78" />
                <rect x="110" y="30" width="70" height="78" />
                <rect x="180" y="30" width="86" height="78" />
                <rect x="266" y="30" width="90" height="78" />
                <rect x="356" y="30" width="50" height="78" />
                <rect x="14" y="108" width="126" height="62" />
                <rect x="140" y="108" width="126" height="62" />
                <rect x="266" y="108" width="140" height="62" />
              </g>
              <g
                fontSize="13"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-archivo), sans-serif" }}
              >
                <text x="62" y="66">
                  Chuck
                </text>
                <text x="145" y="66">
                  Rib
                </text>
                <text x="223" y="66">
                  Loin
                </text>
                <text x="311" y="66">
                  Rump
                </text>
                <text x="381" y="66">
                  Shin
                </text>
                <text x="77" y="140">
                  Brisket
                </text>
                <text x="203" y="140">
                  Flank
                </text>
                <text x="336" y="140">
                  Silverside
                </text>
              </g>
              <g
                fontSize="10"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-jetbrains), monospace" }}
              >
                <text x="62" y="84">
                  22%
                </text>
                <text x="145" y="84">
                  9%
                </text>
                <text x="223" y="84">
                  14%
                </text>
                <text x="311" y="84">
                  12%
                </text>
                <text x="381" y="84">
                  6%
                </text>
                <text x="77" y="158">
                  11%
                </text>
                <text x="203" y="158">
                  8%
                </text>
                <text x="336" y="158">
                  18%
                </text>
              </g>
              <g fontSize="11" style={{ fill: "var(--ochre-light)", fontFamily: "var(--font-jetbrains), monospace" }}>
                <text x="14" y="200">
                  chilled 0–4 °C
                </text>
                <text x="160" y="200">
                  frozen −18 °C
                </text>
                <text x="300" y="200">
                  vacuum in carton
                </text>
                <text x="14" y="222" style={{ fill: "var(--sage)" }}>
                  Indicative yield share of a 240–260 kg carcass
                </text>
              </g>
            </svg>
          </figure>
        </div>
      </section>
      <section id="s6">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4vw,60px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
              gap: "clamp(20px,3vw,44px)",
            }}
          >
            <div>
              <h3 style={{ fontSize: "20px" }}>Also available on enquiry</h3>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "12px" }}>
                Passion fruit, chilli, ginger, jackfruit and sweet potato in programme volumes, and goat meat alongside
                beef. We will only quote what we can supply consistently — if a line is not ready, we say so.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px" }}>Private label and retail packing</h3>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "12px" }}>
                Cartons, punnets and labels printed to your brand, with Arabic-language marks and destination-market
                declarations applied at packing.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px" }}>Request the specification sheet</h3>
              <p style={{ fontSize: "15.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginTop: "12px" }}>
                Full grade, count and packing tables per line, with current indicative pricing.
              </p>
              <p style={{ marginTop: "14px" }}>
                <Link
                  href="/en/contact"
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    borderBottom: "1px solid var(--ochre)",
                    paddingBottom: "2px",
                  }}
                >
                  Ask the trade desk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
