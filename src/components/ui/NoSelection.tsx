const NoSelection = () => {
  return (
    <section className="grid place-items-center w-full xs:h-dvh lg:h-full">
      <div className="xs:flex lg:hidden items-center gap-2 flex-col">
        <h2 className="font-bold text-2xl tracking-tight">
          No patient selected.
        </h2>
        <p className="xs:text-sm sm:text-base">
          To access a patient, please use the sidebar on top.
        </p>
      </div>
    </section>
  );
};

export default NoSelection;
