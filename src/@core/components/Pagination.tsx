import PaginationButton from "./buttons/PaginationButton";

const ChevronLeftIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

type PaginationProps = {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  limit: number;
  totalPages: number;
  totalDocs: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export const Pagination = ({
  currentPage,
  onPageChange,
  limit,
  totalPages,
  totalDocs,
  hasNext,
  hasPrev,
}: PaginationProps) => {
  const nearButtonsToShow = 1; // Número máximo de botões a serem mostrados no meio

  const prevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage + 1 <= totalPages) onPageChange(currentPage + 1);
  };

  const renderPaginationButtons = () => {
    const itemsLeft: any[] = [];
    const itemsRight: any[] = [];
    const ellipsis = <span key="ellipsis">...</span>;

    if (currentPage > 1) {
      // Mostrar os dois botões à esquerda, se possível.
      for (
        let i = currentPage - 1;
        i >= currentPage - nearButtonsToShow && i >= nearButtonsToShow;
        i--
      ) {
        itemsLeft.unshift(renderButton(i));

        if (i > nearButtonsToShow + 1) {
          itemsLeft.unshift(ellipsis);
        }
      }
    }

    if (currentPage < totalPages) {
      // Mostrar os dois botões à direita, se possível.
      for (
        let i = currentPage + 1;
        i <= currentPage + nearButtonsToShow && i <= totalPages - 1;
        i++
      ) {
        itemsRight.push(renderButton(i));

        if (i < totalPages + nearButtonsToShow) {
          itemsRight.push(ellipsis);
        }
      }
    }

    if (currentPage > 2) {
      // Sempre mostre o botão 1.
      itemsLeft.unshift(renderButton(1));
    }

    if (currentPage < totalPages) {
      // Sempre mostre o botão da última página.
      itemsRight.push(renderButton(totalPages));
    }

    return [...itemsLeft, renderButton(currentPage), ...itemsRight];
  };

  const renderButton = (page: number) => (
    <PaginationButton
      key={page}
      isActive={currentPage === page}
      onClick={() => onPageChange(page)}
    >
      {page}
    </PaginationButton>
  );

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <PaginationButton
          disabled={!hasPrev}
          isActive={false}
          onClick={() => prevPage()}
        >
          Anterior
        </PaginationButton>
        <PaginationButton
          disabled={!hasNext}
          isActive={false}
          onClick={() => nextPage()}
        >
          Próximo
        </PaginationButton>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-stone-400 flex gap-1">
            Mostrando de
            <span className="font-medium">{limit * currentPage}</span>
            até
            <span className="font-medium">{limit * (currentPage + 1)}</span>
            de
            <span className="font-medium">{totalDocs}</span>
            lançamentos
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <PaginationButton
              disabled={!hasPrev}
              isActive={false}
              onClick={() => prevPage()}
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon />
            </PaginationButton>
            {renderPaginationButtons()}
            <PaginationButton
              disabled={!hasNext}
              isActive={false}
              onClick={() => nextPage()}
            >
              <span className="sr-only">Próximo</span>
              <ChevronRightIcon />
            </PaginationButton>
          </nav>
        </div>
      </div>
    </div>
  );
};
