import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToasterService } from '../../services/toaster.service';
import { Toast } from '../toast.modal';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent implements OnDestroy{
  toasts: Toast[] = [];
  private subscription: Subscription;

  constructor(private toasterService: ToasterService) {
    this.subscription = this.toasterService.toasterState.subscribe(toast => {
      this.showToast(toast.message, toast.type, toast.id);
    });
  }

  showToast(message: string, type: 'success' | 'error' | 'info', id: number) {
    const toast: Toast = { id, message, type };
    this.toasts.push(toast);
  }

  onAnimationEnd(toast: Toast) {
    this.toasts = this.toasts.filter(t => t.id !== toast.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
