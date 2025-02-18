import { bootstrapApplication } from '@angular/platform-browser';
import { DetailProductComponent } from './app/detail-product/detail-product.component';
import { appConfig } from './app/app.config';
import { OrderComponent } from './app/order/order.component';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes)
//   ]
// };


bootstrapApplication(OrderComponent, appConfig); 
