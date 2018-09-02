import { Component, OnInit, HostListener } from '@angular/core';
import { AioVideo } from '../models/video.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public mobileScreen : boolean;

  public videos : AioVideo[] = [
    { Description: "All In One Loan Simulator", Url: "https://www.youtube.com/embed/GLqX8DyT2Hw" },
    { Description: "Product Background", Url: "https://www.youtube.com/embed/4VItZ_V0TV8" },
    { Description: "Why the All In One", Url: "https://www.youtube.com/watch?v=6f--XPGDLBM" },
    { Description: "It's Just Math", Url: "https://www.youtube.com/embed/ligrWnJXqD0" }
  ]

  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 992)
      this.mobileScreen = true;
  }

  @HostListener('window:resize',[]) onResize() {
    if(window.innerWidth < 992)
      this.mobileScreen = true;
    else
      this.mobileScreen = false;
  }

}
