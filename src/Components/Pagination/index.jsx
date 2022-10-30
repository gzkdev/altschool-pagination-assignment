import { useGlobalContext } from "../../Store/Context";
import "./Pagination.css";

const Pagination = () => {
  const { totalPages, handleClick, nextPage, prevPage, pages, loading } =
    useGlobalContext();
  const pagesz = [...Array(totalPages).keys()].map((num) => num + 1);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="pagination">
      <button onClick={() => prevPage()}>prev</button>
      {pagesz.map((num, i) => {
        return (
          <button
            key={i}
            onClick={() => handleClick(num)}
            className={num === pages ? "active" : ""}
          >
            {num}
          </button>
        );
      })}
      <button onClick={() => nextPage()}>next</button>
    </div>
  );
};

export default Pagination;
