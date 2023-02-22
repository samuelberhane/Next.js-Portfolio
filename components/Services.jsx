import { services } from "@/utils/services";

const Services = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-4">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-6 text-center">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services?.map((service, index) => (
          <div className="flex justify-center shadow-md  pb-2" key={index}>
            <div>
              <img
                src={service.image}
                alt="serviceImage"
                className="h-[200px]"
              />
              <p className="text-center font-bold mt-3">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
