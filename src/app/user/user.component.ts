import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  userImgPath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // below code for non-signal approach:
  // get userImgPath(){
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    console.log('User Clicked!')
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
    // this.selectedUser = DUMMY_USERS[randomIndex]  // This code is for non-signal approach
  }

}
