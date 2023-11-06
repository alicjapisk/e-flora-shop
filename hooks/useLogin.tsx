import { useState } from "react";
import useLinks from "./useLinks";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/supabase";

export function useLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const { navigateToDashboards } = useLinks();

  const handleLogin = async (email: string, password: string) => {
    const supabase = createClientComponentClient<Database>();
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorText("Nieprawidłowy email lub hasło");

    } else {
      navigateToDashboards();
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorText,
    setErrorText,
    handleLogin,
  };
}
