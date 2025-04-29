import { useState } from 'react';
import { LineChart, BarChart, PieChart, Pie, Cell, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, TrendingUp, DollarSign, Package, ArrowUpRight, RefreshCw, Bell } from 'lucide-react';

// Sample data - in a real application, this would come from your database
const products = [
  { id: 1, name: "Product A", category: "Electronics" },
  { id: 2, name: "Product B", category: "Furniture" },
  { id: 3, name: "Product C", category: "Clothing" },
  { id: 4, name: "Product D", category: "Electronics" },
  { id: 5, name: "Product E", category: "Accessories" }
];

const historicalSales = [
  { month: 'Jan', "Product A": 65, "Product B": 28, "Product C": 42, "Product D": 33, "Product E": 19 },
  { month: 'Feb', "Product A": 59, "Product B": 32, "Product C": 37, "Product D": 29, "Product E": 22 },
  { month: 'Mar', "Product A": 80, "Product B": 27, "Product C": 41, "Product D": 36, "Product E": 25 },
  { month: 'Apr', "Product A": 81, "Product B": 30, "Product C": 50, "Product D": 40, "Product E": 27 },
  { month: 'May', "Product A": 56, "Product B": 36, "Product C": 45, "Product D": 31, "Product E": 21 },
  { month: 'Jun', "Product A": 55, "Product B": 40, "Product C": 48, "Product D": 38, "Product E": 24 }
];

const futureSales = [
  { month: 'Jul', "Product A": 67, "Product B": 35, "Product C": 51, "Product D": 42, "Product E": 26 },
  { month: 'Aug', "Product A": 75, "Product B": 38, "Product C": 53, "Product D": 45, "Product E": 28 },
  { month: 'Sep', "Product A": 88, "Product B": 42, "Product C": 57, "Product D": 48, "Product E": 30 }
];

const inventoryStatus = [
  { id: 1, name: "Product A", stock: 120, reorderPoint: 50, reorderQuantity: 100, predicted: 230, required: 250 },
  { id: 2, name: "Product B", stock: 35, reorderPoint: 40, reorderQuantity: 80, predicted: 115, required: 120 },
  { id: 3, name: "Product C", stock: 78, reorderPoint: 60, reorderQuantity: 120, predicted: 161, required: 170 },
  { id: 4, name: "Product D", stock: 42, reorderPoint: 45, reorderQuantity: 90, predicted: 135, required: 140 },
  { id: 5, name: "Product E", stock: 26, reorderPoint: 30, reorderQuantity: 60, predicted: 84, required: 90 }
];

const reorderHistory = [
  { month: 'Jan', count: 3 },
  { month: 'Feb', count: 2 },
  { month: 'Mar', count: 4 },
  { month: 'Apr', count: 2 },
  { month: 'May', count: 3 },
  { month: 'Jun', count: 1 }
];

const categoryBreakdown = [
  { name: 'Electronics', value: 2 },
  { name: 'Furniture', value: 1 },
  { name: 'Clothing', value: 1 },
  { name: 'Accessories', value: 1 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function DashBoard() {
  const [selectedProduct, setSelectedProduct] = useState("all");
  
  // Calculate totals for KPIs
  const totalInventory = inventoryStatus.reduce((sum, item) => sum + item.stock, 0);
  const lowStockItems = inventoryStatus.filter(item => item.stock <= item.reorderPoint).length;
  const predictedSalesValue = futureSales.reduce((sum, month) => {
    return sum + Object.entries(month)
      .filter(([key]) => key !== 'month')
      .reduce((monthSum, [_, value]) => monthSum + value, 0);
  }, 0);
  
  // Combined sales data for the chart
  const combinedSalesData = [...historicalSales, ...futureSales];

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      <header className="bg-slate-200 text-black p-4 shadow-md">
        <h1 className="text-2xl font-bold">Akshita's Dashboard</h1>
      </header>

      <main className="flex-1 p-12 overflow-auto">
        {/* Product Selector */}
        <div className="mb-6">
          <label htmlFor="product-select" className="block text-sm font-medium text-gray-700 mb-1">Filter by Product:</label>
          <select 
            id="product-select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="mt-1 block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Products</option>
            {products.map(product => (
              <option key={product.id} value={product.name}>{product.name}</option>
            ))}
          </select>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Inventory</p>
                <p className="text-xl font-bold">{totalInventory} units</p>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Predicted Sales (3mo)</p>
                <p className="text-xl font-bold">{predictedSalesValue} units</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Recent Reorders</p>
                <p className="text-xl font-bold">{reorderHistory[reorderHistory.length - 1].count}</p>
              </div>
              <RefreshCw className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Low Stock Items</p>
                <p className="text-xl font-bold">{lowStockItems}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Sales History & Prediction Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Sales History & Forecast</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={combinedSalesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {selectedProduct === "all" ? (
                    products.map((product, index) => (
                      <Line 
                        key={product.id}
                        type="monotone" 
                        dataKey={product.name} 
                        stroke={COLORS[index % COLORS.length]} 
                        activeDot={{ r: 8 }}
                        strokeWidth={historicalSales.indexOf(combinedSalesData[0]) > -1 ? 2 : 2}
                        strokeDasharray={historicalSales.some(item => item.month === combinedSalesData[combinedSalesData.length - 1].month) ? "" : "5 5"}
                      />
                    ))
                  ) : (
                    <Line 
                      type="monotone" 
                      dataKey={selectedProduct} 
                      stroke="#0088FE" 
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                      strokeDasharray={historicalSales.some(item => item.month === combinedSalesData[combinedSalesData.length - 1].month) ? "" : "5 5"}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inventory Status */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Current Inventory vs Required</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={selectedProduct === "all" ? inventoryStatus : inventoryStatus.filter(item => item.name === selectedProduct)}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="stock" name="Current Stock" fill="#0088FE" />
                  <Bar dataKey="required" name="Required (3mo)" fill="#FF8042" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Reorder History */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Reorder History</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={reorderHistory}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" name="Reorders" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Product Category Mix */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Product Category Distribution</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Low Stock Alert */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
            <div className="h-64 overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {inventoryStatus
                    .filter(item => selectedProduct === "all" || item.name === selectedProduct)
                    .map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock} units</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.stock <= item.reorderPoint ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Low Stock
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Adequate
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Detailed Inventory Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Inventory Details</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reorder Point</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted Sales (3mo)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required Inventory</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Production Need</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryStatus
                  .filter(item => selectedProduct === "all" || item.name === selectedProduct)
                  .map(item => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stock} units</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.reorderPoint} units</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.predicted} units</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.required} units</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.required > item.stock ? (
                          <span className="inline-flex items-center text-green-600">
                            {item.required - item.stock} units <ArrowUpRight className="ml-1 h-4 w-4" />
                          </span>
                        ) : (
                          <span className="text-gray-500">Sufficient</span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}


