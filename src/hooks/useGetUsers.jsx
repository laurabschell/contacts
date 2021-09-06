import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getUsersRequest, getUsersSuccess, getUsersError } from '../redux/actions/usersActions';
import axios from 'axios';

const useGetUsers = () => {
    const dispatch = useDispatch();    
    const api = 'https://reqres.in/api/users?page=1&per_page=12';

    useEffect(() => {
        dispatch(getUsersRequest());
        axios.get(api)
            .then((response) => dispatch(getUsersSuccess({contactsList: response.data})))
            .catch((error) => dispatch(getUsersError({error: error})))
    }, [])
}

export default useGetUsers
