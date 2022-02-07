import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ListItemComponent } from './list-item/list-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { AppBreadcrumbService } from './app.breadcrumb.service';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {AvatarModule} from 'primeng/avatar';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ListItemComponent,
    DetailItemComponent,
    AppBreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    FormsModule,
    AvatarModule,
    BreadcrumbModule,
    ChipModule,
    ProgressSpinnerModule
  ],
  providers: [ AppBreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
