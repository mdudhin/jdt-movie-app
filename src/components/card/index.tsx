interface Props {
  color: string;
  border: string;
  children: React.ReactNode;
}

export const Card = ({ color, border, children }: Props) => {
  return (
    <div
      className={`bg-[${color}] rounded-[${border}] w-[450px] h-[316px] shadow`}
    >
      {children}
    </div>
  );
};
