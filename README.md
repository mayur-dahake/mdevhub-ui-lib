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
import { MDevHubPaginatorComponent,MdevhubFileUploaderComponent } from 'mdevhub';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MDevHubPaginatorComponent,MdevhubFileUploaderComponent],
    template: `
    <mdevhub-paginator ...></mdevhub-paginator>
    <mdevhub-file-uploader></mdevhub-file-uploader>
  `
})
```

Or if you're using an NgModule:

```ts
import { NgModule } from '@angular/core';
import { MDevHubPaginatorComponent,MdevhubFileUploaderComponent } from 'mdevhub';

@NgModule({
  declarations: [...],
  imports: [
    MDevHubPaginatorComponent,
    MdevhubFileUploaderComponent
  ]
})
export class YourModule {}
```

---

## 🛠️ Components Available

- ✅ `MDevHubPaginatorComponent` –  [Demo](https://www.linkedin.com/in/mayurdahake)  fully functional paginator
      🔗 [GitHub](https://github.com/mayur-dahake/custom-paginations)  💻 [Demo](https://custom-paginations.vercel.app/)
- ✅ `MdevhubFileUploaderComponent` – Modern file uploader with drag & drop, preview, and URL upload  
      🔗 [GitHub](https://github.com/mayur-dahake/mdevhub-ui-lib) 💻 [Demo](https://mdevhub-file-uploader-demo.vercel.app/)

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