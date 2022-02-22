import React, { useState } from "react";
import { Link } from "react-router-dom";
import eur from "./images/eur-pic.png";
import yen from "./images/yen-pic.png";
import dola from "./images/dola-pic.png";

import "./SendAssets.css";

function SendAssets() {
  const [cover, setCover] = useState(-1);
  const [amount, setAmound] = useState(50);
  const [typeAsset, setAsset] = useState(eur);
  const [nameAsset, setNameAsset] = useState("eur");
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isAlert, setAlert] = useState(true);
  const [black, setBlack] = useState("none");
  const [maxDefaut, setMax] = useState();
  function showModal() {
    setIsModalVisible(false);
    setBlack("rgba(1, 1, 1, 0.7)");
    setCover(2);
  }
  function showAlert() {
    setAlert(false);
    setBlack("rgba(1, 1, 1, 0.7)");
    setCover(2);
  }

  return (
    <div
      className="send-assets"
      style={{
        width: "500px",
        height: "100vh",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div
        style={{
          padding: "1.5rem 2rem",
        }}
      >
        <div style={{ position: "relative" }}>
          <button className="back-btn">
            <Link to="/">
              <svg
                width="12"
                height="15"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.3623 10C5.1003 10 4.8393 9.89801 4.6433 9.69501L0.780299 5.69501C0.402299 5.30201 0.407299 4.67901 0.793299 4.29301L4.7933 0.293006C5.1833 -0.0979941 5.8163 -0.0979941 6.2073 0.293006C6.5973 0.684006 6.5973 1.31601 6.2073 1.70701L2.9023 5.01201L6.0813 8.30501C6.4653 8.70301 6.4543 9.33601 6.0573 9.71901C5.8623 9.90701 5.6123 10 5.3623 10Z"
                  fill="#151A30"
                />
              </svg>
            </Link>
          </button>
          <h1 style={{ textAlign: "center", margin: "0", fontSize: "2rem" }}>
            Send Assets
          </h1>
        </div>
        <div style={{ width: "100%" }}>
          <p>from</p>
          <input
            style={{
              backgroundColor: "#EDF1F7",

              fontWeight: "700",
            }}
            value={"My Wallet (7300...3334)"}
            disabled
          />
          <p>to</p>
          <input />
          <p>asset</p>
          <button
            type="primary"
            onClick={showModal}
            style={{
              width: "102%",
              height: "3.2rem",
              borderRadius: "0.7rem",
              display: "flex",
              justifyContent: "space-between",
              margin: "0",
              cursor: "pointer",
              background: "none",
            }}
          >
            <div
              style={{
                width: "16%",
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "0.6rem",
                paddingLeft: "1rem",
              }}
            >
              <img
                style={{
                  width: "1.5rem",
                  margin: "0.6 1rem",
                }}
                src={typeAsset}
                alt={typeAsset}
              />
              <div style={{ paddingTop: "0.4rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  {nameAsset}
                </span>
              </div>
            </div>
            <div style={{ margin: "0.8rem 1rem" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7603 12.54L9.0003 15.847L3.2403 12.54L4.9343 11.819L8.5023 13.867C8.6563 13.956 8.8283 14 9.0003 14C9.1723 14 9.3433 13.956 9.4983 13.867L13.0663 11.818L14.7603 12.54ZM8.5023 9.867C8.6563 9.956 8.8283 10 9.0003 10C9.1723 10 9.3433 9.956 9.4983 9.867L13.0663 7.818L14.7603 8.54L9.0003 11.847L3.2403 8.54L4.9343 7.818L8.5023 9.867ZM9.0003 2.087L14.7603 4.54L9.0003 7.847L3.2403 4.54L9.0003 2.087ZM17.9983 8.348C17.9753 7.969 17.7403 7.636 17.3913 7.487L15.2393 6.571L17.4983 5.274C17.8273 5.086 18.0203 4.727 17.9983 4.348C17.9753 3.97 17.7403 3.636 17.3913 3.487L9.3913 0.0799982C9.1413 -0.0270018 8.8583 -0.0270018 8.6083 0.0799982L0.608298 3.487C0.259298 3.636 0.0242985 3.97 0.0022985 4.348C-0.0207015 4.727 0.173298 5.086 0.502298 5.274L2.7603 6.571L0.608298 7.487C0.259298 7.636 0.0242985 7.969 0.0022985 8.348C-0.0207015 8.727 0.173298 9.086 0.502298 9.274L2.7603 10.571L0.608298 11.487C0.259298 11.636 0.0242985 11.969 0.0022985 12.348C-0.0207015 12.727 0.173298 13.086 0.502298 13.274L8.5023 17.867C8.6563 17.956 8.8283 18 9.0003 18C9.1723 18 9.3433 17.956 9.4983 17.867L17.4983 13.274C17.8273 13.086 18.0203 12.727 17.9983 12.348C17.9753 11.97 17.7403 11.636 17.3923 11.487L15.2403 10.57L17.4983 9.274C17.8273 9.086 18.0203 8.727 17.9983 8.348Z"
                  fill="#57627B"
                />
              </svg>
            </div>
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>amount</p>
            <p>
              available: {amount} {nameAsset}
            </p>
          </div>
          <input defaultValue={maxDefaut} />
          <button
            style={{
              width: "50px",
              height: "31px",
              fontWeight: 700,
              position: "absolute",
              bottom: "9%",
              right: "3%",
              backgroundColor: "#EEF3FB",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => {
              setMax(amount);
            }}
          >
            MAX
          </button>
        </div>
      </div>
      <div
        style={{
          width: "88%",
          height: "95%",
          position: "absolute",
          top: "3%",
          left: "6%",
          background: "#fff",
          borderRadius: "20px",
          zIndex: "3",
        }}
        hidden={isModalVisible}
      >
        <button
          style={{
            right: "5%",
            position: "absolute",
            top: "3%",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsModalVisible(true);
            setCover(-1);
            setBlack("#fff");
          }}
        >
          X
        </button>

        <h1 style={{ textAlign: "center" }}>Assets</h1>
        <div style={{ border: "1px solid #C5CEE0" }} />
        <button
          className="asset-select"
          onClick={() => {
            setAsset(dola);
            setCover(-1);
            setNameAsset("usd");
            setAmound(1000);
            setIsModalVisible(true);
            setBlack("#fff");
          }}
        >
          <img
            style={{ width: "35px", height: "35px" }}
            src={dola}
            alt="dola"
          />
          <div className="item" style={{ display: "inline-block" }}>
            <h2 className="currency" style={{ marginBottom: "7px" }}>
              1,000 USD
            </h2>
            <p className="vnd" style={{ marginTop: "7px" }}>
              23,046,000 VND
            </p>
          </div>
        </button>
        <button
          className="asset-select"
          onClick={() => {
            setAsset(eur);
            setCover(-1);
            setNameAsset("eur");
            setAmound(50);
            setIsModalVisible(true);
            setBlack("#fff");
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={eur} alt="eur" />
          <div className="item" style={{ display: "inline-block" }}>
            <h2 className="currency" style={{ marginBottom: "7px" }}>
              50 EUR
            </h2>
            <p className="vnd" style={{ marginTop: "7px" }}>
              1,531,972 VND
            </p>
          </div>
        </button>
        <button
          className="asset-select"
          onClick={() => {
            setAsset(yen);
            setCover(-1);
            setNameAsset("yen");
            setAmound(10000);
            setIsModalVisible(true);
            setBlack("#fff");
          }}
        >
          <img style={{ width: "35px", height: "35px" }} src={yen} alt="yen" />
          <div className="item" style={{ display: "inline-block" }}>
            <h2 className="currency" style={{ marginBottom: "7px" }}>
              10,000 YEN
            </h2>
            <p className="vnd" style={{ marginTop: "7px" }}>
              2,103,317 VND
            </p>
          </div>
        </button>
      </div>
      <div className="alert" hidden={isAlert}>
        <h1>Successfully sent</h1>
        <p>
          Your <span>{nameAsset}</span> has been sent!
        </p>
        <p>Thank you for using our service</p>
        <button
          onClick={() => {
            setAlert(true);
            setCover(-1);
            setBlack("#fff");
          }}
        >
          OK
        </button>
      </div>
      <div className="btn-controll">
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button onClick={showAlert}>OK</button>
      </div>
      <div
        style={{
          backgroundColor: `${black}`,
          position: "absolute",
          width: "100%",
          height: "100vh",
          zIndex: `${cover}`,
          top: "0",
        }}
      ></div>
    </div>
  );
}

export default SendAssets;
