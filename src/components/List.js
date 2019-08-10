import React from 'react';

const List = (props) => (
  <div className="list">
    <ul className="list__content">
      <h1>{props.title}</h1>
      {props.list.map(item => (
        <li key={item.id} className="list__item">
          <input className="list__check" type="checkbox" checked={item.isDone} onChange={(e) => props.handler(e, item.id)}/>
          <span className={`list__topic ${item.isDone && 'list__done'}`}>{item.topic}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default List;