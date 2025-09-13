"use client";
import { useBoundStore } from "@/store/store";
import { Button } from "../ui/button";
import { LOGIN } from "@/constant/modelType";
import { Avatar } from "./Avatar";

interface LoginButtonProps {
    title?: string;
}
export default function LoginButton({ title }: LoginButtonProps) {
  const {openModal,accessToken,user} = useBoundStore();

  if(accessToken){
    return <Avatar user={user}/>
  }
  return (
    <Button variant={"outline"} onClick={() => openModal(LOGIN)} className="cursor-pointer">
      {title || "Login"}
    </Button>
  );
}
