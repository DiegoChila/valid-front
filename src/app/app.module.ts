import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { LoadComponent } from './components/ui/load/load.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { RegisterComponent } from './components/users/register/register.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';

import { UserService } from './services/users/user.service';
import { DummyComponent } from './components/ui/dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoadComponent,
    HeaderComponent,
    RegisterComponent,
    AllUsersComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
