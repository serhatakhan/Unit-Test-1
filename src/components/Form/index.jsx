import { useState } from "react";

const Form = () => {
  // checkbox tikli mi state'i
  const [isChecked, setIsChecked] = useState(false);
  // mouse butonun üzerinde mi state'i
  const [isHover, setIsHover] = useState(false);
  
  return (
    <form className="mt-5 mb-4 d-flex justify-content-center align-items-center gap-3">
      {/* checkbox'larda onChange daha mantıklı olan yöntem. onclick de tercih edilebilir */}
      <input
        id="terms"
        type="checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
        className="form-check-input"
      />

      <div className="terms-wrapper">
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum.</label>
        <p style={{visibility: isHover ? "visible" : "hidden"}}>size gerçekten bir şey teslim etmeyeceğiz</p>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-warning"
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
