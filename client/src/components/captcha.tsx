import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "./loader/loader";

export interface Props {
  onSuccessCallBack: any;
}

export function Captcha(props: Props) {
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  
  const [expired, setexpired] = useState(false);
  
  const [callback, setcallback] = useState("not fired");

  const recaptchaRef = React.createRef();

  const handleChange = (value) => {
   
    if (value != null) {
      props.onSuccessCallBack();
    }

    if (value === null) {
      setexpired(true);
    }
  };

  const asyncScriptOnLoad = () => {
    setcallback("called");

    console.log("scriptLoad - reCaptcha Ref-", recaptchaRef);
  };

  return (
    <div className="Captcha " >
      
      {expired &&  <h5>Captch is Expired. Please Refresh to try again.</h5>}
     {callback==="not fireed" && <Loading/>}

      <ReCAPTCHA
        style={{ display: "inline-block" }}
        theme="dark"
        sitekey={TEST_SITE_KEY}
        onChange={handleChange}
        asyncScriptOnLoad={asyncScriptOnLoad}
      />
    </div>
  );
}