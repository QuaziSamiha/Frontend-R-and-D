interface IProps {
  condition?: string;
  title: string;
  content?: string;
}
export default function ViewCard({ condition, title, content }: IProps) {
  return (
    <p>
      {condition && <span className="text-greyPrimary">{title}:</span>}
      <span className="text-blackSecondary pl-1 font-medium">{content}</span>
    </p>
  );
}
