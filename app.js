document.querySelector('.submit_btn').addEventListener('click', function(){
    var query = document.querySelector('.textarea').value;
    console.log(query);
    if (query == ""){
        alert('Please Specify Your Query!');
    }
});