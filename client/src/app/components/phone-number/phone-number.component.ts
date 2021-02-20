import { Component, OnInit } from '@angular/core';
import { PhoneServicesService } from '../../services/phone-services.service';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {

  phoneObject:any;
  phoneNumbers = [];

  constructor(public PhoneService:PhoneServicesService) { }

  ngOnInit(): void {
    this.getPhoneNumbers();
  }

  getPhoneNumbers():void{
    this.PhoneService.getPhoneNumbers().subscribe(
      resp => {
        this.phoneObject = resp;
        console.log(this.phoneObject);
        this.phoneNumbers = this.phoneObject;
      },
      err => console.log(err)
    )
  }
  
  deletePhoneNumber(id:string){
    this.PhoneService.deletePhoneNumber(id).subscribe(
      resp => {
        console.log(resp);
        this.getPhoneNumbers();
      },
      err => console.error(err)
    )
  }

}
