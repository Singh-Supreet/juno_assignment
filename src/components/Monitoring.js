import React, { useState } from "react";
import "../style/monitoring.css";
import Table from "./Table";
import ClosingAcc from "./ClosingAcc";
import Dropdown from "./Dropdown";
const Monitoring = () => {
  const [status, setStatus] = useState("pending");
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [close, setClose] = useState(false);
  const [trigger, setTrigger] = useState("");

  const Trigger_reason = [
    "Trigger reason",
    "Hard flag",
    "Temp flag",
    "Restricted unflag",
    "Un flag",
    "Reviewed",
  ];

  const levelOption = ["All", "High", "Medium", "Low"];

  return (
    <div className="monitoring">
      <h1>Monitoring</h1>
      <div className="tabs">
        <div className="toggle">
          <p
            className={status === "pending" ? "active" : ""}
            onClick={() => {
              setStatus("pending");
              setSearch("");
              setLevel("");
              setTrigger("");
            }}
          >
            Pending
          </p>
          <p
            className={status === "completed" ? "active" : ""}
            onClick={() => {
              setStatus("completed");
              setSearch("");
              setLevel("");
              setTrigger("");
            }}
          >
            Completed
          </p>
        </div>
        <button className="btn" onClick={() => setClose(true)}>
          <span class="material-symbols-outlined">cancel</span>
          <p>Close account</p>
        </button>
      </div>
      <div className="filter">
        <div className="search-flex">
          <span class="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Dropdown
          options={Trigger_reason}
          title="Trigger reason"
          trigger={trigger}
          setTrigger={setTrigger}
        />
        <Dropdown
          options={levelOption}
          title="Risk level"
          setLevel={setLevel}
          level={level}
        />
      </div>
      <div className="table">
        <Table status={status} search={search} level={level} />
      </div>
      {close && <ClosingAcc setClose={setClose} />}
    </div>
  );
};

export default Monitoring;
