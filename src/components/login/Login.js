import React from "react";
import "./login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    })
                );
            })
            .catch((err) => alert(err));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img
                    src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                    alt=""
                />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Login with Google
                </Button>
            </div>
        </div>
    );
};

export default Login;
