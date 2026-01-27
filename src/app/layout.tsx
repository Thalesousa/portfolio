import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import StarField from "@/components/StarField";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Meu Site",
  description: "Descrição do meu site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="night">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/svg" />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-dm`}>
        <StarField />
        <div className="relative z-10">
          {children}
        </div>
        <ToastContainer
          theme="dark"
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
