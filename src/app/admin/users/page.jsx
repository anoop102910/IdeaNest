import { fetchUsers } from "@/app/lib/data";
import UserRow from "./UserRow";
import SearchInput from "../blogs/SearchInput";

const UserList = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const users = await fetchUsers(10, page, q);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between text-center mb-6">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>
        <SearchInput />
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md overflow-hidden">
        <thead class="text-xs uppercase  bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>

            <th scope="col" class="px-6 py-3">
              User
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              CreatedAt
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
