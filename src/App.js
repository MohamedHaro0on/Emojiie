import './App.css';
import { EmojiiProvider } from './Context';
import Header from './Header/Header';
import SearchInput from './SearchInput/SearchInput';
import SearchResult from './SearchResult/SearchResult';

function App() {
  return (
    <EmojiiProvider>
      <Header/>
      <SearchInput/>
      <SearchResult/>
    </EmojiiProvider>
  );
}

export default App;