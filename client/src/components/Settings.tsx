import React, { FC, useState } from 'react';






import './Settings.scss';
import { resetFetch } from '../common/functions/fakeFetches';
import { useSearchParams } from 'react-router-dom';




const UserTypes = ["red", "blue", "green", "yellow", "OTHER", "אחר"];


export const Settings: FC = () => {

    const searchParams = useSearchParams()[0];
    const isAdmin = searchParams.get("isAdmin") === "t";
    console.log('isAdmin: ', isAdmin);

    const [userType, setUserType] = useState("");

    const handleLogout = () => console.log(`history.push(window.location.pathname)`)

    const hanleClick = () => {
        console.log("new category")
    }

    const handleUpdateUserType = () => {
        const newUser = UserTypes[Math.floor(Math.random() * UserTypes.length)];
        console.log('newUser: ', newUser);
        if (newUser === "red") setUserType("חבר בגריפינדור🦁")
        if (newUser === "blue") setUserType("חבר ברייבנקלו🦅");
        if (newUser === "green") setUserType("חבר בסלית'רין🐍");
        if (newUser === "yellow") setUserType("חבר בהפלפאף🦡")
        setUserType("מוגלגים... 😞")
    }

    const handleResetPWClick = () => {
        console.log(`history.push('reset-password?b=h')`)
    }

    return (
        <div id="admin-settings-container">
            <div className="admin-settings-title">הגדרות</div>

            <div id="admin-settings-white-box" className="admin-table-container">
                <div id="settings-content-container">

                    <div className="setting-container">
                        <div className="setting-title-container">
                            <div className="setting-title">שינוי סיסמא</div>
                        </div>

                        <div className="setting-content">
                            <div onClick={() => { handleResetPWClick() }} className="setting-button"> שנה סיסמא </div>
                            <div className="setting-text"></div>
                        </div>
                    </div>
                    {isAdmin ? <>
                        <div className="setting-container">
                            <div className="setting-title-container">
                                <div className="setting-title">הוספת קטגוריה</div>
                            </div>

                            <div className="setting-content">
                                <div onClick={(e) => hanleClick} className="setting-button" >הוסף קטגוריה</div>
                                <div className="setting-text" >הוספת קטגוריה שתופיע לכל המורים הרשומים לארגון שלך</div>
                            </div>
                        </div>

                        <div className="setting-container">
                            <div className="setting-title-container">
                                <div className="setting-title">סוג המשתמש שאני</div>
                            </div>

                            <div className="setting-content">
                                <div onClick={handleUpdateUserType} className="setting-button" >שינוי</div>
                                <div className="setting-text" >{userType || "no user type yet"}</div>
                            </div>
                        </div>
                    </>
                        : null
                    }

                    <div className="setting-container">
                        <div onClick={() => { handleLogout() }} id="button">התנתק</div>
                    </div>

                </div>
            </div>
        </div >
    );
}