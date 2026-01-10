
import ListItem from "./ListItem";

function Accordian({title,show, setShow}) {
  return (
    <div className="w-full shadow-md ">
      <div className="flex justify-between p-1">
        <h1>{title}</h1>
        <button
          onClick={() => setShow(setShow())}
          className="bg-black text-white p-1 rounded-md text-center cursor-pointer"
        >
          Show
        </button>
      </div>
      {show && <ListItem />}
    </div>
  );
}

export default Accordian;
