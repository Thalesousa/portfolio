import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Meu Site",
  description: "Descrição do meu site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/svg" />
      </head>
      <body className={inter.className}>
        {children}
        <ToastContainer
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
