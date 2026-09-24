export function ArAboutPage() {
  return (
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>عن شركة كومافرو المحدودة</p>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
            شركة أوغندية مبنية على السلسلة كاملة، لا على حلقة واحدة منها.
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: "clamp(24px,4vw,52px)",
              marginTop: "clamp(22px,3vw,38px)",
            }}
          >
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)" }}>
              كومافرو المحدودة شركة مسجلة في أوغندا ومقرها كيريكا في مقاطعة واكيسو، على الحدود الشرقية لمنطقة كمبالا
              الكبرى. تأسست لمعالجة فجوة واضحة: المزارع الأوغندية تنتج سلعًا بمستوى التصدير، والمشترون الدوليون
              يطلبونها، لكن السلسلة بينهما تتعطل في التجميع والتبريد ومعايير الذبح والمستندات.
            </p>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)" }}>
              لذلك توليناها كلها. نتعاقد مع المزارعين وموردي الأبقار، وندير التسمين ببرنامجنا، ونصمم المسالخ ونشغّلها
              وفق متطلبات الحلال، ونتولى الشهادات والشحن إلى ميناء المشتري. الشركة حديثة — أقل من عامين في التجارة —
              ومحددة النطاق بشكل مقصود: أربعة خطوط منتجات، ومنطقة توريد معروفة حول كمبالا، وفريق صغير يرد مباشرة.
            </p>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
          }}
        >
          <div
            style={{
              padding: "clamp(26px,3vw,42px) 0 clamp(26px,3vw,42px) clamp(24px,3vw,40px)",
              borderLeft: "1px solid rgba(var(--ink-rgb),0.16)",
            }}
          >
            <h2 style={{ fontSize: "23px", lineHeight: "1.5" }}>رسالتنا</h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "14px" }}>
              نقل المنتجات الزراعية الأوغندية واللحوم الحلال إلى الأسواق الدولية بشروط عادلة للمزارع وموثوقة للمشتري —
              مع المعيار والشهادة وسجل الحرارة الذي يثبت ذلك.
            </p>
          </div>
          <div
            style={{
              padding: "clamp(26px,3vw,42px) clamp(24px,3vw,40px)",
              borderLeft: "1px solid rgba(var(--ink-rgb),0.16)",
            }}
          >
            <h2 style={{ fontSize: "23px", lineHeight: "1.5" }}>رؤيتنا</h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "14px" }}>
              أوغندا تصدّر سلعًا جاهزة ومعتمدة للمشتري بدل تصدير الكم الخام — وشركة يعتبرها المستوردون في الخليج وأوروبا
              خيارهم الأول لا البديل.
            </p>
          </div>
          <div style={{ padding: "clamp(26px,3vw,42px) clamp(24px,3vw,40px) clamp(26px,3vw,42px) 0" }}>
            <h2 style={{ fontSize: "23px", lineHeight: "1.5" }}>طريقتنا</h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "14px" }}>
              مواصفة مكتوبة قبل التسعير. شحنة تجريبية قبل البرنامج. صور وأوزان عند التحميل. جهة اتصال واحدة من الاستفسار
              حتى الوصول.
            </p>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)", background: "var(--bg2)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))",
            gap: "clamp(26px,4vw,60px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>كيف بُنيت الشركة</h2>
            <div
              style={{
                marginTop: "clamp(20px,2.5vw,30px)",
                borderRight: "1px solid rgba(var(--ink-rgb),0.3)",
                paddingRight: "clamp(18px,2.5vw,26px)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div>
                <p style={{ fontSize: "12px", color: "var(--accent)" }}>٢٠٢٥ · الربع الثاني</p>
                <p style={{ fontSize: "16.5px", fontWeight: "600", marginTop: "7px", lineHeight: "1.5" }}>
                  التأسيس في أوغندا
                </p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "7px" }}>
                  تسجيل الشركة ومكتب التجارة في كيريكا، وبدء التعاقد مع المزارعين في واكيسو ومبيجي.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "var(--muted)" }}>٢٠٢٥ · الربع الرابع</p>
                <p style={{ fontSize: "16.5px", fontWeight: "600", marginTop: "7px", lineHeight: "1.5" }}>
                  تأسيس قطاع الثروة الحيوانية
                </p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "7px" }}>
                  تصميم برنامج التسمين وتزويده بالأبقار، وكتابة إجراء الذبح الحلال وإخضاعه لإشراف دائم.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "var(--muted)" }}>٢٠٢٦ · الربع الأول</p>
                <p style={{ fontSize: "16.5px", fontWeight: "600", marginTop: "7px", lineHeight: "1.5" }}>
                  أول شحنة تصدير
                </p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "7px" }}>
                  منصة تجريبية من الأفوكادو والأناناس عبر عنتيبي، قُبلت عند الوصول دون مطالبة — وهو الإثبات الذي احتجناه
                  لتسعير البرامج.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "var(--muted)" }}>٢٠٢٦ · الربع الثالث</p>
                <p style={{ fontSize: "16.5px", fontWeight: "600", marginTop: "7px", lineHeight: "1.5" }}>
                  برامج الخليج
                </p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "7px" }}>
                  الاتفاق على برامج ثابتة بالحاويات المبردة، وتوحيد علامات الشحن العربية واعتماد جهة الحلال في بلد
                  الاستيراد.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "var(--ochre)" }}>التالي</p>
                <p style={{ fontSize: "16.5px", fontWeight: "600", marginTop: "7px", lineHeight: "1.5" }}>
                  محطة تعبئة ومخزن تبريد خاص
                </p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "7px" }}>
                  تبريد أولي وتخزين مبرد مبنيان لهذا الغرض في نقطة التجميع، لتقليص الفارق بين الحصاد وبداية التبريد.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>لماذا يتعامل المشترون معنا</h2>
            <div style={{ marginTop: "clamp(20px,2.5vw,30px)", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>طرف واحد لا خمسة</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "6px" }}>
                  عادةً يجمع المشتري شحنته من مُجمِّع ومسلخ ومخلّص جمركي ووكيل شحن. نحن الأربعة معًا، فلا أحد يحيل
                  المسؤولية إلى غيره.
                </p>
              </div>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>الحلال من المنشأ</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "6px" }}>
                  الإشراف والشهادة جزء من خط الذبح نفسه، وليست إجراءً ورقيًا يُضاف لاحقًا.
                </p>
              </div>
              <div style={{ padding: "15px 0", borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>التواصل بالعربية</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "6px" }}>
                  مسؤول تجاري يتحدث العربية، وعلامات شحن ومستندات بالعربية للأسواق الخليجية.
                </p>
              </div>
              <div style={{ padding: "15px 0" }}>
                <p style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}>صراحة في الحدود</p>
                <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--ink-soft)", marginTop: "6px" }}>
                  نرفض الكميات التي لا نستطيع الالتزام بمواصفاتها. سمعة المصدّر الناشئ تتحمل طلبًا مرفوضًا، ولا تتحمل
                  حاوية مرفوضة.
                </p>
              </div>
            </div>
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
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>أين نحن</h2>
            <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
              مكتبنا ومكتب التجارة في كيريكا بمقاطعة واكيسو، على نحو ١٠ كم من وسط كمبالا، وعلى بعد دقائق من طريق
              كمبالا–جينجا، وداخل مسافة يوم واحد بالسيارة من مقاطعات الإنتاج التي نشتري منها. مطار عنتيبي الدولي على نحو
              ساعة للشحن الجوي، ومومباسا ميناؤنا البحري المعتاد مع دار السلام كمسار بديل.
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
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>المكتب المسجل</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>كيريكا، مقاطعة واكيسو، أوغندا</span>
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
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>مقاطعات التوريد</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>واكيسو · مبيجي · لويرو · موبيندي</span>
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
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>الشحن الجوي</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>مطار عنتيبي الدولي (EBB)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "12px 0" }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>الشحن البحري</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>مومباسا · دار السلام</span>
              </div>
            </div>
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
              <span>المسافات بالطريق من كيريكا</span>
              <span>مقياس مضغوط</span>
            </figcaption>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>وسط كمبالا</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>١٠ كم</p>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(var(--ink-rgb),0.1)",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "9%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>مبيجي</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٤٠ كم</p>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(var(--ink-rgb),0.1)",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "18%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>مطار عنتيبي</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٤٥ كم</p>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(var(--ink-rgb),0.1)",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "20%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>لويرو</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>٧٥ كم</p>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(var(--ink-rgb),0.1)",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "27%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>موبيندي</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>١٦٠ كم</p>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(var(--ink-rgb),0.1)",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "40%", height: "7px", background: "var(--ochre)" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                  <p style={{ fontSize: "14px" }}>ميناء مومباسا</p>
                  <p style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>١٬١٧٠ كم</p>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(var(--ink-rgb),0.1)",
                    marginTop: "6px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <div style={{ width: "100%", height: "7px", background: "var(--ink)" }} />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
      <section data-band="" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.45", maxWidth: "30ch" }}>
            مؤشرات مصداقية يمكن للمشتري التحقق منها
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: "clamp(20px,3vw,40px)",
              marginTop: "clamp(22px,3vw,38px)",
            }}
          >
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "15px" }}>
              <h3 style={{ fontSize: "18.5px", lineHeight: "1.5" }}>السجل التجاري</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--sage-light)", marginTop: "10px" }}>
                شركة محدودة مسجلة في أوغندا مع رقم تسجيل ضريبي لدى هيئة الإيرادات. نشارك شهادة التأسيس والرقم الضريبي مع
                أي مشترٍ جاد عند الطلب.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "15px" }}>
              <h3 style={{ fontSize: "18.5px", lineHeight: "1.5" }}>تسجيل التصدير</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--sage-light)", marginTop: "10px" }}>
                مصدّر مسجل يعمل مع تفتيش وزارة الزراعة للحصول على الشهادة الصحية النباتية، ومع الهيئة البيطرية الوطنية
                لشحنات اللحوم.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "15px" }}>
              <h3 style={{ fontSize: "18.5px", lineHeight: "1.5" }}>الإشراف على الحلال</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--sage-light)", marginTop: "10px" }}>
                يجري الذبح تحت إشراف جهة إسلامية معترف بها، وتصدر الشهادة لكل شحنة وفق متطلبات سوق الاستيراد.
              </p>
            </div>
            <div style={{ borderTop: "2px solid var(--ochre)", paddingTop: "15px" }}>
              <h3 style={{ fontSize: "18.5px", lineHeight: "1.5" }}>الزيارات مرحب بها</h3>
              <p style={{ fontSize: "14.5px", lineHeight: "1.85", color: "var(--sage-light)", marginTop: "10px" }}>
                ندعو المشترين ووكلاءهم لتفتيش حظائر التسمين وخط التصنيع والتعبئة قبل التعاقد، ونرتب الزيارة وجدولها.
              </p>
            </div>
          </div>
          <p
            style={{ fontSize: "11.5px", color: "var(--sage)", marginTop: "28px", maxWidth: "70ch", lineHeight: "1.8" }}
          >
            أرقام التسجيل وصور الشهادات وجهات التزكية تُرسل مباشرة ولا تُنشر على الموقع. اطلبوها من مكتب التجارة.
          </p>
        </div>
      </section>
      <section>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <h2 style={{ fontSize: "clamp(23px,2.9vw,34px)", lineHeight: "1.4" }}>الفريق</h2>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "14px" }}>
            فريق تشغيلي صغير يغطي التوريد والثروة الحيوانية والتصنيع والتجارة. يتعامل المشتري مع جهة اتصال واحدة معروفة
            بالاسم في كل المراحل.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))",
              gap: "clamp(18px,2.5vw,30px)",
              marginTop: "clamp(22px,3vw,34px)",
            }}
          >
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  المسؤوليات
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>التسعير والعقود</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>العلاقة مع المشترين</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>الإفراج النهائي عن الشحنة</span>
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px", lineHeight: "1.5" }}>المدير العام</p>
              <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "5px" }}>الاسم قيد التأكيد</p>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  المسؤوليات
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>التعاقد مع المزارعين</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>الفرز والرفض عند الاستلام</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>جدولة الحصاد</span>
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px", lineHeight: "1.5" }}>مسؤول التوريد</p>
              <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "5px" }}>الاسم قيد التأكيد</p>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  المسؤوليات
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>العلف وصحة الحيوان</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>متابعة الأوزان</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>جدولة الذبح</span>
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px", lineHeight: "1.5" }}>
                مدير التسمين والثروة الحيوانية
              </p>
              <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "5px" }}>الاسم قيد التأكيد</p>
            </div>
            <div>
              <div
                style={{
                  border: "1px solid rgba(var(--ink-rgb),0.2)",
                  background: "var(--paper)",
                  padding: "18px",
                  minHeight: "150px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.5px",
                    color: "var(--muted)",
                    paddingBottom: "10px",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.2)",
                  }}
                >
                  المسؤوليات
                </p>
                <ul
                  style={{
                    margin: "12px 0 0",
                    padding: "0",
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>ملف الشهادات</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>التخليص الجمركي والحدود</span>
                  </li>
                  <li style={{ fontSize: "13.5px", lineHeight: "1.7", display: "flex", gap: "8px" }}>
                    <span style={{ color: "var(--ochre)" }}>·</span>
                    <span>حجز الحاويات وختمها</span>
                  </li>
                </ul>
              </div>
              <p style={{ fontSize: "16px", fontWeight: "500", marginTop: "12px", lineHeight: "1.5" }}>
                مسؤول التصدير والشحن
              </p>
              <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "5px" }}>الاسم قيد التأكيد</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
