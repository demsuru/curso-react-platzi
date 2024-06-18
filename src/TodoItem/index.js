import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillXCircleFill } from "react-icons/bs"
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
          <BsCheckCircleFill />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className='Icon Icon-delete'
          onClick={props.onDelete}
        >
          <BsFillXCircleFill />
        </span>
      </li>
    );
  }

  export {TodoItem};