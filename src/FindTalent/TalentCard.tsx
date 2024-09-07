import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import {  IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from 'react-router-dom';
import { skills } from '../Data/JobDescData';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { useRef, useState } from 'react';
const TalentCard=(props:any)=>{
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
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
    {
        props.invited?<div className='flex gap-1 text-mine-shaft-200 text-sm items-center'>
            <IconCalendarMonth stroke={1.5}/>Interview: August 27, 2024 10:00 AM
        </div>:<div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">{props.expectedCtc}
            </div>
            <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
               <IconMapPin className="h-5 w-5" stroke={1.5}/>{props.location}
            </div>  
        </div>  
    }
        <Divider size="xs" color="mine-shaft.7" />
        <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {
            !props.invited &&<>
            <Link to="/talent-profile">
               <Button color="bright-sun.4" variant="outline" fullWidth>Profile</Button>
            </Link> 
         <div>
           {props.posted?<Button onClick={open} rightSection={<IconCalendarMonth className='w-5 h-5'/>} color="bright-sun.4" variant="light" fullWidth>Schedule</Button>:<Button color='bright-sun.4' variant='light' fullWidth>Message</Button>}
         </div>
         </>
        }
        {
            props.invited && <>
            <div>
            <Button color="bright-sun.4" variant="outline" fullWidth>Accept</Button>
            </div>
            <div>
            <Button color="bright-sun.4" variant="Light" fullWidth>Reject</Button>
            </div>
            </>
        }   
        </div>
        <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
            <div className='flex flex-col gap-4'>
            <DateInput value={value} minDate={new Date()} onChange={setValue} label="Date" placeholder="Enter Date"/>
            <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
            <Button color='bright-sun.4' variant='light' fullWidth>Schedule</Button>    
            </div>
      </Modal>
    </div>
}
export default TalentCard;