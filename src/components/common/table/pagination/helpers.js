export const getPaginationPages = (currentPage, totalPages, visibleButtonsCount) => {
  const pageNumbers = Array.from({ length: totalPages }).map((_, idx) => idx + 1)
  const rightPages = pageNumbers.splice(Math.max(totalPages - visibleButtonsCount / 2, 0))
  const leftPages = pageNumbers.slice(
    Math.min(currentPage - 1, totalPages - visibleButtonsCount),
    Math.min(currentPage - 1 + visibleButtonsCount / 2, totalPages - visibleButtonsCount / 2),
  )
  const isSeparatorVisible = totalPages - currentPage + 1 - visibleButtonsCount > 0

  return { leftPages, rightPages, isSeparatorVisible }
}
