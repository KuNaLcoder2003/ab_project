import { useEffect, useState } from 'react';
import { LineChart, BarChart, PieChart, Pie, Cell, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, TrendingUp, DollarSign, Package, ArrowUpRight, RefreshCw, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const reorderHistory = [
  { month: 'Jan', count: 3 },
  { month: 'Feb', count: 2 },
  { month: 'Mar', count: 4 },
  { month: 'Apr', count: 2 },
  { month: 'May', count: 3 },
  { month: 'Jun', count: 1 }
];

const categoryBreakdown = [
  { name: 'BOWJF446VL51-663CK', value: 56.7 , id : 'Product-1' },
  { name: 'BOWJF446VL51-663DK', value: 72 , id : 'Product-2' },
  { name: 'IOWJF450XL51-666CK', value: 50  , id : 'Product-3'},
  { name: 'IOWJF451XL51-663B', value: 88 , id : 'Product-4' } ,
  { name: 'IOWJF451XL51-663CJ', value: 28 , id : 'Product-5' } ,
  { name: 'ROWJF450XL51-666C', value: 74  , id : 'Product-6'} ,
  { name: 'ROWJF450XL51-666D', value: 54 , id : 'Product-7' } ,
  { name: 'ROWJF451XL51-663C', value: 78, id : 'Product-8' } , 

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8' , '#00C49G' , '#05549F' , '#00809F' ];

export default function DashBoard({products , historicalSales , futureSales , inventoryStatus , setUploaded }) {
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
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      <header className="bg-slate-200 text-black p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">Akshita's Dashboard</h1>
        <div className='flex items-center gap-4'>
          <button className='px-4 py-1 text-center shadow-md font-semibold bg-white rounded-md cursor-pointer' onClick={()=>{
            localStorage.clear();
            setUploaded(false)
          }}>Reupload</button>
          <button className='px-4 py-1 text-center shadow-md font-semibold bg-white rounded-md cursor-pointer' onClick={()=>{
            navigate('/landing')
          }}>Home</button>
        </div>
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
            <h2 className="text-lg font-semibold mb-4">Sell Throgh rate</h2>
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
                    label={({ id, percent }) => `${id} ${(percent * 100).toFixed(0)}%`}
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


