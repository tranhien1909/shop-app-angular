import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { config } from './app/app.config.server';
import { DetailProductComponent } from './app/detail-product/detail-product.component';
import { OrderComponent } from './app/order/order.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';

const bootstrap = () => bootstrapApplication(RegisterComponent, config);

export default bootstrap;
