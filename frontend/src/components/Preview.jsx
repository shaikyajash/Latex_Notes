import React, { useEffect, useRef } from "react";
import katex from "katex";

const Preview = ({ content }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      try {
        katex.render(content, previewRef.current, {
          displayMode: true,
          throwOnError: true,
          macros: {
            "\\f": "#1 f(#2)",
          },
        });
      } catch (err) {
        previewRef.current.innerHTML = `<span style="color:red;">${err.message}</span>`;
      }
    }
  }, [content]);

  return <div ref={previewRef} className="latex-preview" />;
};

export default Preview;
