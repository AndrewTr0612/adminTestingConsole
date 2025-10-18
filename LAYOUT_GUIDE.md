# 📐 Grid Layout Guide - Admin Console

## 🗺️ Current Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         NAVBAR                               │
│  [Logo] [Links] [Search] [Logout]                           │
└─────────────────────────────────────────────────────────────┘
┌──────────────┬──────────────────────────────────────────────┐
│   SIDEBAR    │              DASHBOARD                        │
│              │  ┌────────────────────────────────────────┐  │
│  - Overview  │  │  Greeting Section                       │  │
│  - Analytics │  │  "Hello, Andrew 👋"                     │  │
│  - Settings  │  └────────────────────────────────────────┘  │
│              │                                               │
│              │  ┌──────────────────────────────────────┐    │
│              │  │      OVERVIEW CARDS (Row)            │    │
│              │  │  ┌───────┐ ┌───────┐ ┌───────┐      │    │
│              │  │  │Revenue│ │Profit │ │Expense│      │    │
│              │  │  │$12,500│ │$4,800 │ │$7,700 │      │    │
│              │  │  └───────┘ └───────┘ └───────┘      │    │
│              │  └──────────────────────────────────────┘    │
│              │                                               │
│              │  ┌──────────────────────────────────────┐    │
│              │  │         CHARTS (Row)                 │    │
│              │  │  ┌─────────────┐ ┌─────────────┐    │    │
│              │  │  │ Line Chart  │ │  Pie Chart  │    │    │
│              │  │  │             │ │             │    │    │
│              │  │  └─────────────┘ └─────────────┘    │    │
│              │  └──────────────────────────────────────┘    │
└──────────────┴──────────────────────────────────────────────┘
```

## 🎯 Bootstrap Grid System Used

### Breakpoints
```
xs: 0-575px    (Mobile)
sm: 576px+     (Small tablets)
md: 768px+     (Tablets)
lg: 992px+     (Desktops)
xl: 1200px+    (Large desktops)
```

## 📦 Component Breakdown

### 1. **App.jsx - Root Layout**

```jsx
<div className="d-flex flex-column flex-md-row">
  <Sidebar />       {/* Left side */}
  <Dashboard />     {/* Right side */}
</div>
```

**Layout Properties:**
- `d-flex` - Flexbox display
- `flex-column` - Stack vertically on mobile (< 768px)
- `flex-md-row` - Side by side on tablets+ (≥ 768px)
- `flex-grow-1` - Expands to fill available space

---

### 2. **Dashboard.jsx - Main Content Container**

```jsx
<div className="main-content">           {/* Full width container */}
  <Card className="p-4 shadow">          {/* White card wrapper */}
    <div className="mb-4">               {/* Greeting section */}
      <h3>Hello, Andrew 👋</h3>
      <p>Here's an overview...</p>
    </div>
    <OverviewCards />                    {/* Metrics grid */}
    <Charts />                           {/* Charts grid */}
  </Card>
</div>
```

**Container Properties:**
- `main-content` - Custom class (flex: 1, background, padding)
- `p-4` - Padding all sides (1.5rem)
- `shadow` - Box shadow effect
- `mb-4` - Margin bottom (1.5rem)

---

### 3. **OverviewCards.jsx - Metrics Grid**

```jsx
<Row className="mb-4 text-center g-3">
  <Col xs={12} sm={6} md={4}>           {/* 1st Card */}
    <Card className="shadow-sm py-3 border-success">
      <Card.Body>
        <Card.Title>REVENUE</Card.Title>
        <Card.Text>$12,500</Card.Text>
      </Card.Body>
    </Card>
  </Col>
  {/* Repeat for Profit & Expenses */}
</Row>
```

**Grid Configuration:**
| Breakpoint | Columns | Layout |
|------------|---------|--------|
| xs (mobile) | 12/12 (full width) | Stack vertically |
| sm (tablet) | 6/12 (half width) | 2 cards per row |
| md+ (desktop) | 4/12 (third width) | 3 cards per row |

**Card Properties:**
- `g-3` - Gap between columns (1rem)
- `py-3` - Padding top/bottom (1rem)
- `shadow-sm` - Small shadow
- `border-{variant}` - Colored border (success/primary/danger)
- `text-center` - Center align text

---

### 4. **Charts.jsx - Charts Grid**

```jsx
<Row className="g-4">
  <Col xs={12} md={6}>                   {/* Line Chart */}
    <Card className="shadow-sm p-3">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData}>
          {/* Chart content */}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  </Col>
  
  <Col xs={12} md={6}>                   {/* Pie Chart */}
    <Card className="shadow-sm p-3">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* Chart content */}
        </PieChart>
      </ResponsiveContainer>
    </Card>
  </Col>
</Row>
```

**Grid Configuration:**
| Breakpoint | Columns | Layout |
|------------|---------|--------|
| xs-sm (mobile) | 12/12 (full width) | Stack vertically |
| md+ (tablet+) | 6/12 (half width) | Side by side |

**Chart Properties:**
- `g-4` - Gap between charts (1.5rem)
- `p-3` - Padding (1rem)
- `height={300}` - Fixed chart height

---

## 🎨 How to Edit Layout

### Change Overview Cards Layout

#### **Current: 3 cards per row on desktop**
```jsx
<Col xs={12} sm={6} md={4}>
```

#### **Option 1: 2 cards per row**
```jsx
<Col xs={12} sm={6} md={6}>  {/* Changed md={4} to md={6} */}
```

#### **Option 2: 4 cards per row**
```jsx
<Col xs={12} sm={6} md={3}>  {/* Changed md={4} to md={3} */}
```

#### **Option 3: Always full width**
```jsx
<Col xs={12}>  {/* Single column always */}
```

---

### Change Charts Layout

#### **Current: 2 charts side by side**
```jsx
<Col xs={12} md={6}>
```

#### **Option 1: Stack vertically always**
```jsx
<Col xs={12}>  {/* Always full width */}
```

#### **Option 2: 3 charts per row**
```jsx
<Row className="g-4">
  <Col xs={12} md={4}>  {/* Chart 1 */}
  <Col xs={12} md={4}>  {/* Chart 2 */}
  <Col xs={12} md={4}>  {/* Chart 3 */}
</Row>
```

#### **Option 3: Larger left chart**
```jsx
<Row className="g-4">
  <Col xs={12} md={8}>  {/* Line Chart - 2/3 width */}
  <Col xs={12} md={4}>  {/* Pie Chart - 1/3 width */}
</Row>
```

---

### Change Sidebar Width

**File:** `src/styles/Sidebar.css`

```css
/* Current: 200px fixed width */
.sidebar {
  min-width: 200px;
}

/* Option 1: Wider sidebar */
.sidebar {
  min-width: 300px;  /* Increase from 200px */
}

/* Option 2: Flexible width */
.sidebar {
  min-width: 200px;
  max-width: 250px;
  width: 20%;  /* 20% of screen width */
}
```

---

### Change Card Spacing

#### **Spacing Between Cards**
```jsx
{/* Current */}
<Row className="g-3">  {/* 1rem gap */}

{/* Options */}
<Row className="g-1">  {/* 0.25rem - tight */}
<Row className="g-2">  {/* 0.5rem - small */}
<Row className="g-4">  {/* 1.5rem - medium */}
<Row className="g-5">  {/* 3rem - large */}
```

#### **Padding Inside Cards**
```jsx
{/* Current */}
<Card className="p-3">  {/* 1rem padding */}

{/* Options */}
<Card className="p-1">  {/* 0.25rem - tight */}
<Card className="p-2">  {/* 0.5rem - small */}
<Card className="p-4">  {/* 1.5rem - medium */}
<Card className="p-5">  {/* 3rem - large */}

{/* Directional padding */}
<Card className="px-4 py-2">  {/* x: left/right, y: top/bottom */}
<Card className="pt-3 pb-5">  {/* t: top, b: bottom */}
```

---

### Change Chart Height

**File:** `src/components/Charts.jsx`

```jsx
// Current
const CHART_HEIGHT = 300;

// Options
const CHART_HEIGHT = 250;  // Shorter
const CHART_HEIGHT = 400;  // Taller
const CHART_HEIGHT = 500;  // Very tall
```

---

## 🎭 Common Layout Patterns

### Pattern 1: Full Width Dashboard (No Sidebar)

**File:** `src/App.jsx`

```jsx
{/* Remove the flex row layout */}
<div>
  {/* Remove or hide Sidebar */}
  <Dashboard ... />
</div>
```

### Pattern 2: Top Bar + Grid Below

```jsx
<div className="main-content">
  <Card className="p-4 shadow mb-4">
    {/* Top section - full width */}
    <h3>Dashboard Overview</h3>
  </Card>
  
  <Row className="g-4">
    <Col xs={12} md={8}>
      {/* Main content - 2/3 */}
      <Charts />
    </Col>
    <Col xs={12} md={4}>
      {/* Sidebar content - 1/3 */}
      <OverviewCards />
    </Col>
  </Row>
</div>
```

### Pattern 3: 4-Column Dashboard

```jsx
<Row className="g-3">
  <Col xs={12} md={3}>Card 1</Col>
  <Col xs={12} md={3}>Card 2</Col>
  <Col xs={12} md={3}>Card 3</Col>
  <Col xs={12} md={3}>Card 4</Col>
</Row>
```

### Pattern 4: Asymmetric Layout

```jsx
<Row className="g-4">
  <Col xs={12} lg={4}>
    {/* Left panel */}
    <OverviewCards />
  </Col>
  <Col xs={12} lg={8}>
    {/* Right panel - larger */}
    <Charts />
  </Col>
</Row>
```

---

## 🎨 Container Styling Guide

### Bootstrap Utility Classes

#### **Display & Flexbox**
```
d-flex              Display as flexbox
d-block             Display as block
d-inline            Display inline
flex-column         Stack vertically
flex-row            Stack horizontally
justify-content-*   Horizontal alignment (start, center, end, between)
align-items-*       Vertical alignment (start, center, end)
```

#### **Spacing (Margin & Padding)**
```
m-*   Margin all sides
mt-*  Margin top
mb-*  Margin bottom
ms-*  Margin start (left)
me-*  Margin end (right)
mx-*  Margin horizontal
my-*  Margin vertical

p-*   Padding (same pattern as margin)

Sizes: 0, 1, 2, 3, 4, 5 (0 to 3rem)
```

#### **Sizing**
```
w-25    Width 25%
w-50    Width 50%
w-75    Width 75%
w-100   Width 100%
h-*     Height (same values)
```

#### **Borders**
```
border              Add border
border-*            Border on specific side (top, bottom, start, end)
border-0            Remove border
rounded             Rounded corners
rounded-circle      Circular
border-{color}      Colored border (primary, success, danger, etc.)
```

#### **Shadows**
```
shadow-none         No shadow
shadow-sm           Small shadow
shadow              Medium shadow
shadow-lg           Large shadow
```

#### **Text**
```
text-start          Left align
text-center         Center align
text-end            Right align
text-uppercase      UPPERCASE
text-lowercase      lowercase
text-capitalize     Capitalize First Letter
fw-bold             Bold
fw-normal           Normal weight
fs-1 to fs-6        Font sizes
text-{color}        Text color (primary, success, danger, muted, etc.)
```

---

## 📝 Quick Reference

### Grid Column Math
```
12 columns total in Bootstrap grid

1 column  = md={12}  (full width)
2 columns = md={6}   (half width each)
3 columns = md={4}   (third width each)
4 columns = md={3}   (quarter width each)
6 columns = md={2}   (sixth width each)

Asymmetric:
8 + 4 = md={8} + md={4}  (2/3 + 1/3)
9 + 3 = md={9} + md={3}  (3/4 + 1/4)
7 + 5 = md={7} + md={5}  (custom ratio)
```

### Responsive Breakpoint Examples
```jsx
{/* Mobile: full width, Desktop: half width */}
<Col xs={12} md={6}>

{/* Mobile: full, Tablet: half, Desktop: third */}
<Col xs={12} sm={6} lg={4}>

{/* Always full width */}
<Col xs={12}>

{/* Hide on mobile, show on tablet+ */}
<Col className="d-none d-md-block" md={6}>
```

---

## 🔧 Files to Edit

| What to Change | File to Edit |
|----------------|--------------|
| Overall layout structure | `src/App.jsx` |
| Dashboard container | `src/components/Dashboard.jsx` |
| Overview cards grid | `src/components/OverviewCards.jsx` |
| Charts grid | `src/components/Charts.jsx` |
| Sidebar width/style | `src/styles/Sidebar.css` |
| Main content padding | `src/styles/Dashboard.css` |
| Card data | `src/data/overviewData.js` |
| Chart data | `src/data/chartData.js` |

---

## 💡 Pro Tips

1. **Always test on multiple screen sizes** - Use browser DevTools responsive mode
2. **Keep mobile-first approach** - Start with `xs={12}` and add larger breakpoints
3. **Use consistent spacing** - Stick to Bootstrap's spacing scale (0-5)
4. **Match card heights** - Cards in the same row look better with equal heights
5. **Use `g-*` classes** - For consistent gaps between grid items
6. **Add `className="mb-*"`** - To add space between rows

---

## 🎯 Quick Edit Checklist

- [ ] Want to change number of cards per row? → Edit `<Col>` breakpoints
- [ ] Want to adjust spacing? → Edit `g-*`, `p-*`, `m-*` classes
- [ ] Want to change layout flow? → Edit `flex-*` classes
- [ ] Want to resize sidebar? → Edit `Sidebar.css` min-width
- [ ] Want to change chart size? → Edit `CHART_HEIGHT` constant
- [ ] Want to add/remove cards? → Edit `overviewData.js`
- [ ] Want different colors? → Edit `variant` in data files

---

**Happy Layout Editing! 🎨**
