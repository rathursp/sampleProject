import { MessageCircle, Instagram, Linkedin, Mail } from "lucide-react";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export function Footer() {
  const { installable, installApp } = useInstallPrompt();

  return (
    <>
      {/* Popular Searches Section */}
      <div className="border-t bg-muted/30 pt-10 pb-6">
        <div className="container space-y-6 text-sm text-muted-foreground">

          <h3 className="font-semibold text-foreground">Popular Searches</h3>

          <div>
            <span className="font-medium text-foreground">Products :</span>{" "}
            Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd |
            Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry |
            Papaya | Jeera | Mushroom | Lettuce
          </div>

          <div>
            <span className="font-medium text-foreground">Brands :</span>{" "}
            Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil |
            Nandini Milk | Amul | Mother Dairy | Fortune Oil
          </div>

          <div>
            <span className="font-medium text-foreground">Categories :</span>{" "}
            Grocery | Chips | Curd | Eggs price | Cheese slice | Fresh fruits |
            Fresh vegetables | Refined oil | Butter price | Paneer price
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="bg-muted/30 pb-12">
        <div className="container grid grid-cols-2 gap-6 text-sm sm:grid-cols-3 md:grid-cols-5">

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Fruits & Vegetables</p>
            <p>Baby Food</p>
            <p>Breakfast & Sauces</p>
            <p>Cleaning Essentials</p>
            <p>Homegrown Brands</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Atta, Rice & Dals</p>
            <p>Dairy, Bread & Eggs</p>
            <p>Tea, Coffee & More</p>
            <p>Home Needs</p>
            <p>Paan Corner</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Masala & Dry Fruits</p>
            <p>Cold Drinks & Juices</p>
            <p>Biscuits</p>
            <p>Electricals & Accessories</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Sweet Cravings</p>
            <p>Munchies</p>
            <p>Makeup & Beauty</p>
            <p>Hygiene & Grooming</p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Frozen Food</p>
            <p>Meats, Fish & Eggs</p>
            <p>Bath & Body</p>
            <p>Health & Baby Care</p>
          </div>

        </div>
      </div>

      {/* Existing Footer */}
      <footer className="border-t bg-secondary pt-10 pb-6">
  <div className="container">

    {/* TOP SECTION */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

      {/* LEFT: Branding */}
      <div>
        <h3 className="font-heading text-2xl font-bold text-primary">
          ISAARA
        </h3>

        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
          Fresh groceries delivered to your doorstep with speed, quality, and care.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-4">
          <a href="#" className="hover:text-primary transition">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:support@isaara.com" className="hover:text-primary transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* MIDDLE: Links */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <p className="font-medium">Company</p>
          <p className="hover:text-primary cursor-pointer">About</p>
          <p className="hover:text-primary cursor-pointer">Careers</p>
          <p className="hover:text-primary cursor-pointer">Contact</p>
        </div>

        <div className="space-y-2">
          <p className="font-medium">Support</p>
          <p className="hover:text-primary cursor-pointer">Help Center</p>
          <p className="hover:text-primary cursor-pointer">Privacy Policy</p>
          <p className="hover:text-primary cursor-pointer">Terms of Use</p>
        </div>
      </div>

      {/* RIGHT: App Download */}
      <div className="flex flex-col gap-3">

        {/* Android / Install */}
        {installable && (
          <button
            onClick={installApp}
            className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 hover:bg-muted transition"
          >
            📱 Install Isaara App
          </button>
        )}

        {/* Optional fallback (APK) */}
        <a
          href="/app/isaara.apk"
          className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 hover:bg-muted transition"
        >
          ⬇️ Download APK
        </a>

      </div>

    </div>

    {/* BOTTOM BAR */}
    <div className="border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">

      <span>© {new Date().getFullYear()} Isaara. All rights reserved.</span>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-primary transition"
      >
        <MessageCircle className="h-4 w-4" />
        Chat on WhatsApp
      </a>

    </div>

  </div>
</footer>
    </>
  );
}