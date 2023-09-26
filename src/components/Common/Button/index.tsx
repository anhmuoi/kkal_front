import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./styles.scss";

interface Props {
  text: string;
  onClick?: () => void;
  type?: "primary" | "outline" | "dark";
  rightIcon?: boolean;
  size?: "small" | "normal";
  style?: React.CSSProperties;
  disable?: boolean;
}
function Button({ text, onClick, type = "primary", rightIcon = false, size, style, disable }: Props) {
  return (
    <div
      onClick={() => {
        onClick && onClick();
      }}
      style={{
        background: type === "primary" ? "#ffffff" : type === "outline" ? "#d6d6d6" : "#222222",
        cursor: "pointer",
        opacity: disable ? 0.5 : 1,
        ...style,
      }}
      className={`${size === "normal" ? "button-component normalButton" : "button-component"}`}
    >
      <span style={{ color: "#333333" }}>{text}</span>
      {rightIcon && (
        <div style={{ paddingLeft: 10 }}>
          <FaChevronRight color={type === "primary" ? "#fff" : "#0062f4"} size={14} />
        </div>
      )}
    </div>
  );
}

export default Button;
