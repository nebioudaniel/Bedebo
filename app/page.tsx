"use client";
import { useState } from "react";
import { MOCK_QUESTIONS } from "@/lib/mock-data";
import { WelcomeScreen } from "@/components/welcome-screen";
import { FeedCard } from "@/components/feed-card";
import { AskDrawer } from "@/components/ask-drawer";

export default function Home() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <main className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-[#FFD700]">
      {!hasStarted ? (
        <WelcomeScreen onStart={() => setHasStarted(true)} />
      ) : (
        <>
          {MOCK_QUESTIONS.map((q) => (
            <FeedCard key={q.id} q={q} />
          ))}
          
          {/* Professional Navigation Bar */}
          <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center px-10">
             <AskDrawer /> 
          </div>
        </>
      )}
    </main>
  );
}