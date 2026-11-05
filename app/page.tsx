import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import WelcomeIntro from "./components/WelcomeIntro";

export default function Home() {
  return (
    <WelcomeIntro>
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
              Fanny <span style={{ color: "var(--teal)" }}>SAEZ</span>
            </h1>
            <p className="text-sm font-bold uppercase tracking-wide mt-3">
              <span style={{ color: "var(--teal)" }}>Développeuse Web &amp; </span>
              <span style={{ color: "var(--white)" }}>Impression 3d</span>
            </p>
          </div>

          <a
            href="https://www.instagram.com/designdevwebdiy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir le compte Instagram de Fanny Saez"
            className="relative p-3 rounded-lg bg-white inline-block mt-2"
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

          <div
            className="w-full h-px mt-2"
            style={{ background: "var(--teal-40)" }}
            aria-hidden="true"
          />

          <div
            className="flex flex-col gap-2 text-base mt-2"
            style={{ color: "var(--white)" }}
          >
            <a
              href="mailto:fannysaez.pro@gmail.com"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <FaEnvelope size={16} style={{ color: "var(--teal)" }} />
              fannysaez.pro@gmail.com
            </a>
            <a
              href="tel:+33661051505"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              <FaPhone size={16} style={{ color: "var(--teal)" }} />
              06 61 05 15 05
            </a>
          </div>
        </div>
      </main>
    </WelcomeIntro>
  );
}