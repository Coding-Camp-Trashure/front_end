import vector1 from "../assets/vector1.svg";
import iconCrown from "../assets/icon-crown.svg";
import icon3dCube from "../assets/icon-3dcube.svg";

const statsData = [
  {
    icon: iconCrown,
    value: "12,390",
    label: (
      <>
        Pengguna Aktif yang <br /> Berkontribusi Positif
      </>
    ),
    alt: "Crown Icon",
  },
  {
    icon: icon3dCube,
    value: "829",
    label: (
      <>
        Proyek Sukses <br /> Bersama Trashure
      </>
    ),
    alt: "3D Cube Icon",
  },
];

export default function Stats() {
  return (
    <section className="bg-green-1 overflow-x-hidden">
      <div className="container mx-auto relative z-0 lg:px-14">
        <div className="flex flex-col lg:flex-row md:items-center justify-between px-4 py-12 md:py-16 gap-8 relative z-10">
          <div>
            <h2 className="text-white-1 font-bold text-4xl leading-[3rem]">
              Dipercaya oleh Ribuan Pengguna <br /> untuk Hidup Lebih Bersih dan Cerdas
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
            {statsData.map((stat) => (
              <div className="flex gap-x-4" key={stat.value}>
                <div className="bg-green-2 p-3 rounded-full h-fit">
                  <img src={stat.icon} alt={stat.alt} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-4xl text-white-1 font-bold">{stat.value}</p>
                  <p className="text-white-1 font-normal text-lg leading-[2rem]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={vector1}
          alt="Decorative Vector"
          className="absolute bottom-0 -right-36 md:-left-64 lg:left-36 md:h-full -z-10"
          draggable={false}
        />
      </div>
    </section>
  );
}