import { useEffect, useState } from "react";
import UserList from "../../components/UserList/UserList";
import { getAll, update } from "../../api/operations";
import Loader from "../../components/Loader";
import Button from "../../components/Button/Button";
import TollsPanel from "../../components/TollsPanel/TollsPanel";
import { Wrapper } from "./TweetsPage.styled";

const initialValue = {
  users: [],
  loading: false,
  error: null,
  filter: null,
  page: 1,
  pages: 1,
  perpage: 6
};

const TweetsPage = () => {
  const [state, setState] = useState(initialValue);
  const handleLoadMore = () => setState((prevState) => { return { ...prevState, page: page + 1 }; });
  const handleFilterChange = (value) => setState((prevState) => { return { ...prevState, filter: value, page: 1, pages: 1 }; }); 
  const handleSetFollowing = async ({ id, followers, isFollowing }) => {
    const updatedUser = await update({ id, followers: isFollowing ? --followers : ++followers, isFollowing: !isFollowing });
    setState(prevState => {
      const updatedUsers = prevState.users.map(user => {
        if (user.id === updatedUser.id) return updatedUser;
        return user;
      });
      return { ...prevState, users: updatedUsers };
    });
  };
  const getUsers = async ({ page, perpage, filter }) => {
    // const { page, perpage, filter } = state;

   setState((prevState) => {
        return { ...prevState, loading: true };
      });
    try {
      const { data, total } = await getAll({ page, perpage, filter });
      setState((prevState) => {
        return { ...prevState, users: data, pages: Math.ceil(total / perpage) };
      });
    } catch (error) {
        setState((prevState) => {
            return { ...prevState, error};
          });
    } finally {
        setState((prevState) => {
            return { ...prevState, loading: false };
          });
      }
    };
    
  const { pages, page, perpage, users, loading, error, filter } = state;
    
    useEffect(() => {
      getUsers({ page, perpage, filter });
    }, [filter, page, perpage ]);
  // useEffect(() => {
  //   getUsers();

    // (async () => {
    // setState((prevState) => {
    //     return { ...prevState, loading: true };
    //   });
    // try {
    //   const { data, total } = await getAll({ page, perpage, filter });
    //   setState((prevState) => {
    //     return { ...prevState, users: [...prevState.users, ...data], pages: Math.ceil(total / perpage) };
    //   });
    // } catch (error) {
    //     setState((prevState) => {
    //         return { ...prevState, error};
    //       });
    // } finally {
    //     setState((prevState) => {
    //         return { ...prevState, loading: false };
    //       });
    //   }
    // })();  
  // }, []);

  // const { pages, page, users, loading, error, filter } = state;
  console.log( pages, page, filter );

  return (
  <>
  {loading ? <Loader /> : 
  <> 
  <TollsPanel filter={filter} filterChange={handleFilterChange}/>
  <UserList users={users} handleClick={handleSetFollowing} />
  {page !== pages && <Wrapper><Button color={"#ebd8ff"} handleClick={handleLoadMore}>Load More</Button></Wrapper>}
  </>
  }
  </>
  );
};

export default TweetsPage;

