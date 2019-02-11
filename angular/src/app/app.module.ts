import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryApiService } from './in-memory-api.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidebarComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    ChartsModule,
    DataTablesModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    }),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibWVjaGV2YXJyaWEiLCJhIjoiY2pxbXNuMXF0MGwzNTQ5bzJwNGtyMTRqdyJ9.WZfALlPxuOveabQDrroLcQ'
    }),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}