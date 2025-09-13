"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AVATAR_URL } from "@/constant/data";
import { useBoundStore } from "@/store/store";
import { logout, logoutAll } from "@/services/authService"; // 👈 you’ll implement these API calls
import { toast } from "react-toastify";

function getInitials(name: string): string {
  if (!name) return "";
  const parts = name.trim().split(" ");
  if (parts.length === 1) {
    return parts[0];
  }
  return parts[0] + "+" + parts[1];
}

export function Avatar({ user }: { user: any }) {
  const { clearUser, setAccessToken } = useBoundStore();
  const USER = user?.user || user; // safeguard in case you passed nested

  const initials = getInitials(USER?.name);

  const handleLogout = async () => {
    try {
      await logout();
        toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      setAccessToken(null);
      clearUser();
    }
  };

  const handleLogoutAll = async () => {
    try {
      await logoutAll(); // API: logout all devices
        toast.success("Logged out from all devices successfully");
    } catch (error) {
      console.error("Logout All error", error);

    } finally {
      setAccessToken(null);
      clearUser();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={`${AVATAR_URL}?name=${initials}`}
          alt={USER?.name || "User Avatar"}
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{USER?.name}</DropdownMenuLabel>
        <DropdownMenuLabel className="text-sm text-muted-foreground">
          {USER?.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogoutAll}>
          Logout from all devices
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
