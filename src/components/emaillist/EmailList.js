import React, { useEffect, useState } from "react";
import "./emaillist.css";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "../section/Section";
import EmailRow from "../emailrow/EmailRow";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../../firebase";

const EmailList = () => {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "emails"), orderBy("timestamp"));
        const unSubscribe = onSnapshot(q, (snapshot) => {
            setEmails(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
        return () => {
            unSubscribe();
        };
    }, []);
    return (
        <div className="emaillist">
            <div className="emaillist_settings">
                <div className="emaillist_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <UndoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emaillist_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emaillist_sections">
                <Section
                    Icon={InboxIcon}
                    title="Primary"
                    color="red"
                    selected
                />
                <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
                <Section
                    Icon={LocalOfferIcon}
                    title="Promotions"
                    color="green"
                />
            </div>
            <div className="emaillist_list">
                {emails.map((email) => (
                    <EmailRow key={email.id} id={email.id} data={email.data} />
                ))}
            </div>
        </div>
    );
};

export default EmailList;
