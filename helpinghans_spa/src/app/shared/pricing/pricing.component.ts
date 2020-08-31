import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/_services/payment.service';
import { WindowService } from 'src/_services/window.service';
import { AlertifyService } from 'src/_services/alertify.service';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(private paymentSevice : PaymentService,private windowRef:WindowService,private alertify:AlertifyService) { }

  ngOnInit(): void {
  }



  openCheckOut(productName:string,amount:number,tokenCallback){
    let handler = this.windowRef.nativeWindow.StripeCheckout.configure({
      key:"pk_test_51HMDtwGdSnL8QJo6mnyPlZ3v11yvFlYTqeK9ziyGA6Xfi0uXJ69PTiOevsaeaOl7Zj5m6oHyu5MMDqhR6wfYAxX600sdjCRK2H",
      locale:"auto",
      token:tokenCallback
    });

    handler.open({
      name:"Helping Hands",
      description:productName,
      zipCode:false,
      currency:"cad",
      amount:amount,
      panelLabel: "Pay {{amount}}",
      allowRememberMe: false
    });
  }

  buy(){
    this.openCheckOut("Simple Plan",1900,(token:any) => 
      this.paymentSevice.takePayment("Simple Plan",1900,token)
      .subscribe(data => {
        if(data['status']=== "succeeded"){
          this.alertify.success("Payment Successful");
        }
      },error => {
        this.alertify.error(error);
      })
    )
  }
}
