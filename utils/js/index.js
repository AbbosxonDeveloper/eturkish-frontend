async function GetFoods(id = '') {
    let response = await (await fetch(`https://eturkish.herokuapp.com/categories/${id}`)).json()

    console.log(response);

    menu_cards.innerHTML = null
    response.map(res => {
        res.products.map(food => {
            console.log(food);
            menu_cards.innerHTML += `
                <div class="card" style="margin: 12px;">
                <img class="card-img-top" src="https://eturkish.herokuapp.com/static/${food.product_img}" width="300" height="240" alt="photo">
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
    //         menu_cards.innerHTML += `<h3>${pr.product_name}</h3>`
    //     })
    //     return res
    // })
    menu_cards.innerHTML = null
    for (let category of response) {
        var btn = document.createElement('button')
        btn.className = "menu-btn"
        btn.id = category.category_id
        btn.textContent = category.category_name
        btn.setAttribute("data-id", category.category_id)

        categories_wr.append(btn)
        btn.onclick = () => {
            menu_cards.innerHTML = ''
            GetFoods(category.category_id)
        }
    }
}

all_dt.onclick = () => {
    menu_cards.innerHTML = ''
    GetFoods('')
}

async function GetNews() {
    let response = await (await fetch('https://eturkish.herokuapp.com/news')).json()
    console.log(response);
    for (let news of response) {
        if (news.news_id > 3) {
            return
        } else {
            news_cards.innerHTML += `
        <div class="card" style="width: 390px;">
            <a href="news.html">
            <img class="card-img-top" src="https://eturkish.herokuapp.com/static/${news.news_image}" width="390" height="400" alt="Card image cap">
            </a>
                <div class="card-body">
                    <h5 class="news-title">${news.title}</h5>
                    <p class="news-text">${news.description} </p>
                </div>

                <div class="card-body d-flex justify-content-between">
                    <a href="news.html" class="news-readmore">Read More</a>
                    <p class="news-date news-text">${news.created_at}</p>
                </div>
            </div>
        `
        }
    }
}

async function GetMsg() {
    let response = await (await fetch('https://eturkish.herokuapp.com/contact')).json()
    console.log(response);
    for (const user of response) {
        customer_msg.innerHTML += `
        <div class="card" style="width: 360px;">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <p class="customer-text">${user.message}</p>

                </div>
            </div>`
    }
}

sub_form.onsubmit = async(e) => {
    e.preventDefault()
    let response = await fetch('https://eturkish.herokuapp.com/followers', {
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({ email: sub_btn.value })
    })
    sub_btn.value = ''
    console.log(await response.json());
}

GetCategories()
GetFoods()
GetNews()
GetMsg()














































// let arr = [
//     { foodId: 1, food_name: "shashlik", price: 18000, food_img: 'http://127.0.0.1:5500/utils/img/photo.png' },
//     { foodId: 1, food_name: "shawurma", price: 16000, food_img: 'http://127.0.0.1:5500/utils/img/photo2.png' },
//     { foodId: 1, food_name: "burger", price: 22000, food_img: 'http://127.0.0.1:5500/utils/img/photo3.png' },
//     { foodId: 1, food_name: "pizza", price: 55000, food_img: 'http://127.0.0.1:5500/utils/img/hh.jpg' },
// ]