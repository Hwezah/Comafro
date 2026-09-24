"use client";

import { useState } from "react";
import { Select } from "@/components/site/select";

export function ArContactPage() {
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
    <div dir="rtl" style={{ fontFamily: "var(--font-kufi),sans-serif" }}>
      <section style={{ borderBottom: "1px solid rgba(var(--ink-rgb),0.16)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)" }}>
          <p style={{ fontSize: "12px", color: "var(--ochre-deep)" }}>مكتب التجارة</p>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", marginTop: "12px", lineHeight: "1.35", fontWeight: "700" }}>
            أخبرونا بالمنتج والكمية والميناء.
          </h1>
          <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "16px" }}>
            نرد على الاستفسارات من كمبالا خلال يوم عمل واحد، بورقة مواصفات وسعر تقديري — ونقول بصراحة إذا كان خط أو كمية
            تتجاوز قدرتنا الحالية.
          </p>
        </div>
      </section>
      <section>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "clamp(32px,4.5vw,64px) clamp(22px,5vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(26px,4vw,56px)",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "23px", lineHeight: "1.5" }}>مكتب كمبالا</h2>
            <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>العنوان</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  كيريكا، مقاطعة واكيسو
                  <br />
                  منطقة كمبالا الكبرى، أوغندا
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  الاستفسارات التجارية
                </span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  <span style={{ direction: "ltr", display: "inline-block" }}>trade@comafro.com</span>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>
                  الشحن والخدمات اللوجستية
                </span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  <span style={{ direction: "ltr", display: "inline-block" }}>logistics@comafro.com</span>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>الهاتف</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  <span style={{ direction: "ltr", display: "inline-block" }}>+256 700 000 000</span>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>واتساب</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  <span style={{ direction: "ltr", display: "inline-block" }}>+256 700 000 000</span>
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "13px 0" }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>ساعات العمل</span>
                <span style={{ fontSize: "14.5px", textAlign: "left" }}>
                  الإثنين – السبت، ٠٨:٠٠ – ١٨:٠٠ بتوقيت شرق أفريقيا (UTC+3)
                </span>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "var(--muted)", marginTop: "16px" }}>
              يتوفر مسؤول يتحدث العربية لمشتري الخليج. ويمكن ترتيب زيارات ميدانية لحظائر التسمين وخط التصنيع بإشعار
              أسبوع.
            </p>
            <figure
              style={{
                margin: "22px 0 0",
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
                <span>الوصول إلينا</span>
                <span>كيريكا، مقاطعة واكيسو</span>
              </figcaption>
              <div style={{ marginTop: "18px", borderTop: "1px solid rgba(var(--ink-rgb),0.35)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "13px 0",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>من وسط كمبالا</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>١٠ كم شرقًا على طريق جينجا</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "13px 0",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>من مطار عنتيبي</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>٤٥ كم · نحو ساعة</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "13px 0",
                    borderBottom: "1px solid rgba(var(--ink-rgb),0.16)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>إلى موكونو</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>١٢ كم شرقًا</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "13px 0" }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)", whiteSpace: "nowrap" }}>الموقع</span>
                  <span style={{ fontSize: "14.5px", textAlign: "left" }}>المكتب ومكتب التجارة</span>
                </div>
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
                يُرسل الموقع الدقيق مع تأكيد موعد زيارتكم
              </p>
            </figure>
          </div>
          <div style={{ background: "var(--line-warm)", padding: "clamp(22px,3vw,34px)" }}>
            {sent && (
              <>
                <div>
                  <h2 style={{ fontSize: "23px", lineHeight: "1.5" }}>تم استلام الاستفسار</h2>
                  <p style={{ fontSize: "15.5px", lineHeight: "1.9", color: "var(--ink-soft)", marginTop: "14px" }}>
                    شكرًا لكم. سيرد مكتب التجارة من عنوان بريد تابع لـ comafro.com خلال يوم عمل واحد بتوقيت شرق أفريقيا.
                  </p>
                  <p style={{ marginTop: "18px" }}>
                    <a
                      href="#"
                      onClick={resetForm}
                      style={{
                        fontSize: "14.5px",
                        fontWeight: "500",
                        borderBottom: "1px solid var(--ochre)",
                        paddingBottom: "2px",
                      }}
                    >
                      إرسال استفسار آخر
                    </a>
                  </p>
                </div>
              </>
            )}{" "}
            {!sent && (
              <>
                <form onSubmit={submitForm}>
                  <h2 style={{ fontSize: "23px", lineHeight: "1.5" }}>استفسار تجاري</h2>
                  <p style={{ fontSize: "14px", lineHeight: "1.8", color: "var(--muted)", marginTop: "10px" }}>
                    الحقول المعلَّمة بنقطة مطلوبة كي نستطيع التسعير.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))",
                      gap: "16px",
                      marginTop: "20px",
                    }}
                  >
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>الاسم ·</span>
                      <input
                        name="name"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>الشركة ·</span>
                      <input
                        name="company"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>البريد الإلكتروني ·</span>
                      <input
                        name="email"
                        type="email"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          direction: "ltr",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>البلد أو السوق ·</span>
                      <input
                        name="country"
                        required
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>المنتج المطلوب ·</span>
                      <Select
                        name="product"
                        options={[
                          "موز الماتوكي",
                          "أفوكادو",
                          "أناناس",
                          "لحم بقري حلال",
                          "برنامج مختلط",
                          "خدمات التسمين أو المسالخ",
                        ]}
                        rtl
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>الكمية والتكرار</span>
                      <input
                        name="volume"
                        placeholder="مثال: حاوية مبردة 40' شهريًا"
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>ميناء الوصول</span>
                      <input
                        name="port"
                        placeholder="مثال: جبل علي، جدة، روتردام"
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>شروط التسليم المفضلة</span>
                      <Select
                        name="incoterms"
                        options={["فوب (FOB)", "سيف (CFR)", "سي آي إف (CIF)", "أفيدونا برأيكم"]}
                        rtl
                        style={{
                          border: "1px solid rgba(var(--ink-rgb),0.35)",
                          background: "var(--paper)",
                          padding: "11px 12px",
                          fontSize: "15px",
                          fontFamily: "var(--font-kufi),sans-serif",
                        }}
                      />
                    </label>
                  </div>
                  <label style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "16px" }}>
                    <span style={{ fontSize: "11.5px", color: "var(--muted)" }}>ملاحظات على المواصفة</span>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="الدرجة والعدد والتعبئة والشهادات المطلوبة في ميناءكم"
                      style={{
                        border: "1px solid rgba(var(--ink-rgb),0.35)",
                        background: "var(--paper)",
                        padding: "11px 12px",
                        fontSize: "15px",
                        resize: "vertical",
                        fontFamily: "var(--font-kufi),sans-serif",
                      }}
                    />
                  </label>{" "}
                  <button
                    className="hover-btn"
                    type="submit"
                    data-btn-solo=""
                    style={{
                      marginTop: "20px",
                      background: "var(--ink)",
                      color: "var(--bg)",
                      border: "0",
                      padding: "14px 24px",
                      fontSize: "15px",
                      fontWeight: "500",
                      cursor: "pointer",
                      fontFamily: "var(--font-kufi),sans-serif",
                    }}
                  >
                    إرسال الاستفسار
                  </button>{" "}
                  <p style={{ fontSize: "13px", lineHeight: "1.8", color: "var(--muted)", marginTop: "14px" }}>
                    هذا النموذج للعرض ولا يرسل البريد بعد — يجب ربطه ببريد مكتب التجارة قبل الإطلاق.
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
