import { Skeleton } from "./skeleton";

const Loader = () => {
  return (
    <section className="flex xs:h-auto lg:h-full w-full gap-3">
      <Skeleton className="bg-gray-200 h-full w-[30%] rounded-2xl xs:hidden lg:block" />
      <section className="flex flex-col w-full gap-3">
        <section className="flex xs:flex-col lg:flex-row xs:h-dvh lg:h-1/2 gap-3">
          <Skeleton className="bg-gray-200 h-full w-full rounded-2xl" />
          <Skeleton className="bg-gray-200 h-full xs:w-full lg:w-1/2 rounded-2xl" />
        </section>
        <section className="flex xs:flex-col lg:flex-row xs:h-dvh lg:h-1/2 gap-3">
          <Skeleton className="bg-gray-200 h-full w-full rounded-2xl" />
          <Skeleton className="bg-gray-200 h-full xs:w-full lg:w-1/2 rounded-2xl" />
        </section>
      </section>
    </section>
  );
};

export default Loader;
