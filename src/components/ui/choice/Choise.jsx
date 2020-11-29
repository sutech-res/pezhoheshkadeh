import React, { useState } from "react";
import { Card, ListGroup, NavLink } from "react-bootstrap";

export default function Choise(props) {
  const [data, setData] = useState(props.data);

  const groupClickHandler = (id) => {
    setData({ ...data, active: id, questionID: 0 });
  };

  const questionClickHandler = (id) => {
    setData({ ...data, questionID: id });
  };

  return (
    <div className="row mt-3 wide_bottom_space">
      <div className="col-12 col-md-4 text-right px-5 p-md-0 pr-md-5">
        <ListGroup defaultActiveKey={`#group${data.active}`}>
          {data.groups.map((group) => (
            <ListGroup.Item
              action
              href={`#group${group.id}`}
              onClick={() => groupClickHandler(group.id)}
            >
              {group.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="col-12 col-md-8 text-right px-5 pt-3 p-md-0 px-md-5">
        <Card>
          <Card.Header>
            <Card.Title>{data.groups[data.active - 1].title}</Card.Title>
          </Card.Header>
          <Card.Body>
            {data.questionID === 0 ? (
              <ul>
                {data.groups[data.active - 1].data.map((quest) => (
                  <li key={quest.id}>
                    <NavLink onClick={() => questionClickHandler(quest.id)}>
                      {quest.question}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <Card.Text>
                {data.groups[data.active - 1].data[data.questionID - 1].answer}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
