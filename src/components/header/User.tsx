import settings from "../../assets/icons/settings.svg";
import ellipsis from "../../assets/icons/ellipsis_vertical.svg";
import doctorImage from "../../assets/doctor-image.jpg";

const User = () => {
  return (
    <div className="xs:hidden lg:flex">
      <div className="flex items-center gap-2 pr-3 border-r border-r-[#cccccc50]">
        <img
          className="object-cover rounded-[50%] h-9 w-9"
          src={doctorImage}
          alt="Doctor's image"
          width={25}
          height={25}
        />
        <div className="flex flex-col">
          <p className="font-bold text-sm text-[#072635]">Dr. Jose Simmons</p>
          <span className="text-sm text-[#707070]">General Practitioner</span>
        </div>
      </div>
      <div className="flex gap-5 pl-3">
        <img
          className="cursor-pointer"
          src={settings}
          alt="Settings icon"
          width={20}
          height={20}
        />
        <img
          className="cursor-pointer"
          src={ellipsis}
          alt="Ellipsis icon"
          width={4}
          height={4}
        />
      </div>
    </div>
  );
};

export default User;
