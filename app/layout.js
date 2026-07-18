import "./globals.css";
import ScrollAnimations from "../components/ScrollAnimations";

export const metadata = {
  title: "Pixel Stack Technologies | Leading Software & Product Development Agency",
  description: "Pixel Stack helps startups, enterprises and public sector clients accelerate their technology lifecycle with cutting-edge digital solutions."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
