import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import * as XLSX from "xlsx";





// export default function UserPage() {
//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="inline-block max-w-lg text-center justify-center">
//           <h1 className={title()}>User</h1>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// }

export default function UserPage() {
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setuser(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render


  const onGetExporProduct = async (title?: string, worksheetname?: string) => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // Check if the action result contains data and if it's an array
      if (user && Array.isArray(user)) {
        const dataToExport = user.map((pro: any) => ({
          id: pro.id,
          name: pro.name,
          email: pro.email,
          username: pro.username,
        })
          ,);
        // Create Excel workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils?.json_to_sheet(dataToExport);
        XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);
        // Save the workbook as an Excel file
        XLSX.writeFile(workbook, `${title}.xlsx`);
        console.log(`Exported data to ${title}.xlsx`);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("#==================Export Error")
      }
    } catch (error: any) {
      setLoading(false);
      console.log("#==================Export Error", error.message);

    }
  };
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            Export Data to Excel
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="">
                  <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    NAME
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    USERNAME
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    EMAIL
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  user.slice(0, 5).map((product: any) => (
                    <tr className="border-b border-gray-200 dark:border-gray-700" key={product.id}>
                      <th scope="row" className="px-6 py-4">
                        {product.id}
                      </th>
                      <td className="px-6 py-4">
                        {product.name}$
                      </td>
                      <td className="px-6 py-4">
                        {product.username}$
                      </td>
                      <td className="px-6 py-4">
                        {product.email} ...
                      </td>
                    </tr>
                  ),
                  )
                }
              </tbody>
            </table>
          </div>
          <button onClick={() => onGetExporProduct("Product", "ProductExport")} className="group relative h-12 overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition hover:bg-blue-600">
            <span className="relative">
            {loading ? "Loading..." : "Export"}
            </span>
            <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
              <div className="relative h-full w-8 bg-white/30">
              </div>
            </div>
          </button>
      </section>
    </DefaultLayout>
  );
}
