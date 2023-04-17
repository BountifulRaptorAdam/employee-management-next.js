import clsx from "clsx";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "bg-btnSecondary border-solid border-BgPrimary border-2 px-6 py-2 text-sm  rounded-none w-full focus: outline-none focus:border-BgSecondary focus: place",
        className
      )}
      {...props}
    />
  );
};

export default Input;