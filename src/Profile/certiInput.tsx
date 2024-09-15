
import { Anchor, Button, Checkbox, Textarea, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react"; 


const CertiInput=(props:any)=>{
    const select=fields; 
    const [issueDate, setissueDate] = useState<Date | null>(new Date());

    return <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Add Certificates</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                {/* lopp ki need nhi hoga aise leke aenge data hum! */}
                <TextInput label="Title" withAsterisk placeholder="Enter Title"/>
                <SelectInput {...select[1]}/>
            </div>

            <div className="flex gap-10 [&>*]:w-1/2">
                {/* lopp ki need nhi hoga aise leke aenge data hum! */}
            <MonthPickerInput withAsterisk maxDate={new Date()} label="Issue date" placeholder="Pick date" value={issueDate} onChange={setissueDate}/>
            <TextInput label="Certificate ID" withAsterisk placeholder="Enter Certificate ID"/>
            </div>


            <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} color="bright-sun.4" variant="outline">Save</Button>
                <Button color="blue.8" onClick={()=>props.setEdit(false)} variant="light">Cancel</Button>
            </div>
        </div>   
}
export default CertiInput;

