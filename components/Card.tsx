import clsx from "clsx";

const Card = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "bg-white w-5/12 h-full" ,
        className)} style={{ border: '0px', padding: '20px', boxShadow: '-30px 40px #2b7a77'}}>
      {children}
    </div>
  );
};

export default Card;