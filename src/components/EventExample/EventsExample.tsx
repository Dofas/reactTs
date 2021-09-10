import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Controlled value: ", value);
    console.log("Uncontroled value: ", inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag')
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('Drop')
  }

  const leaveHalder = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('drop leaved')
  }

  const overHalder = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
    console.log('drop enter')
  }

  return (
    <div>
      <input onChange={changeHandler} type="text" value={value} placeholder="controlled" />
      <input ref={inputRef} type="text" placeholder="uncontrolled" />
      <button onClick={clickHandler}>Change value</button>
      <div
        onDrag = {dragHandler}
        draggable
        style={{ width: 200, height: 150, background: "black" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave = {leaveHalder}
        onDragOver = {overHalder}
        style={{ width: 200, height: 150, background: isDrag ? "red" : "black", marginTop: 20 }}
      ></div>
    </div>
  );
};

export default EventsExample;
