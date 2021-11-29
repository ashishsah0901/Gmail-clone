import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sendMessageIsOpen: false,
    selectedMail: null,
};

export const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers: {
        setMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        clearMail: (state) => {
            state.selectedMail = null;
        },
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false;
        },
    },
});

export const { clearMail, setMail, openSendMessage, closeSendMessage } =
    mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
