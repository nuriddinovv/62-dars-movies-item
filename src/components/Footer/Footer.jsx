import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerUser">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt=""
        />
        <Link to="/">Hi nuriddinovv!</Link>
      </div>
      <table>
        <thead>
          <th>THE BASICS</th>
          <th>GET INVOLVED</th>
          <th>COMMUNITY</th>
          <th>LEGAL</th>
        </thead>
        <tbody>
          <tr>
            <td>About TMDB</td>
            <td>Contribution Bible</td>
            <td>Guidelines</td>
            <td>Terms of Use</td>
          </tr>
          <tr>
            <td>Contact Us</td>
            <td>Add New Movie</td>
            <td>Discussions</td>
            <td>API Terms of Use</td>
          </tr>
          <tr>
            <td>Support Forums</td>
            <td>Add New TV Show</td>
            <td>Leaderboard</td>
            <td>Privacy Policy</td>
          </tr>
          <tr>
            <td>API</td>
            <td></td>
            <td></td>
            <td>DMCA Policy</td>
          </tr>
          <tr>
            <td>System Status</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
