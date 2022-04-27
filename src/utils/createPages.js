export default function createPages(pages, totalPages, currentPage) {
  if (totalPages > 9) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i < currentPage + 5; i++) {
        pages.push(i)
        if (i == totalPages) break
      }
    } else {
      for (let i = 1; i <= 9; i++) {
        pages.push(i)
        if (i == totalPages) break
      }
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  }
}
