import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-sm breadcrumbs text-gray-500 my-4">
      <ol className="list-none p-0 inline-flex space-x-2">
        <li>
          <Link to="/" className="hover:underline text-gray-500">Home</Link>
          <span className="mx-2">/</span>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={to} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <Link to={to} className="hover:underline text-gray-500 capitalize">
                    {decodeURIComponent(value)}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="text-gray-500 capitalize">{decodeURIComponent(value)}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
