// All of the list items will display if
// baby is false and age is above 25
const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> }
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
  );