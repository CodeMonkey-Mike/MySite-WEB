import Skeleton from 'react-loading-skeleton';

export const CountSkeleton = ({count = 1, ...props}: {count?: number} & any) => <Skeleton count={count} {...props}/>;
export const ShapeSkeleton = ({height, ...props}: {height: number} & any) => <Skeleton height={height} {...props}/>;
export const CircleSkeleton = ({...props}: {height: number} & any) => <Skeleton circle {...props} />;