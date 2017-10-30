
var count = 0;
//making an array of cats
var cats = [
"https://www.petfinder.com/wp-content/uploads/2012/11/100901720-cat-adoption-first-30-days-632x475.jpg",
"https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
"http://www.petmd.com/sites/default/files/7-meow-pain-518585803.gif",
"https://www.shelterluv.com/sites/default/files/animal_pics/464/2017/07/03/19/20170703195125.png",
"http://www.catster.com/wp-content/uploads/2015/06/angry-cat1.jpg",
"https://dingo.care2.com/pictures/greenliving/2/1243.large.jpg",
"https://s8.favim.com/orig/150507/3-baby-cats-so-cute-Favim.com-2713385.jpg",
"http://mediad.publicbroadcasting.net/p/wnpr/files/styles/medium/public/201612/Cat.jpg",
"https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/cat-theft-uk-london-1034420.jpg",
"https://cdn.thinglink.me/api/image/854796788643659778/1240/10/scaletowidth"
];
var catsByName = [
"CAT 0",
"CAT 1",
"CAT 2",
"CAT 3",
"CAT 4",
"CAT 5",
"CAT 6",
"CAT 7",
"CAT 8",
"CAT 9"
]


//looping over the cats array
for (var i = 0; i < cats.length; i++) {

    // This seperates the individual cat...
    var cat = cats[i];
    var catName = catsByName[i];

    // We're creating a DOM element for the cat URL
    var elem = document.createElement('div');
    elem.textContent = catName;


    // ... and when we click the cat url, the image is displayed
    elem.addEventListener('click', (function(catCopy,j) {
        return function(){
        	var count = 0;
        	$('.catsss').append($('<h1 class="text" id ="text' + j + '">CAT' + j + '</h1>'))//adding the title above image

            $('.catsss').append($('<img src="' + catCopy + '" class="cat' + j + '">'));//adding the image

            $('.catsss').append($('<span class="clicks' + j +'">Clicks ' + 00 +'</span>'));//count of clicks below the image

            clickCounter($('.catsss .cat'+ j +''), $('.catsss .clicks'+ j +''), count);//click counter function

        }	
    })(cat,i));

    // finally, let's add the cat url list to the document
    $('.catArray').append($(elem));

};
//the click counter function
function clickCounter(image, abc, count){
	image.on('click', function(){
		abc.empty();
		count = count + 1;
		abc.append('Clicks '+ count + '');
	})	
};