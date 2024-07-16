import { getOffices } from "../../data/office.data";
import OfficeCard from "../office_card";

export default async function SelectOffice() {

  const offices = await getOffices()

  return (
    <div className="grid-cols-1 px-5 grid gap-5" >
      {offices.map((office, index) => {
        return <OfficeCard office={office} key={index} />
      } )}
    </div>
  )
}
