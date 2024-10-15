import MainDonateCard from "../../components/MainDonateCard"
import Sidebar from "../../components/Sidebar"
import TopBar from "../../components/TopBar"
import { mainDonateCardData } from "../../lib/data"

const Donations = () => {
  return (
    <div className="flex flex-row">
      <Sidebar/>

      <div className="p-5 text-white w-full">
        <TopBar/>

        <div className="flex flex-row flex-wrap items-center gap-5 pt-7 justify-center">
          {mainDonateCardData.map((data, index) => (
            <MainDonateCard key={index} data={data}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Donations