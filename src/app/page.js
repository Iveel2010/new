"use client";
import Hi from "./component/HI";
import { useState } from "react";
import { useEffect } from "react";
import { Parent } from "@/compenens/page";
const Home = () => {
  const [ok, setOk] = useState([]);
  const [num, setNum] = useState(1);
  const [value, setValue] = useState("");
  console.log(value);
  const next = () => {
    const res4 = num + 1;
    setNum(res4);
  };
  const previous = () => {
    if (num <= 1) {
    } else {
      const res5 = num - 1;
      setNum(res5);
    }
  };

  useEffect(() => {
    const api = async () => {
      const a = await fetch(
        `https://dev.to/api/articles?per_page=6&page=${num}`
      );
      const b = await a.json();
      console.log(b);
      setOk(b);
    };
    api();
  }, [num]);

  const filter = ok.filter((key, index) => {
    const low1 = key.title.toLowerCase();
    const low2 = value.toLowerCase();
    return low1.includes(low2);
  });

  return (
    <Parent>
      <div style={{ display: "flex" }}>
        <div>
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search"
              type="search"
              class="input"
            />
          </div>
        </div>
        <div className="fullbody">
          <div>
            <div className="container">
              {filter.map((ko, index) => {
                return <Hi key={index} ko={ko} />;
              })}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <button class="btn" onClick={() => previous()}>
              previous
            </button>
            <div className="num">{num}</div>
            <button class="btn" onClick={() => next()}>
              next
            </button>
          </div>
        </div>
      </div>
    </Parent>
  );
};
export default Home;
