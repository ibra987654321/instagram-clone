import React from 'react';

const StoriesItem = ({url, name, status}) => {
    return (
        <div className="flex flex-col items-center mr-4">
            <img
                src={url}
                style={{
                    width: '62px',
                    height: '62px',
                    border: '0px solid',// Градиент для границы

                }}
                className="p-0.5 object-cover rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
            />
            <div className="text-center">{name}</div>
        </div>
    );
};

export default StoriesItem;
