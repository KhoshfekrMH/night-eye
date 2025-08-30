import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import { Repeat, Check, X } from "lucide-react";
import { useAlert } from "../context/AlertContext";

const Captcha = forwardRef(({ onValidate }, ref) => {
  const [captchaSvg, setCaptchaSvg] = useState(null);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(null);
  const { showAlert } = useAlert();

  async function loadCaptcha() {
    const response = await axios.get(
      "http://localhost:5000/api/captcha/generate-captcha",
      { withCredentials: true },
    );
    setCaptchaSvg(response.data);
    setInput("");
    setStatus(null);
    onValidate?.(false);
  }

  async function verifyCaptcha() {
    if (!input.trim()) {
      showAlert("Please enter the captcha", "error");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/captcha/verify-captcha",
        { captcha: input },
        { withCredentials: true },
      );

      if (response.data.success) {
        setStatus("success");
        onValidate?.(true);
      } else {
        setStatus("error");
        onValidate?.(false);
        showAlert("Invalid captcha", "error");
      }
    } catch {
      setStatus("error");
      onValidate?.(false);
      showAlert("Captcha verification failed", "error");
    }
  }

  useImperativeHandle(ref, () => ({
    reset: () => loadCaptcha(),
    verify: () => verifyCaptcha(),
    getValue: () => input,
    getStatus: () => status,
  }));

  useEffect(() => {
    loadCaptcha();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <div dangerouslySetInnerHTML={{ __html: captchaSvg }} />
        <button
          type="button"
          onClick={loadCaptcha}
          className="bg-black text-white p-2 rounded"
        >
          <Repeat />
        </button>
      </div>
      <div className="flex flex-row items-center gap-1">
        <input
          type="text"
          value={input}
          placeholder="Enter captcha"
          onChange={(e) => {
            setInput(e.target.value);
            setStatus(null);
          }}
          className={`border p-2 rounded w-full
            ${status === "success" ? "border-success" : ""}
            ${status === "error" ? "border-error" : ""}
        `}
        />
        {status === "success" && <Check className="text-success" size={20} />}
        {status === "error" && <X className="text-error" size={20} />}
      </div>
      <button
        type="button"
        onClick={verifyCaptcha}
        className="bg-black text-white p-2 rounded"
      >
        Verify
      </button>
    </div>
  );
});

export default Captcha;
