import { Component } from '@angular/core';

interface Artist {
  name: string;
  school: string;

}


@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  bin: string;
  name = 'Ray';
  

  constructor(){
    this.bin = 'Bob';
     
  }
  artists = [
      {
      name:'Barot', 
      school: "one"
      },{
      name:'Jonathan', 
       school: "two"
      },{
      name:'Hillary',
       school: "three"
    }];
 
    onClick(my){
      this.name=my.name;
    }
     onDclick(e){
      
      console.log(e.target.innerHTML);
      this.name=e.target.innerHTML;
    }
    onBclick(){
      this.name='bob';
    }

    addArtist(myArt){
      this.artists.push(myArt);
    }

    onTclick(artist, artistContainer){
      artistContainer.style.backgroundColor="#FECE4E"
    }
     artistis = this.ARTISTS;

    ARTISTS: Artist[] = [
      {
      name:'Barot', 
      school: "one"
      },{
      name:'Jonathan', 
       school: "two"
      },{
      name:'Hillary',
       school: "three"
    }];

    
 
}

 