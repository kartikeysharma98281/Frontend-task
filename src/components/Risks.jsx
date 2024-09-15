import { useEffect } from "react";
import { useState } from "react";

const risksContent = {
  "Risks Of Borrowing":
    "If the Company incurs indebtedness, a portion of its cash flow will have to be dedicated to the payment of principal and interest on such indebtedness. Typical loan agreements also might contain restrictive covenants which may impair the Company’s operating flexibility. Such loan agreements would also provide for default under certain circumstances, such as failure to meet certain financial covenants. A default under a loan agreement could result in the loan becoming immediately due and payable and, if unpaid, a judgment in favor of such lender which would be senior to the rights of owners of Preferred Stock of the Company. A judgment creditor would have the right to foreclose on any of the Company’s assets resulting in a material adverse effect on the Company’s business, operating results or financial condition.",
  "General Economic Conditions":
    "The financial success of the Company may be sensitive to adverse changes in general economic conditions in the United States, such as recession, inflation, unemployment, and interest rates. Management believes that the niche products and services they market will insulate the Company from excessive reduced demand. AvaWatz Company has no control over these changes.",
  "Inadequacy Of Funds": `We may need to raise additional capital, which might not be available or might be available only on terms unfavorable to us or our investors. In order to continue to operate and grow the business, we will likely need to raise additional capital beyond this current financing round by offering shares of our Common or Preferred Stock and/or other classes of equity. All of these would result in dilution to our existing investors, plus they may include additional rights or terms that may be unfavorable to our existing investor base. We cannot assure you that the necessary funds will be available on a timely basis, on favorable terms, or at all, or that such funds if raised, would be sufficient. The level and timing of future expenditure will depend on a number of factors, many of which are outside our control. If we are not able to obtain additional capital on acceptable terms, or at all, we may be forced to curtail or abandon our growth plans, which could adversely impact the Company, its business, development, financial condition, operating results, or prospects.`,
  "Possible Fluctuations In Operating Results":
    "The Company’s operating results may fluctuate significantly from period to period as a result of a variety of factors, including purchasing patterns of customers, competitive pricing, debt service and principal reduction payments, and general economic conditions. Consequently, the Company’s revenues may vary by quarter, and the Company’s operating results may experience fluctuations.",
  "Uncertain Risk":
    "An investment in the Company (also referred to as “we”, “us”, “our”, or “Company”) involves a high degree of risk and should only be considered by those who can afford the loss of their entire investment. Furthermore, the purchase of any of the Preferred Stock should only be undertaken by persons whose financial resources are sufficient to enable them to indefinitely retain an illiquid investment. Each investor in the Company should consider all of the information provided to such potential investor regarding the Company as well as the following risk factors, in addition to the other information listed in the Company’s Private Placement Memorandum. The following risk factors are not intended, and shall not be deemed to be, a complete description of the commercial and other risks inherent in the investment in the Company.",
};

export function Risks() {
    const getInitialRisk = () => {
      return localStorage.getItem("selectedRisk") || "Inadequacy Of Funds";
    };
  const [selectedRisk, setSelectedRisk] = useState("Inadequacy Of Funds");
  useEffect(() => {
    localStorage.setItem("selectedRisk", selectedRisk);
  }, [selectedRisk]);
  return (
    <div className="flex flex-col justify-center items-center  pt-[45px] border-b pb-[30px]">
      <div className="text-[#666] text-2xl font-extrabold ">Risks</div>
      <hr className="w-[40px] h-[2px] mx-auto  border-0 rounded mt-[10px] mb-[34px] dark:bg-blue-700"></hr>
      <div className="flex flex-col justify-center items-center md:flex-row p-6 gap-[54px] md:space-y-0  ">
        <ul className="w-full md:w-1/3 space-y-4 text-left">
          {Object.keys(risksContent).map((risk) => (
            <li key={risk}>
              <button
                className={`text-left text-xl w-full hover:text-blue-600${
                  selectedRisk === risk ? "font-bold" : ""
                }`}
                onClick={() => setSelectedRisk(risk)}
              >
                {risk} {risk === "Inadequacy Of Funds" && ""}
              </button>
            </li>
          ))}
          <li>
            <button className="text-blue-600 hover:underline">
              Show all Risks
            </button>
          </li>
        </ul>

        <div className="w-[570px] p-[25px] bg-gray-100 rounded-md shadow-md">
          <p className="text-gray-700">{risksContent[selectedRisk]}</p>
        </div>
      </div>
    </div>
  );
}
