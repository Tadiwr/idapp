import { Suspense } from "react";
import { getOffices } from "../../data/office.data";
import OfficeCard from "../office_card";
import FetchingOffices from "../suspense_falbacks/fetching_offices";

type Props = {
  onSelectOffice : (officeId: number) => void
}

export default async function SelectOffice({onSelectOffice} : Props) {

  const offices = await getOffices()

  return (
      <div className="grid-cols-1 px-5 grid gap-5" >
        {offices.map((office, index) => {
          return <OfficeCard onSelectOffice={onSelectOffice} office={office} key={index} />
        } )}
      </div>
  )
}
