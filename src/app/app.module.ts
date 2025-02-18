import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { OrderComponent } from "./order/order.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";

@NgModule({
    declarations: [
    ],

    imports: [
        BrowserModule,
        HeaderComponent,
        FooterComponent,
        DetailProductComponent,
        
    ],
   
    providers: [],

    bootstrap: [
    ]
    })

export class AppModule {}
