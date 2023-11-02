let display = '';
const row = document.querySelector('.row');
let txt;


fetch('https://fakestoreapi.com/products').then(
    response=>response.json()
).then(
    data=>{
        console.log(data);
        //.map() --> Aimar neg fliig copy hiigeed uur file bolgon uurchildug


        //slice() --> Zuvhun massive um uu? string deer ajildag.
        data.slice(0,4).map(
            product =>{
                console.log(product.title);
                console.log(product.image);
                //.length

                console.log(product.description.length);
                if(product.description.length > 20){
                    txt = product.description.slice(0,52);
                }

                display += ` <div class="col-md-3">
                                <div class="card">
                                    <img src="${product.image}">
                                    <h5>${product.title}</h5>
                                    <p class="price">${product.price}</p>
                                    <p class="cat">${product.category}</p>
                                    <p>${txt}...</p>
                                </div>
                            </div>`
                row.innerHTML = display;
            }
        )
    }
)







fetch('https://fakestoreapi.com/users').then(
    response=>response.json()
).then(
    data=>{
        console.log(data);

        data.slice(0,4).map(
            product =>{
                console.log(product.title);
                console.log(product.image);
                //.length

                console.log(product.description.length);
                if(product.description.length > 20){
                    txt = product.description.slice(0,52);
                }

                display += ` <div class="col-md-3">
                                <div class="card">
                                    <img src="${product.image}">
                                    <h5>${product.title}</h5>
                                    <p class="price">${product.price}</p>
                                    <p class="cat">${product.category}</p>
                                    <p>${txt}...</p>
                                </div>
                            </div>`
                row.innerHTML = display;
            }
        )
    }
)