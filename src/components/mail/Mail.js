import React from "react";
import "./mail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenMail, clearMail } from "../../features/mailSlice";

const Mail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton
                        onClick={() => {
                            dispatch(clearMail());
                            navigate("/");
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail_toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail ? selectedMail.subject : "Subject"}</h2>
                    <LabelImportantIcon className="mail_important" />
                    <p>{selectedMail ? selectedMail.title : "Title"}</p>
                    <p className="mail_time">
                        {new Date(selectedMail?.timestamp).toUTCString()}
                    </p>
                </div>
                <div className="mail_message">
                    <p>{selectedMail?.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Mail;
