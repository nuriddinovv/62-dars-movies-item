import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import DashboardLayout from "./layouts/DashboardLayout";
import Nowplaying from "./pages/Movies/NowPlaying";
import Upcoming from "./pages/Movies/Upcoming";
import TopRated from "./pages/Movies/TopRated";
import Person from "./pages/Person/Person";
import TV from "./pages/Tv/Tv";
import AiringTodayTv from "./pages/Tv/AiringTodayTv";
import OnTV from "./pages/Tv/OnTV";
import TopRatedTv from "./pages/Tv/TopRatedTv";
import SearchPage from "./pages/SearchPage/SearchPage";
import MovieById from "./pages/Movies/MovieById";
import tvShowById from "./pages/Tv/tvShowById";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/now_playing" element={<Nowplaying />} />
        <Route path="/movies/upcoming" element={<Upcoming />} />
        <Route path="/movies/top_rated" element={<TopRated />} />
        <Route path="/movies/:id" element={<MovieById />} />

        <Route path="/tv" element={<TV />} />
        <Route path="/tv/popular" element={<TV />} />
        <Route path="/tv/airing-today" element={<AiringTodayTv />} />
        <Route path="/tv/on-the-air" element={<OnTV />} />
        <Route path="/tv/top-rated" element={<TopRatedTv />} />
        <Route path="/tv/:id" element={<tvShowById />} />
        <Route path="/person" element={<Person />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
