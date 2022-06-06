import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  data:any;
  vendors=[];
  first:any;
  constructor(private ds:DataService,private router:Router) { }
      ngOnInit(): void {
      this.ds.getUser().subscribe(
      res=>{
        this.data=res;
        console.log(this.data)
        this.first=this.data[Object.keys(this.data)[0]]
         console.log(this.first)
         console.log(this.data[Object.keys(this.data)[0]])

      },
      err=>{
        console.log(err)
      }
    )
}
}

