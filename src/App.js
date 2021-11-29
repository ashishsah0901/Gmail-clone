import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailList from "./components/emaillist/EmailList";
import Mail from "./components/mail/Mail";
import SendMail from "./components/sendmail/SendMail";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useSelector } from "react-redux";
import { selectUser, setUser } from "./features/userSlice";
import Login from "./components/login/Login";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
    const sendMailIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUser({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            }
        });
        return () => {
            unSubscribe();
        };
    }, [dispatch]);
    return (
        <Router>
            {!user ? (
                <Login />
            ) : (
                <div className="app">
                    <Header />
                    <div className="app_body">
                        <Sidebar />
                        <Routes>
                            <Route exact path="/" element={<EmailList />} />
                            <Route exact path="/mail" element={<Mail />} />
                        </Routes>
                    </div>
                    {sendMailIsOpen && <SendMail />}
                </div>
            )}
        </Router>
    );
}

export default App;
