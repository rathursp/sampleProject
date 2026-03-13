import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary py-8">
      <div className="container">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">ISAARA</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fresh groceries delivered to your doorstep
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <span>•</span>
            <span>© {new Date().getFullYear()} Isaara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
