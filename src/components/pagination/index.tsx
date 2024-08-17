import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useIsFetching } from "@tanstack/react-query";
import { TMeta } from "@type/paginations";
import { generateNavigationPages } from "lib/utils";
import { ComponentProps, useMemo } from "react";

const INITIAL_PAGE = 1;

type PaginationProps = ComponentProps<"nav"> & {
  meta: TMeta;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
const CustomPagination = ({
  meta: { page, totalPages },
  setPage,
}: PaginationProps) => {
  const isFetching = useIsFetching({
    queryKey: ["products"],
  });

  const actualPage = Number(page);

  const goToPrevious = () => {
    if (actualPage === INITIAL_PAGE) return;
    setPage(actualPage - 1);
  };

  const goToNext = () => {
    if (actualPage === totalPages) return;
    setPage(actualPage + 1);
  };

  const goToSelected = (page: number) => {
    setPage(page);
  };

  const navigationPages = useMemo(
    () => generateNavigationPages(totalPages),
    [totalPages]
  );

  return (
    <Pagination className="bg-violet-500 text-white justify-end">
      {Boolean(isFetching) && (
        <div className="h-full mr-auto ml-2 flex justify-center items-center my-auto">
          <div className="size-6 animate-spin border border-white border-b-transparent rounded-full" />
        </div>
      )}
      <PaginationContent className="space-x-2">
        <PaginationItem>
          <PaginationPrevious
            onClick={goToPrevious}
            data-disabled={Boolean(isFetching) || actualPage === INITIAL_PAGE}
            className="data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"
          />
        </PaginationItem>

        {navigationPages.map((page) => (
          <PaginationItem
            key={page}
            onClick={() => goToSelected(page)}
            data-active={page === actualPage}
            className="data-[active=true]:text-yellow-400  "
          >
            {page}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={goToNext}
            data-disabled={Boolean(isFetching) || actualPage === totalPages}
            className="data-[disabled='true']:cursor-not-allowed data-[disabled='true']:opacity-50"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
