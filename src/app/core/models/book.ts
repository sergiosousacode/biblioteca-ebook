export interface Book {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly categoryId: string;
  readonly coverUrl: string;
  readonly synopsis: string;
  readonly pdfUrl: string | null;
}
