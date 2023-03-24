import React from "react";
import Ruksi from "../../assets/icons/ruksi.png";

interface TabHeaderProps {
  tabName: string;
  ruksiClicked?: () => void;
  handleClass?: string;
}

const TabHeader: React.FC<TabHeaderProps> = ({
  tabName,
  ruksiClicked,
  handleClass,
}) => {
  return (
    <div className={`tab-header ${handleClass}`}>
      <span>{tabName}</span>
      <img src={Ruksi} className="tab-close" onClick={ruksiClicked} />
    </div>
  );
};

export default TabHeader;
