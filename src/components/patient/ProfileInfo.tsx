type ProfileInfo = {
  image_source: string;
  image_alt: string;
  label: string;
  info: string;
};

const ProfileInfo = ({ image_source, image_alt, label, info }: ProfileInfo) => {
  return (
    <li className="flex items-center gap-4">
      <img src={image_source} alt={image_alt} height={35} width={35} />
      <div className="flex flex-col">
        <p className="font-medium text-sm">{label}</p>
        <span className="font-bold text-sm">{info}</span>
      </div>
    </li>
  );
};

export default ProfileInfo;
