import { InfoCard, InfoCardProps } from "@/components/info_card";
import Image from "next/image";

const info : InfoCardProps[] = [
  {
    title : "Make Booking",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
    href : "/book"
  },

  {
    title : "Check Booking",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates",
    href : "/check"
  }
]

export default function Home() {
  return (
    <div className="flex p-10 justify-center items-center" >

      <div className="grid md:grid-cols-2 grid-cols-1 gap-3" >
        {info.map((item, index) => {
          return <InfoCard key={index} title={item.title} href={item.href} description={item.description} />
        })}
      </div>

    </div>
  );
}

