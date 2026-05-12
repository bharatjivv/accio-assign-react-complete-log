import { useState } from "react";

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tab Titles */}
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              backgroundColor: activeIndex === index ? "#ddd" : "#fff",
              border: "1px solid #ccc"
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: "16px" }}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
