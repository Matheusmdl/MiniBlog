// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock("firebase/firestore", () => ({
    collection: jest.fn(),
    query: jest.fn(),
    orderBy: jest.fn(),
    getDocs: jest.fn(() => Promise.resolve({ docs: [] })),
  }));
  
