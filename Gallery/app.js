names = ['Lotus Temple', 'Delhi Highway', 'Park in Mumbai'];

var img = document.querySelector('.img');
var caption = document.querySelector('.cation-container');
console.log(caption);

var current = 0;

document.querySelector('.icon-right').addEventListener('click', function(){
    current++;
    if (current > names.length - 1) {
        current = 0;
    }
    img.src = 'image-' + current + '.jpg';
    caption.textContent = names[current];
});

document.querySelector('.icon-left').addEventListener('click', function(){
    current--;
    if (current < 0) {
        current = names.length - 1;
    }
    img.src = 'image-' + current + '.jpg';
    caption.textContent = names[current];
});