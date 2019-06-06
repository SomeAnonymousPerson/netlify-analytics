import React from 'react';

const List = props => {
  const { element, children } = props;
  const HtmlTag = element || 'ul';

  return <HtmlTag>{children}</HtmlTag>;
};

export default List;
