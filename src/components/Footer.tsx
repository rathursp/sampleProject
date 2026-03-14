import { MessageCircle } from "lucide-react";

export function Footer() {
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
      <footer className="border-t bg-secondary py-8">
        <div className="container">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            
            <div>
              <h3 className="font-heading text-xl font-bold text-primary">
                ISAARA
              </h3>

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
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <span>•</span>

              <span>© {new Date().getFullYear()} Isaara</span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}