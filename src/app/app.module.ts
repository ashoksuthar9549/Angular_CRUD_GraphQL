import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApolloModule } from 'apollo-angular';
import { graphqlProvider } from './framework/graphql/apollo.provider';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { AddUserComponent } from './components/dashboard/add-user/add-user.component';
import { SearchUserComponent } from './components/dashboard/search-user/search-user.component';
import { PaginationComponent } from './components/dashboard/pagination/pagination.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToasterComponent } from './common/toaster/toaster.component';
import { ModalComponent } from './common/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    SearchUserComponent,
    PaginationComponent,
    HeaderComponent,
    SidebarComponent,
    ToasterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [graphqlProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
