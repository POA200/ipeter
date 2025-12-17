import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-12 px-2 md:px-0">
      <div className="w-full py-8 md:py-16 px-4 md:px-62 flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
        {/* Left: Brand and copyright */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-primary">iPeter</span>
          <span className="text-lg text-black dark:text-white">
            Web3 Designer & Dev
          </span>
          <span className="text-muted-foreground text-base mt-4">
            © 2025 iPeter.
          </span>
        </div>
        {/* Right: Links */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-2 min-w-[100px]">
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#skills" className="hover:underline">
              About Me
            </Link>
          </div>
          <div className="flex flex-col gap-2 min-w-[100px]">
            <a href="mailto:ipeter1010x@gmail.com" className="hover:underline">
              Email
            </a>
            <a
              href="https://t.me/iPetercrx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Telegram
            </a>
            <a
              href="https://x.com/iPeter_crx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
