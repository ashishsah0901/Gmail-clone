import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, selectUser } from "../../features/userSlice";
import { signOut } from "@firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOut = () => {
        if (user) {
            signOut(auth)
                .then((value) => dispatch(clearUser()))
                .catch((err) => alert(err));
        }
    };
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://i.pinimg.com/originals/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.png"
                    alt=""
                ></img>
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="header_inputCaret" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar
                    className="header_avatar"
                    onClick={logoutOut}
                    src={user.photoUrl}
                />
            </div>
        </div>
    );
};

export default Header;
