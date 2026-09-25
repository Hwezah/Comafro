import Link from "next/link";
import { HeroWord } from "@/components/site/hero-word";

export function ArHomePage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,72px) clamp(22px,5vw,80px) clamp(28px,4vw,52px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
            gap: "clamp(26px,4vw,52px)",
            alignItems: "end",
          }}
        >
          <div>
            <p style={{ fontSize: "12px", color: "var(--ochre-deep)", marginBottom: "20px" }}>
              كيريكا، مقاطعة واكيسو · أوغندا
            </p>
            <h1 style={{ fontSize: "clamp(30px,4.4vw,52px)", lineHeight: "1.35", fontWeight: "700" }}>
              منتجات أوغندية طازجة ولحوم حلال، من الحقل إلى{" "}
              <span style={{ color: "var(--accent)", whiteSpace: "nowrap" }}>
                <HeroWord lang="ar" />
                <span
                  style={{
                    display: "inline-block",
                    width: "0.055em",
                    height: "0.82em",
                    background: "var(--accent)",
                    verticalAlign: "baseline",
                    marginRight: "0.06em",
                    animation: "comafro-caret 1s step-end infinite",
                  }}
                />
              </span>
            </h1>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "22px" }}>
              شركة كومافرو المحدودة تدير سلسلة التوريد كاملة: مزارعون متعاقدون وتوريد الأبقار في وسط أوغندا، وبرنامج
              تسمين خاص بنا، ومسالخ تعمل وفق متطلبات الحلال، ثم مستندات التصدير والشحن التي تضع الحاوية على الماء.
            </p>
            <div data-btnrow="" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
              <Link
                className="hover-btn"
                href="/ar/products"
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
                <span data-lbl-full="">منتجاتنا للتصدير</span>
                <span data-lbl-short="">الصادرات</span>
              </Link>
              <Link
                className="hover-btn-outline"
                href="/ar/contact"
                style={{
                  fontSize: "14.5px",
                  fontWeight: "500",
                  padding: "13px 22px",
                  border: "1px solid rgba(var(--ink-rgb),0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  lineHeight: "1.6",
                }}
              >
                <span data-lbl-full="">تواصل مع مكتب التجارة</span>
                <span data-lbl-short="">مكتب التجارة</span>
              </Link>
            </div>
          </div>
          <figure
            dir="rtl"
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
              <span>سلسلة الحفظ</span>
              <span>أربع مراحل بإدارتنا</span>
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
                  <p style={{ fontSize: "15.5px", fontWeight: "600", lineHeight: "1.6" }}>الحقل</p>
                  <p style={{ fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>اليوم ٠</p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.8", marginTop: "4px" }}>
                  حدائق متعاقدة في واكيسو ومبيجي ولويرو، مع الفرز والتعبئة في نقطة التجميع.
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
                  <p style={{ fontSize: "15.5px", fontWeight: "600", lineHeight: "1.6" }}>التسمين</p>
                  <p style={{ fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>٩٠–١٢٠ يومًا</p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.8", marginTop: "4px" }}>
                  علف مُدار ومتابعة أوزان ورعاية بيطرية وسجلات للحظائر.
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
                  <p style={{ fontSize: "15.5px", fontWeight: "600", lineHeight: "1.6" }}>التصنيع</p>
                  <p style={{ fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>٠–٤ °م</p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.8", marginTop: "4px" }}>
                  ذبح حلال بإشراف دائم، ثم التبريد والتقطيع والتعبئة حسب مواصفتكم.
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
                  <p style={{ fontSize: "15.5px", fontWeight: "600", lineHeight: "1.6" }}>الخدمات اللوجستية</p>
                  <p style={{ fontSize: "11.5px", color: "var(--muted)", whiteSpace: "nowrap" }}>فوب مومباسا</p>
                </div>
                <p style={{ fontSize: "13.5px", color: "var(--ink-soft)", lineHeight: "1.8", marginTop: "4px" }}>
                  الشهادات والتخليص وحاوية مبردة مختومة إلى ميناءكم.
                </p>
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-kufi),sans-serif",
                fontSize: "11.5px",
                color: "var(--muted)",
                marginTop: "16px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
              }}
            >
              طرف واحد · ملف شحن واحد · جهة اتصال واحدة
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
            <div style={{ padding: "18px 0 18px 22px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "11.5px", color: "var(--muted)" }}>خطوط التصدير</p>
              <p style={{ fontSize: "14.5px", marginTop: "7px", lineHeight: "1.7" }}>
                موز الماتوكي · أفوكادو · أناناس · لحم بقري حلال
              </p>
            </div>
            <div style={{ padding: "18px 22px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "11.5px", color: "var(--muted)" }}>الأسواق الرئيسية</p>
              <p style={{ fontSize: "14.5px", marginTop: "7px", lineHeight: "1.7" }}>
                دول الخليج والشرق الأوسط والاتحاد الأوروبي
              </p>
            </div>
            <div style={{ padding: "18px 22px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "11.5px", color: "var(--muted)" }}>معيار التصنيع</p>
              <p style={{ fontSize: "14.5px", marginTop: "7px", lineHeight: "1.7" }}>ذبح حلال تحت إشراف معتمد</p>
            </div>
            <div style={{ padding: "18px 22px 18px 0" }}>
              <p style={{ fontSize: "11.5px", color: "var(--muted)" }}>مسارات الشحن</p>
              <p style={{ fontSize: "14.5px", marginTop: "7px", lineHeight: "1.7" }}>
                جوًا عبر عنتيبي · بحرًا عبر مومباسا
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s2" data-band="" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.45", maxWidth: "34ch" }}>
              من حديقة في واكيسو إلى مخزن المشتري المبرّد في الخليج
            </h2>
            <p style={{ fontSize: "11.5px", color: "var(--sage)", maxWidth: "36ch", lineHeight: "1.8" }}>
              المسار المعتاد للشحن البحري المجمّع. والشحن الجوي عبر عنتيبي للأفوكادو والأناناس في أسابيع الذروة.
            </p>
          </div>
          <div style={{ marginTop: "clamp(22px,3vw,38px)" }}>
            <svg
              viewBox="0 0 1000 230"
              role="img"
              aria-label="مسار التصدير من كمبالا إلى الدوحة"
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
                fontSize="16"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                كمبالا
              </text>
              <text
                x="110"
                y="218"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                المنشأ · التعبئة
              </text>
              <text
                x="400"
                y="182"
                fontSize="16"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                مومباسا
              </text>
              <text
                x="400"
                y="204"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                ميناء التحميل
              </text>
              <text
                x="690"
                y="88"
                fontSize="16"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                جبل علي
              </text>
              <text
                x="690"
                y="66"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                إعادة الشحن
              </text>
              <text
                x="930"
                y="78"
                fontSize="16"
                textAnchor="middle"
                style={{ fill: "var(--bg)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                الدوحة / الرياض
              </text>
              <text
                x="930"
                y="56"
                fontSize="11"
                textAnchor="middle"
                style={{ fill: "var(--sage)", fontFamily: "var(--font-kufi), sans-serif" }}
              >
                سوق المشتري
              </text>
            </svg>
          </div>
        </div>
      </section>
      <section id="s3" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>سلسلة التوريد · أربع حلقات</p>
          <h2 style={{ fontSize: "clamp(25px,3.2vw,40px)", marginTop: "12px", lineHeight: "1.4", maxWidth: "34ch" }}>
            شركة واحدة في كل خطوة، حتى لا يضيع شيء بين الأيدي.
          </h2>
          <div
            style={{
              marginTop: "clamp(24px,3vw,42px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <div style={{ padding: "22px 0 26px 24px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠١ · الحقل</p>
              <h3 style={{ fontSize: "21px", marginTop: "12px", lineHeight: "1.4" }}>المزارعون وتوريد الأبقار</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "10px" }}>
                صغار المزارعين والمجموعات الزراعية المتعاقدة في واكيسو ومبيجي ولويرو. نتفق على الأصناف ومواسم الحصاد قبل
                الزراعة، ونشتري في نقطة التجميع.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٢ · التسمين</p>
              <h3 style={{ fontSize: "21px", marginTop: "12px", lineHeight: "1.4" }}>تسمين ببرنامج محدد</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "10px" }}>
                تدخل الأبقار برنامج علف مُدار لمدة ٩٠ إلى ١٢٠ يومًا مع متابعة الأوزان والرعاية البيطرية وسجلات قابلة
                للتتبع، فيصبح وزن الذبيحة ودرجتها أمرًا متوقعًا لا مجازفة.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٣ · التصنيع</p>
              <h3 style={{ fontSize: "21px", marginTop: "12px", lineHeight: "1.4" }}>الذبح الحلال والتعبئة</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "10px" }}>
                تصميم المسالخ وتشغيلها وفق متطلبات الحلال — ذبح تحت إشراف، وفصل المسارات النظيفة عن غيرها، ثم التبريد
                والتقطيع والتعبئة حسب مواصفة المشتري.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px 0" }}>
              <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٤ · الخدمات اللوجستية</p>
              <h3 style={{ fontSize: "21px", marginTop: "12px", lineHeight: "1.4" }}>المستندات والشحن</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "10px" }}>
                شهادة الصحة النباتية وشهادة الحلال وشهادة المنشأ والتخليص الجمركي وحجز الحاويات المبردة وتجميع الشحنات —
                ملف واحد وجهة اتصال واحدة.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "26px" }}>
            <Link
              href="/ar/services"
              style={{
                fontSize: "14.5px",
                fontWeight: "500",
                borderBottom: "1px solid var(--ochre)",
                paddingBottom: "2px",
              }}
            >
              تفاصيل كل مرحلة
            </Link>
          </p>
        </div>
      </section>
      <section id="s4" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>ما أنجزناه فعلًا</h2>
            <p style={{ fontSize: "11.5px", color: "var(--muted)" }}>سجل التشغيل · يُحدَّث كل ربع سنة</p>
          </div>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(112px,auto) 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--accent)", whiteSpace: "nowrap" }}>
                ٢٠٢٦ · الربع الثالث
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.85" }}>
                الاتفاق على برنامج ثانٍ بالحاويات المبردة لموز الماتوكي إلى الخليج، وتوحيد علامات الشحن العربية على
                كراتين اللحوم.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(112px,auto) 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٢٠٢٦ · الربع الثاني</span>
              <span style={{ fontSize: "15px", lineHeight: "1.85" }}>
                تحويل سجلات حظائر التسمين إلى متابعة وزن فردية، بما يتيح توقع وزن الذبيحة في نطاق ٥٪.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(112px,auto) 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٢٠٢٦ · الربع الأول</span>
              <span style={{ fontSize: "15px", lineHeight: "1.85" }}>
                أول شحنة تجريبية مجمّعة تخرج من عنتيبي — أفوكادو وأناناس على منصة واحدة، قُبلت عند الوصول دون أي مطالبة.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(112px,auto) 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٢٠٢٥ · الربع الرابع</span>
              <span style={{ fontSize: "15px", lineHeight: "1.85" }}>
                كتابة إجراء الذبح الحلال وإخضاعه لإشراف دائم من جهة إسلامية معترف بها.
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(112px,auto) 1fr",
                gap: "clamp(14px,3vw,32px)",
                padding: "15px 0",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٢٠٢٥ · الربع الثاني</span>
              <span style={{ fontSize: "15px", lineHeight: "1.85" }}>
                تأسيس شركة كومافرو المحدودة في أوغندا، وبدء التعاقد مع المزارعين في واكيسو ومبيجي.
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
                  fontSize: "clamp(38px,4.2vw,54px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                ٤
              </p>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "8px", lineHeight: "1.7" }}>
                خطوط تصدير بمواصفات مكتوبة
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(38px,4.2vw,54px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                ١٢٠
              </p>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "8px", lineHeight: "1.7" }}>
                يومًا كحد أقصى لبرنامج التسمين
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(38px,4.2vw,54px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                ٤
              </p>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "8px", lineHeight: "1.7" }}>
                مقاطعات توريد حول كمبالا
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-newsreader),Georgia,serif",
                  fontSize: "clamp(38px,4.2vw,54px)",
                  lineHeight: "1",
                  color: "var(--ink)",
                }}
              >
                ١
              </p>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "8px", lineHeight: "1.7" }}>
                يوم عمل للرد على أي استفسار
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s5">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(26px,4vw,56px)",
            }}
          >
            <div>
              <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>كيف يبدو أول تعامل معنا</h2>
              <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
                نحن شركة حديثة، ولا نطلب من المشتري أن يثق بنا على عمياء. أول طلب يبدأ صغيرًا، ويجري على مواصفة موثّقة،
                ويُفتّش قبل أن يخرج من أوغندا.
              </p>
              <div style={{ marginTop: "22px", borderTop: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)", minWidth: "62px", whiteSpace: "nowrap" }}>
                    الخطوة ١
                  </span>
                  <span style={{ fontSize: "14.5px", lineHeight: "1.8" }}>
                    ترسلون المنتج والكمية والتعبئة وميناء الوصول. نرد بسعر فوب أو سيف وبمدة تنفيذ.
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", minWidth: "62px", whiteSpace: "nowrap" }}>
                    الخطوة ٢
                  </span>
                  <span style={{ fontSize: "14.5px", lineHeight: "1.8" }}>
                    نتفق على مواصفة مكتوبة: الصنف والدرجة والعدد والكرتون والحرارة والشهادات المطلوبة في ميناءكم.
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", minWidth: "62px", whiteSpace: "nowrap" }}>
                    الخطوة ٣
                  </span>
                  <span style={{ fontSize: "14.5px", lineHeight: "1.8" }}>
                    شحنة تجريبية — منصة واحدة جوًا أو حاوية مبردة واحدة — مع صور وأوزان عند التحميل.
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", minWidth: "62px", whiteSpace: "nowrap" }}>
                    الخطوة ٤
                  </span>
                  <span style={{ fontSize: "14.5px", lineHeight: "1.8" }}>
                    بعد القبول ننتقل إلى برنامج أسبوعي أو شهري ثابت بعقد توريد.
                  </span>
                </div>
              </div>
            </div>
            <div style={{ background: "var(--line-warm)", padding: "clamp(22px,3vw,34px)", alignSelf: "start" }}>
              <h3 style={{ fontSize: "20px", lineHeight: "1.5" }}>المستندات التي نُعدّها لكل شحنة</h3>
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
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>شهادة الصحة النباتية (المنتجات الطازجة)</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>شهادة الذبح الحلال (اللحوم)</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>الشهادة الصحية البيطرية</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>شهادة المنشأ</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>الفاتورة التجارية وقائمة التعبئة</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>سند الشحن البحري أو بوليصة الشحن الجوي</span>
                </li>
              </ul>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.8",
                  color: "var(--muted)",
                  marginTop: "18px",
                  borderTop: "1px solid rgba(var(--ink-rgb),0.2)",
                  paddingTop: "14px",
                }}
              >
                نرتب المستندات الإضافية الخاصة بكل سوق — بما فيها اعتماد جهة الحلال في بلد الاستيراد — عند الطلب.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
