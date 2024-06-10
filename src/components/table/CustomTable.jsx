import { useMemo, useState } from "react";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

/**
 * @typedef {Object} TableColumn
 * @property {string} header
 * @property {string} accessorKey
 * @property {boolean} [canFilter]
 * @property {Function} [cell]
 */

/**
 * @typedef {Object} TableData
 * @property {number} id
 * @property {string} product
 * @property {string} description
 * @property {number} quantity
 * @property {string} images
 */

/**
 * CustomTable Component
 * @param {{ data: TableData[], columns: TableColumn[] }} props
 * @returns {JSX.Element}
 */

// eslint-disable-next-line react/prop-types
const CustomTable = ({ data_set, columns }) => {
  const data = useMemo(() => data_set, [data_set]);
  const [sorting, setSorting] = useState([]);
  const [searching, setSearching] = useState("");

  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting: sorting,
      globalFilter: searching,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearching,
  });

  const handleSortChange = (e) => {
    const selectedField = e.target.value;
    setSortField(selectedField);
    setSorting([{ id: selectedField, desc: sortOrder === "desc" }]);
  };

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setSorting([{ id: sortField, desc: newSortOrder === "desc" }]);
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          className="border rounded px-4 py-2 w-[220px]"
          type="text"
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
          placeholder="Search..."
        />
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={toggleSortOrder}>
            {sortOrder === "asc" ? (
              <FaCaretUp className="text-blue-600" />
            ) : (
              <FaCaretDown className="text-blue-600" />
            )}
          </button>
          <select
            className="border rounded px-4 py-2"
            value={sortField}
            onChange={handleSortChange}>
            <option value="">Select Column to Sort</option>
            <option value="id">No</option>
            <option value="product">Product Name</option>
            <option value="quantity">Quantity</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-2 px-4 text-left cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}>
                    <div className="flex items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <span className="ml-2">
                        {header.column.getIsSorted() ? (
                          header.column.getIsSorted() === "asc" ? (
                            <FaCaretUp className="text-blue-600" />
                          ) : (
                            <FaCaretDown className="text-blue-600" />
                          )
                        ) : (
                          <>
                            <FaCaretUp className="text-gray-300" />
                            <FaCaretDown className="text-gray-300" />
                          </>
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="py-2 px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}>
            First
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </button>
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}>
            Last
          </button>
        </div>
      </div>
    </main>
  );
};

export default CustomTable;
