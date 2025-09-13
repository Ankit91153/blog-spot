import { useEffect } from "react";
import { getProfile } from "@/services/authService";
import { useBoundStore } from "@/store/store";

export const useFetchMe = () => {
  const accessToken = useBoundStore((state) => state.accessToken);
  const user = useBoundStore((state) => state.data);
  const setUser = useBoundStore((state) => state.setUser);

  useEffect(() => {
    // skip if told to skip, or if no token, or if already have user
    if (!accessToken || user) return;

    const fetchUser = async () => {
      try {
        const response = await getProfile();
        if (response?.data) {
          setUser(response.data); // assuming response.data.user
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [ accessToken, user, setUser]);
};
