"use client";
import { useBoundStore } from "@/store/store";
import { Button } from "../ui/button";
import { LOGIN } from "@/constant/modelType";

interface LoginButtonProps {
    title?: string;
}
export default function LoginButton({ title }: LoginButtonProps) {
  const openModal = useBoundStore((state) => state.openModal);

  return (
    <Button variant={"outline"} onClick={() => openModal(LOGIN)} className="cursor-pointer">
      {title || "Login"}
    </Button>
  );
}
