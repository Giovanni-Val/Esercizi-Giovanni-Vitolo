import { useState } from "react";

export const Container = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ backgroundColor: 'white', border: '2px solid red', padding: '10px', marginBottom: '10px' }}>
      <div
        onClick={toggleCollapse}
        style={{
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '18px',
          marginBottom: '10px',
        }}
      >
        {title}
      </div>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
};
