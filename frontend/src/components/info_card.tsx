
export type InfoCardProps = {
  title: string,
  description: string,
  href: string
}



export function InfoCard({ title, description, href }: InfoCardProps) {
  return <>
    <a href={href} className="p-3 ">
      <div className="flex p-6 border flex-col rounded-xl hover:bg-purple-700 text-white transition-colors ease-in-out  duration-300 " >
        <h1 className="font-bold m-3 text-black" >{title}</h1>
        <p className="text-black" >{description}</p>
        <p className="text-black m-3 font-medium hover:text-white transition-all duration-100" >Take Me There</p>
      </div>
    </a>
  </>
}
