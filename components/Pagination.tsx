interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition disabled:opacity-40 disabled:cursor-not-allowed">
        ← Précédent
      </button>

      <span className="font-semibold">
        Page {currentPage} sur {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 transition disabled:opacity-40 disabled:cursor-not-allowed" >
        Suivant →
      </button>
    </div>
  );
}