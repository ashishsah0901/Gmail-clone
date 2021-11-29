import React from "react";
import "./sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "../sidebaroption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

const Sidebar = () => {
    const dispatch = useDispatch();
    const openMailCompose = () => {
        dispatch(openSendMessage());
    };
    return (
        <div className="sidebar">
            <Button
                onClick={openMailCompose}
                startIcon={<AddIcon />}
                fontSize="large"
                className="sidebar_compose"
            >
                Compose
            </Button>
            <SidebarOption
                selected={true}
                Icon={InboxIcon}
                title="Inbox"
                number={99}
            />
            <SidebarOption Icon={StarIcon} title="Starred" number={10} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={17} />
            <SidebarOption
                Icon={LabelImportantIcon}
                title="Important"
                number={5}
            />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={82} />
            <SidebarOption Icon={NoteIcon} title="Draft" number={23} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" />
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
