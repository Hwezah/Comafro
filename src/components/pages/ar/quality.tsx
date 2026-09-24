import Link from "next/link";

export function ArQualityPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>الجودة والمطابقة</p>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
            الجزء الذي سيقرأه فريق الجودة عندكم أولًا.
          </h1>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "18px" }}>
            كل ما يلي إجراء نعمل به، لا طموحًا نعلنه. وحيث يكون الضابط قيد الإنشاء قلنا ذلك بصراحة — ويمكن للمشتري
            التحقق من كل بند في زيارة ميدانية.
          </p>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>إجراء الحلال، خطوة بخطوة</h2>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
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
              <span style={{ fontSize: "12px", color: "var(--ochre)" }}>٠١</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>مرابض الانتظار والراحة</span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)" }}>
                ترتاح الأبقار مع توفر الماء قبل الذبح. والتعامل هادئ بلا نخز أو دفع، ويبقى سجل الحظيرة مرافقًا للحيوان.
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
              <span style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٢</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>الفحص قبل الذبح</span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)" }}>
                يفحص الطبيب البيطري المناوب كل حيوان قبل دخوله الصالة. وتُسجَّل حالات الرفض وتُستبعد من الشحنة.
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
              <span style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٣</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>الذبح تحت إشراف</span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)" }}>
                يقوم به جزار مسلم مدرب باتجاه القبلة مع التسمية، بقطعٍ واحد يقطع الحلقوم والمريء والودجين. وتشرف عليه
                جهة إسلامية معترف بها وتوقّع عليه.
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
              <span style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٤</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>التصفية من الدم والسلخ</span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)" }}>
                تُحدَّد مدة التصفية الكاملة من الدم وتُسجَّل قبل بدء السلخ. والمسارات النظيفة مفصولة فعليًا عن غيرها بلا
                تقاطع بينها.
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
              <span style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٥</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>الفحص بعد الذبح والتدريج</span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)" }}>
                تُفحص الذبيحة والأحشاء وتُختم وتُدرَّج. ويُسجَّل الوزن مقابل سجل الحظيرة، فتُغلق حلقة التتبع.
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
              <span style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٦</span>
              <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>التبريد والتقطيع والشهادة</span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)" }}>
                التبريد حتى حرارة القلب قبل التقطيع، ثم التعبئة حسب مواصفتكم، والإفراج مع شهادتي الحلال والصحة البيطرية
                لسوقكم.
              </span>
            </div>
          </div>
          <div
            style={{
              background: "var(--ink)",
              color: "var(--bg)",
              padding: "clamp(20px,3vw,28px)",
              marginTop: "clamp(24px,3vw,36px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: "clamp(18px,3vw,36px)",
            }}
          >
            <div>
              <p style={{ fontSize: "11.5px", color: "var(--sage)" }}>بشأن التدويخ</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", marginTop: "9px", color: "var(--sage-pale)" }}>
                الأصل عندنا الذبح بدون تدويخ. وإذا اشترط سوق الاستيراد أو جهة التصديق تدويخًا قابلًا للرجوع، نعمل بذلك
                المعيار — ويُذكر كتابةً قبل حجز الشحنة، ولا يُغيَّر في صمت أبدًا.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "11.5px", color: "var(--sage)" }}>بشأن الفصل</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", marginTop: "9px", color: "var(--sage-pale)" }}>
                لا يمر أي منتج غير حلال على الخط، فلا وجود لمسألة تلوث متبادل من أصلها. والسكاكين والمبردات والكراتين
                مخصصة لهذا المنتج وحده.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>سلسلة التبريد، مُسجَّلة</h2>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "14px" }}>
            الحاويات المرفوضة سببها في الغالب الحرارة لا جودة المنتج في المنشأ. لذلك نسجّلها عند كل تسليم ونرفق السجل مع
            ملف الشحنة.
          </p>
          <div style={{ marginTop: "clamp(22px,3vw,34px)", overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "760px", borderCollapse: "collapse", textAlign: "right" }}>
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
                    نقطة التسليم
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    المستهدف
                  </th>
                  <th style={{ fontSize: "11.5px", color: "var(--muted)", fontWeight: "400", padding: "11px 14px" }}>
                    من يسجّلها
                  </th>
                  <th
                    style={{
                      fontSize: "11.5px",
                      color: "var(--muted)",
                      fontWeight: "400",
                      padding: "11px 14px 11px 0",
                    }}
                  >
                    الدليل المرسل للمشتري
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>
                    من الحصاد إلى التجميع
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>أقل من ٦ ساعات</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>مشرف الحقل</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    كشف استلام مؤرخ بالتوقيت
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>التبريد الأولي</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    حسب مواصفة المنتج
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    سجل محطة التعبئة
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    قراءات حرارة لبّ الحبة
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>التحميل</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    نقطة الضبط ± ١ °م
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    ضبط الحاوية وختمها
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    صور ورقم الختم ونقطة الضبط
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "15.5px", fontWeight: "600", padding: "13px 0 13px 14px" }}>العبور</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>تسجيل مستمر</td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px" }}>
                    مسجّل بيانات الحاوية
                  </td>
                  <td style={{ fontSize: "14.5px", color: "var(--ink-soft)", padding: "13px 14px 13px 0" }}>
                    سجل قابل للتنزيل عند الوصول
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>المعايير والتسجيلات</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(250px,100%),1fr))",
              gap: "0",
              marginTop: "clamp(22px,3vw,34px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <div style={{ padding: "22px 0 22px 24px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "600" }}>قائم بالفعل</p>
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
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>تسجيل الشركة في أوغندا والرقم الضريبي</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>تفتيش وزارة الزراعة للشهادة الصحية النباتية لكل شحنة</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>الشهادة الصحية البيطرية للحوم</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>الإشراف على الذبح الحلال وشهادة لكل شحنة</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>شهادة المنشأ عبر الغرفة التجارية الوطنية</span>
                </li>
              </ul>
            </div>
            <div style={{ padding: "22px 24px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "600" }}>قيد الإنجاز</p>
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
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  <span>خطة هاسب موثقة لخط التصنيع</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  <span>شهادة جلوبال جاب الجماعية للمزارعين المتعاقدين</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "9px" }}>
                  <span style={{ color: "var(--muted)" }}>·</span>
                  <span>مخزن تبريد خاص في نقطة التجميع</span>
                </li>
              </ul>
              <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "12px", lineHeight: "1.8" }}>
                التواريخ المستهدفة تُرسل عند الطلب.
              </p>
            </div>
            <div style={{ padding: "22px 24px 22px 0" }}>
              <p style={{ fontSize: "17px", fontWeight: "600" }}>التدقيق والتفتيش</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "12px" }}>
                نقبل التفتيش قبل الشحن من جهة ثالثة على حساب المشتري، ونحتفظ بالحاوية لحين حضور المفتش الذي تسمّونه.
                وزيارات تدقيق حظائر التسمين وخط التصنيع مرحب بها بإشعار أسبوع.
              </p>
              <p style={{ marginTop: "16px" }}>
                <Link
                  href="/ar/contact"
                  style={{
                    fontSize: "14.5px",
                    fontWeight: "500",
                    borderBottom: "1px solid var(--ochre)",
                    paddingBottom: "2px",
                  }}
                >
                  ترتيب زيارة تدقيق
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
