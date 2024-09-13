"use client";
import { usePathname } from "next/navigation";

export default function Error({ error, reset }) {
    const path = usePathname();
    path === "/support" ? <>
      showing an error when user navigates to Support page
      <button onClick={() => reset()}>Try again</button>
    </> : null;
}
