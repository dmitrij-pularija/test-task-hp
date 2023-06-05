import { useEffect, useState } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import UserList from "../../components/UserList/UserList";
import { getAll, update } from "../../api/operations";
import Loader from "../../components/Loader";
import Button from "../../components/Button/Button";
import TollsPanel from "../../components/TollsPanel/TollsPanel";
import { Wrapper, Text } from "./Tweets.styled";

const initialValue = {
  users: [],
  loading: false,
  error: null,
  filter: null,
  page: 1,
  pages: 1,
  perpage: 6,
};

const TweetsPage = () => {
  const [state, setState] = useState(initialValue);

  const handleLoadMore = () =>
    setState((prevState) => {
      return { ...prevState, page: page + 1 };
    });
  const handleFilterChange = (value) =>
    setState((prevState) => {
      return { ...prevState, filter: value, users: [], page: 1, pages: 1 };
    });
  const handleSetFollowing = ({ id, followers, isFollowing }) =>
    update({ id, followers, isFollowing, filter, setState });

  const { pages, page, perpage, users, loading, error, filter } = state;

  useEffect(() => {
    getAll({ page, perpage, filter, setState });
  }, [page, perpage, filter]);

  useEffect(() => {
    error && Report.failure("Error:", `${error}`, "OK");
  }, [error]);

  return (
    <Wrapper>
      <TollsPanel filter={filter} filterChange={handleFilterChange} />
      {loading && <Loader />}
      {users.length ? (
        <>
          <UserList users={users} handleClick={handleSetFollowing} />
          {page !== pages && (
            <Button color={"#ebd8ff"} handleClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </>
      ) : (
        <Text>
          {loading ? "Loading, please wait...." : "No search results"}
        </Text>
      )}
    </Wrapper>
  );
};

export default TweetsPage;