import React, { useEffect, useState } from "react";
import "../style/closing.css";
const ClosingAcc = ({ setClose }) => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [fee, setFee] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);

  useEffect(() => {
    if (email && file && reason && note && fee) {
      setCloseBtn(true);
    }
  }, [email, file, reason, note, fee]);

  return (
    <div className="modal-background">
      <div className="close-container">
        <div className="top">
          <h2>Close account</h2>
          <span
            class="material-symbols-outlined"
            style={{ cursor: "pointer" }}
            onClick={() => setClose(false)}
          >
            close
          </span>
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="radio">
          <p>Want to file UAR</p>
          <input
            type="radio"
            name="file_name"
            value="yes"
            onChange={(e) => setFile(e.target.value)}
          />
          <p>Yes</p>
          <input
            type="radio"
            name="file_name"
            value="no"
            onChange={(e) => setFile(e.target.value)}
          />
          <p>No</p>
        </div>
        <div>
          <label>Reason</label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="form-input" // You can add a class for styling if needed
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              marginTop: '5px',
              cursor:'pointer',
              background: '#fff',
              color: '#000',
              border: '1px solid #ccc',
              borderRadius: '4px', // Added border radius for consistency
            }}
          >
            <option value="option1"></option>
            <option value="option2">Flagging logics triggered</option>
            <option value="option3">Flagging logics triggered</option>
            <option value="option4">Flagging logics triggered</option>
            <option value="option5">Flagging logics triggered</option>
            <option value="option6">Flagging logics triggered</option>
          </select>

        </div>
        <div>
          <label>Note</label>
          <textarea
            style={{ height: "65px", width: "434px" }}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <div className="botton">
          <div className="botton-radio">
            <input
              type="radio"
              value="fee"
              onChange={(e) => setFee(e.target.value)}
            />
            <label> Charge closure fee</label>
          </div>
          <button className={closeBtn ? "able" : "disable"}>
            Close Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClosingAcc;
