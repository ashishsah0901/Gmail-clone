import React, { useEffect } from "react";
import "./sendmail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const SendMail = () => {
    const dispatch = useDispatch();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({ defaultValues: { to: "", subject: "", message: "" } });
    const sendMail = (data) => {
        addDoc(collection(db, "emails"), {
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: serverTimestamp(),
        })
            .then(() => dispatch(closeSendMessage()))
            .catch((err) => alert(err));
    };
    const closeMailCompose = () => {
        dispatch(closeSendMessage());
    };
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ to: "", subject: "", message: "" });
            dispatch(closeSendMessage());
        }
    }, [isSubmitSuccessful, reset, dispatch]);
    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Message</h3>
                <CloseIcon
                    onClick={closeMailCompose}
                    className="sendmail_close"
                />
            </div>
            <form onSubmit={handleSubmit(sendMail)}>
                <input
                    type="email"
                    placeholder="To"
                    {...register("to", { required: true })}
                />
                {errors.to && <p className="sendmail_error">To is required</p>}
                <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                />
                {errors.subject && (
                    <p className="sendmail_error">Subject is required</p>
                )}
                <textarea
                    className="sendmail_message"
                    type="text"
                    placeholder="Message"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <p className="sendmail_error">Message is required</p>
                )}
                <div className="sendmail_options">
                    <Button type="submit" className="sendmail_send">
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
