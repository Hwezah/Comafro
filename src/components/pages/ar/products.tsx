import Link from "next/link";

export function ArProductsPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>دليل التصدير</p>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
            أربعة خطوط، بالمواصفات التي يطلب بها المشترون.
          </h1>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
            الكميات والمواسم أدناه تقديرية لبرنامج قياسي. يُثبَّت الصنف والدرجة والعدد والتعبئة في مواصفة مكتوبة قبل
            التسعير.
          </p>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "720px", borderCollapse: "collapse", textAlign: "right" }}>
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
                    المنتج
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    الصنف
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    ذروة الموسم
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    التعبئة
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    الحرارة
                  </th>
                  <th
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px 11px 0",
                    }}
                  >
                    أقل كمية تقديرية
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>موز الماتوكي</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    مرتفعات شرق أفريقيا
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>ديسمبر – مارس</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>كرتون مهوّى</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>١٣–١٤ °م</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    منصة جوًا · حاوية ٤٠&apos; بحرًا
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>أفوكادو</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>هاس · فويرتي</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    فبراير – سبتمبر
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    كرتون ٤ كجم بطبقة واحدة
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>٥–٧ °م</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    منصة جوًا · حاوية ٤٠&apos; بحرًا
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>أناناس</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    شوجرلوف · سموث كايين
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    مايو – أغسطس · نوفمبر – يناير
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    كرتون ٦–١٠ حبات
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>٧–٨ °م</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    حاوية ٤٠&apos; بحرًا
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>لحم بقري حلال</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    أنكولي · خلائط بوران
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>طوال العام</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    تغليف مفرّغ في كرتون
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    ٠–٤ °م · −١٨ °م
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    حاوية مبردة ٤٠&apos;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "14px", lineHeight: "1.8" }}>
            جداول الدرجات والأعداد الكاملة لكل خط موجودة في ورقة المواصفات.{" "}
            <Link href="/ar/seasonality" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.4)" }}>
              انظروا تقويم المواسم شهرًا بشهر
            </Link>
          </p>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: "1.4" }}>موز الماتوكي</h2>
            <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "8px" }}>
              موز الطهي الأخضر · أصناف مرتفعات شرق أفريقيا
            </p>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
              المحصول الأساسي في أوغندا وأكبر خطوطنا حجمًا. يُقطع أخضر وصلبًا ويُنقل بسرعة: يشتريه تجار التجزئة والجملة
              في أسواق المغتربين الذين يريدونه صلبًا عند الوصول. متوفر كعراجين كاملة أو أكفّ أو أصابع مفصولة.
            </p>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>التوفر</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>طوال العام، والذروة ديسمبر – مارس</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>التعبئة</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>كراتين مهوّاة، أكفّ أو أصابع</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>النقل</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>جوًا ١٣–١٤ °م · حاوية مبردة بحرًا</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>أقل كمية</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>منصة واحدة جوًا · حاوية ٤٠&apos; بحرًا</span>
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
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: "1.4" }}>أفوكادو</h2>
            <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "8px" }}>هاس وفويرتي</p>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
              خطنا الأعلى قيمة. هاس لأسواق التجزئة في الخليج وأوروبا بأعداد ١٤ إلى ٢٤ في الكرتون؛ وفويرتي للأسواق التي
              تفضل حبة أكبر وأكثر اخضرارًا. يُحصد على أساس فحص المادة الجافة لا على التقويم، ويُبرَّد أوليًا خلال ساعات
              من الجمع.
            </p>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>الموسم</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>هاس فبراير – سبتمبر · فويرتي مارس – أغسطس</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>الأعداد</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>١٤ · ١٦ · ١٨ · ٢٠ · ٢٢ · ٢٤</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>التعبئة</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>كراتين ٤ كجم بطبقة واحدة</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>النقل</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>حاوية مبردة ٥–٧ °م · جوًا في الذروة</span>
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
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: "1.4" }}>أناناس</h2>
            <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "8px" }}>سموث كايين وشوجرلوف</p>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
              الأناناس الأوغندي عالي السكر ومنخفض الحموضة — وخصوصًا شوجرلوف، الذي يصل حلوًا فاتح اللب ويُباع على المذاق
              لا على الشكل. وسموث كايين للمشترين الذين يحتاجون تاجًا متجانسًا وعائدًا أفضل في التصنيع.
            </p>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>التوفر</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  طوال العام، والذروة مايو – أغسطس ونوفمبر – يناير
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>وزن الحبة</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>١٬٢–٢٬٥ كجم</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>التعبئة</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>كراتين تلسكوبية، ٦–١٠ حبات</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>النقل</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>حاوية مبردة ٧–٨ °م · جوًا لشوجرلوف</span>
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
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(24px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(24px,3vw,34px)", lineHeight: "1.4" }}>لحم بقري حلال</h2>
            <p style={{ fontSize: "12px", color: "var(--sage)", marginTop: "8px" }}>
              أبقار مُسمّنة من أنكولي وخلائط بوران
            </p>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--sage-light)", marginTop: "16px" }}>
              أبقار تُسمَّن ببرنامجنا وتُذبح تحت إشراف حلال، فيكون الحيوان قابلًا للتتبع من سجل الحظيرة إلى الكرتون.
              يُورَّد مبردًا أو مجمدًا كذبائح أو قطعيات رئيسية أو قطع تجزئة حسب مواصفة التقطيع التي يحددها المشتري.
            </p>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--bg-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>الشكل</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>ذبيحة · قطعيات رئيسية · قطع تجزئة · أحشاء</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>الحرارة</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>مبرد ٠–٤ °م · مجمد −١٨ °م</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(var(--bg-rgb),0.18)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>التعبئة</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  كيس مفرّغ في كرتون، وسم بالعربية والإنجليزية
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>الشهادات</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>حلال · صحية بيطرية · منشأ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s6">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
              gap: "clamp(20px,3vw,44px)",
            }}
          >
            <div>
              <h3 style={{ fontSize: "20px", lineHeight: "1.5" }}>متوفر أيضًا عند الطلب</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "12px" }}>
                الباشون فروت والفلفل الحار والزنجبيل والكاكايا والبطاطا الحلوة بكميات البرامج، ولحم الماعز إلى جانب لحم
                البقر. ولا نسعّر إلا ما نستطيع توريده باستمرار — وإذا لم يكن الخط جاهزًا نقول ذلك.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", lineHeight: "1.5" }}>التعبئة بعلامة المشتري</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "12px" }}>
                كراتين وعُلب وملصقات تُطبع بعلامتكم، مع علامات الشحن العربية وبيانات سوق الوصول تُلصق عند التعبئة.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "20px", lineHeight: "1.5" }}>اطلبوا ورقة المواصفات</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "12px" }}>
                جداول كاملة للدرجات والأعداد والتعبئة لكل خط، مع الأسعار التقديرية الحالية.
              </p>
              <p style={{ marginTop: "14px" }}>
                <Link
                  href="/ar/contact"
                  style={{
                    fontSize: "14.5px",
                    fontWeight: "500",
                    borderBottom: "1px solid var(--ochre)",
                    paddingBottom: "2px",
                  }}
                >
                  اسألوا مكتب التجارة
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
