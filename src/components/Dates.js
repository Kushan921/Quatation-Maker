import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Dates() {
  const { invoiceNumber, invoiceDate} = useContext(State);
  
  return (
    <>
      <article className="-mt-80 mb-96 flex items-start justify-end">
        <ul>
          <li className="py-1">
            <span style={{ color: "#095876" , fontSize:"25px",fontWeight:"bolder"}}>SPRING PAL</span>
          </li>
          <li className="py-1">
            <span className="text-sm">Stage 02,</span>
          </li>
          <li className="py-1 -mt-3">
            <span className="text-sm">Temple burg Industrial Estate,</span>
          </li>
          <li className="py-1 -mt-3">
            <span className="text-sm">Panagoda,</span>
          </li>
          <li className="py-1 -mt-3">
            <span className="text-sm">Homagama</span>
          </li>
        </ul>
      </article>

    </>
  );
}
