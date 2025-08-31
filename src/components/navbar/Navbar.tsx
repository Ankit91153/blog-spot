import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import LoginButton from "../common/LoginButton";

const Navbar = () => {
  return (
    <div className=" bg-muted">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background dark:bg-background border dark:border-card max-w-screen-xl mx-auto rounded-full z-50">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <LoginButton title="Login" />

            <ThemeSwitcher />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
