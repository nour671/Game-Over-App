import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor(){
        
    document.querySelectorAll(".nav-link").forEach( (link) => {
    link.addEventListener("click", () => {

        this.changeCategory(link);

        const category = link.dataset.category;
        this.getGames(category);



    });


});

    this.loading = document.querySelector('.loading');
    this.games = document.getElementById('games');
    this.details = document.getElementById('details');
    this.getGames('mmorpg')
    this.ui = new Ui();
   

    
     

    }


    async changeCategory(link){
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active");


  
    }



    async getGames(cat){

        this.loading.classList.remove('d-none')

    const option = {
        method: 'GET',
        headers: {
        'x-rapidapi-key': '93e6055881msh08e358576aa4419p1f91aejsne44c394fb846',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }

    }
    const api = await fetch ( `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , option);
    const response = await api.json();
    this.loading.classList.add('d-none')
    
    this.ui.displayGames(response);

    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('click' , ()=>{
            this.details.classList.remove('d-none');
            this.games.classList.add('d-none');
            new Details(card.dataset.id);
        })
    })
    
   }
}