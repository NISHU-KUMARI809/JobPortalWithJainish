import { Divider } from "@mantine/core";
import SearchBox from "../FindJobs/SearchBox";
import Jobs from "../FindJobs/Jobs";
const FindJobs=()=>{
    return(
         <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
            <SearchBox/>
            <Divider size="xs" mx="md" />
            <Jobs />
            
        </div>
    )
}
export default FindJobs;