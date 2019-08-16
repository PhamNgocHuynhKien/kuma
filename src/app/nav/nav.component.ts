import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  navh: any;
  searchBar = false;
  constructor() { }
  
  ngOnInit() {
    // console.log(navh);
    // var navh = document.getElementById("nav-menu").offsetTop;
    // if( navh = 0) {
    //   document.getElementById("nav-menu").classList.add("navbar-bg");
    // }
    window.addEventListener("scroll", this.myFunction);
  }
  showSearchBar(){
    this.searchBar = true;
  }
  unshowSearchBar(){
    this.searchBar = false;
  }
  myFunction() {
    console.log('ạdhakhdkad');
    this.navh = document.getElementById("nav-menu").offsetTop;
    console.log(this.navh);
    if( this.navh > 200) {
      document.getElementById("nav-menu").classList.add("navbar-bg");
    } 
    if( this.navh <200){
      document.getElementById("nav-menu").classList.remove("navbar-bg");
    }
  
}
  
}
