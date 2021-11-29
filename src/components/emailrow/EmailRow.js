import {
    LabelImportantOutlined,
    StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./emailrow.css";
import { setMail } from "../../features/mailSlice";

const EmailRow = (props) => {
    const { id, data } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(
            setMail({
                id: id,
                subject: data.subject,
                message: data.message,
                title: data.title,
                timestamp: data.timestamp?.seconds * 1000,
            })
        );
        navigate("/mail");
    };
    return (
        <div className="emailrow">
            <div className="emailrow_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 onClick={openMail} className="emailrow_title">
                {data.title}
            </h3>
            <div onClick={openMail} className="emailrow_message">
                <h4>
                    {data.subject}{" "}
                    <span className="emailrow_description">
                        - {data.description}
                    </span>
                </h4>
            </div>
            <p className="emailrow_time">
                {new Date(data.timestamp?.seconds * 1000).toUTCString()}
            </p>
        </div>
    );
};

export default EmailRow;
