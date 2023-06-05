import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder-component',
  templateUrl: './form-builder-component.component.html',
  styleUrls: ['./form-builder-component.component.css']
})
export class FormBuilderComponentComponent implements OnInit {
  userForm: FormGroup;
  borderColor: string;
  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.form.group({
      nom:  [null, [ Validators.required , Validators.minLength(5) , Validators.maxLength(10)  ]],
      prenom: [null, [Validators.required , Validators.minLength(5) , Validators.maxLength(10)]],
      age: [null, [Validators.required  , Validators.max(99)]],
      email: [null, [Validators.required , Validators.email]],
      genre: [null, Validators.required],
      phones: this.form.array([]),
    });
    // this.userForm.valueChanges.subscribe( change => console.log(change) );
    // this.userForm.controls.nom.valueChanges.subscribe()
    this.userForm.controls.genre.valueChanges.subscribe(value => {
       if ( value === 'homme') {
          this.userForm.controls.age.setValidators([Validators.min(18)]);
       } else {
         this.userForm.controls.age.setValidators([Validators.min(21)]);
       }
       this.userForm.controls.age.updateValueAndValidity();
    });
    this.userForm.get('nom').setValue('walid');

    /* this.userForm.get('nom').setValue('walid');
     this.userForm.get('prenom').setValue('djebbouri');
     this.userForm.get('age').setValue(29);
     this.userForm.get('email').setValue('dw_djebbouri@esi.dz');
     this.userForm.get('genre').setValue('femme');*/
  }

  public envoyer(): void {
    let User ;
    User = {
      nom: this.userForm.get('nom').value ,
      prenom: this.userForm.get('prenom').value ,
      age: this.userForm.get('age').value ,
      email: this.userForm.get('email').value ,
      genre: this.userForm.get('genre').value ,
      phone: this.userForm.get('phones').value,
    };
    if ( this.userForm.controls.nom.dirty) {
    }
   // console.log(User);
  }

  get phones() {
    return  this.userForm.controls.phones as FormArray;
  }
  addPhoneNumber(): void {
    const phoneNumber = this.form.group({
      phone: [null, [Validators.required , this.ValidatePhone , Validators.pattern('^0(5|6|7)[0-9]{8,8}') ]],
    });
    this.phones.push(phoneNumber);

  }

  deletePhoneNumber(index: number): void {
    this.phones.removeAt(index);
  }

   validateName(control: FormControl): {[key: string]: any} | null {
    if ( control.value && control.value.length !== 7 ) {
      return { invalidName: true };
    }
    return null;
  }


   ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value && control.value.length !== 10) {
      return { invalidNumberPhone: true };
    }
    return null;
  }

}
