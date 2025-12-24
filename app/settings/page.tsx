"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Settings, Sparkles, Users, BotMessageSquare, 
  Crown, CreditCard, Bell, Shield, Moon, 
  ChevronRight, Languages, LogOut, GraduationCap,
  Download, HelpCircle, Wallet
} from "lucide-react";

export default function SettingsPage() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <main className="h-[100dvh] w-full bg-[#FFD700] flex flex-col overflow-hidden text-black font-sans">
      
      {/* 1. PROFILE HEADER */}
      <div className="px-8 pt-12 pb-6 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-[32px] bg-black border-4 border-white shadow-2xl overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Brook" alt="Avatar" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-xl border-4 border-[#FFD700]">
            <GraduationCap size={16} />
          </div>
        </div>
        <h1 className="text-2xl font-black italic tracking-tighter uppercase">Brook Solomon</h1>
        <p className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em]">Addis Ababa University • 3rd Year</p>
      </div>

      {/* 2. SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-40 space-y-6">
        
        {/* --- PREMIUM UPGRADE CARD --- */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-black text-white rounded-[40px] p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Crown size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="bg-[#FFD700] text-black text-[9px] font-black px-3 py-1 rounded-full w-fit uppercase tracking-widest mb-4">
              Limited Offer
            </div>
            <h2 className="text-3xl font-black italic leading-none mb-2">Upgrade to Pro</h2>
            <p className="text-white/60 text-xs font-bold mb-6">Unlock unlimited AI Module analysis & 24/7 MoE placement tracking.</p>
            
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">Monthly</p>
                <p className="text-xl font-black italic">149 ETB<span className="text-xs opacity-50">/mo</span></p>
              </div>
              <button className="bg-[#FFD700] text-black px-6 py-3 rounded-xl font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all">
                Upgrade Now
              </button>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[10px] font-bold"><Sparkles size={12} className="text-[#FFD700]"/> Full Access to AI Module Summarizer</li>
              <li className="flex items-center gap-2 text-[10px] font-bold"><Sparkles size={12} className="text-[#FFD700]"/> No Daily Search Limits</li>
              <li className="flex items-center gap-2 text-[10px] font-bold"><Sparkles size={12} className="text-[#FFD700]"/> Early Access to Remedial Results</li>
            </ul>
          </div>
        </motion.div>

        {/* --- SETTINGS LIST --- */}
        <div className="space-y-2">
          <p className="px-2 text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">Account & Security</p>
          
          <SettingRow icon={<Bell size={18}/>} label="Notifications" detail="MoE, Cafe, Events" />
          <SettingRow icon={<Wallet size={18}/>} label="CBE Birr / TeleBirr" detail="Payment Methods" />
          <SettingRow icon={<Languages size={18}/>} label="App Language" detail="English / አማርኛ" />
          <div className="flex items-center justify-between bg-white p-5 rounded-[28px] shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-zinc-100 p-2.5 rounded-xl"><Moon size={18}/></div>
              <span className="font-black text-sm uppercase tracking-tighter">Dark Mode</span>
            </div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-12 h-6 rounded-full transition-all flex items-center px-1 ${isDarkMode ? 'bg-black' : 'bg-zinc-200'}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-all ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>

        {/* --- DANGER ZONE --- */}
        <div className="pt-4">
          <button className="w-full bg-white/50 border border-black/5 py-5 rounded-[28px] flex items-center justify-center gap-3 text-red-500 font-black uppercase text-xs active:bg-red-50 transition-colors">
            <LogOut size={18} /> Logout Account
          </button>
          <p className="text-center text-[9px] font-bold text-black/20 mt-6 uppercase tracking-[0.3em]">Version 2.0.4-Beta (2018 E.C.)</p>
        </div>
      </div>

      {/* --- RESPONSIVE APP NAV BAR (Settings Active) --- */}
      <nav className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-white/90 backdrop-blur-2xl border border-white/20 h-20 rounded-[32px] px-6 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50">
        
        {/* Home */}
        <Link href="/" className="relative flex flex-col items-center gap-1 flex-1">
          <div className={`bg-black text-[#FFD700] p-3 rounded-2xl shadow-lg transition-all ${pathname === '/' ? '-mt-10 border-4 border-[#FFD700] scale-110' : 'scale-75 opacity-30 grayscale'}`}>
            <Sparkles size={22} fill={pathname === '/' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-tighter mt-1 ${pathname === '/' ? 'text-black' : 'text-zinc-400'}`}>Home</span>
        </Link>

        {/* Community */}
        <Link href="/community" className="flex flex-col items-center gap-1 flex-1">
          <div className={`p-3 rounded-2xl transition-all ${pathname === '/community' ? 'bg-black text-[#FFD700] shadow-lg' : 'text-zinc-400 opacity-40'}`}>
            <Users size={22} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/community' ? 'text-black' : 'text-zinc-400'}`}>Forum</span>
        </Link>
        
        {/* AI Helper */}
        <Link href="/ai" className="flex flex-col items-center gap-1 flex-1">
          <div className={`p-3 rounded-2xl transition-all ${pathname === '/ai' ? 'bg-black text-[#FFD700] shadow-lg' : 'text-zinc-400 opacity-40'}`}>
            <BotMessageSquare size={22} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/ai' ? 'text-black' : 'text-zinc-400'}`}>Helper</span>
        </Link>

        {/* Settings (ACTIVE) */}
        <Link href="/settings" className="flex flex-col items-center gap-1 flex-1">
          <div className={`p-3 rounded-2xl transition-all duration-300 ${pathname === '/settings' ? 'bg-black text-[#FFD700] shadow-lg scale-110 -mt-10 border-4 border-[#FFD700]' : 'text-zinc-400'}`}>
            <Settings size={22} fill={pathname === '/settings' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/settings' ? 'text-black' : 'text-zinc-400'}`}>Menu</span>
        </Link>
      </nav>
    </main>
  );
}

// Helper Component for Setting Rows
function SettingRow({ icon, label, detail }: { icon: any, label: string, detail: string }) {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-[28px] shadow-sm active:scale-[0.98] transition-all cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="bg-zinc-100 p-2.5 rounded-xl text-black/70 group-hover:bg-black group-hover:text-white transition-colors">{icon}</div>
        <div className="flex flex-col">
          <span className="font-black text-sm uppercase tracking-tighter leading-none mb-1">{label}</span>
          <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{detail}</span>
        </div>
      </div>
      <ChevronRight size={16} className="text-zinc-300" />
    </div>
  );
}