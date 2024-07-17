
export type InfoCardProps = {
  title: string,
  description: string,
  href: string
}



export function InfoCard({ title, description, href }: InfoCardProps) {
  return <>
    <div className="flex p-6 border flex-col rounded-xl hover:bg-purple-700 text-white transition-colors ease-in-out translate-y-5 duration-300 " >
      <a href={href} className="p-3">
        <h1 className="font-bold m-3 text-black" >{title}</h1>
        <p className="text-slate-700 m-3" >{description}</p>
        <p className="text-purple-400 m-3 font-medium hover:text-white" >Take Me There</p>
      </a>

    </div>
  </>
}
