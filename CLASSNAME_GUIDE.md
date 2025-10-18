# 🏷️ ClassName Reference Guide

All classNames have been reorganized to be **descriptive, semantic, and easy to follow**.

---

## 📋 Naming Convention

```
[component]-[element]-[modifier]
```

**Examples:**
- `navbar-logo-react` → Navbar component, logo element, React variant
- `sidebar-menu-item` → Sidebar component, menu item element
- `dashboard-greeting-title` → Dashboard component, greeting element, title variant

---

## 🧭 Navigation Bar (`Navbar.jsx`)

### Main Container
```jsx
<BootstrapNavbar className="navbar-main">
  <Container className="navbar-container">
```

### Brand Section
```jsx
<BootstrapNavbar.Brand className="navbar-brand-wrapper">
  <img className="navbar-logo-vite" />
  <img className="navbar-logo-react" />    {/* ← Has animation */}
  <span className="navbar-title">
```

### Navigation Links
```jsx
<Nav className="navbar-links">
  <Nav.Link className="navbar-link">
```

### Search & Actions
```jsx
<div className="navbar-actions">
  <div className="navbar-search-wrapper">
    <input className="navbar-search-input" />
    <Dropdown.Menu className="navbar-search-dropdown">
      <Dropdown.Item className="navbar-search-item" />
      <Dropdown.Item className="navbar-search-empty">  {/* When no results */}
```

### Logout Button
```jsx
<Button className="navbar-logout-btn">
```

---

## 🔲 Sidebar (`Sidebar.jsx`)

### Main Container
```jsx
<div className="sidebar sidebar-container">
```

### Title
```jsx
<h6 className="sidebar-title">
```

### Navigation
```jsx
<Nav className="sidebar-nav">
  <Nav.Link className="sidebar-menu-item">
```

**CSS Targets:**
- `.sidebar-menu-item:hover` → Hover state
- `.sidebar-menu-item:focus` → Focus state

---

## 📊 Dashboard (`Dashboard.jsx`)

### Main Container
```jsx
<div className="dashboard-main main-content">  {/* main-content = legacy support */}
```

### Card Wrapper
```jsx
<Card className="dashboard-card">
```

### Greeting Section
```jsx
<div className="dashboard-greeting">
  <h3 className="dashboard-greeting-title">
  <p className="dashboard-greeting-subtitle">
```

---

## 🎴 Overview Cards (`OverviewCards.jsx`)

### Empty State
```jsx
<Row className="overview-cards-empty">
  <Col className="overview-cards-empty-col">
    <Card className="overview-cards-empty-card">
      <Card.Body className="overview-cards-empty-body">
        <Card.Text className="overview-cards-empty-text">
```

### Cards with Data
```jsx
<Row className="overview-cards-row">
  <Col className="overview-card-col">
    <Card className="overview-card">            {/* Also has: border-{variant} */}
      <Card.Body className="overview-card-body">
        <Card.Title className="overview-card-title">
        <Card.Text className="overview-card-value">  {/* Also has: text-{variant} */}
```

**Dynamic Classes:**
- `border-primary`, `border-success`, `border-danger` → Card borders
- `text-primary`, `text-success`, `text-danger` → Value colors

---

## 📈 Charts (`Charts.jsx`)

### Charts Row
```jsx
<Row className="charts-row">
```

### Line Chart Column
```jsx
<Col className="chart-col chart-col-line">
  <Card className="chart-card chart-card-line">
    <h5 className="chart-title chart-title-line">
    <ResponsiveContainer className="chart-container chart-container-line">
      <LineChart className="chart-linechart">
        <CartesianGrid className="chart-grid" />
        <XAxis className="chart-xaxis" />
        <YAxis className="chart-yaxis" />
        <Tooltip className="chart-tooltip" />
        <Legend className="chart-legend" />
        <Line className="chart-line-revenue" />    {/* revenue, profit, expenses */}
        <Line className="chart-line-profit" />
        <Line className="chart-line-expenses" />
```

### Pie Chart Column
```jsx
<Col className="chart-col chart-col-pie">
  <Card className="chart-card chart-card-pie">
    <h5 className="chart-title chart-title-pie">
    <ResponsiveContainer className="chart-container chart-container-pie">
      <PieChart className="chart-piechart">
        <Pie className="chart-pie">
          <Cell className="chart-pie-cell chart-pie-cell-0" />  {/* Index-based */}
          <Cell className="chart-pie-cell chart-pie-cell-1" />
          <Cell className="chart-pie-cell chart-pie-cell-2" />
```

---

## 🔔 App Root (`App.jsx`)

### Layout
```jsx
<div className="app-layout">  {/* Wraps Sidebar + Dashboard */}
```

### Toast Notifications
```jsx
<ToastContainer className="app-toast-container">
  <Toast className="app-toast">
    <Toast.Header className="app-toast-header">
      <strong className="app-toast-title">
    <Toast.Body className="app-toast-body">
```

---

## 🎨 CSS Files Reference

### `App.css`
```css
#root                   /* Root container */
```

### `Navbar.css`
```css
.navbar-logo-react      /* React logo with spin animation */
.navbar-search-wrapper  /* Search input container */
```

### `Sidebar.css`
```css
.sidebar                /* Sidebar container */
.sidebar-title          /* "Menu" title */
.sidebar-menu-item      /* Individual menu links */
```

### `Dashboard.css`
```css
.dashboard-main         /* Main content area */
.dashboard-card         /* Card wrapper */
.dashboard-greeting-title      /* "Hello, Andrew" */
.dashboard-greeting-subtitle   /* Description text */
```

---

## 🔍 Quick Search Guide

**Need to style...?**

| Element | ClassName | File |
|---------|-----------|------|
| Navbar background | `.navbar-main` | Navbar.jsx |
| Logo animation | `.navbar-logo-react` | Navbar.css |
| Search box | `.navbar-search-input` | Navbar.jsx |
| Sidebar background | `.sidebar` | Sidebar.css |
| Menu items | `.sidebar-menu-item` | Sidebar.css |
| Main content area | `.dashboard-main` | Dashboard.css |
| Greeting text | `.dashboard-greeting-title` | Dashboard.css |
| Metric cards | `.overview-card` | OverviewCards.jsx |
| Card title | `.overview-card-title` | OverviewCards.jsx |
| Card value | `.overview-card-value` | OverviewCards.jsx |
| Chart containers | `.chart-card` | Charts.jsx |
| Line chart | `.chart-card-line` | Charts.jsx |
| Pie chart | `.chart-card-pie` | Charts.jsx |
| Toast notifications | `.app-toast` | App.jsx |

---

## 💡 Usage Examples

### Target specific chart
```css
/* Style only the line chart */
.chart-card-line {
  border: 2px solid blue;
}

/* Style only the pie chart */
.chart-card-pie {
  background: linear-gradient(to bottom, #fff, #f8f9fa);
}
```

### Target specific metric line
```css
/* Style the revenue line */
.chart-line-revenue {
  stroke-width: 3px;
}
```

### Target metric card by variant
```jsx
{/* In code, Bootstrap classes work too */}
<Card className="overview-card border-primary">  {/* Blue border */}
<Card className="overview-card border-success">  {/* Green border */}
<Card className="overview-card border-danger">   {/* Red border */}
```

### Hover effects
```css
/* Custom hover for sidebar items */
.sidebar-menu-item:hover {
  background-color: #007bff;
  transform: translateX(5px);
}
```

---

## 📐 Class Structure Hierarchy

```
App
├── app-layout
│   ├── Sidebar
│   │   ├── sidebar
│   │   ├── sidebar-title
│   │   └── sidebar-menu-item
│   │
│   └── Dashboard
│       ├── dashboard-main
│       ├── dashboard-card
│       ├── dashboard-greeting
│       │   ├── dashboard-greeting-title
│       │   └── dashboard-greeting-subtitle
│       │
│       ├── OverviewCards
│       │   ├── overview-cards-row
│       │   ├── overview-card-col
│       │   └── overview-card
│       │       ├── overview-card-body
│       │       ├── overview-card-title
│       │       └── overview-card-value
│       │
│       └── Charts
│           ├── charts-row
│           ├── chart-col (line/pie)
│           └── chart-card (line/pie)
│               ├── chart-title
│               ├── chart-container
│               └── chart-linechart / chart-piechart
│
├── Navbar
│   ├── navbar-main
│   ├── navbar-brand-wrapper
│   │   ├── navbar-logo-vite
│   │   ├── navbar-logo-react
│   │   └── navbar-title
│   ├── navbar-links
│   │   └── navbar-link
│   └── navbar-actions
│       ├── navbar-search-wrapper
│       │   ├── navbar-search-input
│       │   └── navbar-search-dropdown
│       │       └── navbar-search-item
│       └── navbar-logout-btn
│
└── app-toast-container
    └── app-toast
        ├── app-toast-header
        │   └── app-toast-title
        └── app-toast-body
```

---

## ✅ Benefits of New Naming

1. **Self-Documenting**: `navbar-search-input` is clearer than `form-control`
2. **Component Scoped**: Know exactly which component a class belongs to
3. **Easy to Find**: Search for "navbar" to find all navbar-related classes
4. **Hierarchical**: Parent-child relationships are obvious
5. **No Conflicts**: Component prefixes prevent naming collisions
6. **Maintainable**: Easy to add new variants (e.g., `chart-col-bar`)

---

## 🚀 Next Steps

1. **Add custom styles** to any className in the corresponding CSS file
2. **Search by component name** to find all related classes
3. **Use descriptive names** when adding new components
4. **Keep the pattern** consistent: `[component]-[element]-[modifier]`

---

**Happy Styling! 🎨**
