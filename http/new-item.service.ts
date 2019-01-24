import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NewItemService {

    constructor(private http: Http) {}


    get(medium) {
        let searchParams = new URLSearchParams();
        searchParams.append('medium', medium);
        return this.http.get('mediaitems', { search: searchParams })
        .map(response => {
            return response.json().mediaItems;
        });
    }

    add(newItem) {
        return this.http.post('mediaitems', newItem)
            .map(response => {});
    }

    delete(newItem) {
       return this.http.delete('mediaitems/${mediaItem.id}')
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