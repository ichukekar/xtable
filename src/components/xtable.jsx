import React, { useState } from "react";
const Xtable = () => {
  let [flag, setFlag] = useState(true);
  let [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2024-09-03", views: 200, article: "Article 4" },

    { date: "2024-09-04", views: 300, article: "Article 5" },
  ]);
  let obj1 = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2024-09-03", views: 200, article: "Article 4" },

    { date: "2024-09-04", views: 300, article: "Article 5" },
  ];
  let sortbydate = () => {
    setFlag(false);
    obj1.sort((a, b) => b.date - a.date);
    // console.log(data);
    setData(obj1);
    setFlag(true);
  };
  let sortbyvalue = () => {
    //   console.log("clicked");
    setFlag(false);
    obj1.sort((a, b) => b.views - a.views);
    console.log(data);
    setData(obj1);
    setFlag(true);
  };
  console.log(data);
  return (
    <>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortbydate}>Sort by Date</button>
        <button onClick={sortbyvalue}>Sort by Views</button>
      </div>
      {flag ? (
        <table>
          <thead>
            <th>Date</th>
            <th>Views</th>
            <th>Articles</th>
          </thead>
          <tbody>
            {data.map((item, ind) => (
              <tr key={ind}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};
export default Xtable;