// Using ternary operator
const headline = (
    <h1>
      { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
  );
   
  // Using if/else outside of JSX 
  let text;
   
  if (age >= drinkingAge) { text = 'Buy Drink' }
  else { text = 'Do Teen Stuff' }
   
  const headline = <h1>{ text }</h1>
   
  // Using && operator. Renders as empty div if length is 0
  const unreadMessages = [ 'hello?', 'remember me!'];
   
  const update = (
    <div>
      {unreadMessages.length > 0 &&
        <h1>
          You have {unreadMessages.length} unread messages.
        </h1>
      }
    </div>
  );