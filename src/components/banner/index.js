import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust path if necessary

export default function Banner() {
  return (
    <div className="w-full flex flex-wrap bg-[#F7F5F6] rounded-lg gap-6 my-4 p-6 md:p-10 justify-center items-center">
      {/* Text Content */}
      <div className="flex flex-col gap-4 text-left max-w-md p-5 md:p-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Discover our <br />
          Curated Collection
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          Explore our carefully selected products for your home and lifestyle.
        </p>
        <Button className="px-6 py-3 text-sm md:text-base lg:text-lg font-bold rounded-full self-start">
          Shop Now
        </Button>
      </div>

      {/* Image */}
      <div className="w-full md:w-[500px] flex justify-center">
        <Image
          src="/images/cup_banner.avif"
          width={500}
          height={300}
          unoptimized
          className="w-full max-w-[500px] h-auto object-contain"
          alt="banner cup"
        />
      </div>
    </div>
  );
}
