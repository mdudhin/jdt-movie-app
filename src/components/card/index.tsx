interface Props {
  color: string;
  border: string;
  children: React.ReactNode;
  shadow?: boolean;
  width?: string;
  className?: string;
}

export const Card = ({
  color,
  border,
  children,
  shadow = true,
  className = "",
}: Props) => {
  return <div className={`w-52`}>{children}</div>;
};
