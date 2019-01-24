import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NewItemService } from './new-item.service'

@Component({
  selector: 'new-item-form',
  templateUrl: 'new-item-form.component.html',
  styleUrls: ['new-item-form.component.css']
})
export class NewItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private newItemService: NewItemService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')])),
      image: this.formBuilder.control('', Validators.compose([
        Validators.required,
        this.imageValidator]))
    });
  }

  imageValidator(control) {
    if(control === null) {
      return {'image': true};
    } else {
      
    }
  }

  onSubmit(newItem){
    this.newItemService.add(newItem)
      .subscribe();
  }
}
