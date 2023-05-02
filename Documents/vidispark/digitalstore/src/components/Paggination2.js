import { useEffect, useState } from "react";
import { getPagination, pagination } from "../utils";

const Paggination2 = ({ queryItem, direction, sortItem }) => {
  let sort = sortItem ? sortItem : 8;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(queryItem, sort, active);
    let list = document.querySelectorAll(queryItem);
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <div
      className={`pagination-section flex-${direction ? direction : "center"}`}
    >
      <ul className="pagination-list">
        <li className="page-item page-nav-prev">
          <a
            href="#"
            className="muted3-color"
            onClick={(e) => {
              e.preventDefault();
              setActive(active === 1 ? 1 : active - 1);
            }}
          >
            Prev
          </a>
        </li>
        {state &&
          state.map((s, i) => (
            <li key={i} className={`page-item ${active === s ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(s);
                }}
              >
                {s}
              </a>
            </li>
          ))}

        <li className="page-item page-nav-next">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive(active === state.length ? state.length : active + 1);
            }}
            className="page-item page-nav-next"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Paggination2;
