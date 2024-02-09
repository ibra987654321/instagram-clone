import React from 'react';
import MainPage from "../pages/mainPage/index";

const MainLayout = () => {

    return (
        <div style={{height: '812px', width: '375px'}} className="bg-white overflow-hidden">
            <MainPage/>
        </div>
    );
};

export default MainLayout;
