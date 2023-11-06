import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function useSignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleSignUp = async (email: string, password: string) => {
        const supabase = createClientComponentClient<Database>();
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        router.replace('/finish-register');
    }
    return { handleSignUp, email, setEmail, password, setPassword }
}