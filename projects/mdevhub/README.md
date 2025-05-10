# MDevHub - Angular UI Component Library

**MDevHub** is an open-source Angular UI component library designed to provide reusable, customizable, and modern components like custom paginators, data tables, and more — all built using Angular and Material.

---

## ✨ Features

- 📦 Plug-and-play Angular components
- 🎨 Built on Angular Material
- 🧩 Modular architecture (easy to scale and customize)
- 🚀 Ready for enterprise and personal projects
- 🌱 Actively maintained and open to contributions

---

## 📦 Installation

Install the package using npm:

```bash
npm install mdevhub
```

---

## 🔧 Usage

Import the desired modules in your Angular module or component:

```ts
// Example in a standalone component
import { MDevHubPaginatorComponent } from 'mdevhub';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MDevHubPaginatorComponent],
  ...
})
```

Or if you're using an NgModule:

```ts
import { NgModule } from '@angular/core';
import { MDevHubPaginatorComponent } from 'mdevhub';

@NgModule({
  declarations: [...],
  imports: [
    MDevHubPaginatorComponent
  ]
})
export class YourModule {}
```

---

## 🧪 Example - Using the Custom Paginator

```html
<mdevhub-paginator
  [totalRecords]="totalRecords"
  [itemsPerPage]="pageSize"
  [currentPage]="currentPage"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)">
</mdevhub-paginator>
```

```ts
// In your component.ts
totalRecords = 100;
pageSize = 10;
currentPage = 1;

onPageChange(newPage: number) {
  this.currentPage = newPage;
}

onPageSizeChange(newSize: number) {
  this.pageSize = newSize;
  this.currentPage = 1;
}
```

---

## 🛠️ Components Available

- ✅ `MDevHubPaginatorComponent` –  [Demo](https://www.linkedin.com/in/mayurdahake)  fully functional paginator
      🔗 [GitHub](https://github.com/mayur-dahake/custom-paginations)  💻 [Demo](https://custom-paginations.vercel.app/)
- 🛠️ More coming soon...

---

## 🤝 Contributing

Want to improve this library or add new components? Contributions are welcome!  

---

## 👨‍💻 Author

**Mayur Dahake**

- 🔗 [LinkedIn](https://www.linkedin.com/in/mayurdahake)
- 💻 [GitHub](https://github.com/mayur-dahake)

---