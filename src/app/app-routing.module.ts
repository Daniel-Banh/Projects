import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ChatsMainInterfaceComponent } from './chats-main-interface/chats-main-interface.component';
import { AddANewUserComponent } from './add-a-new-user/add-a-new-user.component';
import { AddNewMembersBySearchComponent } from './add-new-members-by-search/add-new-members-by-search.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'chats-main-interface', component: ChatsMainInterfaceComponent, data: { text: 'Chats Main Interface' } },
  { path: 'add-a-new-user', component: AddANewUserComponent, data: { text: 'Add A New User' } },
  { path: 'add-new-members-by-search', component: AddNewMembersBySearchComponent, data: { text: 'Add New Members By Search' } },
  { path: 'about-us-page', component: AboutUsPageComponent, data: { text: 'About Us Page' } },
  { path: 'settings', component: SettingsComponent, data: { text: 'Settings' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
