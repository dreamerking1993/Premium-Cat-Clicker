var model = {
 currentCat: null,   
 cats: [ //MODEL
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
    }] 
}

//OCTUPS
var octupus = {
    init: function() {
        model.currentCat = model.cats[0];
        view.renderList();
        view.init();
    },
    seperateCats: function(k) {
            return model.cats[k].name;     // This seperates the individual cat...
    },
    getCurrentCat: function() {
        return model.currentCat;
    },    
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
    incrementCounter: function() {
        model.currentCat.count++;
        view.renderCat();
    }        
}

    
var view = {
    init: function() {
        var image = $('.catsss .cat-url');
        image.on('click', function(){
            octupus.incrementCounter();
        })
        view.renderCat();
        $('.admin').on('click', function(){
             event.preventDefault();
            $('.forAdmin').css("display", "block");
            var currentCat1 = octupus.getCurrentCat();
            
            //$('#name').attr("value", currentCat1.name); //don't use this for value, it causes problems
            $('#name').val(currentCat1.name);
            $('#imgUrl').val(currentCat1.url);
            $('#clicks').val(currentCat1.count); 
               
        })

        $('#cancel-btn').on('click', function(){
             event.preventDefault();
            $('.forAdmin').css("display", "none");
        }) 
        $('#submit-btn').on('click', function(){
            event.preventDefault();            
            
            var currentCat2 = octupus.getCurrentCat();
            currentCat2.name = $('#name').val();
            currentCat2.url = $('#imgUrl').val();
            currentCat2.count = $('#clicks').val(); 
            view.renderCat();
            $('.forAdmin').css("display", "none");
            //debugger;
            //return false;
        })

    },

    renderList: function() { 
        //debugger;
        for (var i = 0; i < model.cats.length; i++) { 
                var cat = model.cats[i];
                var elem = document.createElement('div'); 
                elem.textContent = model.cats[i].name;    
                    // adds the cat name list to the document
                $('.catArray').append($(elem));    //VIEW
                    // ... and when we click the cat name, the image is displayed
            elem.addEventListener('click', (function(catCopy) {
                return function(){ 
                           $('.forAdmin').css("display", "none");
                            octupus.setCurrentCat(catCopy);
                            view.renderCat();
                        }
                
            })(cat,i));

        }
    },

    renderCat: function() {//renders the cat image, name and click count
                var currentCat3 = octupus.getCurrentCat();
                $('.catsss .cat-count').html(currentCat3.count);
                $('.catsss .cat-name').html(currentCat3.name);
                $('.catsss .cat-url').attr('src',currentCat3.url); 
            }
}    
octupus.init();






