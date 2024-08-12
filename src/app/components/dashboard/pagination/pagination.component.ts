import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { AutoUnsubscribe } from '../../../common/Autounsubscribe';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
@AutoUnsubscribe()
export class PaginationComponent {

  users = this.usersService.users;
  totalPages = this.usersService.totalPages;
  currentPage = this.usersService.currentPage;
  totalUsers = this.usersService.totalUsers;
  limit = this.usersService.limit;
  sortField = this.usersService.sortField;
  sortOrder = this.usersService.sortOrder;
  errorMessage = this.usersService.errorMessage;

  constructor(private usersService: UsersService) {}

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
      this.usersService.fetchUsers(this.limit(), this.currentPage(), this.sortField(), this.sortOrder())
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

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage.set(this.currentPage() + 1);
      this.usersService.fetchUsers(this.limit(), this.currentPage(), this.sortField(), this.sortOrder())
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

  onLimitChange(event: any) {
    this.limit.set(event.target.value);
    this.usersService.fetchUsers(+this.limit())
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
