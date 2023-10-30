import React, { useState } from "react";

const Form = () => {
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mt-5 my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
        id="terms"
        type="checkbox"
      />

      <div className="terms-box">
        <p style={{ visibility: isHover ? "visible" : "hidden" }}>
          Size gerçekten bir şey teslim etmiyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      </div>

      <button
        disabled={!isChecked}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="btn btn-primary"
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
