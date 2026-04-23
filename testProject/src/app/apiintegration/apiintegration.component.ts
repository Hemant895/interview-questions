import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-apiintegration',
  templateUrl: './apiintegration.component.html',
  styleUrls: ['./apiintegration.component.css']
})
export class ApiintegrationComponent implements OnInit {

  data: any;
  idData: any;
  usersData: any = [];
  searchData: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.getUsersData();

    this.usersData = [{
      id: 1,
      name: "John",
      designation: "software"
    },
    {
      id: 2,
      name: "John",

      designation: "tester"
    },
    {
      id: 3,
      name: "Hemant",
      designation: "team lead"
    },
    {
      id: 4,
      name: "Rahul",
      designation: "software engineer"
    },
    {
      id: 5,
      name: "Sohan",
      designation: "Ui designer "
    }

    ]

  }

  // getUsersData(){
  //   this.api.getUsers().subscribe((res:any)=>{
  //     this.data = res
  //     console.log("Data", this.data);
  //   })

  // }
  // Send(id:Number){
  //   this.idData = this.data.filter((item:any)=>{
  //      item.id == id;
  //   })

  //   this.usersData.push(this.idData);

  // }

  searach(value: any) {
    let search = value.target.value;

    if (search == "") {
      this.usersData = this.usersData;
    } else {
      this.usersData = this.usersData.filter((item: any) => {
        return item.id.toString().includes(search.toLowerCase()) || item.name.toLowerCase().includes(search.toLowerCase()) || item.designation.toLowerCase().includes(search.toLowerCase());
      })
      console.log("searchData", this.usersData);
    }


    

  }




}
