"use client";
import Image from "next/image";

import { useEffect } from "react";
import { useUserContext } from "@/contexts/User";
import axios from "axios";

export default function Header() {
  const { currentUser, setCurrentUser } = useUserContext();

  useEffect(() => {
    async function getUserData() {
      try {
        const res = await axios.get(`https://api.sleeper.app/v1/user/ramchips`);
        const { user_id, username, avatar } = res.data;
        setCurrentUser({
          userId: user_id,
          name: username,
          avatarId: avatar,
        });
      } catch (e) {
        console.log(e);
      }
    }

    getUserData();
  }, [setCurrentUser]);

  console.log("CURRENT USER", currentUser);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl">Sleeperscan</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="enter sleeper username"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                alt="user profile picture"
                width="40"
                height="40"
                src={`https://sleepercdn.com/avatars/${currentUser.avatarId}`}
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
