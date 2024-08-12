import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { AutoUnsubscribe } from '../../../common/Autounsubscribe';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
@AutoUnsubscribe()
export class SearchUserComponent implements OnInit {

  @Output() searchQuery = new EventEmitter<any>();
  users = this.usersService.users;
  errorMessage = this.usersService.errorMessage;

  constructor(private usersService: UsersService) { }
  ngOnInit(){
  }

  searchUser(username: string, email: string, phoneNumber: string, status: number) {
    const searchParams = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      status: status
    }
    this.searchQuery?.emit(searchParams);

    this.usersService.fetchUsers(10, 1, '', '', email, status, phoneNumber, username)
      .subscribe({
        next: (resData) => {
          this.users.update(() => [...resData]);
        },
        error: (error) => {
          this.errorMessage.set(error.message);
        }
      });
  }
}
