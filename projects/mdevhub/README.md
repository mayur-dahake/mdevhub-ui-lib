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
import { CustomPaginatorComponent } from 'mdevhub';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CustomPaginatorComponent],
  ...
})
```

Or if you're using an NgModule:

```ts
import { NgModule } from '@angular/core';
import { CustomPaginatorComponent } from 'mdevhub';

@NgModule({
  declarations: [...],
  imports: [
    CustomPaginatorComponent
  ]
})
export class YourModule {}
```

---

## 🧪 Example - Using the Custom Paginator

```html
<app-custom-paginator
  [totalRecords]="totalRecords"
  [itemsPerPage]="pageSize"
  [currentPage]="currentPage"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)">
</app-custom-paginator>
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

- ✅ `CustomPaginatorComponent` – fully functional paginator
- 🛠️ More coming soon...

---

## 🤝 Contributing

Want to improve this library or add new components? Contributions are welcome!  
Please submit issues or PRs via GitHub.

---

## 👨‍💻 Author

**Mayur Dahake**

- 🔗 [LinkedIn](https://www.linkedin.com/in/mayurdahake)
- 💻 [GitHub](https://github.com/mayur-dahake)

---

## 📃 License

This project is licensed under the MIT License.