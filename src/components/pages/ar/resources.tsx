import Link from "next/link";

export function ArResourcesPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>موارد المشترين</p>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
            كل ما سيطلبه فريق المشتريات والجودة عندكم.
          </h1>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
            اطلبوا أيًا من هذه المستندات ونرسلها في يوم العمل نفسه. وتُشارك مباشرة ولا تُنشر، لنعرف من يحمل شهاداتنا.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
              gap: "0",
              marginTop: "clamp(24px,3vw,38px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
            }}
          >
            <div
              style={{
                padding: "22px 0 26px 24px",
                borderLeft: "1px solid rgba(var(--ink-rgb),0.16)",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <p style={{ fontSize: "11px", color: "var(--muted)", direction: "ltr", textAlign: "right" }}>
                PDF · لكل خط
              </p>
              <h3 style={{ fontSize: "18.5px", marginTop: "10px", lineHeight: "1.5" }}>أوراق مواصفات المنتجات</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "9px" }}>
                الدرجة والعدد ومعايير النضج وأبعاد الكرتون وترتيب المنصة والوسم لكل خط من الخطوط الأربعة.
              </p>
            </div>
            <div
              style={{
                padding: "22px 24px 26px",
                borderLeft: "1px solid rgba(var(--ink-rgb),0.16)",
                borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
              }}
            >
              <p style={{ fontSize: "11px", color: "var(--muted)", direction: "ltr", textAlign: "right" }}>PDF</p>
              <h3 style={{ fontSize: "18.5px", marginTop: "10px", lineHeight: "1.5" }}>خطط تحميل الحاويات</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "9px" }}>
                عدد الكراتين على المنصة، وعدد المنصات في الحاوية المبردة ٤٠&apos; العالية، ومخططات التستيف وتدفق الهواء،
                والوزن الصافي المتوقع للحاوية.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "11px", color: "var(--muted)", direction: "ltr", textAlign: "right" }}>PDF</p>
              <h3 style={{ fontSize: "18.5px", marginTop: "10px", lineHeight: "1.5" }}>نموذج ملف الشهادات</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "9px" }}>
                مثال محجوب البيانات لملف شحنة كامل — الصحة النباتية والحلال والبيطرية والمنشأ والفاتورة وقائمة التعبئة
                وسند الشحن.
              </p>
            </div>
            <div style={{ padding: "22px 0 26px 24px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "11px", color: "var(--muted)", direction: "ltr", textAlign: "right" }}>PDF</p>
              <h3 style={{ fontSize: "18.5px", marginTop: "10px", lineHeight: "1.5" }}>مستندات الشركة</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "9px" }}>
                شهادة التأسيس والرقم الضريبي وتسجيل التصدير وبيانات التزكية البنكية لإجراءات اعرف عميلك وتسجيل الموردين.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px", borderLeft: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "11px", color: "var(--muted)", direction: "ltr", textAlign: "right" }}>XLSX</p>
              <h3 style={{ fontSize: "18.5px", marginTop: "10px", lineHeight: "1.5" }}>ورقة الأسعار التقديرية</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "9px" }}>
                المستويات التقديرية الحالية فوب وسيف حسب الخط وسوق الوصول، مع إظهار مكوني الشحن والشهادات بشكل منفصل.
              </p>
            </div>
            <div style={{ padding: "22px 24px 26px 0" }}>
              <p style={{ fontSize: "11px", color: "var(--muted)", direction: "ltr", textAlign: "right" }}>
                PDF · عربي
              </p>
              <h3 style={{ fontSize: "18.5px", marginTop: "10px", lineHeight: "1.5" }}>الملف التعريفي بالعربية</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.8", color: "var(--ink-soft)", marginTop: "9px" }}>
                ملف كامل للشركة والمنتجات بالعربية للمستوردين في الخليج وجهات الحلال التي يتعاملون معها.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "24px" }}>
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
                display: "inline-block",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              <span data-lbl-full="">طلب حزمة المشتري</span>
              <span data-lbl-short="">حزمة المشتري</span>
            </Link>
          </p>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>شروط التعامل، بوضوح</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: "clamp(20px,3vw,44px)",
              marginTop: "clamp(22px,3vw,34px)",
            }}
          >
            <div>
              <p style={{ fontSize: "11.5px", color: "var(--ochre-deep)" }}>شروط التسليم</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "9px" }}>
                فوب مومباسا هو الأصل. وسيف وسي آي إف إلى مواني الخليج وأوروبا عند الطلب، وتسليم أرض المصنع في كمبالا إذا
                كان لديكم وكيل شحن خاص.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "11.5px", color: "var(--ochre-deep)" }}>الدفع</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "9px" }}>
                الشحنات التجريبية بدفعة مقدمة ٥٠٪ والباقي مقابل المستندات. والبرامج المستقرة باعتماد مستندي غير قابل
                للنقض عند الاطلاع، أو مستندات مقابل الدفع.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "11.5px", color: "var(--ochre-deep)" }}>المطالبات</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "9px" }}>
                تُقبل مطالبات الجودة خلال ٤٨ ساعة من التفريغ مع صور وسجل الحرارة. وإذا كان الخطأ منا نُصدر إشعارًا
                دائنًا ولا نجادل.
              </p>
            </div>
            <div>
              <p style={{ fontSize: "11.5px", color: "var(--ochre-deep)" }}>العملة</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "9px" }}>
                التسعير والفوترة بالدولار الأمريكي، وباليورو عند الطلب للمشترين الأوروبيين.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s3">
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>أسئلة يطرحها المشترون علينا</h2>
          <div
            style={{
              marginTop: "clamp(22px,3vw,32px)",
              borderTop: "1px solid rgba(var(--ink-rgb),0.35)",
              maxWidth: "900px",
            }}
          >
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.55" }}>
                عمر شركتكم عامان. لماذا نخاطر بحاوية معكم؟
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "8px" }}>
                ابدأوا بمنصة تجريبية جوًا، بدفعة مقدمة ٥٠٪، مع صور وأوزان عند التحميل ومفتش من جهة ثالثة إن أردتم.
                خسارتنا المحتملة في أول طلب أكبر من خسارتكم بشكل مقصود.
              </p>
            </div>
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.55" }}>
                شهادة الحلال التي تحملونها من أي جهة؟
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "8px" }}>
                الذبح يجري بإشراف جهة إسلامية معترف بها محليًا وتصدر الشهادة، وحيث يطلب سوقكم اعتمادًا من جهة الحلال
                الخاصة به نرتبه قبل حجز الشحنة. سمّوا جهة التصديق التي تتعاملون معها ونعمل وفقها.
              </p>
            </div>
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.55" }}>
                هل تستطيعون الالتزام ببرنامج أسبوعي لا بحمولة واحدة؟
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "8px" }}>
                في الماتوكي واللحوم نعم، طوال العام. وفي الأفوكادو والأناناس نلتزم داخل نوافذ الذروة في التقويم ولا نعد
                بكميات البرامج خارجها.
              </p>
            </div>
            <div style={{ padding: "18px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
              <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.55" }}>من يخلّص البضاعة في بلد المنشأ؟</p>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "8px" }}>
                نحن — الجمارك والصحة النباتية والبيطرية ومستندات المنشأ كلها علينا. تستلمون ملف شحنة واحدًا وتتعاملون مع
                جهة اتصال واحدة.
              </p>
            </div>
            <div style={{ padding: "18px 0" }}>
              <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.55" }}>هل تعبّئون بعلامتنا التجارية؟</p>
              <p style={{ fontSize: "15px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "8px" }}>
                نعم. كراتين وعُلب وملصقات بتصميمكم، مع علامات عربية وبيانات سوق الوصول تُلصق عند التعبئة. ومدة طباعة أول
                دفعة نحو أسبوعين.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
