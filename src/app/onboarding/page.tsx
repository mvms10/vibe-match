import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

const onboardingSlides = [
  {
    title: "Bem-vindo ao VibeMatch",
    description: "O app que combina dating, estética e alcance social. Encontre conexões verdadeiras através da vibe.",
    image: "/onboarding-1.svg", // placeholder
  },
  {
    title: "VibeBoard",
    description: "Explore fotos estéticas estilo Pinterest. Curtiu? Visite o perfil e dê like.",
    image: "/onboarding-2.svg",
  },
  {
    title: "MiniVibes",
    description: "Vídeos curtos de até 10 segundos. Viralize e ganhe alcance com seu conteúdo.",
    image: "/onboarding-3.svg",
  },
  {
    title: "MatchRoom",
    description: "Dating moderno: veja perfis, leia bios, dê likes e faça matches baseados em vibe.",
    image: "/onboarding-4.svg",
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.push("/login");
    }
  };

  const skip = () => router.push("/login");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-4">
      <Card className="w-full max-w-md p-6 text-center">
        <div className="mb-8">
          {/* Placeholder for image */}
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
          <h1 className="text-2xl font-bold mb-2">{onboardingSlides[currentSlide].title}</h1>
          <p className="text-muted-foreground">{onboardingSlides[currentSlide].description}</p>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={skip}>Pular</Button>
          <div className="flex space-x-2">
            {onboardingSlides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <Button onClick={nextSlide}>
            {currentSlide === onboardingSlides.length - 1 ? "Começar" : "Próximo"}
          </Button>
        </div>
      </Card>
    </div>
  );
}