import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from '../../../common/Autounsubscribe';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
@AutoUnsubscribe()
export class AddUserComponent implements OnInit {

  addUserForm!: FormGroup;
  isEdit: boolean = false;
  userId: string | undefined;
  errorMessage = this.usersService.errorMessage;
  
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, 
    private toasterService: ToasterService) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      if (this.userId) {
        this.isEdit = true;
        this.usersService.getUser(this.userId)
          .subscribe({
            next: (user) => {
              this.addUserForm.patchValue(user);
            },
            error: (error: Error) => {
              this.errorMessage.set(error.message);
            }
          })
      }
    });

    this.addUserForm = new FormGroup({
      'user_name': new FormControl('', Validators.required),
      'first_name': new FormControl('', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'password': new FormControl('', this.isEdit ? [] : Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone_no': new FormControl('',this.isEdit ? [] : Validators.required),
      'status': new FormControl(1, Validators.required),
      'date_of_birth': new FormControl('', this.isEdit ? [] : Validators.required)
    });
  }
  
  onSubmit() {
    if (this.addUserForm.valid) {
      const FormData = {
        user_name: this.addUserForm.value.user_name,
        first_name: this.addUserForm.value.first_name,
        last_name: this.addUserForm.value.last_name,
        password: this.addUserForm.value.password,
        email: this.addUserForm.value.email,
        phone_no: this.addUserForm.value.phone_no,
        status: this.addUserForm.value.status,
        date_of_birth: this.addUserForm.value.date_of_birth
      }
      
      if (this.isEdit && this.userId) {
        if(!FormData.date_of_birth){
          FormData.date_of_birth = new Date(new Date().setDate(new Date().getDate() - 100)).toISOString()
        }
        const status = this.addUserForm.get('status')?.value;
        if (status === 1) {
          this.usersService.updateStatus(this.userId, 0)
          .subscribe({
            next: () => {
            },
            error: (error) => {
              this.errorMessage.set(error.message);
            }
          });
        } else {
          this.usersService.updateStatus(this.userId, 1)
          .subscribe({
            next: () => {
            },
            error: (error) => {
              this.errorMessage.set(error.message);}
          });
        }
        this.usersService.updateUser(this.userId, FormData.first_name, FormData.last_name, FormData.user_name, FormData.email, FormData.phone_no, FormData.date_of_birth)
          .subscribe({
            next: () => {
              this.toasterService.showToast('User updated successfully', 'info');
            },
            error: (error) => {
              this.errorMessage.set(error.message);
            }
          });
        this.isEdit = false;
      } else {
        this.usersService.createUser(FormData.user_name, FormData.first_name, FormData.last_name, FormData.password, FormData.email, FormData.phone_no, FormData.status, FormData.date_of_birth)
        .subscribe({
          next: () => {
            this.toasterService.showToast('User added successfully', 'success');
          },
          error: (error) => {
            this.errorMessage.set(error.message);}
        });
      }
      this.addUserForm.reset();
      this.router.navigate(['dashboard']);
    }
  }
}
