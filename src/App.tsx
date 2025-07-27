import React from 'react';
import { ArrowRight, Zap, Rocket, Bot, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Revnex</span>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                AI Workflows That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Actually Work
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Transform your business with plug-and-play AI automation. Generate leads, 
              streamline operations, and scale faster than ever before.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2 shadow-lg">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-slate-700 hover:border-slate-600 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-slate-800">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-slate-400">Faster Lead Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-slate-400">Companies Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-slate-400">AI-Powered Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packs */}
      <section className="py-20 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Growth Path</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From startup to enterprise, we have the perfect AI automation solution for your business stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Pack */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Starter Pack</h3>
                <p className="text-slate-400 mb-4">Perfect for small businesses ready to automate</p>
                <div className="text-3xl font-bold mb-6">
                  <span className="text-white">$97</span>
                  <span className="text-slate-500 text-lg">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Lead generation workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Email automation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Basic analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">24/7 support</span>
                </li>
              </ul>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Growth Pack */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Growth Pack</h3>
                <p className="text-slate-400 mb-4">Scale your operations with advanced AI</p>
                <div className="text-3xl font-bold mb-6">
                  <span className="text-white">$297</span>
                  <span className="text-slate-500 text-lg">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Everything in Starter</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Advanced lead scoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Multi-channel automation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Priority support</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all">
                Start Growing
              </button>
            </div>

            {/* Automation Pack */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Automation Pack</h3>
                <p className="text-slate-400 mb-4">Enterprise-grade AI automation</p>
                <div className="text-3xl font-bold mb-6">
                  <span className="text-white">$497</span>
                  <span className="text-slate-500 text-lg">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Everything in Growth</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Full workflow automation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">AI-powered insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">White-label solutions</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors">
                Go Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using Revnex to automate their operations and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-700 hover:border-slate-600 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-slate-800">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Revnex</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <a href="mailto:hello@revnex.ai" className="text-slate-400 hover:text-white transition-colors">
                hello@revnex.ai
              </a>
              <span className="text-slate-500">
                © 2025 Revnex. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;