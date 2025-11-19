import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, User } from "lucide-react";
import { useState, useRef } from "react";

const mockVideos = [
  { id: 1, url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", likes: 15, user: "user3" },
  // Add more
];

export default function MiniVibesFeed() {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    if (playing !== null && playing !== index) {
      videoRefs.current[playing]?.pause();
    }
    setPlaying(index);
  };

  return (
    <div className="space-y-4 p-4">
      {mockVideos.map((video, index) => (
        <Card key={video.id} className="overflow-hidden">
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.url}
            className="w-full h-auto"
            loop
            muted
            onPlay={() => handlePlay(index)}
          />
          <div className="p-2 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{video.likes}</span>
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