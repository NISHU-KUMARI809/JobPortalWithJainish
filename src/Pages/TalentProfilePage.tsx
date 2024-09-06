import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";

const TalentProfilePage=()=>{
    return(
         <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4 ">
            
            <Link className="my-5 inline-block" to="/find-talent">
               <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button></Link>
            <div className="flex gap-5 justify-around">
                <Profile {...profile}/>
                <RecommendTalent />
            </div>
        </div>
    )
}
export default TalentProfilePage;