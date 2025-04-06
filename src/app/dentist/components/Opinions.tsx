export const Opinions = () => {
  return (
    <div>
      <p className="text-2xl">
        Wasze uśmiechy to <br /> moja{" "}
        <span className="font-bold">najlepsza rekomendacja</span>
      </p>
      <OpinionList />
    </div>
  );
};

const Opinion = () => {
  return (
    <div>
      <p>Opinion</p>
    </div>
  );
};

const OpinionList = () => {
  return (
    <div>
      <Opinion />
      <Opinion />
      <Opinion />
    </div>
  );
};
