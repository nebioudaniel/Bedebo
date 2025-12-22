"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For professional feel
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function WelcomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-between p-8 bg-[#FFD700]">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
       
          <Image src="/no.png" alt="Logo" width={408} height={408} />
    
        
        <h1 className="text-4xl font-black text-black tracking-tighter mb-2">
          ከጥያቄ እስከ እውቀት
        </h1>
        <p className="text-lg font-medium text-black/80 max-w-[280px]">
          The Elite Ethiopian Student Network. Powered by AI.
        </p>
      </div>

      <div className="w-full space-y-4 pb-12">
        <Button 
          onClick={onStart}
          className="w-full bg-black text-[#FFD700] hover:bg-zinc-800 py-8 rounded-2xl text-xl font-bold transition-all shadow-xl"
        >
          ጀምር (Get Started)
        </Button>
        <p className="text-center text-sm font-bold text-black/60 uppercase tracking-widest">
          University Mini App v1.0
        </p>
      </div>
    </div>
  );
}