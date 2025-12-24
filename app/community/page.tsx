"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { 
  Users, Sparkles, Settings, BotMessageSquare, 
  Heart, MessageSquare, Plus, Search, CheckCircle2,
  Coffee, BookOpen, GraduationCap, Flame, Share2, ImageIcon, Send,
  TrendingUp, MapPin, Zap
} from "lucide-react";

// --- EXTENSIVE ETHIOPIAN CAMPUS MOCK DATA ---
const GROUPS = [
  { id: 'g1', name: "Freshman 2017", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400", icon: <GraduationCap size={14}/>, color: "bg-blue-600" },
  { id: 'g2', name: "AAU - 4 Kilo", image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=400", icon: <BookOpen size={14}/>, color: "bg-red-600" },
  { id: 'g3', name: "ASTU Tech", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400", icon: <Zap size={14}/>, color: "bg-purple-600" },
  { id: 'g4', name: "Cafe/Meqses", image: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?q=80&w=400", icon: <Coffee size={14}/>, color: "bg-orange-500" },
  { id: 'g5', name: "Dorm Life", image: "https://images.unsplash.com/photo-1555854817-40e098ee7f57?q=80&w=400", icon: <Users size={14}/>, color: "bg-green-600" },
];

const DISCUSSIONS = [
  {
    id: 1,
    user: "Dawit Isayas",
    uni: "AAU (5-Kilo)",
    group: "Freshman 2017",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800",
    text: "The Remedial exam was harder than last year. Does anyone have the official answer key?",
    amharic: "የሪሜዲያል ፈተናው ከዘንድሮው ከበድ ይላል። ኦፊሺያል መልሱ ያለው አለ?",
    likes: "2.4k",
    comments: [
      { id: 1, user: "Selam.W", text: "I think it's coming out on Friday on the MoE portal." },
      { id: 2, user: "Abel_T", text: "Check Telegram, it's already circulating there." }
    ]
  },
  {
    id: 2,
    user: "Lidia Kebede",
    uni: "ASTU",
    group: "Cafe/Meqses",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800",
    text: "Adama Cafe serves Siga (Meat) today! The line is already reaching the gate.",
    amharic: "አዳማ ካፌ ዛሬ ስጋ ነው። ሰልፉ ግን እስከ በር ደርሷል!",
    likes: "950",
    comments: [
      { id: 1, user: "Micky", text: "On my way! Save me a spot! 😂" }
    ]
  },
  {
    id: 3,
    user: "Brook.H",
    uni: "Haramaya Uni",
    group: "Dorm Life",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800",
    text: "Study night turned into a coffee ceremony. Dorm 402 is the best!",
    amharic: "ጥናቱ ወደ ቡና ቁርስ ተቀይሯል። ዶርም 402 ይመቻችሁ!",
    likes: "1.1k",
    comments: [
      { id: 1, user: "Hana", text: "Typical Haramaya vibes! Enjoy." }
    ]
  }
];

export default function CommunityPage() {
  const pathname = usePathname();

  return (
    <main className="h-[100dvh] w-full bg-[#FFD700] flex flex-col overflow-hidden text-black">
      
      {/* 1. TOP HEADER (Sticky) */}
      <div className="px-6 pt-10 pb-4 shrink-0">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter leading-none">Forum</h1>
            <div className="flex items-center gap-1 text-[10px] font-black opacity-50 uppercase tracking-widest mt-1">
              <TrendingUp size={12} /> Live Campus Updates
            </div>
          </div>
          <button className="bg-black text-[#FFD700] p-3 rounded-2xl shadow-xl active:scale-90 transition-transform">
            <Plus size={24} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search students or departments..." 
            className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold shadow-sm outline-none"
          />
        </div>
      </div>

      {/* 2. CATEGORIES / GROUPS (Horizontal Scroll) */}
      <div className="px-6 mb-6 shrink-0">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {GROUPS.map((group) => (
            <motion.div key={group.id} whileTap={{ scale: 0.95 }} className="relative flex-shrink-0 w-32 h-40 rounded-[32px] overflow-hidden shadow-lg border-2 border-white/20">
              <img src={group.image} className="absolute inset-0 w-full h-full object-cover" alt={group.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-3 right-3">
                <div className={`${group.color} w-fit p-1.5 rounded-lg mb-2 shadow-lg`}>
                  {group.icon}
                </div>
                <p className="text-[10px] font-black text-white leading-tight uppercase tracking-tight">{group.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. MAIN FEED (Open Discussions) */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32 space-y-8">
        {DISCUSSIONS.map((post) => (
          <Card key={post.id} className="bg-white border-none rounded-[48px] overflow-hidden shadow-2xl">
            {/* Post Image */}
            <div className="relative w-full h-56">
              <img src={post.image} className="w-full h-full object-cover" alt="post header" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-[9px] font-black flex items-center gap-1 uppercase tracking-widest">
                <MapPin size={10} /> {post.uni}
              </div>
            </div>
            
            <div className="p-8">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-black text-[#FFD700] flex items-center justify-center font-black text-sm">
                  {post.user[0]}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-black text-sm">{post.user}</span>
                    <CheckCircle2 size={14} className="text-blue-500 fill-current" />
                  </div>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{post.group}</span>
                </div>
              </div>

              {/* Text Content */}
              <h2 className="text-2xl font-black italic leading-[1.1] mb-2 tracking-tight">"{post.amharic}"</h2>
              <p className="text-zinc-500 text-sm font-bold leading-relaxed mb-6">{post.text}</p>

              {/* OPEN COMMENTS SECTION */}
              <div className="bg-zinc-50 rounded-[32px] p-6 mb-6">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300 mb-4">Latest Discussion</p>
                <div className="space-y-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex flex-col gap-0.5">
                      <span className="font-black text-[10px] uppercase text-black">{comment.user}</span>
                      <p className="text-[11px] font-bold text-zinc-600 leading-snug">{comment.text}</p>
                    </div>
                  ))}
                </div>
                {/* Inline Comment Input */}
                <div className="mt-6 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Join the discussion..." 
                    className="flex-1 bg-white rounded-2xl px-4 py-3 text-[11px] font-bold outline-none border border-zinc-100 placeholder:text-zinc-300" 
                  />
                  <button className="bg-black text-white p-3 rounded-2xl active:scale-90 transition-all">
                    <Send size={16} />
                  </button>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 font-black text-sm"><Heart size={20} className="text-zinc-300"/> {post.likes}</button>
                  <button className="flex items-center gap-2 font-black text-sm"><MessageSquare size={20} className="text-zinc-300"/> {post.comments.length}</button>
                </div>
                <Share2 size={20} className="text-zinc-300" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* --- RESPONSIVE APP NAV BAR (Community Active) --- */}
      <nav className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-white/90 backdrop-blur-2xl border border-white/20 h-20 rounded-[32px] px-6 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50">
        
        {/* Home */}
        <Link href="/" className="relative flex flex-col items-center gap-1 active:scale-95 flex-1">
          <div className={`bg-black text-[#FFD700] p-3 rounded-2xl shadow-lg transition-all ${pathname === '/' ? '-mt-10 border-4 border-[#FFD700] scale-110' : 'scale-75 opacity-30 grayscale'}`}>
            <Sparkles size={22} fill={pathname === '/' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-tighter mt-1 ${pathname === '/' ? 'text-black' : 'text-zinc-400'}`}>Home</span>
        </Link>

        {/* Community Link (HIGHLIGHTED BLACK) */}
        <Link href="/community" className="flex flex-col items-center gap-1 transition-all active:scale-95 group flex-1">
          <div className={`p-3 rounded-2xl transition-all duration-300 ${pathname === '/community' ? 'bg-black text-[#FFD700] shadow-lg scale-110' : 'text-zinc-400'}`}>
            <Users size={22} fill={pathname === '/community' ? 'currentColor' : 'none'} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/community' ? 'text-black' : 'text-zinc-400'}`}>Forum</span>
        </Link>
        
        {/* AI Helper Link */}
        <Link href="/ai" className="flex flex-col items-center gap-1 transition-all active:scale-95 group flex-1">
          <div className={`p-3 rounded-2xl transition-all ${pathname === '/ai' ? 'bg-black text-[#FFD700]' : 'text-zinc-400'}`}>
            <BotMessageSquare size={22} />
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${pathname === '/ai' ? 'text-black' : 'text-zinc-400'}`}>Helper</span>
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