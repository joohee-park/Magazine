import { Route, Routes } from "react-router-dom";
import Layout from "./elements/Layout";
import Main from "./pages/Main";
import Magazine from "./pages/Magazine";
import Author from "./pages/Author";
import Podcast from "./pages/Podcast";
import MagazinePost from "./pages/MagazinePost";
import AuthorPost from "./pages/AuthorPost";
import PodcastPost from "./pages/PodcastPost";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='Magazine' element={<Magazine />} />
        <Route path='Magazinepost' element={<MagazinePost />} />
        <Route path='Author' element={<Author />} />
        <Route path='Authorpost' element={<AuthorPost />} />
        <Route path='Podcast' element={<Podcast />} />
        <Route path='Podcastpost' element={<PodcastPost />} />
      </Route>
    </Routes>
  );
}

export default App;
