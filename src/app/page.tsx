import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1
        className="text-4xl font-bold p-2"
      >Hi, I am Duncan Warukira, a software engineer,</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="mailto:dwarukira@gmail.com">Contact me</a>
      </button>
    </main>
  );
}
