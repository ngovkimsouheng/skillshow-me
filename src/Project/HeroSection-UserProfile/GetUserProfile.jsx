import { useGetMeQuery } from "../../api/authApi";

export default function GetUserProfile() {
  const { data, isLoading, isError } = useGetMeQuery();

  const user = data?.data; // 👈 important
  console.log("user profile hero section", data);
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
        Failed to load profile
      </div>
    );
  }
  return (
    <section className="sm:mt-33 mt-20 lg:sticky lg:top-25">
      <div className="max-w-7xl flex gap-4 items-center justify-center lg:pl-4 mx-auto ">
        {/* Profile Image + Name */}
        <div className="lg:w-[400px] mx-auto w-[360px] p-8 lg:gap-0 sm:gap-6 lg:h-full sm:h-[250px] sm:w-full lg:flex-col sm:flex shadow-xs border border-cool-sky sm:p-6  lg:p-8 bg-white rounded-[28px]">
          <img src={user?.profile || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="Profile" className="rounded-[12px]" />

          <div className="flex text-center lg:items-center justify-center   flex-col gap-6">
            <h1 className="mt-4 uppercase sm:text-start lg:text-2xl font-bold text-gray-800">
              {user?.first_name || "unknoDwn"} {user.last_name}
            </h1>
            <p className="text-[14px]  text-text-description sm:text-start lg:text-center">
              {user?.about_me || "No description provided."}
            </p>
          </div>
          {/* <p className="text-blue-600 font-medium">@{user.username}</p> */}
          {/* 
          <p className="text-gray-500 mt-2">{user.email}</p> */}
        </div>

        {/* About Section */}
      </div>
    </section>
  );
}
