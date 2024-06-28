
export const footerArray=[
    {
        "id":9999,
        "title":"Contact",
        "lists":["Email : 0001@gmail.com","Customer Care : 91+2345689","City : Bangalore","Zip Code : 341382","Headquaters : United States"]
    },
    {
        "id":9998,
        "title":"Menu Items",
        "lists":["Vegetables","Fruits","Snacks","Beverages","Foodgrains"]
    },
    {
        "id":9997,
        "title":"Help & FAQs",
        "lists":["Online orders","Shipping","Billing","Customer service","Internationl shipments","Security Center"]
    },
    {
        "id":9996,
        "title":"Website visible",
        "lists":["Google","Micorsoft","Internal Explorer","FireFox"]
    }
]

export function productRating(store,value){
    let topSaleProduct=store.itemLists.filter((listType)=>{
        return listType.ratingType === value
    })
    return topSaleProduct;
}


export function randomProduct(store,valueID){

    let collectionProduct=[];
    let storeProduct=store.itemLists.filter(list=>{
        return (list.type === valueID) || (list.rating === valueID)
    })
    
    for(let i=0;i<storeProduct.length;i++){
        let product=Math.floor(Math.random()* storeProduct.length)
        collectionProduct.push(storeProduct[product])
    }
    
    return collectionProduct;
}

export default footerArray;
