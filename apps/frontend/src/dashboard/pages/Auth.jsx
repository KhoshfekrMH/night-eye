import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../Layouts/MainLayout";
import Alert from "../../shared/components/UIElements/Alert";
import { useAlert } from "../../shared/context/AlertContext";
import Captcha from "../../shared/util/Captcha";

function Auth() {
  const { showAlert, alert } = useAlert();
  const captchaRef = useRef();
  const [captchaValid, setCaptchaValid] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!captchaValid) {
      return showAlert(
        "Please complete the captcha before submitting",
        "error",
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>Auth - Night Eye</title>
      </Helmet>
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <fieldset className="fieldset bg-base-200 border-base-100 rounded-box w-xs border p-4">
            {alert && <Alert {...alert} />}
            <form onSubmit={handleSubmit}>
              <legend className="fieldset-legend">Login</legend>

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <div className="mt-4">
                <Captcha setCaptchaValid={setCaptchaValid} ref={captchaRef} />
              </div>

              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>
            </form>
          </fieldset>
        </div>
      </MainLayout>
    </>
  );
}

export default Auth;
