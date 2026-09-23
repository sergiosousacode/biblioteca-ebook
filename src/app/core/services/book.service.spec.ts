import { BookService } from './book.service';

describe('BookService', () => {
  const service = new BookService();

  it('returns the whole catalog without filters', () => {
    expect(service.filterBooks('', '')).toHaveLength(6);
  });

  it('normalizes accents, case and surrounding whitespace in titles', () => {
    expect(service.filterBooks('  MARES  ', '').map(book => book.id)).toEqual(['casa-das-mares']);
  });

  it('searches by author', () => {
    expect(service.filterBooks('tomas', '').map(book => book.id)).toEqual(['casa-das-mares']);
  });

  it('combines category and author and treats blank queries as empty', () => {
    expect(service.filterBooks('Clara', 'poesia').map(book => book.id)).toEqual(['versos-do-amanhecer']);
    expect(service.filterBooks('   ', 'poesia')).toHaveLength(2);
  });

  it('returns no matches without changing the catalog', () => {
    expect(service.filterBooks('inexistente', '')).toEqual([]);
    expect(service.filterBooks('', '')).toHaveLength(6);
  });
});
