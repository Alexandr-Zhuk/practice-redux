import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GreenZone from '../../components/GreenZone';
import BlueInput from '../../components/BlueInput';

// actions
import { setTitle } from '../../actions/page';

import { TEST_SET_DATA } from '../../reducers/types';

function DashboardPage() {

  const title = 'Dashboard';
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(title, dispatch);
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <GreenZone/>
      <BlueInput/>
    </>
  );
}


export default DashboardPage;
