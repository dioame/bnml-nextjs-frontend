import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// Define the interfaces
interface User {
  token: string;
}
interface Session {
  user: User;
}

export function useConnectionToken() {
  const { data: session } = useSession() as { data: Session | null }; // Use the interface here
  const [connectionToken, setConnectionToken] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      setConnectionToken(session.user.token);
    }
  }, [session]);

  return connectionToken;
}
