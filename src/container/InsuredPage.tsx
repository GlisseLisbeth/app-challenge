import { useSelector } from 'react-redux';

const InsuredPage = () => {
  const state = useSelector((state: any) => state.userInfo);

  return (
    <div>
      <h2>Page Insured</h2>
      <span>{state.userInfo}</span>
    </div>
  );
};

export default InsuredPage;
