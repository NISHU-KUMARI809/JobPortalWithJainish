import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { Key, useState } from "react";
import { profile } from "../Data/TalentData";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";
import CertiInput from "./certiInput";

const Profile=()=>{
    const select=fields;
    const [skills, setSkills]= useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MYSQL", "Python", "Django","Figma", "Sketch", "Docker", "AWS"]);
    const [edit, setEdit]=useState([false,false,false,false,false]);
    const [addExp, setAddExp]=useState(false);
    const [addCerti, setCertiExp]=useState(false);
    const [about, setAbout] = useState(' As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');

    const handleEdit=(index:any)=>{
        const newEdit=[...edit];
        newEdit[index]=!newEdit[index];
        setEdit(newEdit);
    }
    return <div className="w-4/5 mx-auto">
        <div className="">
        <div className="relative">
            <img className="rounded-t-2xl" src="/background.jpg" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="/avatar.png" alt="" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">Jarrod Wood <ActionIcon onClick={()=>handleEdit(0)} size="lg" color="bright-sun.4" variant="subtle">
      {edit[0]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5"/>}
    </ActionIcon></div>
    {
        edit[0]?<><div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
    </div>
    <SelectInput {...select[2]} /></>:<><div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5 stroke={1.5}"/>Software Developer &bull; Google</div>
                <div className="flex gap-1 text-lg text-mine-shaft-300">
               <IconMapPin className="h-5 w-5" stroke={1.5}/>New York, United States
            </div></>
    }
        <Divider  my="xl" />
        <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">About<ActionIcon onClick={()=>handleEdit(1)} size="lg" color="bright-sun.4" variant="subtle">
      {edit[1]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5"/>}
    </ActionIcon></div>
    {
        edit[1]?<Textarea value={about} placeholder="Enter about Yourself.." autosize minRows={3} onChange={(event) => setAbout(event.currentTarget.value)}/>:<div className="text-sm text-mine-shaft-300 text-justify">{about}</div>
    }
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-2xl font-semibold mb-3 flex justify-between">Skills<ActionIcon onClick={()=>handleEdit(2)} size="lg" color="bright-sun.4" variant="subtle">
      {edit[2]?<IconDeviceFloppy className="h-4/5 w-4/5" />:<IconPencil className="h-4/5 w-4/5"/>}
    </ActionIcon></div>
    {
        edit[2]?<TagsInput value={skills} onChange={setSkills}  placeholder="Add Skill" splitChars={[',', ' ', '|']}/>:<div className="flex flex-wrap gap-2">
        {
            skills.map((skill, index)=> <div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
        }
         
    </div>

    }
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-2xl font-semibold mb-4 flex justify-between">Experience<div className="flex gap-2"><ActionIcon onClick={()=>setAddExp(true)} size="lg" color="bright-sun.4" variant="subtle"><IconPlus className="h-4/5" />
    </ActionIcon><ActionIcon onClick={()=> handleEdit(3)} size="lg" color="bright-sun.4" variant="subtle">{edit[3] ?<IconDeviceFloppy className="h-4/5 w-4/5"/>: <IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    profile.experience.map((exp,index)=><ExpCard key={index} {...exp} edit={edit[3]} />)
                }
                {addExp&&<ExpInput add setEdit={setAddExp}/>}

            </div>
        </div>
        <Divider my="xl" />
        <div>
            <div className="text-2xl font-semibold mb-4 flex justify-between">Certifications<div className="flex gap-2"><ActionIcon onClick={()=>setCertiExp(true)} size="lg" color="bright-sun.4" variant="subtle"><IconPlus className="h-4/5 w-4/5" />
            </ActionIcon><ActionIcon onClick={() =>handleEdit(4)} size="lg" color="bright-sun.4" variant="subtle">{edit[4]?<IconDeviceFloppy className="h-4/5 w-4/5"/>:<IconPencil className="h-4/5 w-4/5"/>}</ActionIcon></div></div>
            <div className="flex flex-col gap-8">
                {
                    profile.certifications.map((certi, index)=><CertiCard key={index} edit={edit[4]} {...certi}/>)
                }
                {
                    addCerti&& <CertiInput setEdit={setCertiExp}/>
                }

            </div>
        </div>        
    </div>
    </div>
    </div>
}
export default Profile;