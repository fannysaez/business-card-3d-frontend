import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div
        className="w-full max-w-sm md:max-w-md rounded-2xl p-8 md:p-10 flex flex-col items-center gap-5 text-center"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--teal-28)",
        }}
      >
        <div
          className="w-32 h-32 rounded-full overflow-hidden"
          style={{ border: "3px solid var(--teal)" }}
        >
          <Image
            src="/assets/avatar/avatar.webp"
            alt="Fanny Saez"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <h1 className="text-2xl font-extrabold">
            Fanny <span style={{ color: "var(--teal)" }}>Saez</span>
          </h1>
          <p
            className="text-sm font-bold uppercase tracking-widest mt-1"
            style={{ color: "var(--teal)" }}
          >
            Développeuse Web &amp; Impression 3D
          </p>
        </div>

        <a
          href="https://www.instagram.com/designdevwebdiy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ouvrir le compte Instagram de Fanny Saez"
          className="relative p-3 rounded-lg bg-white inline-block"
        >
          <QRCodeSVG
            value="https://www.instagram.com/designdevwebdiy"
            size={120}
            level="H"
          />
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="bg-white rounded-full p-1.5">
              <FaInstagram size={22} color="#E1306C" />
            </span>
          </span>
        </a>

        <div className="flex flex-col gap-1 text-sm" style={{ color: "var(--muted)" }}>
          <a href="mailto:fannysaez.pro@gmail.com" className="hover:underline">
            fannysaez.pro@gmail.com
          </a>
          <a href="tel:+33661051505" className="hover:underline">
            06 61 05 15 05
          </a>
        </div>
      </div>
    </main>
  );
}