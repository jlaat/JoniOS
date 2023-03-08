import React from "react";
import Ruksi from "../../assets/icons/ruksi.png";

interface TabHeaderProps {
  tabName: string;
  ruksiClicked?: () => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({ tabName, ruksiClicked }) => {
  return (
    <div className="tab-header">
      <span>{tabName}</span>
      <img src={Ruksi} className="tab-close" onClick={ruksiClicked} />
    </div>
  );
};

export default TabHeader;
