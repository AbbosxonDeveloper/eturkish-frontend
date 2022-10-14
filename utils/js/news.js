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
                    <p class="news-date news-text">${news.created_at}</p>

                </div>
            </div>
        `
        }
    }
}
GetNews()