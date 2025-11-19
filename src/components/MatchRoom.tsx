import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";
import { useState } from "react";

const mockProfiles = [
  {
    id: 1,
    name: "Ana, 25",
    bio: "Amo fotografia e viagens. Procurando alguém com vibe criativa.",
    photos: ["https://via.placeholder.com/300x400"],
    likes: 120,
  },
  // Add more
];

export default function MatchRoom() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    // Logic for like
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePass = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const currentProfile = mockProfiles[currentIndex];

  if (!currentProfile) return <div className="p-4">Sem mais perfis</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-sm overflow-hidden">
        <img src={currentProfile.photos[0]} alt={currentProfile.name} className="w-full h-96 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{currentProfile.name}</h2>
          <p className="text-sm text-muted-foreground mb-2">{currentProfile.bio}</p>
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-4 h-4" />
            <span>{currentProfile.likes} likes</span>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" size="lg" onClick={handlePass}>
              <X className="w-6 h-6" />
            </Button>
            <Button size="lg" onClick={handleLike}>
              <Heart className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}