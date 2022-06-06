import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit {

  // pic2='assets/images/pic.JPG'
  constructor(public ds:DataService) { }
   
  file:any;

  ngOnInit(): void {
  }
  selectFile(event:any){
    this.file=event.target.files[0]
  
  }
  onsend(userobj:any){
    console.log(userobj)
    this.ds.createInfluencers(userobj).subscribe(
      res=>{
        
      },
      err=>{
        console.log(err)
      }
    )
}


}
