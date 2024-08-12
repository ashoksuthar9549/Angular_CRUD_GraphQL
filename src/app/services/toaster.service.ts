import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../common/toast.modal';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toastSubject = new Subject<Toast>();
  toasterState = this.toastSubject.asObservable();
  private toastCounter = 0;

  showToast(message: string, type: 'success' | 'error' | 'info') {
    const id = this.toastCounter++;
    this.toastSubject.next({ id, message, type });
  }
}
