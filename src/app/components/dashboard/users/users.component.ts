import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { AutoUnsubscribe } from '../../../common/Autounsubscribe';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

@AutoUnsubscribe()
export class UsersComponent {
  
  users = this.usersService.users;
  currentPage = this.usersService.currentPage;
  limit = this.usersService.limit;
  sortField = this.usersService.sortField;
  sortOrder = this.usersService.sortOrder;
  isFetching: boolean = false;
  errorMessage = this.usersService.errorMessage;
  // searchData: any = '';
  
  constructor(private usersService: UsersService,
              private router: Router,
              private toasterService: ToasterService) {}

  ngOnInit() {
    this.getUsers();
  }

  // get all users with pagination and sorting
  getUsers(page: number = 1) {
    this.isFetching = true
    this.usersService.fetchUsers(this.limit(), page, this.sortField() , this.sortOrder())
      .subscribe({
        next: (resData) => {
          this.users.update(() => [...resData]);
        },
        error: (error) => {
          this.errorMessage.set(error.message);
          if(error.message === 'INVALID_TOKEN') {
            this.toasterService.showToast('Session expired. Please login again', 'error');
            this.router.navigate(['/login']);
          }
        }
      });
    this.isFetching = false
  }

  deleteUser(uuid: string) {
    this.usersService.deleteUser(uuid)
    .subscribe({
      next: () => {
        this.toasterService.showToast('User deleted successfully', 'error');
      },
      error: (error) => {
        this.errorMessage.set(error.message);
      }
    });
    this.getUsers(this.currentPage());
  }

  editUserData(user: any) {
    this.router.navigate(['dashboard/edit-user', user.uuid]);
    this.getUsers(this.currentPage());
  }

  changeStatus(user: any) {
    const newStatus = user.status === 1 ? 0 : 1;
    user.status = newStatus;
    this.usersService.updateStatus(user.uuid, user.status)
    .subscribe({
      next: () => {
        this.toasterService.showToast('User status updated successfully', 'info');
      },
      error: (error) => {
        this.errorMessage.set(error.message);}
    });
  }

   onSortChange(sortField: string) {
    if (this.sortField() === sortField) {
      this.sortOrder.set(this.sortOrder() === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortField.set(sortField);
      this.sortOrder.set('asc');
    }
    this.getUsers(this.currentPage());
  } 

  // searchFilter(searchData: any) {
  //   this.usersService.getUsers(searchData);
  //   this.searchData = searchData;
  // }

  showModal = false;
  modalTitle!: string;
  modalMessage!: string;
  modalOperation!: 'delete' | 'edit';
  userToDeleteUuid!: string;
  userToEdit: any; // Adjust type based on your user object structure

  openEditModal(user: any) {
    this.modalOperation = 'edit';
    this.modalTitle = 'Confirm Edit';
    this.modalMessage = `Are you sure you want to edit ${user.user_name}?`;
    this.userToEdit = { ...user }; // Assuming you need to edit a copy of the user data
    this.showModal = true;
  }

  openDeleteModal(user: any) {
    this.modalOperation = 'delete';
    this.modalTitle = 'Confirm Delete';
    this.modalMessage = `Are you sure you want to delete ${user.user_name}?`;
    this.userToDeleteUuid = user.uuid;
    this.showModal = true;
  }

  handleModalConfirmation(confirmed: boolean | null) {
    if (confirmed === true) {
      if (this.modalOperation === 'delete') {
        this.deleteUser(this.userToDeleteUuid);
      } else if (this.modalOperation === 'edit') {
        this.editUserData(this.userToEdit);
      }
    } else if (confirmed === false) {
      this.toasterService.showToast('Operation cancelled', 'info');
    }
    this.showModal = false;
  }
}