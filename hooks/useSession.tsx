import {
    Session,
    createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import React, { useCallback, useEffect, useState } from "react";

const useSession = () => {
    const [session, setSession] = useState<Session | null>(null);
    const supabase = createClientComponentClient();
    const handleGetSession = useCallback(async () => {
        const session = await supabase.auth.getSession();
        setSession(session.data.session);
    }, [supabase]);

    useEffect(() => {
        handleGetSession();
    }, [handleGetSession]);

    return { session };
};

export default useSession;