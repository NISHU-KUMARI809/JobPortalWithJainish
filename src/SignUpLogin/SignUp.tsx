import { TextInput } from "@mantine/core";

const SignUp=()=>{
    return <div className="w-1/2 px-20 flex flex-col justify-center">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput leftSectionPointerEvents="none" leftSection={icon} label="Your email" placeholder="Your email"
      />

    </div>
}
export default SignUp;