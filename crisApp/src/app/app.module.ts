import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { APP_ROUTES_PROVIDER } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
