const Card = ({ data, basket, setBasket }) => {
  // üründen sepette kaç tane var bulma
  const found = basket.filter((i) => i.name === data.name);
  const amount = found.length;

  // sepetteki belirli türdeki ürünleri silme
  const handleReset = () => {
    setBasket(basket.filter((i) => i.name !== data.name));
  };

  return (
    <div
      className="d-flex flex-column align-items-center gap border rounded p-3"
      style={{ width: "190px" }}
    >
      <img height={100} src={data.imagePath} alt="çeşit-resmi" />
      <span className="fs-5">{data.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button onClick={handleReset} className="btn btn-sm btn-outline-danger">
          Sıfırla
        </button>
        <span className="fs-2">{amount}</span>
        <button
          onClick={() => setBasket([...basket, data])}
          className="btn btn-sm btn-outline-success"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
