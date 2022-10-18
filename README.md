# Modal library of React components created using `create-react-app`.

## InstallationRun the following command:`npm i modallowenski`

### Importing the library

```javascript
import { Modal } from "modallowenski";
```

### Using the library

To display the modal, the "show" parameter must be set to true

```javascript
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} />
    </div>
  );
};

export default App;
```

### Parameters

Text to be displayed in the modal can be passed as a parameter to the component.

```javascript
<Modal
  show={showModal}
  title="Hello World!"
  titleButton="Continue"
  noCloseButton
  noTextButton
  closeOnClick
  noKeyEscape
/>
```

title: Text to be displayed in the modal title (default: "Modal Title")

titleButton: Text to be displayed in the modal button (default: "Close")

noCloseButton - if set to true, the close button will not be displayed

noTextButton- if set to true, the text button will not be displayed

closeOnClick - if set to true, the modal will close when you click on the background

noKeyEscape - if set to true, the modal will not close when you press the escape key
