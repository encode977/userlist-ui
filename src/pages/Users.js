import React from "react";

import search from "../img/search.png";

import { users } from "../handlers/userData";

function Users() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white rounded-lg shadow py-12 px-12">
        <div className="space-y-6">
          <h3 className="text-title font-bold text-black">Users</h3>
          <div className="flex justify-between items-center space-x-32">
            <div className="flex items-center border-2 border-border rounded-md px-4">
              <img className="h-6" src={search} alt="" />
              <input
                className="text-base text-black px-2 py-3 outline-none"
                type="text"
                placeholder="Search users"
              />
            </div>
            <div>
              <nav className="text-base font-medium flex items-center space-x-4 list-none">
                <li>Reputation</li>
                <li className="bg-blue rounded-md shadow-md px-4 py-3 text-white">
                  New users
                </li>
                <li>Voters</li>
                <li>Editors</li>
                <li>Moderators</li>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6">
          {users.map((user) => (
            <div className="bg-smoke p-5 rounded-md shadow-sm flex items-center space-x-4">
              <img className="h-20" src={user.img} alt="" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    {user.name}
                  </h3>
                  <h5 className="font-medium text-sm text-black">
                    {user.role}
                  </h5>
                </div>
                <div className="flex space-x-1">
                  <p className="font-sm text-blue font-medium border-2 border-border rounded-full  text-center px-2">
                    clothes
                  </p>
                  <p className="font-sm text-blue font-medium border-2 border-border rounded-full  text-center px-2">
                    stem
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Users;
