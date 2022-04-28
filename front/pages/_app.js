import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const AppShell = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

export default AppShell;