import { Link, useLocation } from 'react-router-dom';

const checkId = (segment) => {
  return /^[0-9a-fA-F]{24}$/.test(segment) || /^\d+$/.test(segment);
};

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split('/')
    .filter((x) => x && !checkId(x));

  return (
    <nav className="text-sm breadcrumbs text-gray-500 my-4">
      <ol className="list-none p-0 inline-flex space-x-2">
        <li>
          <Link to="/" className="hover:underline text-gray-500">Home</Link>
          <span className="mx-2">/</span>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} className="inline-flex items-center">
              <Link to={to} className="hover:underline text-gray-500 capitalize">
                {decodeURIComponent(value)}
              </Link>
              {index !== pathnames.length - 1 && <span className="mx-2">/</span>}
            </li>
          );
        })}

      </ol>
    </nav>
  );
};

export default Breadcrumbs;
