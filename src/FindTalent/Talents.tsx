import { jobList } from "../Data/JobsData";
import { talents } from "../Data/TalentData";
import JobCard from "../FindJobs/JobCard";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";

const Talents=()=>{
    return <div className="px-5 py-5">
        <div className="flex justify-between mt-5">
            <div className="text-2xl font-semibold">Talents</div>
            <Sort />
        </div>
        <div className="mt-10  flex flex-wrap justify-between gap-11">
            {
                talents.map((talent, index) => <TalentCard key={index} {...talent} />)
            }
        </div>
    </div>
}
export default Talents;