import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faPaintRoller } from "@fortawesome/free-solid-svg-icons";
const Menu2 = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer} style={{ border: "none" }}>
        <FontAwesomeIcon className="icon" icon={faPalette} size="2xl" />
      </Button>

      <Drawer title="Theme settings" onClose={onClose} open={open}>
        <p>Choose mood</p>
        <div
          className="light"
          style={{ display: "flex", marginTop: "30px", gap: "10px" }}
        >
          <div
            style={{
              border: "1px solid black",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          ></div>
          <span style={{ display: "flex", alignItems: "center" }}>light</span>
        </div>
        <div
          className="light"
          style={{ display: "flex", marginTop: "10px", gap: "10px" }}
        >
          <div
            style={{
              border: "1px solid black",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          ></div>
          <span style={{ display: "flex", alignItems: "center" }}>dark</span>
        </div>
        <p style={{ marginTop: "30px" }}>Choose color</p>
        <div>
          <div
            className="blue"
            style={{ display: "flex", marginTop: "30px", gap: "10px" }}
          >
            <FontAwesomeIcon
              icon={faPaintRoller}
              style={{ color: "blue" }}
              size="xl"
            />
            <span>Blue</span>
          </div>
        </div>
        <div
          className="red"
          style={{ display: "flex", marginTop: "10px", gap: "10px" }}
        >
          <FontAwesomeIcon
            size="xl"
            icon={faPaintRoller}
            style={{ color: "red" }}
          />
          <span>Red</span>
        </div>
        <div
          className="aqua"
          style={{ display: "flex", marginTop: "10px", gap: "10px" }}
        >
          <FontAwesomeIcon
            size="xl"
            icon={faPaintRoller}
            style={{ color: "aqua" }}
          />
          <span>Cyan</span>
        </div>
        <div
          className="green"
          style={{ display: "flex", marginTop: "10px", gap: "10px" }}
        >
          <FontAwesomeIcon
            size="xl"
            icon={faPaintRoller}
            style={{ color: "green" }}
          />
          <span>Green</span>
        </div>
        <div
          className="orange"
          style={{ display: "flex", marginTop: "10px", gap: "10px" }}
        >
          <FontAwesomeIcon
            icon={faPaintRoller}
            size="xl"
            style={{ color: "orange" }}
          />
          <span>Orange</span>
        </div>
      </Drawer>
    </>
  );
};
export default Menu2;
