import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewItemService {

    constructor(private http: Http) {}


    get(title) {
        let searchParams = new URLSearchParams();
        searchParams.append('title', title);
        return this.http.get('mediaitems', { search: searchParams })
        .map(response => {
            return response.json().mediaItems;
        });
    }

    add(newItem) {
        return this.http.post('http://localhost:7070/', newItem)
            .map(response => {});
    }

    delete(newItem) {
       return this.http.delete('http://localhost:7070//${mediaItem.id}')
        .map(response => {});
    }

newItems = [
    {
      title: "Anna",
      image: "Annaimg"
    },
    {
      title: "Tanya",
      image: "Tanyaimg"
    }, {
      title: "Galya",
      image: "Galyaimg"
    }, {
      title: "Sveta",
      image: "Svetaimg"
    }, {
      title: "Rita",
      image: "Ritaimg"
    }
  ];
}