export class NewItemService {
   
    get() {
        return this.newItems;
    }

    add(newItem) {
        this.newItems.push(newItem);
    }

    delete(newItem) {
        let index = this.newItems.indexOf(newItem);
        if(index >= 0) {
            this.newItems.splice(index, 1);
        }
    }

newItems = [
    {
      title: "Anna",
      image: "DSC_0038.jpg"
    },
    {
      title: "Tanya",
      image: "DSC_0039.jpg"
    }, {
      title: "Galya",
      image: "DSC_0040.jpg"
    }, {
      title: "Sveta",
      image: "DSC_0041.jpg"
    }, {
      title: "Rita",
      image: "DSC_0042.jpg"
    }
  ];
}