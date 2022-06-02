import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private ps:User,private ar:ActivatedRoute) { }
  first:any;
  userObj:any;
  ngOnInit(): void {
    let id=this.ar.snapshot.params.id
    //get data of user with this current id
  this.ps.getNetflixMovieRatingById(id).subscribe(
  obj=>{

    this.first=obj;
    this.NetflixObj=this.first[Object.keys(this.first)[0]]
    
  },
  err=>{
    console.log("err in reading user",err)
  }
)
}
    
  }

}
