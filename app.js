var cats = [ //MODEL
    {
        url:"https://www.petfinder.com/wp-content/uploads/2012/11/100901720-cat-adoption-first-30-days-632x475.jpg",
        name:"One-Eyed",
        count: 0
    },

    {
        url: "https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg",
        name:"Yellow-cat",
        count: 0
    },

    {
        url: "http://www.petmd.com/sites/default/files/7-meow-pain-518585803.gif",
        name:"Draculla",
        count: 0
    },

    {
        url: "https://www.shelterluv.com/sites/default/files/animal_pics/464/2017/07/03/19/20170703195125.png",
        name:"Half-white",
        count: 0
    },

    {
        url: "http://www.catster.com/wp-content/uploads/2015/06/angry-cat1.jpg",
        name:"Puma",
        count: 0
    },

    {
        url: "https://dingo.care2.com/pictures/greenliving/2/1243.large.jpg",
        name:"Killer",
        count: 0
    },

    {
        url: "https://s8.favim.com/orig/150507/3-baby-cats-so-cute-Favim.com-2713385.jpg",
        name:"Babies",
        count: 0
    },

    {
        url: "http://mediad.publicbroadcasting.net/p/wnpr/files/styles/medium/public/201612/Cat.jpg",
        name:"Weird-eyes",
        count: 0
    },

    {
        url: "https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/cat-theft-uk-london-1034420.jpg",
        name:"Wary-boy",
        count: 0
    },

    {
        url: "https://cdn.thinglink.me/api/image/854796788643659778/1240/10/scaletowidth",
        name:"cuteipies",
        count: 0
}];
var model = { 
    elemm: function(){    // We're creating a DOM element for the cat URL
        var elem = document.createElement('div'); //MODEL
        elem.textContent = octupus.seperateCats(i); //MODEL
        return elem;
    }
}

//OCTUPS
var octupus = {
    clickCounter: function (image, abc, count){
                        image.on('click', function(){
                            abc.empty();
                            count = count + 1;
                            abc.append('Clicks '+ count + '');
                        })
                  },

    seperateCats: function(k) {
            return cats[k].name;     // This seperates the individual cat...
    },

    seperateUrl: function(p) {
        return cats[p].url;
    }


}


for (var i = 0; i < cats.length; i++) { 
        var cat = octupus.seperateUrl(i);
        var mat = model.elemm();
            // adds the cat name list to the document
        $('.catArray').append($(mat));    //VIEW
            // ... and when we click the cat url, the image is displayed
        listener(mat);

}


function listener(mat) {
    mat.addEventListener('click', (function(catCopy,j) {
        return function(){ 
            $('.catsss').empty();
            $('.catsss').append($('<h1 class="text" id ="text' + j + '">' + cats[j].name + '</h1>'))//adding the title above image
            $('.catsss').append($('<span class="clicks' + j +'">Clicks ' + 00 +'</span>'));//count of clicks below the image
            $('.catsss').append($('<img src="' + catCopy + '" class="cat' + j + '">'));//adding the image
            octupus.clickCounter($('.catsss .cat'+ j +''), $('.catsss .clicks'+ j +''), cats[j].count);//click counter function //OCTUPUS

        }
        
})(cat,i));
}



