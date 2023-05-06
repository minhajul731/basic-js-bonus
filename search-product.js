const products = [
    { name: 'zeus mouse', price: 1500 },
    { name: 'asus laaptop', price: 93000 },
    { name: 'rapo keyboard', price: 3000 },
    { name: 'remax yearphone', price: 500 },
    { name: 'fantech keyboard', price: 2000 },
    { name: 'readme k20pro phone', price: 49000 },
    { name: 'readmi note 10 phone', price: 19000 },
    { name: 'dell laptop', price: 75000 },
];

function searchProducts(products, searchText) {
    let searched = [];
    for (const product of products) {
        let productName = product.name;
        if (productName.indexOf(searchText.toLowerCase()) != -1) {
            searched.push(product);
        }
    }
    return searched;
}

const searchResult = searchProducts(products, 'Mouse');
console.log(searchResult);