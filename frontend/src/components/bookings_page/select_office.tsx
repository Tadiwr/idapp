import { getOffices } from "../../data/office.data";
import OfficeCard from "../office_card";

export default async function SelectOffice() {

  const offices = await getOffices()

  return (
    <div>
      {offices.map((office, index) => {
        return <OfficeCard office={office} key={index} />
      } )}
    </div>
  )
}
