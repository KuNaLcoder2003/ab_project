// import { useState, useEffect } from 'react';
// import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { ChevronRight, TrendingUp, Package, ShoppingCart, ArrowRight, BarChart3, LineChart as LineChartIcon } from 'lucide-react';

// // Mock data - would come from your backend in production
// const mockData = [
//   { month: 'Jan', sales: 4000, production: 4600, prediction: 3900 },
//   { month: 'Feb', sales: 3000, production: 3200, prediction: 3100 },
//   { month: 'Mar', sales: 5000, production: 4800, prediction: 5100 },
//   { month: 'Apr', sales: 2780, production: 3000, prediction: 2900 },
//   { month: 'May', sales: 1890, production: 2200, prediction: 2000 },
//   { month: 'Jun', sales: 2390, production: 2800, prediction: 2500 },
//   { month: 'Jul', sales: 3490, production: 3800, prediction: 3600 },
//   { month: 'Aug', sales: 4000, production: 4600, prediction: 4200 },
//   { month: 'Sep', sales: 5000, production: 5400, prediction: 5200 },
//   // Prediction for next 3 months
//   { month: 'Oct', sales: null, production: null, prediction: 5800 },
//   { month: 'Nov', sales: null, production: null, prediction: 6500 },
//   { month: 'Dec', sales: null, production: null, prediction: 7200 },
// ];

// // Feature cards data
// const features = [
//   {
//     title: "Inventory Analysis",
//     description: "View detailed breakdowns of your current inventory levels and historical sales data.",
//     icon: <Package size={24} className="text-blue-500" />,
//     link: "/inventory"
//   },
//   {
//     title: "Sales Forecasting",
//     description: "AI-powered predictions for the next 3 months based on historical trends and market factors.",
//     icon: <TrendingUp size={24} className="text-green-500" />,
//     link: "/forecasting"
//   },
//   {
//     title: "Production Planning",
//     description: "Optimize your production schedule based on predicted sales and current inventory levels.",
//     icon: <ShoppingCart size={24} className="text-purple-500" />,
//     link: "/production"
//   }
// ];

// // Animation component for numbers
// const AnimatedCounter = ({ value, duration = 1000 }) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let start = 0;
//     const end = parseInt(value);
//     const incrementTime = (duration / end) * 10;
    
//     const timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, incrementTime);
    
//     return () => {
//       clearInterval(timer);
//     };
//   }, [value, duration]);
  
//   return <span>{count.toLocaleString()}</span>;
// };

// export default function IntroPage() {
//   const [isLoaded, setIsLoaded] = useState(false);
  
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 300);
//   }, []);
  
//   return (
//     <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="bg-blue-600 rounded-lg p-2 mr-3">
//               <BarChart3 size={24} className="text-white" />
//             </div>
//             <h1 className="text-xl font-bold text-gray-900">InventoryPro</h1>
//           </div>
//           <nav className="flex space-x-8">
//             <a href="#" className="text-gray-500 hover:text-gray-900">Dashboard</a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">Inventory</a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">Forecasts</a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">Settings</a>
//           </nav>
//           <div className="flex items-center">
//             <span className="inline-block h-8 w-8 rounded-full bg-gray-200 mr-2"></span>
//             <span className="font-medium text-gray-700">John Doe</span>
//           </div>
//         </div>
//       </header>
      
//       {/* Hero Section */}
//       <div className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}>
//         <div className="text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Welcome to your Inventory Dashboard</h1>
//           <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
//             Track sales, predict future demand, and optimize your production with our AI-powered analytics platform
//           </p>
//         </div>
//       </div>
      
//       {/* Stats Overview */}
//       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px">
//           <div className="px-6 py-8 text-center">
//             <span className="text-3xl font-bold text-blue-600">$<AnimatedCounter value="478956" /></span>
//             <p className="mt-1 text-sm font-medium text-gray-500">YTD SALES</p>
//           </div>
//           <div className="px-6 py-8 text-center">
//             <span className="text-3xl font-bold text-green-600">+<AnimatedCounter value="24" />%</span>
//             <p className="mt-1 text-sm font-medium text-gray-500">PROJECTED GROWTH</p>
//           </div>
//           <div className="px-6 py-8 text-center">
//             <span className="text-3xl font-bold text-purple-600"><AnimatedCounter value="18" /></span>
//             <p className="mt-1 text-sm font-medium text-gray-500">PRODUCTS NEEDING ATTENTION</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Chart */}
//       <div className={`max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//         <div className="bg-white rounded-2xl shadow-xl p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold text-gray-800">Performance Overview</h2>
//             <div className="flex space-x-4">
//               <button className="flex items-center px-3 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
//                 <BarChart3 size={16} className="mr-1" /> Sales
//               </button>
//               <button className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm font-medium">
//                 <LineChartIcon size={16} className="mr-1" /> Forecast
//               </button>
//             </div>
//           </div>
//           <div className="h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={mockData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Sales" />
//                 <Line type="monotone" dataKey="production" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Production" />
//                 <Line type="monotone" dataKey="prediction" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} activeDot={{ r: 6 }} name="Prediction" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
      
//       {/* Feature Cards */}
//       <div className={`max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="p-6">
//                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 mb-4">{feature.description}</p>
//                 <a 
//                   href={feature.link} 
//                   className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
//                 >
//                   Explore <ArrowRight size={16} className="ml-1" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Quick Actions */}
//       <div className={`max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 mb-16 transition-all duration-1000 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
//           <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg p-4 flex items-center justify-between transition-colors">
//             <span>View Inventory Report</span>
//             <ChevronRight size={20} />
//           </button>
//           <button className="bg-green-50 hover:bg-green-100 text-green-700 rounded-lg p-4 flex items-center justify-between transition-colors">
//             <span>Sales Forecast</span>
//             <ChevronRight size={20} />
//           </button>
//           <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg p-4 flex items-center justify-between transition-colors">
//             <span>Production Plan</span>
//             <ChevronRight size={20} />
//           </button>
//           <button className="bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg p-4 flex items-center justify-between transition-colors">
//             <span>Analytics Dashboard</span>
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">InventoryPro</h3>
//               <p className="text-gray-400">Your AI-powered inventory management and sales forecasting solution</p>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold text-gray-300 mb-4">FEATURES</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">Inventory Management</a></li>
//                 <li><a href="#" className="hover:text-white">Sales Analytics</a></li>
//                 <li><a href="#" className="hover:text-white">AI Predictions</a></li>
//                 <li><a href="#" className="hover:text-white">Production Planning</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold text-gray-300 mb-4">SUPPORT</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">Documentation</a></li>
//                 <li><a href="#" className="hover:text-white">API Reference</a></li>
//                 <li><a href="#" className="hover:text-white">Help Center</a></li>
//                 <li><a href="#" className="hover:text-white">Contact Support</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-sm font-semibold text-gray-300 mb-4">COMPANY</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white">About Us</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">
//             <p>&copy; 2025 InventoryPro. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, Clock, BarChart2, ChevronRight, AlertCircle, Check } from 'lucide-react';

// Sample data for charts
const salesData = [
  { name: 'Jan', Actual: 4000, Predicted: 4200 },
  { name: 'Feb', Actual: 3000, Predicted: 3100 },
  { name: 'Mar', Actual: 2000, Predicted: 1900 },
  { name: 'Apr', Actual: 2780, Predicted: 2800 },
  { name: 'May', Actual: 1890, Predicted: 1950 },
  { name: 'Jun', Actual: 2390, Predicted: 2400 },
];

const inventoryData = [
  { name: 'Product A', Optimal: 120, Current: 150 },
  { name: 'Product B', Optimal: 80, Current: 65 },
  { name: 'Product C', Optimal: 200, Current: 210 },
  { name: 'Product D', Optimal: 150, Current: 100 },
];

export default function IntroductionPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    dashboard: false,
    testimonials: false
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      features: true,
      dashboard: true,
      testimonials: true
    });
  }, []);

  const fadeInClass = (section) => 
    isVisible[section] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-slate-800">InventoryPro AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#dashboard" className="text-slate-600 hover:text-blue-600 transition-colors">Dashboard</a>
            <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">Success Stories</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-20 transition-all duration-1000 ${fadeInClass('hero')}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4">
                Predict Inventory Needs with Precision
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Our AI-powered platform eliminates stockouts and overstock situations by accurately 
                predicting sales trends and optimizing production schedules.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center shadow-md">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-slate-300 hover:border-blue-600 text-slate-800 px-6 py-3 rounded-lg transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Actual" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Predicted" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-slate-500 mt-2">Sales Prediction Accuracy Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={`py-16 bg-white transition-all duration-1000 ${fadeInClass('features')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Sales Prediction</h3>
              <p className="text-slate-600">
                Machine learning algorithms analyze historical data and market trends to forecast future sales with up to 95% accuracy.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Inventory Optimization</h3>
              <p className="text-slate-600">
                Calculate optimal inventory levels to minimize storage costs while ensuring product availability.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Production Scheduling</h3>
              <p className="text-slate-600">
                Generate efficient production schedules based on predicted demand and current inventory levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Screenshots */}
      <section id="dashboard" className={`py-16 bg-slate-50 transition-all duration-1000 ${fadeInClass('dashboard')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Interactive Dashboard</h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Our intuitive dashboard provides real-time insights into your inventory status and production needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-slate-800 text-white">
                <h3 className="font-medium">Sales Prediction Dashboard</h3>
              </div>
              <div className="p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Actual" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="Predicted" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span className="text-slate-700">Projection accuracy: 96.8%</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-slate-800 text-white">
                <h3 className="font-medium">Inventory Optimization Dashboard</h3>
              </div>
              <div className="p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={inventoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Optimal" fill="#3b82f6" />
                    <Bar dataKey="Current" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span className="text-slate-700">2 products need reordering</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Success Stories */}
      <section id="testimonials" className={`py-16 bg-white transition-all duration-1000 ${fadeInClass('testimonials')}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  A
                </div>
                <div>
                  <h3 className="font-semibold">Atlas Clothing</h3>
                  <p className="text-slate-500 text-sm">Fashion Retailer</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "Reduced excess inventory by 32% while maintaining 99.8% product availability. Seasonal predictions are now remarkably accurate."
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>Inventory costs reduced by 27%</span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  T
                </div>
                <div>
                  <h3 className="font-semibold">TechGadget Inc.</h3>
                  <p className="text-slate-500 text-sm">Consumer Electronics</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "The production schedule optimization alone saved us millions in warehousing costs and virtually eliminated stockouts."
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>ROI achieved in just 3 months</span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  G
                </div>
                <div>
                  <h3 className="font-semibold">Green Fields Co-op</h3>
                  <p className="text-slate-500 text-sm">Organic Food Distributor</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "For perishable inventory, accurate predictions are critical. This platform reduced our food waste by 41% in the first quarter."
              </p>
              <div className="flex items-center text-sm text-slate-500">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span>Improved sustainability metrics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Inventory?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their inventory management with our AI-powered platform.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg font-semibold">
            Start Your Free 14-Day Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <BarChart2 className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl text-white">InventoryPro AI</span>
              </div>
              <p className="max-w-xs text-slate-400">
                Revolutionizing inventory management with cutting-edge AI technology.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">
            &copy; {new Date().getFullYear()} InventoryPro AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}