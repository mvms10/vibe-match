"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { User, BarChart, Crown } from "lucide-react";
import { useRouter } from "next/navigation";
import VibesFeed from "@/components/VibesFeed";
import MiniVibesFeed from "@/components/MiniVibesFeed";
import MatchRoom from "@/components/MatchRoom";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">VibeMatch</h1>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" onClick={() => router.push("/profile")}>
            <User className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => router.push("/analytics")}>
            <BarChart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => router.push("/premium")}>
            <Crown className="w-4 h-4" />
          </Button>
        </div>
      </header>
      <Tabs defaultValue="vibes" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="vibes">VibeBoard</TabsTrigger>
          <TabsTrigger value="minivibes">MiniVibes</TabsTrigger>
          <TabsTrigger value="matchroom">MatchRoom</TabsTrigger>
        </TabsList>
        <TabsContent value="vibes">
          <VibesFeed />
        </TabsContent>
        <TabsContent value="minivibes">
          <MiniVibesFeed />
        </TabsContent>
        <TabsContent value="matchroom">
          <MatchRoom />
        </TabsContent>
      </Tabs>
    </div>
  );
}