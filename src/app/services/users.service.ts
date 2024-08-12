import { Injectable, signal } from "@angular/core";
import { Apollo } from "apollo-angular";
import { loginUser } from "../framework/mutation/login";
import { fetchUsers, getUser } from "../framework/query/users";
import { map, tap } from "rxjs/operators";
import { changeUserStatus, createUser, deleteUser, updateUser } from "../framework/mutation/users";

@Injectable({ providedIn: 'root' })
export class UsersService{

    users = signal<any>([]);
    totalUsers = signal<number>(0);
    totalPages = signal<number>(0);
    currentPage = signal<number>(0);
    limit = signal<number>(10);
    sortField = signal<string>('');
    sortOrder = signal<string>('');
    errorMessage = signal<string>('');

    // allUsers = this.users.asReadonly();

    constructor(private apollo: Apollo){}

    login(email:string, password:string){
        return this.apollo.mutate({
          mutation: loginUser,
          variables: {
            email: email,
            password: password
          },      
        })
        .pipe(
            map((resData: any) => {
              return resData.data.loginUser.data;
            })
        );
    }

    fetchUsers(limit: number = 10, page: number = 1, sortBy: string = "", sortOrder: string = "", email: string = "", status?: number , phoneNo: string = "", fullName: string = ""){
        return this.apollo.mutate({
            mutation: fetchUsers,
            variables: {
              limit: limit,
              sortBy: sortBy,
              sortOrder: sortOrder,
              page: page,
              email: email,
              status: status,
              phoneNo: phoneNo,
              fullName: fullName
            },
        })
        .pipe(
            tap((resData: any) => {
                this.limit.set(limit);
                this.totalUsers.set(resData.data.fetchUsers.data.count);
                this.totalPages.set(Math.ceil(this.totalUsers() / limit));
                this.currentPage.set(page);
            }),
            map((resData: any) => {
              return resData.data.fetchUsers.data.userList;
            })
        )
    }

    getUser(uuid: string){
        return this.apollo.mutate({
          mutation: getUser,
          variables: {
            uuid: uuid
          },      
        })
        .pipe(
            map((resData: any) => {
              return resData.data.getUser.data;
            })
        )
    }

    createUser(userName: string, firstName: string, lastName: string, password: string, email: string, phoneNo: string, status: number, dateOfBirth: Date){
        return this.apollo.mutate({
          mutation: createUser,
          variables: {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email,
            phoneNo: phoneNo,
            status: status,
            dateOfBirth: dateOfBirth
          },      
        })
    }

    updateUser(uuid: string, firstName: string, lastName: string, userName: string, email: string, phoneNo: string, dateOfBirth: Date){
        return this.apollo.mutate({
          mutation: updateUser,
          variables: {
            uuid: uuid,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            phoneNo: phoneNo,
            dateOfBirth: dateOfBirth
          },      
        })
    }

    deleteUser(uuid: string){
        return this.apollo.mutate({
          mutation: deleteUser,
          variables: {
            uuid: uuid
          },      
        })
    }

    updateStatus(uuid: string, status: number){
        return this.apollo.mutate({
          mutation: changeUserStatus,
          variables: {
            uuid: uuid,
            status: status
          },      
        })
    }
}