import React from "react";
import "./sidebaroption.css";

const SidebarOption = (props) => {
    const { Icon, title, number, selected } = props;
    return (
        <div className={`sidebaroption ${selected && "sidebaroption--active"}`}>
            <Icon />
            <h3>{title}</h3>
            {number && <p>{number}</p>}
        </div>
    );
};

export default SidebarOption;
