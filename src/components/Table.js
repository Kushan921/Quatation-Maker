import React, { useContext } from "react";
import { State } from "../context/stateContext";


export default function Table() {
  const { list,notes,pillows,advance,shipping } = useContext(State);

  
  const subtotal = list.reduce((acc, item) => acc + item.amount, 0);
  const grandTotal = Number(subtotal) + Number(shipping) - advance;


  return (
    <>
      <table width="100%" className="mb-10 -mt-44 ml-6">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Item</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Total</td>
          </tr>
        </thead>
        {list.map(({ id,items, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{items}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div className="mr-4">
        <p className="text-red-500 font-bold ml-6">Free &nbsp; {pillows} &nbsp; Pillows.</p>
        <p className="text-red-500 font-bold ml-6">{notes}</p>
        <h2 className="flex items-end justify-end text-gray-800 text-md font-bold">
          Total : &nbsp;&nbsp; {subtotal.toLocaleString()}.00
        </h2>
        <h2 className="flex items-end justify-end text-gray-800 text-md font-bold">
          Advance : &nbsp;&nbsp; {advance}.00
        </h2>
        <h2 className="flex items-end justify-end text-gray-800 text-md font-bold">
          Shipping : &nbsp;&nbsp; {shipping}.00
        </h2>
        <h2 className="flex items-end justify-end text-gray-800 text-md font-bold">
          Grand Total : &nbsp;&nbsp; {grandTotal.toLocaleString()}.00
        </h2>
      </div>

      {/* <div>
        <img className="signature w-44" src={signature} alt="e signature"/>
        ---------------------------------<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logistic Manager
      </div> */}

      <div className=" text-red-500 text-sm font-bold ml-6">
        <p className="mt-28">Account Name : SPRING PAL LANKA</p>
        <p>A/C NO : 100270009689</p>
        <p>Bank/Branch : NATIONS TRUST BANK - NAWALA</p>
      </div>
      
    </>
  );
}
