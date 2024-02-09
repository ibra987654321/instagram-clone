import React from 'react';
import StoriesItem from "./StoriesItem";

const StoiesList = () => {

    const stories = [
        {
            name: 'Your Story',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpt2vfUMq9iakkU_NXNwrlO0T7C84cd0XKw&usqp=CAU',
            status: 'def'
        },
        {
            name: 'karennne',
            url: 'https://img.freepik.com/free-photo/people-and-emotions-close-up-of-confident-smiling-young-woman-looking-at-camera-standing-in-casual-r_1258-87448.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707350400&semt=sph',
            status: 'live'
        },
        {
            name: 'zackjohn',
            url: 'https://media.licdn.com/dms/image/C4D03AQECWKnFevxhKw/profile-displayphoto-shrink_800_800-alternative/0/1529009714646?e=2147483647&v=beta&t=-noBf7DHy_zRd9twy8XajUNIbid6RhT1br9hh9YwwZs',
            status: 'def'
        },
        {
            name: 'kieron_d',
            url: 'https://i.work.ua/article/1516b.jpg',
            status: 'def'
        },
        {
            name: 'craig_love',
            url: 'https://avatarko.ru/img/kartinka/16/zhivotnye_kot_15459.jpg',
            status: 'def'
        },
        {
            name: 'Your Story',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpt2vfUMq9iakkU_NXNwrlO0T7C84cd0XKw&usqp=CAU',
            status: 'def'
        },
        {
            name: 'karennne',
            url: 'https://img.freepik.com/free-photo/people-and-emotions-close-up-of-confident-smiling-young-woman-looking-at-camera-standing-in-casual-r_1258-87448.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707350400&semt=sph',
            status: 'live'
        },
        {
            name: 'zackjohn',
            url: 'https://media.licdn.com/dms/image/C4D03AQECWKnFevxhKw/profile-displayphoto-shrink_800_800-alternative/0/1529009714646?e=2147483647&v=beta&t=-noBf7DHy_zRd9twy8XajUNIbid6RhT1br9hh9YwwZs',
            status: 'def'
        },
        {
            name: 'kieron_d',
            url: 'https://i.work.ua/article/1516b.jpg',
            status: 'def'
        },
        {
            name: 'craig_love',
            url: 'https://avatarko.ru/img/kartinka/16/zhivotnye_kot_15459.jpg',
            status: 'def'
        },
    ]

    return (
        <div className="flex overflow-x-auto whitespace-nowrap">
            {
                stories.map(i => (
                    <StoriesItem name={i.name} url={i.url} status={i.status}/>
                ))
            }
        </div>
    );
};

export default StoiesList;
