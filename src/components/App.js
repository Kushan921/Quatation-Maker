import { useContext, useRef } from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { DonateButton } from "../buttons";
import { State } from "../context/stateContext";

function App() {
  const {
    clientName,
    setClientName,
    clientAddress,
    setClientAddress,
    contact,
    setContact,
    invoiceDate,
    setInvoiceDate,
    notes,
    setNotes,
    pillows,
    setPillows,
    advance,
    setAdvance,
    shipping,
    setShipping
   
  } = useContext(State);

  // Create a ref to the content that you want to print/download
  const componentRef = useRef();

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        

        <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              
              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-1 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="contact">Enter Contact No : </label>
                  <input
                    type="number"
                    name="contact"
                    id="contact"
                    placeholder="Contact Number"
                    autoComplete="off"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                
              </article>

              <article className="md:grid grid-cols-2 gap-10">

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="advance">Advance</label>
                  <input
                    type="text"
                    name="advance"
                    id="advance"
                    placeholder="Advance"
                    autoComplete="off"
                    value={advance}
                    onChange={(e) => setAdvance(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="shipping">Shipping Fee</label>
                  <input
                    type="text"
                    name="shipping"
                    id="shipping"
                    placeholder="Shipping Fee"
                    autoComplete="off"
                    value={shipping}
                    onChange={(e) => setShipping(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm />
              </article>

              <div className="flex flex-col">
                  <label htmlFor="shipping">Enter No. of Free Pillows</label>
                  <input
                    type="text"
                    name="pillows"
                    id="pillows"
                    placeholder="Enter Number of Free Pillows"
                    autoComplete="off"
                    value={pillows}
                    onChange={(e) => setPillows(e.target.value)}
                  />
              </div>

              <label htmlFor="notes">Aditional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="3"
                placeholder="Aditional Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
          
        </section>


        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200 ">
          <ReactToPrint
            trigger={() => (
              <button
                className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400 ml-60"
              >
                 Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <Header />

            <MainDetails />

            <ClientDetails />

            <Dates />

            <Table />

            <Notes />

            {/* <Footer /> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
