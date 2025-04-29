

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