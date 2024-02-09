import React from 'react';
import StoiesList from "./components/stories/StoiesList";
import MainCardList from "./components/mainCardList/MainCardList";

const MainLenta = () => {
    return (
        <div className="overflow-auto" style={{height: '700px'}}>
            <StoiesList/>
            <MainCardList/>
        </div>
    );
};

export default MainLenta;
