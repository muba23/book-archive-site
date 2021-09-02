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

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.docs));
}
const displaySearchResult = docs =>{
  //totalResultFound.innerText = `${docs.numFound}`;
  // error message for not finding a result 
  if (docs.message === "Not Found") {
    error.innerText = "NO Result Found";
  } else {
    error.innerText = "";
  }

    // const searchResult = document.getElementById('search-result');
    docs.forEach(doc =>{

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





// const searchInput = document.getElementById('search-input');
// const searchBtn = document.getElementById('search-btn');
// const bookContainer = document.getElementById('book-container');
// const error = document.getElementById('error');

// searchBtn.addEventListener('click', function(){
//     const searchText = searchInput.value;
//     //error handling for no input
//     if(searchText === ''){
//         error.innerText="please enter something";
//     }
//     //clear
//     bookContainer.innerHTML = "";
//     const url = 'https://openlibrary.org/search.json?q=${searchText}';
//     fetch(url)
//         .then(res=>res.json())
//         .then(data=>{
//             if(data){
//                 error.innerText = "";
//             }
//             else{
//                 error.innerText = "No result found";
//             }
//             for(const item in data){
//                 //console.log(item, data[item]);
//                 const div = document.createElement('div');
//                 div.classList.add('col-md-3');
//                 div.innerHTML=`
//                 <div class="rounded overflow-hidden border p-2">
//                     <img src="https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg" class="w-100" alt=""/>
//                 </div>
//                 <div>
//                     <div class=" py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">
//                         <h4>Book Name :</h4>
//                         <h4>Author Name:</h4>
//                         <h4>First Publisher :</h4>
//                     </div>
//                 </div>  
//                 `;
//                 bookContainer.appendChild(div);
//             }
//         });
// });