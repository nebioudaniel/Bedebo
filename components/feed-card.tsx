"use client";
import { motion } from "framer-motion";
import Link from "next/link"; // Assuming you are using Next.js
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { 
  ShieldCheck, MapPin, ImageIcon, Trophy, 
  HeartPulse, Cpu, Briefcase, BookOpen, Scale,
  Users, Sparkles, Settings , BotMessageSquare
} from "lucide-react";
import { CommentDrawer } from "./comment-drawer";

const getCategoryIcon = (category: string) => {
  switch (category?.toLowerCase()) {
    case 'sport': return <Trophy size={10} />;
    case 'health': return <HeartPulse size={10} />;
    case 'engineering':
    case 'tech': return <Cpu size={10} />;
    case 'career': return <Briefcase size={10} />;
    case 'law': return <Scale size={10} />;
    default: return <BookOpen size={10} />;
  }
};

export function FeedCard({ q }: { q: any }) {
  const pathname = usePathname();

  return (
    <section className="h-[100dvh] w-full snap-start flex flex-col items-center justify-center p-4 bg-[#FFD700] relative overflow-hidden">
      {/* Main Content Area - Responsive height adjustment */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md h-[80vh] sm:h-[85vh] flex flex-col mb-20" 
      >
        <Card className="bg-white/95 backdrop-blur-lg border-none shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-[48px] overflow-hidden flex flex-col h-full">
          {/* Image Section */}
          {q.image && (
            <div className="w-full h-40 sm:h-44 shrink-0 relative bg-zinc-100">
              <img src={q.image} alt="Post" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white">
                <ImageIcon size={16} />
              </div>
            </div>
          )}

          {/* Text Content - Scrollable */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="bg-black text-[#FFD700] px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1.5 uppercase tracking-tighter">
                {getCategoryIcon(q.category)}
                {q.category}
              </div>
              <div className="bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full text-[10px] font-black flex items-center gap-1 uppercase tracking-tighter">
                <MapPin size={10} /> {q.university}
              </div>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-black italic leading-[1.1] mb-2 tracking-tight">
              "{q.amharic}"
            </h2>
            <p className="text-zinc-500 font-medium text-sm mb-6 leading-snug">{q.question}</p>

            <div className="bg-amber-50/70 rounded-[32px] p-5 sm:p-6 border border-yellow-200 relative mb-4 shadow-inner">
              <div className="absolute -top-3 left-6 bg-black text-[#FFD700] text-[9px] px-3 py-1 rounded-full font-black tracking-widest shadow-md">
                <ShieldCheck size={10} className="inline mr-1 mb-0.5" /> AI ASSISTANT
              </div>
              <p className="text-sm text-zinc-800 leading-relaxed font-semibold">
                {q.aiAnswer}
              </p>
            </div>
          </div>

          {/* Action Area */}
          <div className="px-8 pb-8 pt-4 bg-white border-t border-zinc-50">
            <CommentDrawer q={q} />
          </div>
        </Card>
      </motion.div>

      {/* --- RESPONSIVE APP NAV BAR --- */}
      <nav className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-white/90 backdrop-blur-2xl border border-white/20 h-20 rounded-[32px] px-8 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50">
         <Link href="/" className="relative flex flex-col items-center gap-1 active:scale-95">
          <div className="bg-black text-[#FFD700] p-3 rounded-2xl shadow-lg -mt-8 border-4 border-[#FFD700]">
            <Sparkles size={24} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-black mt-1"> Home</span>
        </Link>
        {/* Community Link */}
        <Link href="/community" className="flex flex-col items-center gap-1 transition-all active:scale-95 group">
          <Users size={22} className="text-zinc-400 group-hover:text-black transition-colors" />
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black">Community</span>
        </Link>
        
        {/* Home / AI Link (Active State) */}
       

        {/* Settings Link */}
        <Link href="/settings" className="flex flex-col items-center gap-1 transition-all active:scale-95 group">
          <Settings size={22} className="text-zinc-400 group-hover:text-black transition-colors" />
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black">Settings</span>
        </Link>

 <Link href="/ai" className="flex flex-col items-center gap-1 transition-all active:scale-95 group">
          <BotMessageSquare size={22} className="text-zinc-400 group-hover:text-black transition-colors" />
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black">AI Helper </span>
        </Link>
      </nav>
    </section>
  );
}