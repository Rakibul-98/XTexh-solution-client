import { MessageCircle } from "lucide-react";

export default function ChatPlugin() {
  return (
    <a
      href="https://wa.me/8801234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center gap-1 px-2 py-2 animate-pulse hover:animate-none"
    >
      <MessageCircle className="w-10 md:w-6 h-10 md:h-6 p-1 md:p-0" />
      <span className="hidden md:inline">Chat with us</span>
    </a>
  );
}
