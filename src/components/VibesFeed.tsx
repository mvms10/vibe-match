import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, User } from "lucide-react";

const mockPhotos = [
  { id: 1, url: "https://via.placeholder.com/300x400", likes: 42, user: "user1" },
  { id: 2, url: "https://via.placeholder.com/300x500", likes: 28, user: "user2" },
  // Add more mock data
];

export default function VibesFeed() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {mockPhotos.map((photo) => (
        <Card key={photo.id} className="overflow-hidden">
          <img src={photo.url} alt="Vibe" className="w-full h-auto" />
          <div className="p-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{photo.likes}</span>
            </div>
            <Button size="sm" variant="ghost">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}