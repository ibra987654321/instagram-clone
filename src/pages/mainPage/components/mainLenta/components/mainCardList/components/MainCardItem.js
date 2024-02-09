import React from 'react';
import Carousel from "./Carousel";

const MainCardItem = ({item}) => {
    return (
        <div>
            <div className="flex px-2 justify-between items-center bg-white">
                <div className="flex my-2 items-center">
                    <img className="object-cover mr-3" src={item.url} style={{width: '32px', height: '32px', borderRadius: '50%'}}/>
                    <div className="flex flex-col text-left">
                        <div className="font-bold text-14">{item.name}</div>
                        <div className="text-12">{item.location}</div>
                    </div>
                </div>
                <svg className="cursor-pointer" width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.5C2.32843 0.5 3 1.17157 3 2C3 2.82843 2.32843 3.5 1.5 3.5C0.671573 3.5 0 2.82843 0 2C0 1.17157 0.671573 0.5 1.5 0.5ZM7 0.5C7.82843 0.5 8.5 1.17157 8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5ZM12.5 0.5C13.3284 0.5 14 1.17157 14 2C14 2.82843 13.3284 3.5 12.5 3.5C11.6716 3.5 11 2.82843 11 2C11 1.17157 11.6716 0.5 12.5 0.5Z" fill="#262626"/>
                </svg>
            </div>
            <Carousel images={item.postImages}/>
            <div className="flex px-2 ">
                Liked by <div className="font-bold"> {item.liked[item.liked.length - 1]}</div> and <div className="font-bold">{item.liked.length} others</div>
            </div>
            <div className="text-left px-2 ">
                {item.description}
            </div>
        </div>
    );
};

export default MainCardItem;
