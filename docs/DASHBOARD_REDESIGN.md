# Expenses UI - Dashboard Redesign

## Overview
The Expenses UI has been completely redesigned with a modern, professional dashboard layout featuring sidebar navigation, analytics cards, and interactive charts.

## Key Features

### 1. Sidebar Navigation
- Left sidebar with menu items:
  - Dashboard (active)
  - Transactions
  - Budgets
  - Reports
  - Savings Goals
- Quick access buttons:
  - Export Data (CSV export)
  - Logout (with confirmation popup)

### 2. Analytics Dashboard
Four KPI cards displaying:
- **Total Balance**: Income minus expenses for the month
- **Monthly Income**: ₹12,000 (configurable)
- **Monthly Expenses**: Sum of all expenses
- **Savings Rate**: Percentage of income saved

### 3. Spending Visualization
- **Donut Chart**: Category breakdown of expenses with color-coded legend
  - Food (pink)
  - Travel (gray)
  - Entertainment (teal)
  - Transport (blue)
  - Shopping (purple)

### 4. Monthly Overview
- **Bar Chart**: Income vs Expenses comparison
- **Budget Status**: Shows "Within budget" or "Over budget" with difference amount
- Month label for reference

### 5. Expense Management
- **Add Expense Form**: Quick add with title, amount, and category dropdown
- **Recent Expenses**: Searchable and filterable list with delete functionality
- Pagination support for large expense lists

## Technical Details

### Port Configuration
- **Backend**: Runs on port 3000 (configured in .env)
- **Frontend**: Runs on port 5174 (Vite dev server)
- **API URL**: http://localhost:3000/api (configured in client/.env)

### New Components
- Dashboard layout with finance-specific styling
- Responsive sidebar that collapses on smaller screens
- Dynamic donut chart with conic gradient
- Bar chart with percentage-based heights

### Authentication
- JWT-based authentication with token stored in localStorage
- Protected dashboard route - requires login
- Public login/register routes - not accessible when logged in
- Logout confirmation popup before session termination

## Screenshots

### Dashboard Overview
Shows the top section with:
- Left sidebar with menu
- Four stat cards
- Spending by Category donut chart
- Monthly Expense Overview with bar chart and budget status

### Expense Management
Shows the bottom section with:
- Add Expense form
- Recent Expenses list with search and category filter
- Delete buttons for each expense

## Recent Updates

### Logout Confirmation
Added a confirmation modal when clicking the Logout button. Users must confirm before their session ends.

### Monthly Expense Overview
Enhanced the Monthly Expense Overview section to show:
- "Within budget" or "Over budget" status badge
- Exact difference amount between income and expenses

## Setup Instructions

1. **Backend Setup** (from root directory):
   ```bash
   npm install
   npm run dev  # or npm start for production
   ```

2. **Frontend Setup** (from root directory):
   ```bash
   npm run client  # or manually: cd client && npm run dev
   ```

3. **Access the App**:
   - Open http://localhost:5174 in your browser
   - Register a new account or login
   - View the dashboard with all features

## File Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── DashboardPage.jsx      # Main dashboard with redesigned layout
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── components/
│   │   ├── AuthShell.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PublicOnlyRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── api/
│   │   └── client.js
│   ├── App.jsx
│   ├── index.css                  # Dashboard styles
│   └── main.jsx
├── public/
├── vite.config.js
└── package.json
```

## Technologies Used
- React 19.2.6
- React Router 7.18.0
- Axios 1.18.0
- Lucide React Icons 1.21.0
- Vite 8.0.12
- ESLint for code quality

## Future Enhancements
- Transaction history with detailed filters
- Budget management with alerts
- Financial reports and trends
- Savings goals tracking
- Multi-currency support
- Dark mode toggle
