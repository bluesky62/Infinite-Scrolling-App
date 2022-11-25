import { useEffect, useState } from "react";
import axios from 'axios';

const useQuerySerch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setUser([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel
    axios({
        method: 'GET',
        url: 'https://randomuser.me/api/?results=500',
        params: {q: query, page: pageNumber},
        cancelToken: new axios.CancelToken(c => cancel = c)

    }).then(res => {
        setUser(preUser => {
            console.log(res);
            return [...new Set([...preUser, ...res.login.map(b => b.username)])]
        })
        setHasMore(res.login.length > 0)
        setLoading(false)
    }).catch(e => {
        if(axios.isCancel(e)) return
        setError(true)
    })
    return () => cancel()
  
  }, [query, pageNumber])
  
  return {loading, error, user, hasMore}
};

export default useQuerySerch;
