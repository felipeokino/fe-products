import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableLoading,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "components/pagination";
import useProducts from "hooks/useProducts";
import { Currency } from "lib/utils";
import { useEffect, useState } from "react";

export function ProductsTable() {
  const [page, setPage] = useState(1);
  const { items, meta, isLoading, refecth } = useProducts(page);

  useEffect(() => {
    refecth();
  }, []);

  useEffect(() => {
    refecth();
  }, [page]);

  return (
    <Table className="border border-zinc-600 !min-h-[500px] relative transition-all max-w-[850px] mx-auto">
      <TableCaption>
        <CustomPagination meta={meta} setPage={setPage} />
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[75px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      {isLoading ? (
        <TableLoading className="absolute top-0 left-0 w-full h-full" />
      ) : (
        <TableBody className="border border-zinc-600">
          {items.map((row) => (
            <TableRow key={row.id} className="border-b-zinc-500">
              <TableCell className="font-medium max-w-[100px]">
                {row.id}
              </TableCell>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{Currency.formatter(row.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
}
