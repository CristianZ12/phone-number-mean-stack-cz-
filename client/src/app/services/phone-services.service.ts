import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneNumber } from '../models/phoneNumber';

@Injectable({
  providedIn: 'root'
})
export class PhoneServicesService {

  URI = 'http://localhost:4000/api';

  constructor(private db:HttpClient) { }

  getPhoneNumbers(){
    return this.db.get(`${this.URI}/numbers`);
  }

  getPhoneNumber(id:string){
    return this.db.get(`${this.URI}/numbers/${id}`);
  }

  deletePhoneNumber(id:string){
    return this.db.delete(`${this.URI}/numbers/${id}`);
  }

  addPhoneNumber(phone:PhoneNumber){
    return this.db.post(`${this.URI}/numbers`, phone);
  }

  updatePhoneNumber(id:string, phone:PhoneNumber){
    return this.db.put(`${this.URI}/numbers/${id}`, phone);
  }
}
