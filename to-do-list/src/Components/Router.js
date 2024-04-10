import React from 'react';

import { Routes, Route } from "react-router-dom";
import WelcomeCom from './WelComePage/Welcome';
import LogIn from '../Forms/LogIn';
import SignUp from '../Forms/SignUp';
import Dashboard from './DashboardPage/Dashboard';
import Active from './ActivePage/Active';
import MainHome from './HomePage/MainHome';
import Complete from './CompletePage/Complete';

const RouterCom = () => {


    return (

        <Routes>
            <Route exact path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<WelcomeCom />} />

            <Route  element={<Dashboard />} >
                <Route path="/active" element={<Active />} />
                <Route path="/complete" element={<Complete />} />
                <Route exact path="/dashboard" element={<MainHome />} />
            </Route>
        
        </Routes>

    )
}

export default RouterCom;