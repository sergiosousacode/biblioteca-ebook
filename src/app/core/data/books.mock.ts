import { Book } from '../models/book';
import { Category } from '../models/category';

export const CATEGORIES: readonly Category[] = [
  { id: 'poesia', name: 'Poesia' },
  { id: 'literatura', name: 'Literatura' },
  { id: 'historias-populares', name: 'Histórias populares' },
];

// Obras e autores fictícios. Os PDFs serão adicionados na etapa de leitura.
export const BOOKS: readonly Book[] = [
  { id: 'versos-do-amanhecer', title: 'Versos do amanhecer', author: 'Clara Monte', categoryId: 'poesia', coverUrl: '/images/covers/amanhecer.svg', synopsis: 'Poemas sobre os pequenos recomeços que habitam cada manhã.', pdfUrl: null },
  { id: 'casa-das-mares', title: 'A casa das marés', author: 'Tomás Vale', categoryId: 'literatura', coverUrl: '/images/covers/mares.svg', synopsis: 'Uma casa à beira-mar guarda as memórias de três gerações.', pdfUrl: null },
  { id: 'causos-do-sertao', title: 'Causos do sertão', author: 'Bento Oliveira', categoryId: 'historias-populares', coverUrl: '/images/covers/sertao.svg', synopsis: 'Histórias imaginadas ao redor de uma conversa no fim da tarde.', pdfUrl: null },
  { id: 'jardim-de-palavras', title: 'Jardim de palavras', author: 'Lia Campos', categoryId: 'poesia', coverUrl: '/images/covers/jardim.svg', synopsis: 'Uma coleção de versos sobre o tempo, o cuidado e a natureza.', pdfUrl: null },
  { id: 'entre-ruas-e-rios', title: 'Entre ruas e rios', author: 'Clara Monte', categoryId: 'literatura', coverUrl: '/images/covers/rios.svg', synopsis: 'Encontros inesperados transformam a rotina de uma pequena cidade.', pdfUrl: null },
  { id: 'historias-da-lua', title: 'Histórias que a lua conta', author: 'Nina Luz', categoryId: 'historias-populares', coverUrl: '/images/covers/lua.svg', synopsis: 'Contos inventados que celebram a imaginação e a tradição oral.', pdfUrl: null },
];
