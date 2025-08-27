import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={160}
    viewBox="0 0 1200 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mt-13 bg-none">
    <rect x="68" y="12" rx="3" ry="3" width="117" height="13" />
    <rect x="69" y="34" rx="3" ry="3" width="69" height="12" />
    <circle cx="28" cy="28" r="28" />
    <rect x="95" y="107" rx="0" ry="0" width="0" height="5" />
  </ContentLoader>
);

export default Skeleton;
