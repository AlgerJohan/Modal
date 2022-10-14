# Modal library of React components created using `create-react-app`.

## InstallationRun the following command:`npm i modallowenski`

### Importing the library

```javascript
import { Modal } from "modallowenski";
```

### Using the library

```javascript
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} title />
    </div>
  );
};

export default App;
```

### Parameters

```javascript
show: boolean;
title: string;
titleButton: string;
noCloseButton: boolean;
noButton: boolean;
```
