import {
  ShoppingCart,
  Menu,
  X,
  LogOut,
  User,
  MapPin
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Offers", to: "/products?offers=true" },
];

export function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const { user, isLoggedIn, login, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">

      {/* MAIN HEADER */}
      <div className="container flex h-14 items-center justify-between gap-3 md:h-16">

        {/* MOBILE MENU */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-64">
            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/"
                className="text-2xl font-bold text-primary"
                onClick={() => setIsSheetOpen(false)}
              >
                ISAARA
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg text-foreground/80 hover:text-primary"
                  onClick={() => setIsSheetOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

         {/* LOGO + LOCATION */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-primary">ISAARA</span>
          <span className="flex items-center gap-1 text-[10px] text-gray-500">
            <MapPin className="h-3 w-3" />
            Sabse sasta aur tez delivery
          </span>
        </Link>

        {/* NAV + SEARCH (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-center">

          {/* NAV */}
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* SEARCH */}
          <form onSubmit={handleSearch} className="relative">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search groceries..."
              className="h-9 w-64 rounded-full bg-muted pl-4 pr-8 text-sm focus-visible:ring-2 focus-visible:ring-primary/40"
            />

            {/* CLEAR BUTTON */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2">

          {/* CART */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:scale-105 transition"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <Badge className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[10px] text-white">
                {totalItems}
              </Badge>
            )}
          </Button>

          {/* USER */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-1 hover:scale-105 transition">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-primary text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuItem className="flex-col items-start cursor-default">
                  <span className="font-medium">{user?.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {user?.email}
                  </span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={logout}
                  className="text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-8 rounded-full"
              onClick={login}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="hidden sm:inline">Sign in</span>
            </Button>
          )}
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="px-4 pb-2 md:hidden">
        <form onSubmit={handleSearch}>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search groceries..."
            className="h-9 w-full rounded-full bg-gray-100 px-4 text-sm"
          />
        </form>
      </div>
    </header>
  );
}