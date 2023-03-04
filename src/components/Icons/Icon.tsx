import React, { useState } from "react";

interface IconProps {
  name: string;
  icon: any;
  classOfComponent: string;
}

const Icon: React.FC<IconProps> = ({ name, icon, classOfComponent }) => {
  const [display, setDisplay] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  const handleClick = () => {
    setDisplay(!display);
    setTimesClicked(timesClicked === 2 ? 0 : timesClicked + 1);
  };

  return (
    <div className="shortcut clickable" tabIndex={0} onClick={handleClick}>
      <img src={icon} className="icon" />
      <span className={"name"}>{name}</span>
    </div>
  );
};

export default Icon;
