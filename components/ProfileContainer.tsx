import React from "react";

const ProfileSection = () => {
  return (
    <div className="profile-section h-[474px] w-[350px] lg:w-auto flex flex-col justify-between">
      <div className="h-[50px]">
        
        <p className="text-[14px] text-[#777777] text-left mt-4 lg:mt-0">
          Update your personal details here.{" "}
        </p>
      </div>
      <form className="lg:w-[640px] pt-4 rounded-lg bg-[#ffff] h-[400px] flex flex-col justify-between">
        <div className="w-full px-4 h-[80px] flex flex-col justify-between">
          <p className="text-[16px] font-medium text-[#2F2B43]">First Name</p>
          <div className="relative">
            <input
              type="text"
              className="w-full h-[48px] border border-[#2F2B431A] rounded-md outline-none text-black pl-2 pr-10 placeholder:text-[#B2AEBF] placeholder:text-[14px]"
              placeholder="Rahma"
            />
          </div>
        </div>
        <div className="w-full px-4 h-[80px] flex flex-col justify-between">
          <p className="text-[16px] font-medium text-[#2F2B43]">Last Name</p>
          <div className="relative">
            <input
              type="text"
              className="w-full h-[48px] border border-[#2F2B431A] rounded-md outline-none text-black pl-2 pr-10 placeholder:text-[#B2AEBF] placeholder:text-[14px]"
              placeholder="Olaniyan"
            />
          </div>
        </div>
        <div className="w-full px-4 h-[80px] flex flex-col justify-between">
          <p className="text-[16px] font-medium text-[#2F2B43]">Phone Number</p>
          <div className="relative">
            <input
              type="text"
              className="w-full h-[48px] border border-[#2F2B431A] rounded-md outline-none text-black pl-2 pr-10 placeholder:text-[#B2AEBF] placeholder:text-[14px]"
              placeholder="0808132536"
            />
          </div>
        </div>

        <div className="h-[73px] border-t flex justify-end">
          <div className="w-full lg:w-[260px] h-full flex justify-evenly items-center">
            <a
              href="#"
              className={`w-[74px] h-[40px] bg-[#ffff] border border-[#2F2B431A] rounded-xl flex items-center justify-center text-[#344054] font-medium text-sm hover:bg-[#FAFAFA] transition duration-300`}
            >
              Cancel
            </a>

            <a
              href="#"
              className={`w-[130px] h-[40px] bg-[#BC1823] rounded-xl flex items-center justify-center text-white font-medium text-sm hover:bg-[#f9858d] transition duration-300`}
            >
              Save changes
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
