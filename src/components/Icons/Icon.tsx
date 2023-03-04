import React, { useState } from "react";

interface IconProps {
  name: string;
  icon: any;
  classOfComponent: string;
}

const Icon: React.FC<IconProps> = ({ name, icon, classOfComponent }) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="shortcut clickable">
      <img src={icon} className="icon" />
      <span className="name">{name}</span>
    </div>
  );
};

export default Icon;
