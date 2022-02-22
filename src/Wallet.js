import React, { useEffect } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import eur from "./images/eur-pic.png";
import yen from "./images/yen-pic.png";

function Wallet() {
  const navigate = useNavigate();

  if (localStorage.getItem("UserAdmin") === null) {
    navigate("/auth", { replace: true });
  }

  return (
    <div style={{ padding: "2rem", paddingTop: "0" }}>
      <div className="header">
        <h5 className="header-username">
          <span className="symbol-dot">
            •<span className="username">Ronin Wallet</span>
          </span>
        </h5>
        <svg
          className="symbol-user"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 4C11 6.206 9.206 8 7 8C4.794 8 3 6.206 3 4C3 1.794 4.794 0 7 0C9.206 0 11 1.794 11 4ZM14 17C14 17.552 13.553 18 13 18H1C0.447 18 0 17.552 0 17C0 13.14 3.141 10 7 10C10.859 10 14 13.14 14 17Z"
            fill="#1273EA"
          />
        </svg>
      </div>
      <div className="banner">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ fontWeight: "600", color: "#fff" }}>
            My Wallet
            <span
              style={{
                marginLeft: "1rem",
                fontWeight: "normal",
                color: "#8DC9F9",
              }}
            >
              (7300 3777 3888 3334)
            </span>
          </h3>
          <svg
            style={{ marginTop: "1.6rem" }}
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 6.66667V6C4 4.89733 4.89733 4 6 4H6.66667V1.778C6.66667 1.53267 6.46733 1.33333 6.222 1.33333H1.778C1.53267 1.33333 1.33333 1.53267 1.33333 1.778V6.222C1.33333 6.46733 1.53267 6.66667 1.778 6.66667H4ZM4 8H1.778C0.797333 8 0 7.20267 0 6.222V1.778C0 0.797333 0.797333 0 1.778 0H6.222C7.20267 0 8 0.797333 8 1.778V4H10C11.1027 4 12 4.89733 12 6V10C12 11.1027 11.1027 12 10 12H6C4.89733 12 4 11.1027 4 10V8ZM5.33333 6C5.33333 5.63267 5.63267 5.33333 6 5.33333H10C10.368 5.33333 10.6667 5.63267 10.6667 6V10C10.6667 10.3673 10.368 10.6667 10 10.6667H6C5.63267 10.6667 5.33333 10.3673 5.33333 10V6Z"
              fill="white"
            />
          </svg>
        </div>
        <div style={{ width: "100%", border: "1px solid #68B8F8" }} />
        <h1
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "2.5rem",
            letterSpacing: "2px",
            margin: "1rem 0",
          }}
        >
          1,000 USD
        </h1>
        <h2 style={{ color: "#8DC9F9", margin: "0" }}>23,046,000 VND</h2>
        <svg
          style={{ position: "absolute", bottom: "25", right: "30" }}
          width="50"
          height="60"
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.0432 0H3.96537C2.25403 0 0.866716 1.38731 0.866716 3.09865V27.3447C0.866716 28.5114 1.39262 29.616 2.2983 30.3515L13.5393 39.4801C14.3929 40.1733 15.6157 40.1733 16.4693 39.4801L27.7103 30.3515C28.616 29.616 29.1419 28.5114 29.1419 27.3447V3.09865C29.1419 1.38731 27.7546 0 26.0432 0ZM24.4938 6.97199C24.4938 5.68848 23.4533 4.648 22.1698 4.648H7.83854C6.55504 4.648 5.51455 5.68848 5.51455 6.97199V24.8707C5.51455 25.5378 5.80121 26.1727 6.30159 26.6139L12.1393 31.761L12.1394 18.9318H15.545C16.8285 18.9318 17.869 19.9723 17.869 21.2558L17.8689 31.761L23.7068 26.6139C24.2071 26.1727 24.4938 25.5378 24.4938 24.8707V20.1817L24.4931 20.1195C24.4605 18.5909 23.2271 17.3577 21.6983 17.3255L21.637 17.3249L21.6992 17.3242C23.2278 17.2916 24.461 16.0582 24.4931 14.5294L24.4938 14.4681V6.97199ZM12.1394 7.86186H17.869V12.6798C17.869 13.9633 16.8285 15.0038 15.545 15.0038H12.1394V7.86186Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="actions">
        <button className="button">
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.6667 6H3.33334V4.66667C3.33334 3.932 3.93067 3.33333 4.66667 3.33333H23.3333C24.0693 3.33333 24.6667 3.932 24.6667 4.66667V6ZM20.6667 14H18C17.2667 14 16.6667 13.4 16.6667 12.6667C16.6667 11.9333 17.2667 11.3333 18 11.3333H20.6667C21.4 11.3333 22 11.9333 22 12.6667C22 13.4 21.4 14 20.6667 14ZM12.6667 14H7.33334C6.6 14 6 13.4 6 12.6667C6 11.9333 6.6 11.3333 7.33334 11.3333H12.6667C13.4 11.3333 14 11.9333 14 12.6667C14 13.4 13.4 14 12.6667 14ZM23.3333 0.666668H4.66667C2.46134 0.666668 0.666672 2.46133 0.666672 4.66667V15.3333C0.666672 17.5387 2.46134 19.3333 4.66667 19.3333H23.3333C25.5387 19.3333 27.3333 17.5387 27.3333 15.3333V4.66667C27.3333 2.46133 25.5387 0.666668 23.3333 0.666668Z"
              fill="url(#paint0_linear_1719_77)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1719_77"
                x1="27.3333"
                y1="0.666666"
                x2="-2.24583"
                y2="10.9806"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1C94F4" />
                <stop offset="1" stop-color="#1273EA" />
              </linearGradient>
            </defs>
          </svg>

          <p>Deposit</p>
        </button>
        <button className="button">
          <Link to="/send-assets">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3225 0.698379C22.7222 0.0823177 21.8338 -0.147195 21.0055 0.0943974L1.6896 5.71143C0.815638 5.95423 0.196185 6.65123 0.0293162 7.53666C-0.141154 8.4378 0.45429 9.58175 1.23221 10.0601L7.27188 13.7722C7.89134 14.1527 8.69086 14.0573 9.20347 13.5402L16.1195 6.58116C16.4676 6.21877 17.0439 6.21877 17.392 6.58116C17.7402 6.93147 17.7402 7.49922 17.392 7.8616L10.464 14.8219C9.95018 15.3377 9.85414 16.141 10.2323 16.7643L13.9226 22.8645C14.3548 23.5893 15.0991 24 15.9154 24C16.0115 24 16.1195 24 16.2155 23.9879C17.1519 23.8671 17.8962 23.2269 18.1723 22.3209L23.8987 3.02975C24.1508 2.20833 23.9227 1.31444 23.3225 0.698379Z"
                fill="url(#paint0_linear_1719_41)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1719_41"
                  x1="24"
                  y1="-2.93038e-06"
                  x2="-4.17918"
                  y2="6.87806"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1C94F4" />
                  <stop offset="1" stop-color="#1273EA" />
                </linearGradient>
              </defs>
            </svg>
            <p>Send</p>
          </Link>
        </button>
        <button className="button">
          <svg
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.8856 4.66667H20.8803C23.5189 4.66667 25.6669 6.77733 25.6669 9.372V12.6667C25.6669 13.404 25.0709 14 24.3336 14C23.5963 14 23.0003 13.404 23.0003 12.6667V9.372C23.0003 8.24933 22.0496 7.33333 20.8803 7.33333H4.8856L6.6096 9.05733C7.1296 9.57867 7.1296 10.4213 6.6096 10.9427C6.3496 11.2027 6.00827 11.3333 5.66693 11.3333C5.3256 11.3333 4.98427 11.2027 4.72427 10.9427L0.724267 6.94267C0.202934 6.42133 0.202934 5.57867 0.724267 5.05733L4.72427 1.05733C5.24427 0.535999 6.08827 0.535999 6.6096 1.05733C7.1296 1.57867 7.1296 2.42133 6.6096 2.94267L4.8856 4.66667ZM19.3907 17.0573C19.912 16.536 20.7547 16.536 21.276 17.0573L25.276 21.0573C25.7973 21.5787 25.7973 22.4213 25.276 22.9427L21.276 26.9427C21.016 27.2027 20.6747 27.3333 20.3333 27.3333C19.992 27.3333 19.6507 27.2027 19.3907 26.9427C18.8693 26.4213 18.8693 25.5787 19.3907 25.0573L21.1147 23.3333H5.12C2.48 23.3333 0.333334 21.2227 0.333334 18.628V15.3333C0.333334 14.596 0.930667 14 1.66667 14C2.40267 14 3 14.596 3 15.3333V18.628C3 19.752 3.95067 20.6667 5.12 20.6667H21.1147L19.3907 18.9427C18.8693 18.4213 18.8693 17.5787 19.3907 17.0573Z"
              fill="url(#paint0_linear_1719_47)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1719_47"
                x1="25.667"
                y1="0.666329"
                x2="-4.24211"
                y2="7.60164"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#1C94F4" />
                <stop offset="1" stop-color="#1273EA" />
              </linearGradient>
            </defs>
          </svg>
          <p>Swap</p>
        </button>
      </div>
      <div className="assets">
        <h2 style={{ margin: "0" }}>Assets</h2>
        <div className="container">
          <img style={{ width: "40px", height: "40px" }} src={eur} alt="eur" />
          <div className="item" style={{ display: "inline-block" }}>
            <h2 className="currency" style={{ margin: "0" }}>
              50 EUR
            </h2>
            <p className="vnd" style={{ margin: "0" }}>
              1,531,972 VND
            </p>
          </div>
        </div>
        <div className="container">
          <img style={{ width: "40px", height: "40px" }} src={yen} alt="yen" />
          <div className="item" style={{ display: "inline-block" }}>
            <h2 className="currency" style={{ margin: "0" }}>
              10,000 YEN
            </h2>
            <p className="vnd" style={{ margin: "0" }}>
              2,103,317 VND
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
