import React, { useState } from "react";
import Icon from "./Icon";
import GuestbookIcon from "../../assets/icons/book.png";
import ProjectsIcon from "../../assets/icons/projects.png";
import TerminalIcon from "../../assets/icons/terminal.png";
import { iconData } from "./icon_data";

const Icons = (props: any) => {
  return (
    <div className="icons">
      {iconData.map((icon, index) => {
        return (
          <Icon
            key={index}
            name={icon.name}
            icon={icon.icon}
            classOfComponent={icon.name.toLowerCase()}
            handleClick={() => {
              props[`render${icon.name}`](true);
            }}
          />
        );
      })}
    </div>
  );
};

export default Icons;
