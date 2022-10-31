import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";
import useFetchAPI from "../../components/hooks/useFetch";

const Users = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { loading, data, error } = useFetchAPI(
    `https://randomuser.me/api/?page=${pageIndex}&results=15&seed=abc`
  );
  useErrorHandler(error);

  const totalPages = 5;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }
  console.log(data, loading, error);

  console.log("=> ", data);
  return (
    <>
     <h1 className="title">List of Users</h1>
      <ul>
        {data?.results.map((each, index) => {
          const name = `${each.name?.title} ${each.name?.first} ${each.name?.last}`;
          return (
            <li key={index}>
              <Link
                to={`/users/${name?.toLowerCase().replaceAll(" ", "-")}`}
              >{`${index + 1}. ${name}`}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
      {
        <button
          disabled={pageIndex <= 1}
          onClick={() => setPageIndex((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        TotalPages: {pageIndex} of {totalPages}
      </p>
      {
        <button
          disabled={pageIndex >= totalPages}
          aria-disabled={pageIndex >= totalPages}
          onClick={() => setPageIndex((prev) => prev + 1)}
        >
          next
        </button>
      }
      {Array.from({ length: totalPages }, (value, index) => index + 1).map(
        (each) => (
          <button key={each} onClick={() => setPageIndex(each)}>
            {each}
          </button>
        )
      )}
    </>
  );
};

export default Users;
