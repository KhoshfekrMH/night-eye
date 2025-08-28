import { useEffect, useState } from "react";
import axios from "axios";

function Captcha({ onValidate }) {
  const [captchaSvg, setCaptchaSvg] = useState(null);
  const [input, setInput] = useState("");

  async function loadCaptcha() {
    const response = await axios.get(
      "http://localhost:5000/api/captcha/generate-captcha",
      { withCredentials: true },
    );
    setCaptchaSvg(response.data);
    setInput("");
  }

  async function verifyCaptcha() {
    const response = await axios.post(
      "http://localhost:5000/api/captcha/verify-captcha",
      { captcha: input },
      { withCredentials: true },
    );

    if (response.data.success) {
      onValidate(true);
    } else {
      loadCaptcha();
      throw new Error(response.data.error);
    }
  }

  useEffect(() => {
    loadCaptcha();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div dangerouslySetInnerHTML={{ __html: captchaSvg }} />
      <input
        type="text"
        value={input}
        placeholder="Enter captcha"
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="button"
        onClick={verifyCaptcha}
        className="bg-black text-white p-2 rounded"
      >
        Verify
      </button>
      <button
        type="button"
        onClick={loadCaptcha}
        className="bg-black text-white p-2 rounded"
      >
        Refresh Captcha
      </button>
    </div>
  );
}

export default Captcha;
