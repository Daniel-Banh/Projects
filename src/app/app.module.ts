import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsMainInterfaceComponent } from './chats-main-interface/chats-main-interface.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AddANewUserComponent } from './add-a-new-user/add-a-new-user.component';
import { AddNewMembersBySearchComponent } from './add-new-members-by-search/add-new-members-by-search.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatsMainInterfaceComponent,
    AddANewUserComponent,
    AddNewMembersBySearchComponent,
    AboutUsPageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxAvatarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
