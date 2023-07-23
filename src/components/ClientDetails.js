import { useContext } from "react";
import { State } from "../context/stateContext";

export default function ClientDetails() {
  const { clientName, clientAddress, contact, invoiceDate} = useContext(State);


  return (
    <section className="ml-6">
      <section className=" flex mt-20">
        Quotation To &nbsp; : &nbsp;&nbsp;<h2 className="text-sm font-bold mt-1">{clientName}</h2><br/>
      </section>
      <section className="flex">
        Address &nbsp; : &nbsp;&nbsp;<p className="text-sm mt-1">{clientAddress}</p><br/> 
      </section>
      <section className="flex">
        Contact &nbsp; : &nbsp;&nbsp;<p className="text-sm mt-1">{contact}</p><br/> 
      </section>

      <section className="ml-9 text-red-600 font-bold">
        {/* <section className="mt-10 flex">
          Quatation To &nbsp; : &nbsp;&nbsp;<h2 className="text-sm text-red-600 font-bold">{invoiceNumber}</h2><br/>
        </section> */}
        <section className="flex mt-5">
          Invoice Date &nbsp; : &nbsp;&nbsp;<p className="text-sm"><p className="mt-1">{invoiceDate}</p></p><br/> 
        </section>
        <section className="flex mt-2">
          10 Years Warranty
        </section>
        <hr class="border-t border-gray-400 my-4"/>

      </section>
    </section>
    
  );
}
