"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getBooks() {}

test('도서 목록 가져오기', function () {
  getBooks();
});

function searchBooksByTitle(query) {}

test('제목으로 도서 목록 검색', function () {
  searchBooksByTitle('파랑');
});

function findBook(query, by) {
  if (by === void 0) {
    by = 'title';
  }
}

test('제목으로 도서 찾기', function () {
  findBook('연애');
});
test('저자로 도서 찾기', function () {
  findBook('정이담', 'author');
});

function calcurateBooksPrice(query) {}

test('도서 가격 총합 구하기', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          calcurateBooksPrice('파랑');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));