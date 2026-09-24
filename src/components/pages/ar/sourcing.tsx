import Link from "next/link";

export function ArSourcingPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(26px,4vw,52px)",
            alignItems: "end",
          }}
        >
          <div>
            <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>شبكة المزارعين</p>
            <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
              المزارع التي تقف خلف الحاوية.
            </h1>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
              نشتري من صغار المزارعين والمجموعات الزراعية المتعاقدة داخل مسافة يوم واحد بالسيارة من كمبالا — قريبة بما
              يكفي ليُفرز المحصول ويبدأ تبريده في اليوم نفسه الذي يُقطع فيه.
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
                fontFamily: "var(--font-kufi),sans-serif",
                fontSize: "11.5px",
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
              <span>مصفوفة التوريد بالمقاطعات</span>
              <span>كم من كيريكا</span>
            </figcaption>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 0.9fr repeat(4,1fr)",
                gap: "0",
                alignItems: "stretch",
              }}
            >
              <span />
              <span />
              <span style={{ fontSize: "10.5px", color: "var(--muted)", textAlign: "center", paddingBottom: "10px" }}>
                ماتوكي
              </span>
              <span style={{ fontSize: "10.5px", color: "var(--muted)", textAlign: "center", paddingBottom: "10px" }}>
                أفوكادو
              </span>
              <span style={{ fontSize: "10.5px", color: "var(--muted)", textAlign: "center", paddingBottom: "10px" }}>
                أناناس
              </span>
              <span style={{ fontSize: "10.5px", color: "var(--muted)", textAlign: "center", paddingBottom: "10px" }}>
                باشون
              </span>
              <span
                style={{
                  fontSize: "14px",
                  padding: "11px 0 11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                واكيسو
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                ١٠–٣٠
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
                  padding: "11px 0 11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                مبيجي
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                ٣٥–٦٠
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
                  padding: "11px 0 11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                لويرو
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                ٦٠–٩٠
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
                  padding: "11px 0 11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                موبيندي
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                ١٤٠–١٨٠
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
                  padding: "11px 0 11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ناكاسونغولا
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  color: "var(--muted)",
                  padding: "11px 8px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.16)",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                ١٢٠–١٦٠
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
                fontFamily: "var(--font-kufi),sans-serif",
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "14px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                lineHeight: "1.8",
              }}
            >
              ناكاسونغولا والممر الغربي يوردان أبقارًا للتسمين لا منتجات طازجة
            </p>
          </figure>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>منطقة التوريد</h2>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "740px", borderCollapse: "collapse", textAlign: "right" }}>
              <thead>
                <tr
                  style={{
                    borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.35)",
                  }}
                >
                  <th
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 0 11px 14px",
                    }}
                  >
                    المقاطعة
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    المسافة من كيريكا
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    ما تورده
                  </th>
                  <th
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px 11px 0",
                    }}
                  >
                    صيغة التعامل
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>واكيسو</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>٠–٣٠ كم</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>ماتوكي، أناناس</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    صغار مزارعين متعاقدين
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>مبيجي</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>٣٥–٦٠ كم</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    ماتوكي، باشون فروت
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    اتفاق مع مجموعة زراعية
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>لويرو</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>٦٠–٩٠ كم</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    أناناس، أفوكادو
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    صغار مزارعين متعاقدين
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>موبيندي</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>١٤٠–١٨٠ كم</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>أفوكادو (هاس)</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    بساتين تجارية
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>ممر الماشية</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    مبارارا · ناكاسونغولا
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>أبقار للتسمين</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    شراء من السوق بعد الفحص
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
            gap: "clamp(26px,4vw,52px)",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>ما يحصل عليه المزارع منا</h2>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>سعر متفق عليه قبل الزراعة</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "5px" }}>
                  لا سعر وسيط يُكتشف على قارعة الطريق في يوم الحصاد.
                </p>
              </div>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>الاستلام من بوابة المزرعة</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "5px" }}>
                  نأتي إلى الحديقة، ومخاطر النقل علينا لا على المزارع.
                </p>
              </div>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>الدفع عند التسليم</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "5px" }}>
                  تحويل عبر المحفظة الإلكترونية عند الاستلام مقابل كشف موزون وموقّع.
                </p>
              </div>
              <div style={{ padding: "15px 0" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>إرشاد لدرجة التصدير</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "5px" }}>
                  اختيار الصنف والمسافات ونضج الحصاد والمناولة — ليصل أكبر قدر من المحصول إلى الكرتون.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>ولماذا يهم ذلك المشتري</h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
              موثوقية التوريد في شرق أفريقيا مسألة علاقة بالمزارع قبل أن تكون مسألة لوجستية. المزارع الذي يُدفع له بعدل
              وفي وقته يبيع لكم في الموسم القادم، والمزارع الذي يُضغط على سعره يحوّل أفضل محصوله إلى أول من يطرق بابه.
              تعاقدنا هو السبب الذي يجعلنا نلتزم ببرنامج ثابت لا بحمولة عابرة.
            </p>
            <div style={{ background: "var(--line-warm)", padding: "clamp(20px,3vw,26px)", marginTop: "20px" }}>
              <p style={{ fontSize: "11.5px", color: "var(--ochre-deep)" }}>التتبع</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "10px" }}>
                كل كشف استلام يحمل اسم المزارع ومنطقته، وكل كرتون يحمل رقم دفعة الاستلام. وإذا نشأت مطالبة في ميناءكم
                نستطيع تسمية الحديقة التي جاء منها المنتج — والرجوع إليها.
              </p>
            </div>
            <figure
              style={{
                margin: "20px 0 0",
                background: "var(--paper)",
                border: "1px solid rgba(var(--ink-rgb),0.2)",
                padding: "clamp(16px,2.2vw,22px)",
              }}
            >
              <figcaption
                style={{
                  fontFamily: "var(--font-kufi),sans-serif",
                  fontSize: "11.5px",
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
                <span>سلسلة التتبع</span>
                <span>رقم واحد، خمس مراحل</span>
              </figcaption>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.25)",
                  background: "var(--bg)",
                  padding: "11px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "400" }}>الحديقة</span>
                <span style={{ fontSize: "11.5px", color: "var(--muted)", direction: "rtl" }}>منطقة ناكاوكا</span>
              </div>
              <div
                style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginRight: "24px" }}
              />
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.25)",
                  background: "var(--bg)",
                  padding: "11px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "400" }}>كشف الاستلام</span>
                <span style={{ fontSize: "11.5px", color: "var(--muted)", direction: "rtl" }}>موزون وموقّع</span>
              </div>
              <div
                style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginRight: "24px" }}
              />
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.25)",
                  background: "var(--bg)",
                  padding: "11px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "600" }}>رقم الدفعة</span>
                <span style={{ fontSize: "11.5px", color: "var(--ochre)", direction: "ltr" }}>UG-WK-0412</span>
              </div>
              <div
                style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginRight: "24px" }}
              />
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.25)",
                  background: "var(--bg)",
                  padding: "11px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "400" }}>الكرتون</span>
                <span style={{ fontSize: "11.5px", color: "var(--muted)", direction: "rtl" }}>الرقم مطبوع عليه</span>
              </div>
              <div
                style={{ width: "1px", height: "12px", background: "rgba(var(--ink-rgb),0.35)", marginRight: "24px" }}
              />
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.25)",
                  background: "var(--bg)",
                  padding: "11px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: "400" }}>الحاوية</span>
                <span style={{ fontSize: "11.5px", color: "var(--muted)", direction: "rtl" }}>مختومة ومدرجة</span>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(21px,2.6vw,30px)", lineHeight: "1.5", maxWidth: "34ch" }}>
              تزرعون قرب كمبالا وتبحثون عن مشترٍ متعاقد؟
            </h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "12px" }}>
              نوسّع طاقة التوريد في الأفوكادو والأناناس. أخبرونا بالمقاطعة والمساحة والصنف.
            </p>
          </div>
          <Link
            className="hover-btn"
            href="/ar/contact"
            data-btn-solo=""
            style={{
              fontSize: "14.5px",
              fontWeight: "500",
              background: "var(--ink)",
              color: "var(--bg)",
              padding: "13px 22px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              lineHeight: "1.6",
            }}
          >
            <span data-lbl-full="">التسجيل كمزارع</span>
            <span data-lbl-short="">التسجيل</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
