import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Image } from "@nextui-org/react";

type BannerType = {
  id?: string | undefined | null,
  img?: string | undefined | null
}

const reviews = [
  {
    id: "1",
    img: "/cataloge/images/elh/banner1.png",
  },
  {
    id: "2",
    img: "/cataloge/images/elh/banner2.jpg",
  },
  {
    id: "3",
    img: "/cataloge/images/elh/banner3.jpg",
  },
  {
    id: "4",
    img: "/cataloge/images/elh/banner4.png",
  },
  {
    id: "5",
    img: "/cataloge/images/elh/banner5.png",
  },
  {
    id: "6",
    img: "/cataloge/images/elh/banner6.png",
  },
  {
    id: "7",
    img: "/cataloge/images/elh/banner7.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 1);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  id,
  img,
}: BannerType) => {
  return (
    <figure
      className={cn(
        "relative w-[380px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="">
        <Image
          className="w-[380px] h-[220px] object-cover"
          width=""
          height=""
          alt={`${img}`}
          src={`${img}`}
        />
      </div>
    </figure>
  );
};

export function BannerProject() {
  return (
    <div className="relative flex gap-8 w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
