import { useState, useRef, useEffect } from "react";

const GreeModal = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("+998 ");
  const [step, setStep] = useState(1); // 1 = phone, 2 = otp
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isClosing, setIsClosing] = useState(false);
  const otpRefs = useRef([]);
  const phoneRef = useRef(null);

  const randomNUmber = Math.floor(Math.random() * 999999);

  
  const PostTgBot = async (phone, otp) => {
    const TOKEN = import.meta.env.VITE_TLEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TLEGRAM_CHAT_ID;

    const text = `
      <b>siznign maxsulotingiz: ${product.title.slice(0.20)}</b>
    ${randomNUmber}  siznign Tastiqlovchi code Hechkimga bermang`;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });
  };

  const isPhoneValid = phone.replace(/\D/g, "").length === 12; // 998 + 9 digits

  // Timer countdown
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  // Auto-focus first OTP input
  useEffect(() => {
    if (step === 2 && otpRefs.current[0]) {
      otpRefs.current[0].focus();
    }
  }, [step]);

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, "");
    if (!digits.startsWith("998")) digits = "998" + digits.replace(/^998/, "");
    digits = digits.slice(0, 12);
    let formatted = "+998 ";
    const rest = digits.slice(3);
    if (rest.length > 0) formatted += rest.slice(0, 2);
    if (rest.length > 2) formatted += " " + rest.slice(2, 5);
    if (rest.length > 5) formatted += " " + rest.slice(5, 7);
    if (rest.length > 7) formatted += " " + rest.slice(7, 9);
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (val.length < 5) return; // prevent deleting +998
    setPhone(formatPhone(val));
  };

  const handlePhoneSubmit = () => {
    if (isPhoneValid) {
      PostTgBot();
      setStep(2);
      setTimer(60);
      setOtp(["", "", "", "", "", ""]);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    // Auto-close on complete
    if (value && index === 5 && newOtp.every((d) => d !== "")) {
      setTimeout(() => closeModal(), 600);
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (paste.length === 6) {
      const newOtp = paste.split("");
      setOtp(newOtp);
      otpRefs.current[5]?.focus();
      setTimeout(() => closeModal(), 600);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    setIsClosing(false);
    setStep(1);
    setPhone("+998 ");
    setOtp(["", "", "", "", "", ""]);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setStep(1);
    }, 300);
  };

  const isOtpComplete = otp.every((d) => d !== "");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Trigger Button */}
      <button onClick={openModal} style={styles.triggerBtn}>
        1 klikda xarid qilish
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          style={{
            ...styles.overlay,
            animation: isClosing ? "fadeOut 0.3s ease" : "fadeIn 0.3s ease",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              ...styles.modal,
              animation: isClosing
                ? "slideDown 0.3s ease forwards"
                : "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button onClick={closeModal} style={styles.closeBtn}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5l10 10"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Header */}
            <div style={styles.header}>
              <div style={styles.iconWrap}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    stroke="#00e5ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 style={styles.title}>
                {step === 1 ? "Telefon raqamingiz" : "Tasdiqlash kodi"}
              </h2>
              <p style={styles.subtitle}>
                {step === 1
                  ? "Buyurtma berish uchun raqamingizni kiriting"
                  : `${phone} raqamiga yuborilgan 6 xonalik kodni kiriting`}
              </p>
            </div>

            {/* Step 1: Phone */}
            {step === 1 && (
              <div style={styles.body}>
                <label style={styles.label}>Telefon raqam</label>
                <div style={styles.phoneInputWrap}>
                  <div style={styles.flagIcon}>🇺🇿</div>
                  <input
                    ref={phoneRef}
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    onKeyDown={(e) => e.key === "Enter" && handlePhoneSubmit()}
                    placeholder="+998 XX XXX XX XX"
                    style={styles.phoneInput}
                    autoFocus
                  />
                  {isPhoneValid && (
                    <div style={styles.checkIcon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <circle
                          cx="9"
                          cy="9"
                          r="9"
                          fill="#00e5ff"
                          opacity="0.2"
                        />
                        <path
                          d="M5.5 9l2.5 2.5 4.5-5"
                          stroke="#00e5ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <button
                  onClick={handlePhoneSubmit}
                  disabled={!isPhoneValid}
                  style={{
                    ...styles.submitBtn,
                    ...(isPhoneValid
                      ? styles.submitBtnActive
                      : styles.submitBtnDisabled),
                  }}
                >
                  Tasdiqlash kodini olish
                </button>
              </div>
            )}

            {/* Step 2: OTP */}
            {step === 2 && (
              <div style={styles.body}>
                <label style={styles.label}>Tasdiqlash kodi</label>
                <div style={styles.otpRow}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => (otpRefs.current[i] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      onPaste={i === 0 ? handleOtpPaste : undefined}
                      style={{
                        ...styles.otpInput,
                        borderColor: digit
                          ? "#00e5ff"
                          : "rgba(255,255,255,0.1)",
                        background: digit
                          ? "rgba(0,229,255,0.06)"
                          : "rgba(255,255,255,0.04)",
                      }}
                    />
                  ))}
                </div>

                <div style={styles.timerRow}>
                  {timer > 0 ? (
                    <span style={styles.timerText}>
                      Qayta yuborish:{" "}
                      <span style={{ color: "#00e5ff" }}>
                        0:{timer.toString().padStart(2, "0")}
                      </span>
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        setTimer(60);
                        setOtp(["", "", "", "", "", ""]);
                        otpRefs.current[0]?.focus();
                      }}
                      style={styles.resendBtn}
                    >
                      Qayta yuborish
                    </button>
                  )}
                </div>

                <button
                  onClick={() => isOtpComplete && closeModal()}
                  disabled={!isOtpComplete}
                  style={{
                    ...styles.submitBtn,
                    ...(isOtpComplete
                      ? styles.submitBtnActive
                      : styles.submitBtnDisabled),
                  }}
                >
                  Tasdiqlash
                </button>

                <button
                  onClick={() => {
                    setStep(1);
                    setOtp(["", "", "", "", "", ""]);
                  }}
                  style={styles.backBtn}
                >
                  ← Raqamni o'zgartirish
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes fadeOut {
          from { opacity: 1 }
          to { opacity: 0 }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96) }
          to { opacity: 1; transform: translateY(0) scale(1) }
        }
        @keyframes slideDown {
          from { opacity: 1; transform: translateY(0) scale(1) }
          to { opacity: 0; transform: translateY(40px) scale(0.96) }
        }
        input::placeholder {
          color: rgba(255,255,255,0.25);
        }
        input:focus {
          outline: none;
          border-color: #00e5ff !important;
          box-shadow: 0 0 0 3px rgba(0,229,255,0.15);
        }
        button:not(:disabled):hover {
          filter: brightness(1.1);
        }
        button:not(:disabled):active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

const styles = {
  triggerBtn: {
    padding: "18px 52px",
    width: "100%",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #00e5ff 0%, #6c63ff 100%)",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    letterSpacing: "0.3px",
    transition: "all 0.2s ease",
    fontFamily: "'Segoe UI', sans-serif",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(4, 6, 28, 0.85)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },
  modal: {
    position: "relative",
    width: "100%",
    maxWidth: "440px",
    background:
      "linear-gradient(160deg, #111640 0%, #0c1030 50%, #0a0e2a 100%)",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      "0 40px 80px rgba(0,0,0,0.5), 0 0 120px rgba(0,229,255,0.05), inset 0 1px 0 rgba(255,255,255,0.06)",
    padding: "40px 36px 36px",
    overflow: "hidden",
  },
  closeBtn: {
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    padding: 0,
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  iconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "rgba(0,229,255,0.08)",
    border: "1px solid rgba(0,229,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "8px",
    letterSpacing: "-0.3px",
  },
  subtitle: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.45)",
    lineHeight: "1.5",
    maxWidth: "320px",
    margin: "0 auto",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "500",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.3px",
    textTransform: "uppercase",
  },
  phoneInputWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  flagIcon: {
    position: "absolute",
    left: "16px",
    fontSize: "20px",
    zIndex: 1,
  },
  phoneInput: {
    width: "100%",
    padding: "18px 44px 18px 50px",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#fff",
    background: "rgba(255,255,255,0.04)",
    border: "1.5px solid rgba(255,255,255,0.1)",
    borderRadius: "14px",
    letterSpacing: "1px",
    transition: "all 0.25s ease",
  },
  checkIcon: {
    position: "absolute",
    right: "16px",
  },
  submitBtn: {
    width: "100%",
    padding: "18px",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "'Segoe UI', sans-serif",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    letterSpacing: "0.3px",
    transition: "all 0.3s ease",
    marginTop: "8px",
  },
  submitBtnActive: {
    background: "linear-gradient(135deg, #00e5ff 0%, #6c63ff 100%)",
    color: "#fff",
    boxShadow: "0 8px 32px rgba(0,229,255,0.25)",
    cursor: "pointer",
  },
  submitBtnDisabled: {
    background: "rgba(255,255,255,0.06)",
    color: "rgba(255,255,255,0.2)",
    cursor: "not-allowed",
    boxShadow: "none",
  },
  otpRow: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  otpInput: {
    width: "52px",
    height: "60px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#00e5ff",
    border: "1.5px solid rgba(255,255,255,0.1)",
    borderRadius: "14px",
    transition: "all 0.25s ease",
    caretColor: "#00e5ff",
  },
  timerRow: {
    textAlign: "center",
  },
  timerText: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.4)",
  },
  resendBtn: {
    background: "none",
    border: "none",
    color: "#00e5ff",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "4px 8px",
  },
  backBtn: {
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.35)",
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center",
    padding: "8px",
    transition: "color 0.2s",
  },
};

export default GreeModal;
