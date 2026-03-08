// import { useGetMeQuery } from "../api/authApi";

// export default function Profile() {
//   const { data, isLoading, isError } = useGetMeQuery();

//   console.log("Profile data:", data);

//   const user = data?.user;

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (isError) {
//     return <div>Error loading profile</div>;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl mt-20 font-bold">Profile</h2>

//       <p>
//         <strong>Username:</strong> {user?.username}
//       </p>
//       <p>
//         <strong>Profile Image:</strong>
//       </p>

//       {user?.profile && (
//         <img
//           src={user.profile}
//           alt="profile"
//           className="w-24 h-24 rounded-full object-cover"
//         />
//       )}
//     </div>
//   );
// }
import { useGetMeQuery } from "../api/authApi";

export default function Profile() {
  const { data, isLoading, isError } = useGetMeQuery();

  const user = data?.data; //
  console.log("user profile", data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4  border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
       Profile not found
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-full  ">
        {/* Profile Header */}
        <div className="flex flex-col items-center ">
          {user.profile ? (
            <img
              // onError={(e) => {
              //   e.target.src =
              //     "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
              // }}
              src={user?.profile}
              alt="Profile"
              className=" rounded-full w-12 h-12 object-cover border-4 border-[2px] shadow-xs border-primary/50"
            />
          ) : (
            <div className="w-10 object-cover h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {user.username?.charAt(0)}
              {/* <img
                className="rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
                alt="userProfile"
              /> */}
            </div>
          )}

          {/* <h2 className="text-2xl font-bold mt-4">{user.username}</h2> */}

          {/* <p className="text-gray-500">{user.email}</p> */}
        </div>

        {/* Profile Info */}
        {/* <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            <strong>First Name:</strong> {user.first_name}
          </p>

          <p>
            <strong>Last Name:</strong> {user.last_name}
          </p>

          <p>
            <strong>About:</strong> {user.about_me || "No description"}
          </p>

          <p>
            <strong>Role:</strong>{" "}
            {Array.isArray(user.role) ? user.role.join(", ") : "User"}
          </p>

          <p>
            <strong>Joined:</strong>{" "}
            {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div> */}
      </div>
    </div>
  );
}
