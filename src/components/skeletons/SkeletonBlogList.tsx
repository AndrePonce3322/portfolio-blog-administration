import CardSkeleton from './cardSkeleton';

export default function BlogList() {
  return Array.from({ length: 2 }).map((_, index) => (
    <CardSkeleton key={index} />
  ));
}
