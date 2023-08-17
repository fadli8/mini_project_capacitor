import { Component, HostListener} from '@angular/core';
import { DreamService } from '../services/dream.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  viewPc:boolean = false;
  sum:number = 0;
  message: string = '';
  color:string = 'success'

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

  isToastOpen = false;


  constructor(
    private service:DreamService) {}
  widthScreen:any
  ionViewWillEnter() {
    this.widthScreen = window.screen.width
    if(this.widthScreen >= 1000){
      this.viewPc = true
    }
  }

  setOpen(isOpen: boolean, message:string, color:string) {
    this.message = message;
    this.isToastOpen = isOpen;
    this.color = color;
  }

  clicInButton(){
   this.service.$clicker().subscribe(data => {
      if(data){
        let dataArr = data.ipAddress.split('.')
        // let dataArr = '10.10.10.10'.split('.')
        for (let i = 0; i < dataArr.length; i++) {
          this.sum = parseInt(dataArr[i]);
          
        }
        if(this.sum > 100){
          this.setOpen(true, 'OK', 'success');
        }else if(this.sum <= 100){
          this.setOpen(true, 'KO', 'danger');
        }
      }
   },err => {
      alert('this is an error : '+err)
   })
  }




}
