import React from "react";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#fffff3",
          paddingRight: "5%",
          paddingLeft: "5%",
        }}
      >
        <nav
          style={{
            height: "10vh",
            display: "flex",
            width: "100vw",
          }}
        >
          <div
            style={{
              width: "20%",
              // justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <span
              style={{ color: "black", fontSize: 24, fontWeight: "bolder" }}
            >
              Crypto
              <span
                style={{ color: "black", fontSize: 18, fontWeight: "lighter" }}
              >
                Fin
              </span>
            </span>
          </div>

          <div style={{ width: "60%" }}>
            <ul
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bolder",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",

                // flex: 1,
              }}
            >
              <li>Home</li>
              <li>Pricing</li>
              <li>Resource</li>
              <li>Blog</li>
            </ul>
          </div>
          <div
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "bolder",
              width: "20%",
              // justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Contact Us
          </div>
        </nav>
        <div style={{ display: "flex", height: "90vh", width: "100vw" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: 36,
                fontWeight: "bold",
                width: "80%",
              }}
            >
              We{" "}
              <span
                style={{
                  border: "1px solid black",
                  color: "#0776f2",
                  padding: "5px",
                  borderRadius: 50,
                }}
              >
                {" "}
                invest{" "}
              </span>{" "}
              for you, with lowest risk and
              <span
                style={{
                  border: "1px solid black",
                  color: "red",
                  padding: "5px",
                  borderRadius: 50,
                }}
              >
                {" "}
                highest{" "}
              </span>
              return on investment.
            </div>
            <p style={{ fontSize: 28, color: "black", width: "80%" }}>
              It's like investing in mutual funds but of cryptocurrency. Get
              upto 128% ROI per annum.
            </p>
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                padding: 10,
                fontSize: 30,
                fontWeight: "normal",
                paddingRight: 20,
                paddingLeft: 20,
                borderRadius: 0,
              }}
            >
              Let's Invest
            </button>
          </div>
          <div style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
