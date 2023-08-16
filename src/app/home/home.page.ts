import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  viewPc:boolean = false;

  @HostListener('window:resize', ['$event'])
onResize() {
  this.widthScreen = window.innerWidth;
  console.log(this.widthScreen)
  if(this.widthScreen >= 1000){
    this.viewPc = true;
  }else{
    this.viewPc = false;
  }
  
}
  data:Array<any> = [
    {
      icon: "../../assets/images/Page-1.svg",
      text: '1. Le reve liber l\'expression'
    },
    {
      icon: "../../assets/images/Page-2.svg",
      text: '2. Le sens eclaire le parcours'
    },
    {
      icon: "../../assets/images/Page-3.svg",
      text: '3. La difference rend unique'
    },

    {
      icon: "../../assets/images/Page-4.svg",
      text: '4. La valeur humaine met en mouvement'
    },
    {
      icon: "../../assets/images/Page-5.svg",
      text: '5. La cle exprime le style'
    },
    {
      icon: "../../assets/images/Page-6.svg",
      text: '6. Le paracours associe reve et realite'
    },
    {
      icon: "../../assets/images/Page-7.svg",
      text: '7. Le ciel bleu révele l\'alignement'
    }
  ];

  constructor() {}
  widthScreen:any
  ionViewWillEnter() {
    
    this.widthScreen = window.screen.width
    if(this.widthScreen >= 1000){
      this.viewPc = true
    }
  }


}
