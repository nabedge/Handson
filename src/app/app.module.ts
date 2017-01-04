import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routing, appRoutesProviders} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueComponent,
    WikiComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
