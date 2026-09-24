export interface Book {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly categoryId: string;
  readonly coverUrl: string;
  readonly synopsis: string;
  readonly publicationYear: number;
  readonly pdfUrl: string | null;
}
