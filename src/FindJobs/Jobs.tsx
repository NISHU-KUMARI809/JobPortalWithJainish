import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs=()=>{
    return <div className="px-5 py-5">
        <div className="flex justify-between mt-5">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort />
        </div>
        <div className="mt-10  flex flex-wrap gap-5 justify-between">
        {
            jobList.map((job, index) => <JobCard key={index} {...job} />)
        }
        </div>
    </div>
}
export default Jobs;