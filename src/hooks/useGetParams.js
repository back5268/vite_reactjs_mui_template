import { useLocation } from 'react-router-dom';

const useGetParams = () => {
  const location = useLocation();
  const params = {};
  params.page = 1;
  params.limit = 20;
  params.render = false;
  const queryParams = new URLSearchParams(location.search);
  for (let [key, value] of queryParams.entries()) {
    params[key] = Number(value) || value;
  }
  return params;
};

export default useGetParams;
