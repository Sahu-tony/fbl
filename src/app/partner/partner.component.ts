import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor(public ar:Router) { }

  ngOnInit(): void {
  }
  onClickInfluencers(){
        this.ar.navigateByUrl('/influencers')
  }
  onClickVendors(){
    this.ar.navigateByUrl('/vendors')
}
}
