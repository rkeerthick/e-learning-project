import { partners } from "../../assets/images";

const Partners = () => {
  return (
    <div className="w-full py-16 bg-gray-100/60">
      <div className="w-2/3 m-auto flex justfy-center flex-col gap-10">
        <p className="text-lg text-gray-600 text-center">
          Trusted by over 15,000 companies and millions of learners around the
          world
        </p>
        <div className="flex items-center justify-between">
          <img src={partners.ATT_Logo} alt="" />
          <img src={partners.Cisco_Logo} alt="" />
          <img src={partners.Citi_Logo} alt="" />
          <img src={partners.EC_Logo} alt="" />
          <img src={partners.HPE_Logo} alt="" />
          <img src={partners.PG_Logo} alt="" />
          <img src={partners.Samsumg_Logo} alt="" />
          <img src={partners.VW_Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
