export type InfoCardProps = {
    title : string,
    description : string,
    href: string
}
  
  

export function InfoCard({title, description, href} : InfoCardProps) {
    return <>
      <div className="flex p-5 border flex-col rounded-xl" > 
          <h1 className="font-bold m-3" >{title}</h1>
          <p className="text-slate-700 m-3" >{description}</p>
          <a href={href} className="text-blue-400 m-3 font-medium hover:text-blue-700" >Take Me There</a>
      </div>
    </>
  }
  