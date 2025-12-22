"use client";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Sparkles } from "lucide-react";

export function AskDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full bg-black text-[#FFD700] h-16 rounded-2xl shadow-2xl flex items-center justify-between px-6 border-2 border-black active:scale-95 transition-transform">
          <span className="font-black text-lg">ጥያቄ ጠይቅ (Ask)</span>
          <div className="bg-[#FFD700] text-black rounded-xl p-1 shadow-inner">
            <Plus size={24} strokeWidth={3} />
          </div>
        </Button>
      </DrawerTrigger>
      
      {/* Drawer content with Gold background for a professional look */}
      <DrawerContent className="bg-[#FFD700] border-none rounded-t-[40px] max-h-[85vh]">
        <div className="mx-auto w-12 h-1.5 bg-black/20 rounded-full mt-4" />
        <div className="p-8">
          <DrawerHeader className="p-0 mb-8">
            <div className="bg-black w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
              <Sparkles className="text-[#FFD700]" />
            </div>
            <DrawerTitle className="text-3xl font-black text-black">What's your question?</DrawerTitle>
            <p className="text-black/60 font-medium">ጥያቄዎን ይፃፉ - AI እና ተማሪዎች ይመልሳሉ</p>
          </DrawerHeader>

          <Textarea 
            placeholder="Type here..." 
            className="min-h-[160px] bg-white/50 border-2 border-black/5 rounded-[32px] p-6 text-xl text-black placeholder:text-black/30 focus-visible:ring-black shadow-inner"
          />

          <Button className="w-full bg-black text-[#FFD700] h-18 rounded-[24px] mt-8 text-xl font-black shadow-xl">
            Post to University Feed
          </Button>
          
          <p className="text-center mt-6 text-black/40 text-xs font-bold uppercase tracking-tighter">
            Your question will be visible to all universities
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}