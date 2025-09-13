"use client";

import { useFetchMe } from "@/utils/useFetchMe";


export default function AppInitializer() {
  // run on app start
  useFetchMe();

  return null; // no UI
}
