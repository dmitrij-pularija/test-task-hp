import { useEffect, useState } from "react";
import UserList from "../../components/UserList/UserList";
import { getAll } from "../../api/operations";
import Loader from "../../components/Loader";

const initialValue = {
  userID: "6422cfa4adfa860014f0d4bc",  
  users: [],
  loading: false,
  error: false,
  filter: "show all",
};

const TweetsPage = () => {
  const [state, setState] = useState(initialValue);
  
  const getUsers = async () => {
    setState((prevState) => {
        return { ...prevState, loading: true };
      });
    try {
      const users = await getAll({ page: 1, perpage: 6, filter: "" });
      setState((prevState) => {
        return { ...prevState, users };
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


  useEffect(() => {
    getUsers();
  }, []);

  const { users, loading, error } = state;
  console.log(users);

  return (
  <>
  {loading ? <Loader /> :
  <UserList users={users}/>
  }
  </>
  );
};

export default TweetsPage;