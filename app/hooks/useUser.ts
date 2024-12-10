import { useDispatch, useSelector } from "react-redux";
import { setUser, UserState } from "../redux/slices/userSlice";

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.id);

  const setUserData = (id: string, accessCode: string) => {
    dispatch(setUser({ id, accessCode }));
    localStorage.setItem("userId", id);
    localStorage.setItem("accessCode", accessCode);
  };

  const clearUserData = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessCode");
  };

  return { user, setUserData, clearUserData };
};
