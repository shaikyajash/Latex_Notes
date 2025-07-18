import React from "react";
import "../styles/Toolbar.css";

const Toolbar = ({ onInsert }) => {
  const symbols = [
    { label: "∑", code: "\\sum" },
    { label: "∫", code: "\\int" },
    { label: "√", code: "\\sqrt{}" },
    { label: "π", code: "\\pi" },
    { label: "lim", code: "\\lim_{x \\to 0}" },
    { label: "Matrix", code: "\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}" },
    { label: "H₂O", code: "H_2O" },
    { label: "CO₂", code: "CO_2" },
    { label: "⇌", code: "\\rightleftharpoons" },
    { label: "Space", code: "\\ " },
  ];

  return (
    <div className="toolbar-container">
      {symbols.map((sym, i) => (
        <button
          key={i}
          onClick={() => onInsert(sym.code)}
          type="button"
          className="toolbar-button"
        >
          {sym.label}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
