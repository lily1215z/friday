import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Test} from '../test/Test';
import {Login} from '../authComponents/login/Login';
import {Register} from '../authComponents/register/Register';
import {ForgotPassword} from '../authComponents/forgotPassword/ForgotPassword';
import {ForgotPasswordCheckEmail} from '../authComponents/forgotPass_CheckEmail/ForgotPasswordCheckEmail';
import {CreateNewPassword} from '../authComponents/createNewPassword/CreateNewPassword';
import {PageNotFound} from '../common/404/PageNotFound';
import {Profile} from '../profile/Profile';
import {NavBar} from '../nav/NavBar';

export const App = () => {
    return (
        <div className="wrapper">
            <NavBar />

            <Routes>
                <Route path="/" element={<Navigate to="profile"/>}/>

                <Route path={'test'} element={<Test/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'forgotpass'} element={<ForgotPassword/>}/>
                <Route path={'checkemail'} element={<ForgotPasswordCheckEmail/>}/>
                <Route path={'createnewpass'} element={<CreateNewPassword/>}/>
                <Route path={'profile'} element={<Profile />}/>

                <Route path="404" element={<PageNotFound />}/>
                <Route path="*" element={<Navigate to="404"/>}/>
            </Routes>
        </div>
    );
}


