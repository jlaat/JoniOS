import React, { useState } from "react";

interface IconProps {
  name: string;
  icon: any;
  classOfComponent: string;
  handleClick: () => void;
}

const Icon: React.FC<IconProps> = ({ name, icon, handleClick }) => {
  const [display, setDisplay] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  const handleIconClick = () => {
    setDisplay(!display);
    setTimesClicked(timesClicked === 2 ? 0 : timesClicked + 1);
    handleClick();
  };

  return (
    <div className="shortcut clickable" tabIndex={0} onClick={handleIconClick}>
      <img src={icon} className="icon" />
      <span className={"name"}>{name}</span>
    </div>
  );
};

export default Icon;
