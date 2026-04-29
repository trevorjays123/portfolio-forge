import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "2348058174134";
  const message = encodeURIComponent(
    "Hello crestlinedevsolutions I'm interested in your services"
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,45%)] px-4 py-3 text-white shadow-glow transition-transform hover:scale-105 hover:bg-[hsl(142,70%,40%)] focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
