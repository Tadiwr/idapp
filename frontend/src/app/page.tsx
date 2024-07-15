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

type InfoCardProps = {
  title : string,
  description : string,
  href: string
}

function InfoCard({title, description, href} : InfoCardProps) {
  return <>
    <div className="flex p-5 border flex-col rounded-xl" > 
        <h1 className="font-bold m-3" >{title}</h1>
        <p className="text-slate-700 m-3" >{description}</p>
        <a href={href} className="text-blue-400 m-3 font-medium hover:text-blue-700" >Take Me There</a>
    </div>
  </>
}
