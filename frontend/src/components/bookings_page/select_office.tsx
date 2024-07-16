import { getOffices } from "../../data/office.data";

const SelectOffice = async () => {

    const offices = await getOffices()
  return (
    <div className="grid grid-cols-1 px-5 gap-4">
      {offices.map((office,index)=>{
        return <div key={index} className="flex rounded-md w-full border p-5 flex-col">
          <h1>{office.officeName}</h1>
          <p><span>Max Capacity</span>{office.capacity}</p>
          </div>
      })}
    </div>

  )
}

export default SelectOffice;