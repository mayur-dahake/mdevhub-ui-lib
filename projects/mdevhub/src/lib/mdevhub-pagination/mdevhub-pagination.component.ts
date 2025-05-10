import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export type PageItem =
  | number
  | { type: 'ellipsis'; direction: 'prev' | 'next' };

@Component({
  selector: 'lib-mdevhub-pagination',
  imports: [CommonModule, MatIconModule, MatSelectModule, MatButtonModule],
  templateUrl: './mdevhub-pagination.component.html',
  styleUrl: './mdevhub-pagination.component.scss',
})
export class MdevhubPaginationComponent {
  @Input() totalRecords = 0;
  @Input() itemsPerPage = 10;
  @Input() currentPage = 1;
  @Input() prevButtonName = 'Prev';
  @Input() nextButtonName = 'Next';
  @Input() pageSizeOptions: number[] = [10, 25, 50, 100];

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  Math = Math;

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get pageButtons(): (
    | number
    | { type: 'ellipsis'; direction: 'prev' | 'next' }
  )[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages: (number | { type: 'ellipsis'; direction: 'prev' | 'next' })[] =
      [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, { type: 'ellipsis', direction: 'next' }, total);
      } else if (current >= total - 2) {
        pages.push(
          1,
          { type: 'ellipsis', direction: 'prev' },
          total - 2,
          total - 1,
          total
        );
      } else {
        pages.push(
          1,
          { type: 'ellipsis', direction: 'prev' },
          current - 1,
          current,
          current + 1,
          { type: 'ellipsis', direction: 'next' },
          total
        );
      }
    }
    return pages;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
    this.pageSizeChange.emit(this.itemsPerPage);
    this.pageChange.emit(this.currentPage);
  }

  isNumber(value: PageItem): value is number {
    return typeof value === 'number';
  }
}
