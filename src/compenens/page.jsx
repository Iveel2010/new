"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
export const Parent = ({ children, props }) => {
  const router = useRouter();
  return (
    <div className="kokok">
      <div className="kokosk">
        <button onClick={() => router.push("/")} class="fancy">
          <span class="top-key"></span>
          <span class="text">HOME</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </button>

        <button onClick={() => router.push("/new")} class="fancy">
          <span class="top-key"></span>
          <span class="text">Create post</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </button>
      </div>
      {children}
    </div>
  );
};
