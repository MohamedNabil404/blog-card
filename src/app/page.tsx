import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex flex-col max-w-[340px]  overflow-hidden rounded-lg ${notoSans.className}`}
    >
      <Image
        src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={340}
        height={288}
        alt="interior-image"
      />
      <div className="py-6 px-4 w-full flex flex-col justify-start bg-white">
        <div className="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 w-fit text-green-700 mb-2 text-sm">
          Interior
        </div>
        <span className="font-semibold text-lg text-neutral-900 mb-3">
          Top 5 Living Room Inspirations
        </span>
        <p className="font-medium text-base text-neutral-600 mb-6">
          Curated vibrants colors for your living, make it pop & calm in the
          same time.
        </p>
        <div className="flex w-fit justiy-center items-center">
          <span className="pr-[6px] font-medium text-indigo-700 text-base">
            Read More
          </span>
          <div className="w-5 h-5 text-indigo-700">{"->"}</div>
        </div>
      </div>
    </div>
  );
}
