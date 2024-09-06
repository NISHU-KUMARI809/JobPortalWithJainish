import { Avatar, Indicator } from "@mantine/core";
import { IconAwardFilled, IconBellFilled, IconBriefcaseFilled, IconFishHook, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header =()=>{
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
        <div className="flex gap-0 items-center text-bright-sun-400">
        <IconFishHook className="h-10 w-10" stroke={2.5} />
            <div className="text-3xl font-semibold">jobGenie</div>
        </div>
        {NavLinks()}
        <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
            <div>Nishu</div>
            <Avatar src="avatar2.jpg" alt="it's me" />
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5}/>
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <Indicator  color="bright-sun.4" offset={5} size={9} processing>
            <IconBellFilled stroke={1.5} />
            </Indicator>
            </div>
            </div>
        </div>
    </div>
}
export default Header;