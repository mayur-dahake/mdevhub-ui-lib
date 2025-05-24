import { NgModule } from '@angular/core';
import { MDevHubPaginatorComponent } from './mdevhub-paginator/mdevhub-paginator.component';
import { MdevhubFileUploaderComponent } from './mdevhub-file-uploader/mdevhub-file-uploader.component';


@NgModule({
  imports: [MDevHubPaginatorComponent,MdevhubFileUploaderComponent],
  exports: [MDevHubPaginatorComponent,MdevhubFileUploaderComponent]
})
export class MDevHubModule {}