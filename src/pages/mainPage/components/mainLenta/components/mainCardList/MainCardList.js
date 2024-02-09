import React from 'react';
import MainCardItem from "./components/MainCardItem";

const MainCardList = () => {

    const posts = [
        {
            name: "John Doe",
            location: "New York, USA",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpt2vfUMq9iakkU_NXNwrlO0T7C84cd0XKw&usqp=CAU",
            postImages: [
                'https://www.selfietravel.kz/wp-content/uploads/2019/07/%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.png',
                'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/4da887b82bfc412794cfa6dfb0b4c718/',
                'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Japan-3.jpg',
            ],
            liked: ["Jane Smith", "Alex Johnson"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, purus in consequat aliquet, nul."
        },
        {
            name: "Alice Johnson",
            location: "Los Angeles, USA",
            url: "https://media.licdn.com/dms/image/C4D03AQECWKnFevxhKw/profile-displayphoto-shrink_800_800-alternative/0/1529009714646?e=2147483647&v=beta&t=-noBf7DHy_zRd9twy8XajUNIbid6RhT1br9hh9YwwZs",
            postImages: [
                'https://www.erv.ru/upload/medialibrary/587/ww7gich3fbgmb19hqv6z82r8ithpch0x/%D0%9B%D0%B5%D0%B3%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D0%BD%D1%8B%D0%B9%20%D0%9A%D0%BE%D0%BB%D0%B8%D0%B7%D0%B5%D0%B9%20%D0%BD%D0%B0%20%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4%D0%B5%20%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0,%20%D0%A0%D0%B8%D0%BC,%20%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F.jpg',
                'https://all.accor.com/magazine/imagerie/kartinka-1-5bfb.jpg',
                'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/42e33b5787ea4813ac613f15d9f5f244/',
                'https://www.erv.ru/upload/medialibrary/811/k29noaulrhcu2rcpodeokhcvjgdrwk78/%D0%9F%D1%8C%D1%8F%D1%86%D1%86%D0%B0-%D0%B4%D0%B5%D0%B8-%D0%9C%D0%B8%D1%80%D0%B0%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%20(%C2%AB%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C%20%D1%87%D1%83%D0%B4%D0%B5%D1%81%C2%BB)%20%D1%81%20%D0%B1%D0%B0%D0%B7%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9%20%D0%B8%20%D0%9F%D0%B8%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B9%20%D0%B1%D0%B0%D1%88%D0%BD%D0%B5%D0%B9,%20%D0%9F%D0%B8%D0%B7%D0%B0,%20%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F.jpg',
            ],
            liked: ["John Doe", "Jane Smith", "Michael Brown"],
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fame."
        },
    ]

    return (
        <div>
            {
                posts.map( i => (
                    <MainCardItem item={i}/>
                ))
            }
        </div>
    );
};

export default MainCardList;
