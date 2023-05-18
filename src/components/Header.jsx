import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

function HeaderCustom({ pageTitle, buttonTitle, addTitle }) {
  const logout = async () => {
    window.open("http://localhost:5000/auth/logout", "_self");
    console.log(response);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 30px 20px 30px",
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: "500",
          width: "50%",
          alignSelf: "flex-end",
        }}
      >
        {pageTitle}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40%",
            alignSelf: "flex-end",
            // padding: "0 0 0 270px",
            marginBottom: 20,
          }}
        >
          <div style={{ color: "green", cursor: "pointer" }}>
            + <span style={{ textDecoration: "underline" }}>{addTitle}</span>
          </div>
          <div>
            <IoMdNotificationsOutline
              style={{
                fontSize: 18,
                color: "green",
                cursor: "pointer",
                marginLeft: 10,
              }}
            />
          </div>
          <div onClick={logout}>
            <FiLogOut
              style={{ fontSize: 18, color: "green", cursor: "pointer" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "6px 15px",
              cursor: "pointer",
              borderRadius: 4,
              width: "30%",
            }}
          >
            + {buttonTitle}
          </div>
          <div style={{ position: "relative", width: "66%" }}>
            <BiSearch
              style={{
                color: "black",
                position: "absolute",
                left: 6,
                bottom: 8,
                cursor: "pointer",
              }}
            />
            <AiOutlineClose
              style={{
                color: "black",
                position: "absolute",
                right: 6,
                bottom: 8,
                cursor: "pointer",
              }}
            />
            <input
              style={{
                padding: "6px 25px",
                width: "100%",
                borderColor: "lightgrey",
                borderWidth: 0.5,
                borderRadius: 4,
                backgroundColor: "white",
              }}
              placeholder="Search for a keyword"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCustom;
