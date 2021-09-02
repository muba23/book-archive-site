const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const bookContainer = document.getElementById('book-container');

searchBtn.addEventListener('click', function(){
    const searchText = searchInput.value;
    const url = 'https://openlibrary.org/search.json?q=${searchText}';
    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            for(const item in data){
                //console.log(item, data[item]);
                const div = document.createElement('div');
                div.classList.add('col-md-3');
                div.innerHTML=`
                <div class="rounded overflow-hidden border p-2">
                    <img src="https://covers.openlibrary.org/b/id/554106-M.jpg" class="w-100" alt=""/>
                </div>
                <div>
                    <div class=" py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">
                        <h4>Book Name : ${data[item].docs.title}</h4>
                        <h4>Author Name:</h4>
                        <h4>First Publisher :</h4>
                    </div>
                </div>  
                `;
                bookContainer.appendChild(div);
            }
        });
});