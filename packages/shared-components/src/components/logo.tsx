import { Link } from 'react-router-dom';

interface ILogo {
  navigateTo: string;
}
export function Logo({navigateTo}: ILogo) {
  return (
    <Link to={navigateTo}>
      <span className={'font-bold text-clBlack text-xl lg:text-[32px]'}>OneVerify</span>
    </Link>
  );
}
