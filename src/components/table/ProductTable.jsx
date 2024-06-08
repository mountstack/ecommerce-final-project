import table_data from "../../../mock_data/table_data.json";
import CustomTable from "./CustomTable";

const ProductTable = () => {
  /** @type import("@tanstack/react-table").ColumnDef<any> */
  const columns = [
    { header: "No", accessorKey: "id" },
    { header: "Product Name", accessorKey: "product" },
    { header: "Description", accessorKey: "description" },
    {
      header: "Quantity",
      accessorKey: "quantity",
      canFilter: true,
      cell: (item) => (
        <span
          className={`${
            item.getValue() > 5 ? "text-red-600" : "text-gray-400"
          }`}>
          {item.getValue()}
        </span>
      ),
    },
    { header: "Images", accessorKey: "images" },
  ];

  return (
    <main className="container mx-auto p-4">
      <CustomTable data_set={table_data} columns={columns} />
    </main>
  );
};

export default ProductTable;
