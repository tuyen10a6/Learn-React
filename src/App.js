import React from 'react';

function ProductItem(props) {
    console.log(props)
    return (
        <div className="item-product-blog">
            <h1> {props.title}</h1>
            <p> {props.productName}</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <ProductItem title="Giới thiệu về Iphone 15 ProMax"
                         productName="Iphone 15 ProMax"
                         descriptionProduct="Iphone 15 ProMax ra mắt năm 2023"/>
            <ProductItem title="Giới thiệu về Iphone 14 ProMax"
                         productName="Iphone 14 ProMax"
                         descriptionProduct="Iphone 15 ProMax ra mắt năm 2022"/>
        </div>
    )
}

export default App;
