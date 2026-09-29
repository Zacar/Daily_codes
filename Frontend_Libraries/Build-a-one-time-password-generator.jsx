const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const generateOtp = () => {
    setOtp(Math.floor(100000 + Math.random() * 900000).toString());
    setTimeLeft(5);
  };
  useEffect(() => {
    if (timeLeft <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp || "Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="assertive">
        {!otp
          ? ""
          : timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOtp}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};
