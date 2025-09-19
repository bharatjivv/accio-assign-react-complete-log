import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(markdown);
    }, 100);
    return () => clearTimeout(timeout);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </>
  );
}

export default MarkdownEditor;