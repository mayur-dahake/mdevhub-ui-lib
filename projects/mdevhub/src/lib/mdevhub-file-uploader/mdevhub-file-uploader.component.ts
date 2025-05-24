import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdevhub-file-uploader',
  imports: [MatIconModule,FormsModule,CommonModule],
  templateUrl: './mdevhub-file-uploader.component.html',
  styleUrl: './mdevhub-file-uploader.component.scss',
})
export class MdevhubFileUploaderComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  public fileFormData: FormData = new FormData();
  public fileError: string | null = null;
  public uploadedFiles: UploadFile[] = [];
  public fileUrl: string = '';

  constructor(
    public dialogRef: MatDialogRef<MdevhubFileUploaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileUploadDialogData
  ) {}

  ngOnInit(): void {
    this.data = {
      allowMultiple: this.data.allowMultiple ?? true,
      acceptTypes: this.data.acceptTypes ?? ['*/*'],
      maxFileSizeMB: this.data.maxFileSizeMB ?? 10,
      enablePreview: this.data.enablePreview ?? true,
      enableUrlUpload: this.data.enableUrlUpload ?? false,
    };
  }

  onDragOver(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  public openFileSelector(): void {
    this.fileInput.nativeElement.click();
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    this.handleFile(input.files[0]);
    this.fileInput.nativeElement.value = ''; // Reset input
  }

  public onFileDropped(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files = Array.from(event.dataTransfer?.files || []);
    if (files.length > 0) {
      this.handleFile(files[0]);
    }
  }

  uploadFromUrl(): void {
    if (!this.fileUrl) return;
    fetch(this.fileUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const name = this.fileUrl.split('/').pop() || 'remote-file';
        const file = new File([blob], name, { type: blob.type });
        this.handleFile(file);
        this.fileUrl = '';
      })
      .catch(() => {
        this.fileError = 'Failed to fetch file from URL.';
      });
  }

  private handleFile(file: File): void {
    const maxSizeMB = this.data?.maxFileSizeMB ?? 10;
    const allowedTypes = this.data?.acceptTypes ?? ['text/csv'];

    const isTypeValid =
      allowedTypes.includes('*/*') || allowedTypes.includes(file.type);
    const isSizeValid = file.size <= maxSizeMB * 1024 * 1024;

    if (!isTypeValid || !isSizeValid) {
      this.fileError = !isTypeValid
        ? `Invalid file type. Allowed: ${allowedTypes.join(', ')}`
        : `File size exceeds ${maxSizeMB}MB.`;
      return;
    }

    this.fileError = null;

    const uploadedFile: UploadFile = {
      name: file.name,
      size: file.size,
      progress: 0,
      rawFile: file,
    };

    if (this.data.allowMultiple) {
      this.uploadedFiles.push(uploadedFile);
    } else {
      if (this.uploadedFiles[0]?.intervalId) {
        clearInterval(this.uploadedFiles[0].intervalId);
      }
      this.uploadedFiles = [uploadedFile];
    }

    this.fileFormData = new FormData();
    this.uploadedFiles.forEach((f) =>
      this.fileFormData.append('file', f.rawFile, f.name)
    );

    this.simulateUpload(uploadedFile);
  }

  public removeFile(index: number): void {
    if (this.data.allowMultiple) {
      // Remove a specific file by index for multiple mode
      if (index !== undefined && this.uploadedFiles[index]) {
        if (this.uploadedFiles[index].intervalId) {
          clearInterval(this.uploadedFiles[index].intervalId);
        }
        this.uploadedFiles.splice(index, 1);
      }
    } else {
      // Single file mode: clear the only file
      if (this.uploadedFiles[0]?.intervalId) {
        clearInterval(this.uploadedFiles[0].intervalId);
      }
      this.uploadedFiles = [];
    }
    this.fileFormData = new FormData();
    this.uploadedFiles.forEach((f) =>
      this.fileFormData.append('file', f.rawFile, f.name)
    );
  }

  public previewFile(file: UploadFile): void {
    if (!this.data.enablePreview) return;

    const type = file.rawFile.type;
    if (type.startsWith('image/') || type === 'application/pdf') {
      // Use object URL for preview
      const url = URL.createObjectURL(file.rawFile);
      window.open(url, '_blank');
      // Optionally revoke after some time
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } else {
      // Download other files
      const url = URL.createObjectURL(file.rawFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    }
  }

  public simulateUpload(file: UploadFile): void {
    const intervalId = setInterval(() => {
      if (file.progress >= 100) {
        clearInterval(intervalId);
        return;
      }
      file.progress += 10;
    }, 100);
    file.intervalId = intervalId;
  }

  public convertFileSize(size: number): string {
    const sizeInKB = size / 1024;
    return sizeInKB < 1024
      ? Math.round(sizeInKB) + ' KB'
      : (sizeInKB / 1024).toFixed(1) + ' MB';
  }

  public canGoNext(): boolean {
    if (this.data.allowMultiple) {
      return (
        this.uploadedFiles.length > 0 &&
        this.uploadedFiles.every((f) => f.progress === 100)
      );
    } else {
      return (
        this.uploadedFiles.length === 1 &&
        this.uploadedFiles[0].progress === 100
      );
    }
  }

  public next(): void {
    this.dialogRef.close({
      files: this.uploadedFiles.map((f) => ({
        name: f.name,
        type: f.rawFile.type,
        size: f.size,
        rawFile: f.rawFile,
      })),
      formData: this.fileFormData,
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}

interface UploadFile {
  name: string;
  size: number;
  progress: number;
  rawFile: File;
  previewUrl?: string;
  intervalId?: ReturnType<typeof setInterval>;
}

export interface FileUploadDialogData {
  allowMultiple?: boolean;
  acceptTypes?: string[];
  maxFileSizeMB?: number;
  enablePreview?: boolean;
  enableUrlUpload?: boolean;
}
