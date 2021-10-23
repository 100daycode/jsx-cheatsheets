
// The following JSX...
const h1 = <h1 className="header">Hello world</h1>;
 
// ...will be compiled to the following:
const h1 = React.createElement(
  'h1',
  {
    className: 'header',
  },
  'Hello world'
);
 