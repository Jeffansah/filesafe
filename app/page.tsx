import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div>
      <h1 className={`${poppins.variable} font-poppins  text-3xl font-bold`}>
        Welcome to FileSafe!
      </h1>
    </div>
  );
}
