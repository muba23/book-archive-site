const searchResult = document.getElementById('search-result');
const totalResultFound = document.getElementById('total-result');
const error = document.getElementById("error");

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText === "") {
      error.innerText = "Search field cannot be empty!!.Please search a book";
      return;
    }
    searchField.value = '';
    searchResult.innerHTML="";
    totalResultFound.innerText = "";

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.docs));
}

const displaySearchResult = docs =>{
  // error message for not finding a result 
  if (docs.message === "Not Found") {
    error.innerText = "No Result Found";
  } else {
    error.innerText = "";
  }
    docs.forEach(doc =>{
      if(docs.value==='Not Found'){
        totalResultFound.innerText = '';
      }
        totalResultFound.innerText =`Total Book Found: ${docs.length}`;
  
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}  -M.jpg" class="card-img-top rounded overflow-hidden border p-2">
            <div class="card-body">
              <h5>Book Name: ${doc.title}</h5>
              <h5>Author Name: ${doc.author_name}</h5>
              <h5>First Publisher: ${doc.publisher}</h5>
              <h5>First Publish Year:${doc.first_publish_year}</h5>      
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    } )
}
