"use client";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function CommentDrawer({ q }: { q: any }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full bg-black text-[#FFD700] rounded-2xl h-14 font-black gap-2 active:scale-95 transition-all shadow-lg">
          <MessageSquare size={18} /> {q.comments.length} Discussion
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#FFD700] border-none rounded-t-[40px] max-h-[85vh]">
        <div className="mx-auto w-12 h-1.5 bg-black/20 rounded-full mt-4" />
        <div className="p-6">
          <DrawerHeader className="p-0 mb-6">
            <DrawerTitle className="text-2xl font-black text-black">ተማሪዎች የሚሉት (Discussion)</DrawerTitle>
          </DrawerHeader>
          
          <div className="space-y-4 overflow-y-auto max-h-[50vh] no-scrollbar pb-10">
            {q.comments.map((comment: any) => (
              <div key={comment.id} className="flex gap-3 bg-white/60 backdrop-blur-md p-4 rounded-[28px] border border-black/5 shadow-sm">
                {/* Profile Pic */}
                <img 
                  src={comment.pic} 
                  className="w-10 h-10 rounded-full border-2 border-black object-cover" 
                  alt={comment.user}
                />
                <div className="flex-1">
                  <p className="text-xs font-black text-black leading-none mb-1">@{comment.user}</p>
                  <p className="text-sm text-black/90 font-medium leading-tight">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input 
              placeholder="አስተያየት ይጻፉ..." 
              className="flex-1 bg-white border-none rounded-2xl px-5 py-4 text-black font-medium outline-none shadow-inner"
            />
            <Button className="bg-black text-[#FFD700] rounded-2xl h-14 px-6 font-black">
              Go
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}