import { Link } from 'react-router-dom';

const Providers = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="text-center mb-2 mt-2 dark:text-white transition-colors duration-500">
        {title}
      </p>
      <div className="flex gap-2 justify-center">
        <Link to="/">
          <img className="max-w-[25px]" src="./facebook.png" alt="" />
        </Link>
        <Link to="/">
          <img className="max-w-[25px]" src="./google-plus.png" alt="" />
        </Link>
        <Link to="/">
          <img className="max-w-[25px]" src="./linkedin.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Providers;
