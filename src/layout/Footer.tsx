import { Link } from "react-router-dom";
import logo from "./../assets/logo1.png";


export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="w-10/12 mx-auto space-y-8 px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-foreground">
              <img
                src={logo}
                alt="logo"
                className="w-20 h-20 rounded-full object-cover  "
              />
              <h2 className="text-2xl font-bold">
                {/* Text with gradient animation */}
                <span className="hidden sm:inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  DIGI WALLET
                </span>
              </h2>
            </div>

            <p className="mt-4 max-w-xs text-muted-foreground">
              Manage your digital wallet effortlessly with a modern, secure, and
              intuitive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-foreground">Features</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to={"/"}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Wallet Management
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Transaction History
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Money Transfer
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Role-Based Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Secure Authentication
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feature"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Feature
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Contack
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-foreground">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to={"mailto:ashagar619@gmail.com"}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com"
                    className="text-muted-foreground transition hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com"
                    className="text-muted-foreground transition hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="tel:+8801608093455"
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    WhatsApp: +8801608093455
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 mt-8 border-y border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} DIGI WALLET Management System. All rights
              reserved.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link
                to={"/"}
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Terms
              </Link>
              <Link
                to={"/"}
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Privacy
              </Link>
              <Link
                to={"/"}
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}