import Link from "next/link";

export function ArServicesPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section id="s1" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>خدماتنا</p>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
            أربع عمليات تُدار بالتتابع على السلسلة نفسها.
          </h1>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "18px" }}>
            كل خدمة من هذه يمكن طلبها منفردة — إدارة تسمين لقطيع مملوك لجهة أخرى، أو تصميم مسلخ لمستثمر، أو الشحن لمصدّر
            آخر. ومعظم المشترين يأخذون الخط كاملًا.
          </p>
        </div>
      </section>
      <section id="s2" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠١ · الحقل</p>
          <h2 style={{ fontSize: "clamp(25px,3.2vw,40px)", marginTop: "12px", lineHeight: "1.4", maxWidth: "30ch" }}>
            تصدير الفاكهة والمنتجات الطازجة
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "22px",
            }}
          >
            <div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)" }}>
                نجمع موز الماتوكي والأفوكادو والأناناس من صغار المزارعين والمجموعات الزراعية المتعاقدة في وسط أوغندا.
                تُحدد الأصناف ومواسم الحصاد مسبقًا حتى يكون برنامج المشتري مزروعًا من أجله لا مجموعًا من السوق في يومه.
                تُفرز المنتجات وتُعبّأ في نقطة التجميع وتنتقل من هناك تحت التحكم بالحرارة.
              </p>
              <h3 style={{ fontSize: "18px", marginTop: "24px", lineHeight: "1.5" }}>ما تغطيه الخدمة</h3>
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
                  <span>التعاقد مع المزارعين وإرشادهم وجدولة الحصاد</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>التجميع والفرز والتدريج حسب حجم ودرجة متفق عليهما</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>التعبئة في كراتين ومنصات حسب مواصفة المشتري أو المتجر</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>التبريد الأولي وسلسلة التبريد حتى عنتيبي أو مومباسا</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>التفتيش الصحي النباتي وإجراءات الإفراج للتصدير</span>
                </li>
              </ul>
            </div>
            <div style={{ background: "var(--line-warm)", padding: "22px", alignSelf: "start" }}>
              <p style={{ fontSize: "11.5px", color: "var(--ochre-deep)" }}>الشروط المعتادة</p>
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>شروط التسليم</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>فوب مومباسا · سيف ميناء المشتري</span>
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>مدة الشحن الجوي</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٣–٥ أيام من الطلب</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                    مدة الشحن البحري
                  </span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٢١–٢٨ يومًا إلى مواني الخليج</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="s3" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٢ · التسمين</p>
          <h2 style={{ fontSize: "clamp(25px,3.2vw,40px)", marginTop: "12px", lineHeight: "1.4", maxWidth: "30ch" }}>
            إدارة حظائر تسمين الأبقار
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "22px",
            }}
          >
            <div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)" }}>
                تصل الأبقار الأوغندية نحيفة وغير متسقة. نشتري الأبقار أو نستقبلها، ثم نُسمّنها ببرنامج علف مُدار لمدة ٩٠
                إلى ١٢٠ يومًا مع متابعة وزن فردية ورعاية بيطرية وسجلات على مستوى الحظيرة. والنتيجة وزن حي ودرجة ذبيحة
                يمكن للمسلخ والمشتري التخطيط على أساسهما. ندير هذا لبرنامج تصديرنا، وكخدمة مُدارة لأصحاب القطعان
                والمستثمرين.
              </p>
              <h3 style={{ fontSize: "18px", marginTop: "24px", lineHeight: "1.5" }}>ما تغطيه الخدمة</h3>
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
                  <span>اختيار الأبقار وشراؤها من أسواق الماشية الإقليمية</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>تركيب العلف من المخلفات والأعلاف المحلية</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>برنامج صحة الحيوان والحجر وسجلات العلاج</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>متابعة الزيادة في الوزن والتتبع من الحظيرة إلى الذبيحة</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>تصميم حظائر التسمين وتوظيفها ووضع إجراءات تشغيلها لجهات أخرى</span>
                </li>
              </ul>
            </div>
            <figure
              style={{
                margin: "0",
                background: "var(--paper2)",
                border: "1px solid rgba(var(--ink-rgb),0.2)",
                padding: "clamp(16px,2.2vw,24px)",
                alignSelf: "start",
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
                <span>الزيادة في الوزن · برنامج ١٢٠ يومًا</span>
                <span>متوسط الحظيرة، كجم حي</span>
              </figcaption>
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>وزن الدخول</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٢٨٠ كجم</span>
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>اليوم ٦٠</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٣٥٠ كجم</span>
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>وزن الخروج</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٤٣٠ كجم</span>
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
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>المعدل اليومي</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>≈١٬٢٥ كجم</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>دقة التوقع</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>داخل نطاق ٥٪</span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section id="s4" style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٣ · التصنيع</p>
          <h2 style={{ fontSize: "clamp(25px,3.2vw,40px)", marginTop: "12px", lineHeight: "1.4", maxWidth: "30ch" }}>
            تصميم المسالخ الحلال وتشغيلها
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "22px",
            }}
          >
            <div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)" }}>
                نخطط المسالخ ونجهزها ونشغّلها وفق متطلبات الحلال — من توزيع مرابض الانتظار واتجاه خط الذبح إلى المستندات
                التي تصدر مع كل ذبيحة. يقوم بالذبح جزارون مسلمون مدربون تحت إشراف جهة إسلامية معترف بها؛ وتُفصل المسارات
                النظيفة عن غيرها؛ ويتبع التبريد والتقطيع والتعبئة مواصفة القطع التي يحددها المشتري.
              </p>
              <h3 style={{ fontSize: "18px", marginTop: "24px", lineHeight: "1.5" }}>ما تغطيه الخدمة</h3>
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
                  <span>تصميم المرافق: مرابض الانتظار، صالة الذبح، المبردات، غرفة التقطيع، الصرف</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>إجراء الحلال: ذبح تحت إشراف، التسمية، وسجلات مدة التصفية من الدم</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>نظام النظافة وضوابط على نمط الهاسب والفحص البيطري اليومي</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>تدريج الذبائح والتقطيع إلى قطعيات رئيسية وقطع تجزئة والتعبئة</span>
                </li>
                <li style={{ fontSize: "14.5px", lineHeight: "1.8", display: "flex", gap: "10px" }}>
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>ملف شهادات لكل شحنة وفق سوق الاستيراد</span>
                </li>
              </ul>
            </div>
            <div data-band="" style={{ background: "var(--ink)", color: "var(--bg)", padding: "22px", alignSelf: "start" }}>
              <p style={{ fontSize: "11.5px", color: "var(--sage)" }}>لمشتري الشرق الأوسط</p>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", marginTop: "10px" }}>
                تُجهَّز الشحنات وفق متطلبات الشهادات ووسم العلامات في سوق الوصول، بما يشمل علامات الشحن باللغة العربية
                واعتماد جهة الحلال في بلد الاستيراد عند الحاجة.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="s5" data-band="" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre)" }}>٠٤ · الخدمات اللوجستية</p>
          <h2 style={{ fontSize: "clamp(25px,3.2vw,40px)", marginTop: "12px", lineHeight: "1.4", maxWidth: "26ch" }}>
            الشحن والخدمات اللوجستية
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "22px",
            }}
          >
            <div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--sage-light)" }}>
                الحلقة الأخيرة هي التي يفشل فيها التصدير الأفريقي عادة. نتولى النقل الداخلي والجمارك والشهادات والحجز
                نفسه، فيستلم المشتري ملف شحنة واحدًا بدل خمسة أرقام هاتف. حاويات مبردة وجافة عبر مومباسا ودار السلام؛
                وشحن جوي من عنتيبي للخطوط الطازجة عالية القيمة؛ وتجميع للمشترين الذين يأخذون منصات مختلطة.
              </p>
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
                <li
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>النقل الداخلي من بوابة المزرعة ومحطة التعبئة إلى الميناء</span>
                </li>
                <li
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>التخليص الجمركي للتصدير ومستندات الحدود</span>
                </li>
                <li
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>حجز الحاويات المبردة وضبط الحرارة وختم الحاوية</span>
                </li>
                <li
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>تجميع برامج المنتجات الطازجة واللحوم المختلطة</span>
                </li>
                <li
                  style={{
                    fontSize: "14.5px",
                    lineHeight: "1.8",
                    display: "flex",
                    gap: "10px",
                    color: "var(--sage-pale)",
                  }}
                >
                  <span style={{ color: "var(--ochre)" }}>·</span>
                  <span>ملف الشحنة: الشهادات والفاتورة وقائمة التعبئة وسند الشحن</span>
                </li>
              </ul>
            </div>
            <div style={{ alignSelf: "start", border: "1px solid rgba(var(--bg-rgb),0.28)", padding: "24px" }}>
              <p style={{ fontSize: "11.5px", color: "var(--sage)" }}>مرجع المسارات</p>
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
                  <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>كمبالا → مومباسا</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٢–٣ أيام برًا</span>
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
                  <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>
                    مومباسا → جبل علي
                  </span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>١٢–١٦ يومًا بحرًا</span>
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
                  <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>مومباسا → جدة</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>١٤–١٨ يومًا بحرًا</span>
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
                  <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>عنتيبي → الدوحة</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>١–٢ يوم جوًا</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                  <span style={{ fontSize: "12px", color: "var(--sage)", whiteSpace: "nowrap" }}>أنواع الحاويات</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>مبردة ٤٠&apos; عالية · جافة ٢٠&apos;</span>
                </div>
              </div>
              <p style={{ fontSize: "11px", color: "var(--sage)", marginTop: "16px", lineHeight: "1.8" }}>
                مدد العبور تقديرية، وتُثبَّت مع كل حجز.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "28px" }}>
            <Link
              className="hover-bg"
              href="/ar/contact"
              style={{
                fontSize: "14.5px",
                fontWeight: "500",
                color: "var(--bg)",
                borderBottom: "1px solid var(--ochre)",
                paddingBottom: "2px",
              }}
            >
              ناقشوا برنامجًا مع مكتب التجارة
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
