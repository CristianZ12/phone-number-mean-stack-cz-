import { Component, OnInit } from '@angular/core';
import { PhoneServicesService } from '../../services/phone-services.service';
import { Router, ActivatedRoute} from '@angular/router';
import { PhoneNumber } from '../../models/phoneNumber';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss']
})
export class PhoneFormComponent implements OnInit {

  phoneNumber:PhoneNumber = {
    _id: '',
    firstName: '',
    lastName: '',
    description: '',
    number: ''
  };

  phone1:any;

  edit:boolean = false;

  constructor(private services:PhoneServicesService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.params.id){
      this.services.getPhoneNumber(this.activeRoute.snapshot.params.id).subscribe(
        resp => {
          console.log(resp);
          this.phone1 = resp;
          this.phoneNumber = this.phone1;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  savePhoneNumber(){
    if(this.phoneNumber.firstName !== '' && this.phoneNumber.lastName !== '' && this.phoneNumber.description !== '' && this.phoneNumber.number !== ''){
      delete this.phoneNumber._id; 
      this.services.addPhoneNumber(this.phoneNumber).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/phone']);
        },
        err => console.log(err)
      );
    } else {
      console.log('No dejes en blanco los campos.');
    }
  }

  updatePhoneNumber(){
    if(this.phoneNumber.firstName !== '' && this.phoneNumber.lastName !== '' && this.phoneNumber.description !== '' && this.phoneNumber.number !== ''){
      this.services.updatePhoneNumber(this.phoneNumber._id, this.phoneNumber).subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/phone']);
        },
        err => console.error(err)
      );
    } else {
      console.log('No dejes en blanco los campos.');
    }
  }
}
