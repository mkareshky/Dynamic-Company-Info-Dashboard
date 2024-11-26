
### **Live Demo**
---

Visit the live website here:  
[Dynamic Company Info Dashboard](https://dynamic-company-info-dashboard.vercel.app/)

---

### **Key Features**

---

1. **Company Information Section**:
   - Displays the company mission, vision, and milestones dynamically using Redux store data.

2. **Revenue Distribution Visualization**:
   - A dynamic pie chart created using SVG to represent the revenue distribution.
   - A TikZ-generated guide (compiled into SVG) is displayed in the top-right corner, highlighting revenue breakdown categories.

3. **Organizational Structure Diagram**:
   - A responsive SVG diagram shows the company’s hierarchy with CEO, CTO, CFO, and their respective teams.

4. **Responsive Design**:
   - The layout adapts seamlessly across devices, ensuring accessibility on both desktop and mobile.

5. **Deployment**:
   - The app is hosted on **Vercel**, making it accessible online with optimal performance.

---

### **Technologies Used**

---


1. **React**: For building a modular and reusable component-based UI.
2. **Redux**: Manages global state (e.g., company information and revenue data).
3. **TypeScript**: Ensures type safety and reduces runtime errors during development.
4. **Styled-Components**: Provides scoped and modular styling for each component.
5. **TikZ & LaTeX**: Used to create the **Revenue Breakdown Guide** as a high-quality SVG graphic.
6. **SVG**:
   - The pie chart and organization chart leverage SVG for responsiveness and scalability.
   - The TikZ-generated SVG guide is seamlessly integrated into the dashboard.
7. **Webpack/Babel**: Transpiles and bundles the app for browser compatibility.
8. **Git & GitHub**: Version control and repository hosting.
9. **Vercel**: For fast and reliable deployment of the live website.

---

## Available Scripts



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
