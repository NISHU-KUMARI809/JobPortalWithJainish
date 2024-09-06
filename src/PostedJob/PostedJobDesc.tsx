import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";

const PostedJobDesc=()=>{
    return <div className="mt-5 w-3/4 px-5">
        <div className="text-2xl font-semibold flex items-center">Software Engineer <Badge variant="light" ml="sm" color="bright-sun.4" size="sm">Badge</Badge>
        </div>
        <div className="font-medium text-mine-shaft-300 mb-5">New York, United States</div>
        <div>
        <Tabs variant="outline" radius="lg" defaultValue="first">
                <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicant">Applicant</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview"className="[&>div]:w-full"><JobDesc edit/></Tabs.Panel>
                <Tabs.Panel value="applicant">fd</Tabs.Panel>
                <Tabs.Panel value="invited">g</Tabs.Panel>
        </Tabs>
        </div>
    </div>
}
export default PostedJobDesc;