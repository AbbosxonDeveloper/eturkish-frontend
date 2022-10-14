async function GetFoods(id = '') {
    let response = await (await fetch(`https://eturkish.herokuapp.com/categories/${id}`)).json()

    console.log(response);

    // for (let food of response) {
    //     if (id != '' && id != food.category_id) {
    //         return
    //     }
    // }

    menu_foods.innerHTML = null
    response.map(res => {
        res.products.map(food => {
            console.log(food);
            menu_foods.innerHTML += `
                <div class="menu-cards">
                <img class="card-img-top" src="https://eturkish.herokuapp.com/static/${food.product_img}" width="340" height="240" alt="photo">
                <div class="card-body">
                    <h4 style="font-weight: 600 ;font-size: 20px;line-height: 30px;text-align: center; color: #242424;" class="text-center">
                        ${food.product_name}
                    </h4>
                    <p style="font-weight: 700;font-size: 28px;line-height: 38px;text-align: center;color: #BB2339;" class="price">
                        ${food.price}
                    </p>
                </div>
            </div>`
        })
        return res
    })


}

async function GetCategories(id = '') {
    let response = await (await fetch(`https://eturkish.herokuapp.com/categories/${id}`)).json()

    console.log(response);
    // response.map(res => {
    //     res.products.map(pr => {
    //         console.log(pr);
    //         menu_foods.innerHTML += `<h3>${pr.product_name}</h3>`
    //     })
    //     return res
    // })
    menu_foods.innerHTML = null
    for (let category of response) {
        var btn = document.createElement('button')
        btn.className = "menu-btn"
        btn.id = category.category_id
        btn.textContent = category.category_name
        btn.setAttribute("data-id", category.category_id)

        categories_wr.append(btn)
        btn.onclick = () => {
            menu_foods.innerHTML = ''
            GetFoods(category.category_id)
        }
    }
}

all_dt.onclick = () => {
    menu_foods.innerHTML = ''
    GetFoods('')
}


GetCategories()
GetFoods()