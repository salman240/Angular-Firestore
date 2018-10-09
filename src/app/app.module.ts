import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatSnackBarModule } 
  from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule,
     MatSnackBarModule, FormsModule , AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
