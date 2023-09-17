import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { UsersComponent } from './components/users/users.component';
import { CreateGroupChannelComponent } from './components/create-group-channel/create-group-channel.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'chat',
    component: ChatComponent
  },
  {
    path:'groups',
    component: GroupsComponent
  },
  {
    path:'channels',
    component: ChannelsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'create-group-channel',
    component: CreateGroupChannelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
