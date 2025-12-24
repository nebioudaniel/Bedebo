"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, Users, Settings, BotMessageSquare, 
  Paperclip, Send, Mic, FileText, X, 
  BrainCircuit, Calculator, Landmark, Zap, 
  Image as ImageIcon, Search, UserPlus, Globe
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AIHelperPage() {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  // Mock Student Data for the Search Bar
  const TOP_STUDENTS = [
    { name: "Aman H.", dept: "Software", uni: "AAiT", gpa: "3.9" },
    { name: "Siham A.", dept: "Medicine", uni: "Tikur Anbessa", gpa: "3.8" },
    { name: "Yared J.", dept: "Architecture", uni: "EiABC", gpa: "3.7" },
  ];

  return (
    <main className="h-[100dvh] w-full bg-[#FFD700] flex flex-col overflow-hidden text-black font-sans">
      
      {/* 1. TOP HEADER & STUDENT SEARCH */}
      <header className="px-6 pt-12 pb-4 shrink-0">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-black p-3 rounded-2xl shadow-xl">
              <BrainCircuit size={28} className="text-[#FFD700]" />
            </div>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">AI Lab</h1>
          </div>
          <div className="bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">MoE GPT-4 Online</span>
          </div>
        </div>

        {/* --- STUDENT & RESOURCE SEARCH BAR --- */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
          <input 
            onFocus={() => setActiveSearch(true)}
            onBlur={() => setTimeout(() => setActiveSearch(false), 200)}
            type="text" 
            placeholder="Search top students, tutors, or modules..." 
            className="w-full bg-white/80 backdrop-blur-xl border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold shadow-sm placeholder:text-black/30 outline-none focus:ring-2 ring-black/10 transition-all"
          />
          
          {/* Search Dropdown Results */}
          <AnimatePresence>
            {activeSearch && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-16 left-0 right-0 bg-white rounded-[32px] p-4 shadow-2xl z-[60] border border-black/5"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4 px-2">Top Peer Tutors</p>
                <div className="space-y-2">
                  {TOP_STUDENTS.map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-zinc-50 rounded-2xl transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center font-black">{s.name[0]}</div>
                        <div>
                          <p className="text-xs font-black">{s.name}</p>
                          <p className="text-[9px] font-bold text-zinc-400">{s.dept} • {s.uni}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black bg-[#FFD700] px-2 py-1 rounded-md">{s.gpa} GPA</span>
                        <UserPlus size={16} className="text-zinc-300 group-hover:text-black" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* 2. SCROLLABLE AI CONTENT */}
      <div className="flex-1 overflow-y-auto px-6 space-y-6 pb-40 no-scrollbar">
        
        {/* GPA & Placement Analysis Card */}
        <Card className="bg-black text-white rounded-[40px] p-8 border-none shadow-2xl relative overflow-hidden">
          <Globe size={120} className="absolute -right-10 -top-10 text-white/5 rotate-12" />
          <div className="relative z-10">
             <div className="flex items-center gap-2 mb-6">
                <span className="bg-[#FFD700] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">New</span>
                <span className="text-white/50 text-[9px] font-black uppercase tracking-widest">MoE Placement Engine</span>
             </div>
             <h2 className="text-3xl font-black italic leading-none mb-4">"Will I get into Medicine?"</h2>
             <p className="text-white/60 text-sm font-bold mb-8 leading-relaxed">
               I can analyze your Entrance & Remedial scores to predict your university placement for the 2017/18 E.C. academic year.
             </p>
             <button className="w-full bg-[#FFD700] text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs active:scale-95 transition-transform shadow-[0_10px_20px_rgba(255,215,0,0.3)]">
               Start Analysis
             </button>
          </div>
        </Card>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/90 p-6 rounded-[32px] shadow-sm">
            <Calculator className="text-blue-500 mb-3" />
            <p className="text-xs font-black uppercase leading-tight">GPA<br/>Predictor</p>
          </div>
          <div className="bg-white/90 p-6 rounded-[32px] shadow-sm">
            <FileText className="text-red-500 mb-3" />
            <p className="text-xs font-black uppercase leading-tight">Module<br/>Summarizer</p>
          </div>
        </div>

        {/* Attachment/Upload Section */}
        <div className="bg-white/40 border-2 border-dashed border-black/10 rounded-[32px] p-8 flex flex-col items-center justify-center text-center hover:bg-white/60 transition-colors cursor-pointer">
          <div className="bg-white p-4 rounded-2xl shadow-xl mb-4">
            <ImageIcon size={32} className="text-black/20" />
          </div>
          <h3 className="text-sm font-black uppercase tracking-tighter">Upload Exam or Module</h3>
          <p className="text-[10px] font-bold text-black/40 mt-1 uppercase tracking-widest leading-none">PDF, JPEG, or Screenshots</p>
        </div>
      </div>

      {/* 3. FLOATING CHAT INPUT */}
      <div className="fixed bottom-28 left-6 right-6 z-50">
        <div className="bg-white rounded-full p-2 shadow-[0_25px_50px_rgba(0,0,0,0.15)] flex items-center gap-2 border border-black/5">
          <button className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full text-zinc-400">
            <Paperclip size={20} />
          </button>
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder="Ask AI anything..." 
            className="flex-1 bg-transparent py-3 px-2 text-sm font-bold outline-none"
          />
          <button className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${input ? 'bg-black text-[#FFD700] rotate-0 shadow-lg' : 'bg-zinc-50 text-zinc-300'}`}>
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* --- RESPONSIVE APP NAV BAR (AI ACTIVE) --- */}
      <nav className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-white/90 backdrop-blur-2xl border border-white/20 h-20 rounded-[32px] px-6 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50">
        
        {/* Home */}
        <Link href="/" className="relative flex flex-col items-center gap-1 active:scale-95 flex-1">
          <div className={`bg-black text-[#FFD700] p-3 rounded-2xl shadow-lg transition-all ${pathname === '/' ? '-mt-10 border-4 border-[#FFD700] scale-110' : 'scale-75 opacity-30 grayscale'}`}>
            <Sparkles size={22} fill={pathname === '/' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-tighter mt-1 ${pathname === '/' ? 'text-black' : 'text-zinc-400'}`}>Home</span>
        </Link>

        {/* Community Link */}
        <Link href="/community" className="flex flex-col items-center gap-1 transition-all active:scale-95 group flex-1">
          <div className={`p-3 rounded-2xl transition-all ${pathname === '/community' ? 'bg-black text-[#FFD700] shadow-lg' : 'text-zinc-400'}`}>
            <Users size={22} fill={pathname === '/community' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/community' ? 'text-black' : 'text-zinc-400'}`}>Forum</span>
        </Link>
        
        {/* AI Helper Link (ACTIVE) */}
        <Link href="/ai" className="flex flex-col items-center gap-1 transition-all active:scale-95 group flex-1">
          <div className={`p-3 rounded-2xl transition-all duration-300 ${pathname === '/ai' ? 'bg-black text-[#FFD700] shadow-lg scale-110' : 'text-zinc-400'}`}>
            <BotMessageSquare size={22} fill={pathname === '/ai' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/ai' ? 'text-black' : 'text-zinc-400'}`}>AI Helper</span>
        </Link>

        {/* Settings Link */}
        <Link href="/settings" className="flex flex-col items-center gap-1 transition-all active:scale-95 group flex-1">
          <div className={`p-3 rounded-2xl transition-all ${pathname === '/settings' ? 'bg-black text-[#FFD700]' : 'text-zinc-400'}`}>
            <Settings size={22} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/settings' ? 'text-black' : 'text-zinc-400'}`}>Menu</span>
        </Link>
      </nav>
    </main>
  );
}