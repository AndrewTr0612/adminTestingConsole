# Project Structure

This document describes the reorganized folder structure of the Admin Console application.

## 📁 New Folder Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Top navigation bar with search
│   ├── Sidebar.jsx     # Left sidebar menu
│   ├── Dashboard.jsx   # Main dashboard container
│   ├── OverviewCards.jsx  # Revenue/Profit/Expenses cards
│   └── Charts.jsx      # Line and Pie charts
│
├── data/               # Data files
│   ├── chartData.js    # Line and pie chart data
│   └── overviewData.js # Overview metrics data
│
├── utils/              # Utility functions
│   └── colors.js       # Color utility functions
│
├── styles/             # Component-specific styles
│   ├── Navbar.css      # Navbar styles
│   ├── Sidebar.css     # Sidebar styles
│   └── Dashboard.css   # Dashboard styles
│
├── assets/             # Images and static files
│   └── react.svg
│
├── App.jsx             # Main app component (orchestrates everything)
├── App.css             # Global styles
├── main.jsx            # Entry point
└── index.css           # Base styles
```

## 🧩 Component Breakdown

### 1. **App.jsx** (Main Container)
- Manages global state (toast notifications, search)
- Coordinates all child components
- Handles feature click events

### 2. **Navbar.jsx**
- Top navigation bar
- Search functionality
- Logo and navigation links
- Logout button

### 3. **Sidebar.jsx**
- Left menu navigation
- Menu items: Overview, Analytics, Settings

### 4. **Dashboard.jsx**
- Main content area
- Greeting section
- Integrates OverviewCards and Charts

### 5. **OverviewCards.jsx**
- Displays Revenue, Profit, Expenses cards
- Responsive grid layout
- Dynamic filtering based on search

### 6. **Charts.jsx**
- Line Chart (Revenue/Expenses/Profit over time)
- Pie Chart (Distribution breakdown)
- Uses Recharts library

## 📊 Data Files

### **chartData.js**
```javascript
export const lineData = [...];  // Monthly data
export const pieData = [...];   // Distribution data
```

### **overviewData.js**
```javascript
export const overviewProps = [...];  // Metrics cards data
```

## 🎨 Style Organization

### **Global Styles**
- `App.css` - Root layout, logo animations
- `index.css` - Base typography, colors

### **Component Styles**
- `Navbar.css` - Navbar and logo animation
- `Sidebar.css` - Sidebar menu styling
- `Dashboard.css` - Main content area and cards

## 🔧 Utility Functions

### **colors.js**
- `getChartColors(colorName)` - Returns hex color for theme color name
- `getColorsFromProps(props)` - Generates color array from props

## 🚀 Benefits of This Structure

1. **Maintainability** ✅
   - Each component has a single responsibility
   - Easy to find and update specific features

2. **Reusability** ✅
   - Components can be imported and reused
   - Data files can be easily replaced or modified

3. **Scalability** ✅
   - Easy to add new components
   - Clear separation of concerns

4. **Testing** ✅
   - Components can be tested individually
   - Data can be mocked easily

5. **Collaboration** ✅
   - Team members can work on different components
   - Clear file organization reduces conflicts

## 📝 How to Add New Features

### Adding a New Component:
1. Create file in `src/components/ComponentName.jsx`
2. Create corresponding CSS in `src/styles/ComponentName.css`
3. Import in `App.jsx` or parent component

### Adding New Data:
1. Create file in `src/data/dataName.js`
2. Export data as named export
3. Import where needed

### Adding Utilities:
1. Create file in `src/utils/utilityName.js`
2. Export functions
3. Import in components

## 🔄 Migration Notes

All functionality remains the same:
- ✅ Search works
- ✅ Navigation works
- ✅ Charts display correctly
- ✅ Toast notifications work
- ✅ All styling preserved

No breaking changes - just better organization!

---

**Next Steps:**
- Consider adding TypeScript for type safety
- Add unit tests for components
- Implement React Router for navigation
- Add API integration for real data
