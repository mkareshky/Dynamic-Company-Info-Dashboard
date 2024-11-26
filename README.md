
### **Live Demo**
Visit the live website here:  
[Dynamic Company Info Dashboard](https://dynamic-company-info-dashboard.vercel.app/)

---
### **Explanation of All Technologies Used in the App**
---

### **1. React**
- **Purpose**: React is a JavaScript library for building dynamic and reusable user interfaces.
- **Usage**: 
  - The app is organized into functional components (e.g., `Header`, `Footer`, `CompanyInfo`, `ChartsSection`, `DiagramsSection`) to ensure reusability and maintainability.
  - React hooks like `useSelector` are used for state management in components.
  - `React.FC` is utilized for strong TypeScript support.

---

### **2. Redux**
- **Purpose**: Redux is used to manage the global state of the application.
- **Usage**:
  - The `store` contains mock data (`mockData`) to simulate real-world state.
  - Components like `CompanyInfo` and `ChartsSection` use `useSelector` to access the global state and display data dynamically.
  - Although the app doesn't demonstrate dispatch actions, it is ready to handle advanced Redux actions if extended.

---

### **3. Styled-Components**
- **Purpose**: A popular library for writing CSS directly in JavaScript, scoped to specific components.
- **Usage**:
  - Every component (e.g., `Header`, `Footer`, `ChartsSection`) has its own `styled` container to ensure styling is modular and does not conflict with other components.
  - Media queries in styled-components ensure the app is responsive and looks good on all screen sizes.

---

### **4. TypeScript**
- **Purpose**: TypeScript is used to add type safety to the app, reducing runtime errors and improving code readability.
- **Usage**:
  - All components are defined as `React.FC` to enforce type checking.
  - Redux state is typed to ensure proper usage of the data structure across the app.

---

### **5. LaTeX (TikZ)**
- **Purpose**: LaTeX is a document preparation system, and TikZ is a package within it to create graphics programmatically.
- **Usage**:
  - A TikZ `.tex` file was used to create the `Revenue Breakdown Guide` diagram.
  - The diagram was compiled into an SVG file using a LaTeX engine (e.g., `pdflatex`) and integrated into the app as an image asset.

---

### **6. SVG**
- **Purpose**: Scalable Vector Graphics (SVG) format is used for graphics that are responsive and high-quality at any resolution.
- **Usage**:
  - The `Revenue Breakdown Guide` is included as an SVG, which was created from the TikZ `.tex` file.
  - SVG is also used to render the pie chart in `ChartsSection` and the organization chart in `DiagramsSection`.

---

### **7. HTML5 & CSS3**
- **Purpose**: HTML5 provides the structure of the app, and CSS3 enhances its visual presentation.
- **Usage**:
  - The app uses semantic HTML tags (`h1`, `h2`, `p`, `ul`) for accessibility and better structure.
  - CSS is modularized using `styled-components`, ensuring clean, reusable styles.

---

### **8. Mock Data**
- **Purpose**: Mock data is used to simulate backend data for development purposes.
- **Usage**:
  - A `mockData` object is passed to the Redux store to simulate real data for company information, revenue distribution, and milestones.

---

### **9. Responsive Design**
- **Purpose**: Ensure the app is functional and visually appealing across different screen sizes.
- **Usage**:
  - Media queries in `styled-components` adjust layouts and styling for smaller screens (e.g., `@media (max-width: 768px)`).

---

### **10. JavaScript (ES6+)**
- **Purpose**: JavaScript is used to handle the dynamic and interactive parts of the app.
- **Usage**:
  - Features like arrow functions, template literals, and array methods (e.g., `map`) are used throughout the app for cleaner and modern syntax.

---

### **11. Webpack/Babel**
- **Purpose**: Webpack is a module bundler, and Babel is a JavaScript compiler.
- **Usage**:
  - The app leverages Webpack and Babel (via Create React App) to bundle and transpile modern JavaScript/TypeScript into browser-compatible code.

---

### **12. Git and Version Control**
- **Purpose**: Git is used to track changes and collaborate on the project.
- **Usage**:
  - The app is version-controlled and hosted in a GitHub repository, making it easy to deploy and share.

---

### **13. Vercel**
- **Purpose**: Vercel is used for deploying and hosting the app.
- **Usage**:
  - The app is deployed to Vercel, enabling easy access through a public URL.

---

### **Workflow Explanation**
1. **Data Flow**:
   - The Redux store initializes with `mockData`.
   - Components like `CompanyInfo` and `ChartsSection` fetch data using `useSelector` and render it dynamically.

2. **Styling**:
   - Components are styled using `styled-components` for scoped, modular CSS.
   - Media queries ensure responsiveness.

3. **Visuals**:
   - The `ChartsSection` dynamically generates a pie chart using SVG paths.
   - The `DiagramsSection` features an organizational chart rendered as a responsive SVG.
   - The `Revenue Breakdown Guide` is created using TikZ, compiled to SVG, and displayed in the app.

4. **Deployment**:
   - The app is deployed on Vercel for easy access and hosting.

---

### **Mentioning TikZ in Your Explanation**

> "The `Revenue Breakdown Guide` is a key visual in this app. It was created using the TikZ package in LaTeX. TikZ is a powerful tool for programmatically generating graphics, ensuring precision and high quality. The diagram was compiled from a `.tex` file into an SVG format and integrated seamlessly into the app for a polished look."

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
