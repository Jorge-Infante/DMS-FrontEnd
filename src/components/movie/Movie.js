import React from "react";
import { Card, Image } from "semantic-ui-react";



export const Movie = ({ movi }) => {
  return (
    <div className="mr-2">
      <Card>
        <Image src={movi.cover} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{movi.title}</Card.Header>
          <Card.Meta>
            <span className="date">{movi.release}</span>
          </Card.Meta>
          <Card.Description>
            {movi.subtitle}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};
