interface Props {
  color: string;
  border: string;
  children: React.ReactNode;
  shadow?: boolean;
  width?: string;
}

export const Card = ({
  color,
  border,
  children,
  shadow = true,
  width,
}: Props) => {
  return (
    <div
      className={`bg-[${color}] rounded-[${border}] ${width}  ${
        shadow ? "shadow" : ""
      }`}
    >
      {children}
    </div>
  );
};
