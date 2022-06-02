import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  constructor(public ds:DataService) { }

  ngOnInit(): void {
  }
  onsend(userobj:any){
      console.log(userobj)
      this.ds.createUser(userobj).subscribe(
        res=>{
          
        },
        err=>{
          console.log(err)
        }
      )
  }

}
