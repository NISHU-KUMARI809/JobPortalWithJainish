import { Avatar, Button, Divider, Text } from '@mantine/core';
import {  IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from 'react-router-dom';
import { skills } from '../Data/JobDescData';
const TalentCard=(props:any)=>{
    return <div className="p-4 rounded-xl bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow]
     !shadow-bright-sun-400 transition duration-300 ease-in-out w-96 flex flex-col gap-5">
        <div className="flex justify-between ">
            <div className="flex gap-2 items-center ">
                <div className="p-2 bg-mine-shaft-800 rounded-full">
                    <Avatar  size="lg" src={`/${props.image}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold text-lg">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.role} &bull; {props.company} </div>
                </div>
            </div>
            <IconHeart className="text-mine-shaft-300 cursor-pointer" />
        </div>
        <div className="flex gap-2 ">
            {
                props.topSkills?.map((skill: any, index: any)=><div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400 rounded-lg text-xs">{skill}</div>)
            }
        </div>
        <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.about}
    </Text>
    <Divider size="xs" color="mine-shaft.7" />
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">{props.expectedCtc}
            </div>
            <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5}/>{props.location}
            </div>  
        </div>  
        <Divider size="xs" color="mine-shaft.7" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            <Link to="/talent-profile">
               <Button color="bright-sun.4" variant="outline" fullWidth>Profile</Button>
            </Link> 
            <div>
              <Button color="bright-sun.4" variant="light" fullWidth>Message</Button>
            </div>   
        </div>
    </div>
}
export default TalentCard;