import React from 'react';

interface AListItemDocument {
  id: string,
  title: string,
  body: string,
  createdAt: Date,
  updatedAt?: Date,
  status?: number,
  views?: number,
  abstract?: string
}
const ListItem: React.FC<AListItemDocument> = (props: AListItemDocument) => {
  const { title, id, createdAt, body } = props

  return (
    <div className="a-list-item" key={id} >
      <div className="item-title">
        {title}
      </div>
      <div className="item-time">
        {createdAt}
      </div>
      <div className="item-content">
        {body}
      </div>
    </div>
  );
}

export default ListItem